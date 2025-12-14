import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Validation constants
const MAX_NAME_LENGTH = 100;
const MAX_PHONE_LENGTH = 30;
const MAX_EMAIL_LENGTH = 254;
const MAX_ADDRESS_LENGTH = 200;
const MAX_INQUIRY_TYPE_LENGTH = 50;
const MAX_DESIRED_SOLUTION_LENGTH = 500;

// Allowed inquiry types
const ALLOWED_INQUIRY_TYPES = [
  "installasjon",
  "befaring",
  "rådgivning",
  "service",
  "vedlikehold",
  "piperehabilitering",
  "annet"
];

// Validation patterns
const PHONE_PATTERN = /^[+\d\s()\-]{8,30}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize string: trim, normalize whitespace, remove HTML/JS
function sanitizeString(input: string | null | undefined, maxLength: number): string | null {
  if (input === null || input === undefined) return null;
  if (typeof input !== "string") return null;
  
  // Trim and normalize whitespace
  let sanitized = input.trim().replace(/\s+/g, " ");
  
  // Remove HTML tags and script content
  sanitized = sanitized.replace(/<[^>]*>/g, "");
  sanitized = sanitized.replace(/javascript:/gi, "");
  sanitized = sanitized.replace(/on\w+\s*=/gi, "");
  
  // Truncate to max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized.length > 0 ? sanitized : null;
}

// Validate phone number
function validatePhone(phone: string): boolean {
  return PHONE_PATTERN.test(phone);
}

// Validate email
function validateEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email) && email.length <= MAX_EMAIL_LENGTH;
}

// Validate inquiry type
function validateInquiryType(type: string): boolean {
  return ALLOWED_INQUIRY_TYPES.includes(type.toLowerCase());
}

interface ValidationError {
  field: string;
  message: string;
}

interface BookingRequest {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  inquiry_type?: unknown;
  desired_solution?: unknown;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    let body: BookingRequest;
    try {
      body = await req.json();
    } catch {
      console.error("Invalid JSON payload");
      return new Response(
        JSON.stringify({ error: "Ugyldig forespørsel" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Only allow known fields (allowlist)
    const allowedFields = ["name", "phone", "email", "address", "inquiry_type", "desired_solution"];
    const receivedFields = Object.keys(body);
    const unknownFields = receivedFields.filter(f => !allowedFields.includes(f));
    
    if (unknownFields.length > 0) {
      console.error("Unknown fields rejected:", unknownFields.length);
      return new Response(
        JSON.stringify({ error: "Ugyldige felt i forespørselen" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const errors: ValidationError[] = [];

    // Validate and sanitize name (required)
    const name = sanitizeString(body.name as string, MAX_NAME_LENGTH);
    if (!name || name.length < 2) {
      errors.push({ field: "name", message: "Navn er påkrevd (minimum 2 tegn)" });
    }

    // Validate and sanitize phone (required)
    const phone = sanitizeString(body.phone as string, MAX_PHONE_LENGTH);
    if (!phone) {
      errors.push({ field: "phone", message: "Telefonnummer er påkrevd" });
    } else if (!validatePhone(phone)) {
      errors.push({ field: "phone", message: "Ugyldig telefonnummer format" });
    }

    // Validate and sanitize email (optional)
    const emailRaw = body.email as string;
    let email: string | null = null;
    if (emailRaw && typeof emailRaw === "string" && emailRaw.trim().length > 0) {
      email = sanitizeString(emailRaw, MAX_EMAIL_LENGTH);
      if (email && !validateEmail(email)) {
        errors.push({ field: "email", message: "Ugyldig e-postadresse format" });
      }
    }

    // Validate and sanitize address (optional)
    const address = sanitizeString(body.address as string, MAX_ADDRESS_LENGTH);

    // Validate and sanitize inquiry_type (required)
    const inquiryTypeRaw = sanitizeString(body.inquiry_type as string, MAX_INQUIRY_TYPE_LENGTH);
    if (!inquiryTypeRaw) {
      errors.push({ field: "inquiry_type", message: "Henvendelsestype er påkrevd" });
    } else if (!validateInquiryType(inquiryTypeRaw)) {
      errors.push({ field: "inquiry_type", message: "Ugyldig henvendelsestype" });
    }
    const inquiry_type = inquiryTypeRaw?.toLowerCase() || null;

    // Validate and sanitize desired_solution (optional)
    const desired_solution = sanitizeString(body.desired_solution as string, MAX_DESIRED_SOLUTION_LENGTH);

    // Return validation errors if any
    if (errors.length > 0) {
      console.error("Validation errors:", errors.length);
      return new Response(
        JSON.stringify({ error: "Valideringsfeil", details: errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log sanitized data (no PII in logs)
    console.log("Processing booking request with inquiry_type:", inquiry_type);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Use parameterized insert (Supabase client handles this safely)
    const { data, error } = await supabase
      .from("customer_inquiries")
      .insert({
        name,
        phone,
        email,
        address,
        inquiry_type,
        desired_solution,
        status: "new"
      })
      .select("id")
      .single();

    if (error) {
      console.error("Database error occurred");
      throw new Error("Kunne ikke lagre henvendelsen");
    }

    console.log("Booking saved successfully");

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Save booking error occurred");
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Ukjent feil" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

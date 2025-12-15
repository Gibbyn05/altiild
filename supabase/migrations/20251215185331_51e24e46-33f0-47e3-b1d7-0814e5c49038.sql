-- Drop the existing overly permissive INSERT policy
DROP POLICY IF EXISTS "Authenticated users can submit inquiries" ON public.customer_inquiries;

-- Create new INSERT policy that requires authentication
-- This prevents direct anonymous inserts while the edge function (using service role) can still insert
CREATE POLICY "Authenticated users can submit inquiries" 
ON public.customer_inquiries 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);
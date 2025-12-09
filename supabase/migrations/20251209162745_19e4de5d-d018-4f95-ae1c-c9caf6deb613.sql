-- Create table for customer inquiries
CREATE TABLE public.customer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  inquiry_type TEXT NOT NULL,
  desired_solution TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (chatbot can insert without auth)
CREATE POLICY "Allow public insert" 
ON public.customer_inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public select (for dashboard - we'll add auth later if needed)
CREATE POLICY "Allow public select" 
ON public.customer_inquiries 
FOR SELECT 
USING (true);

-- Create policy for public update (for status updates)
CREATE POLICY "Allow public update" 
ON public.customer_inquiries 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_customer_inquiries_updated_at
BEFORE UPDATE ON public.customer_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for this table
ALTER PUBLICATION supabase_realtime ADD TABLE public.customer_inquiries;
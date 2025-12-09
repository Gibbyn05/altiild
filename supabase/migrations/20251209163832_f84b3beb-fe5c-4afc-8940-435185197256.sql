-- Add source column to track origin (chatbot or form)
ALTER TABLE public.customer_inquiries 
ADD COLUMN source TEXT NOT NULL DEFAULT 'chatbot';

-- Add delete policy
CREATE POLICY "Allow public delete" 
ON public.customer_inquiries 
FOR DELETE 
USING (true);
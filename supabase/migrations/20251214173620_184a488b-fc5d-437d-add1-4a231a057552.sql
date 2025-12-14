-- Create storage bucket for contact form images
INSERT INTO storage.buckets (id, name, public)
VALUES ('contact-images', 'contact-images', true);

-- Allow anyone to upload images (for contact form)
CREATE POLICY "Anyone can upload contact images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'contact-images');

-- Allow anyone to view contact images
CREATE POLICY "Anyone can view contact images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'contact-images');

-- Allow admins to delete contact images
CREATE POLICY "Admins can delete contact images"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'contact-images' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);
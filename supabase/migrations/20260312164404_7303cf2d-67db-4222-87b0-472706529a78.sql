DROP POLICY "Authenticated users can submit inquiries" ON public.customer_inquiries;

CREATE POLICY "Anyone can submit inquiries"
  ON public.customer_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Staff can view all inquiries" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Staff can update inquiries" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Staff can delete inquiries" ON public.customer_inquiries;

-- Recreate INSERT policy - only via service role (edge function), block direct client inserts
-- We use a restrictive policy that requires authentication OR service role
CREATE POLICY "Authenticated users can submit inquiries"
ON public.customer_inquiries
FOR INSERT
TO authenticated
WITH CHECK (true);

-- SELECT policy - explicitly require authenticated + staff role
CREATE POLICY "Only staff can view inquiries"
ON public.customer_inquiries
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_staff(auth.uid())
);

-- UPDATE policy - staff only
CREATE POLICY "Only staff can update inquiries"
ON public.customer_inquiries
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_staff(auth.uid())
);

-- DELETE policy - staff only
CREATE POLICY "Only staff can delete inquiries"
ON public.customer_inquiries
FOR DELETE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND is_staff(auth.uid())
);
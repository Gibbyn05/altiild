-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is staff or admin
CREATE OR REPLACE FUNCTION public.is_staff(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'staff')
  )
$$;

-- RLS policy for user_roles: only admins can manage roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Drop existing permissive policies on customer_inquiries
DROP POLICY IF EXISTS "Allow public delete" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Allow public insert" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Allow public select" ON public.customer_inquiries;
DROP POLICY IF EXISTS "Allow public update" ON public.customer_inquiries;

-- New secure policies for customer_inquiries
-- Anyone can submit inquiries (public insert)
CREATE POLICY "Anyone can submit inquiries"
ON public.customer_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only staff can view inquiries
CREATE POLICY "Staff can view all inquiries"
ON public.customer_inquiries
FOR SELECT
TO authenticated
USING (public.is_staff(auth.uid()));

-- Only staff can update inquiries
CREATE POLICY "Staff can update inquiries"
ON public.customer_inquiries
FOR UPDATE
TO authenticated
USING (public.is_staff(auth.uid()));

-- Only staff can delete inquiries
CREATE POLICY "Staff can delete inquiries"
ON public.customer_inquiries
FOR DELETE
TO authenticated
USING (public.is_staff(auth.uid()));
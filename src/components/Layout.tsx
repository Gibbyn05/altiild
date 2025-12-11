import * as React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </div>
    );
  }
);

Layout.displayName = "Layout";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import globalSettings from "@/content/global.json";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import OmOss from "./pages/OmOss";
import Tjenester from "./pages/Tjenester";
import TjenesteDetalj from "./pages/TjenesteDetalj";
import Dokumentasjon from "./pages/Dokumentasjon";
import Galleri from "./pages/Galleri";
import Kontakt from "./pages/Kontakt";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import TinaAdmin from "./pages/TinaAdmin";


const queryClient = new QueryClient();

const App = () => {
  // Apply the favicon chosen in the CMS "Innstillinger" settings.
  useEffect(() => {
    if (!globalSettings.favicon) return;
    const icons = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    if (icons.length) {
      icons.forEach((el) => { el.href = globalSettings.favicon; });
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = globalSettings.favicon;
      document.head.appendChild(link);
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/tjenester" element={<Tjenester />} />
            <Route path="/tjenester/:slug" element={<TjenesteDetalj />} />
            <Route path="/dokumentasjon" element={<Dokumentasjon />} />
            <Route path="/galleri" element={<Galleri />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<TinaAdmin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
  );
};

export default App;

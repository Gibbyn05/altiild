import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import { TinaEditProvider } from "tinacms/dist/edit-state";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <TinaEditProvider>
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
        </TinaEditProvider>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

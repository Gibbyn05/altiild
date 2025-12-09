import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OmOss from "./pages/OmOss";
import Tjenester from "./pages/Tjenester";
import Galleri from "./pages/Galleri";
import Kundeomtaler from "./pages/Kundeomtaler";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Chatbot } from "./components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/tjenester" element={<Tjenester />} />
          <Route path="/galleri" element={<Galleri />} />
          <Route path="/kundeomtaler" element={<Kundeomtaler />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ApplyNow from "./pages/ApplyNow";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";  // ← Asegúrate de que esta línea esté
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<Terms />} />  {/* ← Asegúrate de que esta línea esté */}
          <Route path="/privacy" element={<Privacy />} />  {/* ← Asegúrate de que esta línea esté */}
          <Route path="/disclaimer" element={<Disclaimer />} />  {/* ← Asegúrate de que esta línea esté */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

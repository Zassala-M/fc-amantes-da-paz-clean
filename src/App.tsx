import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Jogadores from "./pages/Jogadores";
import Jogos from "./pages/Jogos";
import Resultados from "./pages/Resultados";
import Estatisticas from "./pages/Estatisticas";
import Premios from "./pages/Premios";
import Galeria from "./pages/Galeria";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/jogadores" element={<Jogadores />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          <Route path="/premios" element={<Premios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

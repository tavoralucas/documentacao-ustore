import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import SaudeGeral from "./pages/SaudeGeral";
import Clientes from "./pages/Clientes";
import Dashboard from "./pages/Dashboard";
import GestaoParametros from "./pages/GestaoParametros";
import Diagnostico from "./pages/Diagnostico";
import AuditLog from "./pages/AuditLog";
import Analitico from "./pages/Analitico";
import PerformanceContratual from "./pages/PerformanceContratual";
import EstabilidadeQuedas from "./pages/EstabilidadeQuedas";
import ExperienciaWifi from "./pages/ExperienciaWifi";
import CapacidadeOlt from "./pages/CapacidadeOlt";
import GeoEstrategico from "./pages/GeoEstrategico";
import Preditivo from "./pages/Preditivo";
import NotFound from "./pages/NotFound";
import ClienteDetalhe from "./pages/ClienteDetalhe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/saude-geral" element={<SaudeGeral />} />
            <Route path="/performance-contratual" element={<PerformanceContratual />} />
            <Route path="/estabilidade-quedas" element={<EstabilidadeQuedas />} />
            <Route path="/experiencia-wifi" element={<ExperienciaWifi />} />
            <Route path="/capacidade-olt" element={<CapacidadeOlt />} />
            <Route path="/geo-estrategico" element={<GeoEstrategico />} />
            <Route path="/preditivo" element={<Preditivo />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/relatorios" element={<Index />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/gestao-parametros" element={<GestaoParametros />} />
            <Route path="/audit-log" element={<AuditLog />} />
            <Route path="/analitico" element={<Analitico />} />
            <Route path="/cliente-detalhe" element={<ClienteDetalhe />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

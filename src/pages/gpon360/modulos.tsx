import {
  Gauge,
  FileBarChart,
  SlidersHorizontal,
  ScrollText,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import ClientesGpon from "./ClientesGpon";
import DashboardsGpon from "./DashboardsGpon";
import MonitoramentoSinalGpon from "./MonitoramentoSinalGpon";
import MonitoramentoQuedasGpon from "./MonitoramentoQuedasGpon";
import TrapMassivoGpon from "./TrapMassivoGpon";

export { ClientesGpon, DashboardsGpon, MonitoramentoSinalGpon, MonitoramentoQuedasGpon, TrapMassivoGpon };





export const PerformanceGpon = () => (
  <GponDocPage title="Performance" subtitle="Métricas de desempenho como latência, jitter, perda e throughput." icon={Gauge} />
);

export const RelatoriosGpon = () => (
  <GponDocPage title="Relatórios" subtitle="Geração e exportação de relatórios operacionais e gerenciais." icon={FileBarChart} />
);

export const GestaoParametrosGpon = () => (
  <GponDocPage title="Gestão de Parâmetros" subtitle="Configuração dos parâmetros e limiares utilizados nas análises." icon={SlidersHorizontal} />
);

export const AuditoriaGpon = () => (
  <GponDocPage title="Auditoria" subtitle="Registro e rastreabilidade das ações realizadas na plataforma." icon={ScrollText} />
);

import {
  Users,
  LayoutDashboard,
  SignalHigh,
  Siren,
  Activity,
  Gauge,
  FileBarChart,
  SlidersHorizontal,
  ScrollText,
} from "lucide-react";
import GponDocPage from "./GponDocPage";

export const ClientesGpon = () => (
  <GponDocPage title="Clientes" subtitle="Consulta e gestão da base de clientes conectados à rede GPON." icon={Users} />
);

export const DashboardsGpon = () => (
  <GponDocPage title="Dashboards" subtitle="Painéis consolidados com os principais indicadores da rede." icon={LayoutDashboard} />
);

export const MonitoramentoSinalGpon = () => (
  <GponDocPage title="Monitoramento de Sinal" subtitle="Acompanhamento de níveis de sinal óptico (RX/TX) dos terminais." icon={SignalHigh} />
);

export const TrapMassivoGpon = () => (
  <GponDocPage title="Trap Massivo" subtitle="Detecção e tratamento de eventos massivos recebidos via trap SNMP." icon={Siren} />
);

export const MonitoramentoQuedasGpon = () => (
  <GponDocPage title="Monitoramento de Quedas" subtitle="Identificação de quedas, instabilidades e reincidências na rede." icon={Activity} />
);

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

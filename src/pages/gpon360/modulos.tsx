import {
  SlidersHorizontal,
  ScrollText,
} from "lucide-react";
import ClientesGpon from "./ClientesGpon";
import DashboardsGpon from "./DashboardsGpon";
import MonitoramentoSinalGpon from "./MonitoramentoSinalGpon";
import MonitoramentoQuedasGpon from "./MonitoramentoQuedasGpon";
import TrapMassivoGpon from "./TrapMassivoGpon";
import PerformanceGpon from "./PerformanceGpon";
import RelatoriosGpon from "./RelatoriosGpon";

export { ClientesGpon, DashboardsGpon, MonitoramentoSinalGpon, MonitoramentoQuedasGpon, TrapMassivoGpon, PerformanceGpon, RelatoriosGpon };

export const GestaoParametrosGpon = () => (
  <GponDocPage title="Gestão de Parâmetros" subtitle="Configuração dos parâmetros e limiares utilizados nas análises." icon={SlidersHorizontal} />
);

export const AuditoriaGpon = () => (
  <GponDocPage title="Auditoria" subtitle="Registro e rastreabilidade das ações realizadas na plataforma." icon={ScrollText} />
);

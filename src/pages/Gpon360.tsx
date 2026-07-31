import { Link } from "react-router-dom";
import {
  Radar,
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

const docTopics = [
  { title: "Clientes", icon: Users, route: "/gpon-360/clientes", description: "Consulta e gestão da base de clientes conectados à rede GPON." },
  { title: "Dashboards", icon: LayoutDashboard, route: "/gpon-360/dashboards", description: "Painéis consolidados com os principais indicadores da rede." },
  { title: "Monitoramento de Sinal", icon: SignalHigh, route: "/gpon-360/monitoramento-sinal", description: "Acompanhamento de níveis de sinal óptico (RX/TX) dos terminais." },
  { title: "Trap Massivo", icon: Siren, route: "/gpon-360/trap-massivo", description: "Detecção e tratamento de eventos massivos recebidos via trap SNMP." },
  { title: "Monitoramento de Quedas", icon: Activity, route: "/gpon-360/monitoramento-quedas", description: "Identificação de quedas, instabilidades e reincidências na rede." },
  { title: "Performance", icon: Gauge, route: "/gpon-360/performance", description: "Métricas de desempenho como latência, jitter, perda e throughput." },
  { title: "Relatórios", icon: FileBarChart, route: "/gpon-360/relatorios", description: "Geração e exportação de relatórios operacionais e gerenciais." },
  { title: "Gestão de Parâmetros", icon: SlidersHorizontal, route: "/gpon-360/gestao-parametros", description: "Configuração dos parâmetros e limiares utilizados nas análises." },
  { title: "Auditoria", icon: ScrollText, route: "/gpon-360/auditoria", description: "Registro e rastreabilidade das ações realizadas na plataforma." },
];

export default function Gpon360() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Radar className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Incognito - GPON 360</h1>
          <p className="text-sm text-muted-foreground">Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {docTopics.map(({ title, icon: Icon, route, description }) => (
          <Link
            key={title}
            to={route}
            className="rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

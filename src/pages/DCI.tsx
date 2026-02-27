import {
  Network,
  Globe,
  PlugZap,
  GitBranch,
  ArrowLeftRight,
  CheckSquare,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const docTopics = [
  { title: "Visão Geral", icon: Globe, description: "Visão geral do Data Center Interconnect, apresentação e acesso à plataforma.", route: "/dci/visao-geral" },
  { title: "Administração", icon: Users, description: "Gerenciamento de usuários, grupos e contratos no DCI.", route: "/dci/administracao" },
  { title: "Portas", icon: PlugZap, description: "Gerenciamento e configuração das portas físicas e lógicas de interconexão.", route: "/dci/portas" },
  { title: "Circuitos", icon: GitBranch, description: "Criação e administração de circuitos de interconexão entre data centers.", route: "/dci/circuitos" },
  { title: "Excursionamentos", icon: ArrowLeftRight, description: "Monitoramento e gestão de excursionamentos de tráfego entre os pontos de interconexão.", route: "/dci/excursionamentos" },
  { title: "Tarefas", icon: CheckSquare, description: "Acompanhamento e controle de tarefas agendadas e operações em execução no DCI.", route: "/dci/tarefas" },
];

export default function DCI() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Network className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">DCI</h1>
          <p className="text-sm text-muted-foreground">Data Center Interconnect - Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {docTopics.map(({ title, icon: Icon, description, route }) => (
          <div
            key={title}
            onClick={() => navigate(route)}
            className="rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

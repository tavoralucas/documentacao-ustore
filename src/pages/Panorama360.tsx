import {
  Globe,
  LogIn,
  Cloud,
  LayoutDashboard,
  Database,
  RefreshCw,
  PlusSquare,
  UserPlus,
  MessageCircle,
  Bell,
  Settings,
  BellOff,
  EyeOff,
  Tag,
  SlidersHorizontal,
  ScrollText,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const docTopics = [
  { title: "Visão Geral", icon: Globe, description: "Documentação detalhada sobre visão geral do Panorama 360.", route: "/panorama-360/visao-geral" },
  { title: "Acesso ao P360", icon: LogIn, description: "Como acessar e entrar na plataforma Panorama 360.", route: "/panorama-360/acesso" },
  { title: "Autenticando com o Google Cloud", icon: Cloud, description: "Guia de autenticação e integração com o Google Cloud.", route: "/panorama-360/autenticacao-google" },
  { title: "Dashboards e Paineis", icon: LayoutDashboard, description: "Visão geral dos dashboards e painéis disponíveis.", route: "/panorama-360/dashboards-paineis" },
  { title: "Conectando e configurando Datasource no PMC P360", icon: Database, description: "Como conectar e configurar fontes de dados no PMC P360.", route: "/panorama-360/datasource" },
  { title: "Dados em tempo real: Refresh automático", icon: RefreshCw, description: "Configuração de atualização automática de dados em tempo real.", route: "/panorama-360/refresh-automatico" },
  { title: "Criando e gerenciando Dashboards", icon: PlusSquare, description: "Passo a passo para criar e gerenciar seus dashboards.", route: "/panorama-360/criando-dashboards" },
  { title: "Adicionando um novo cliente na tela geral de monitoramento", icon: UserPlus, description: "Como adicionar clientes na tela de monitoramento.", route: "/panorama-360/adicionar-cliente" },
  { title: "Integração com Telegram para notificações de alertas", icon: MessageCircle, description: "Configure alertas via Telegram para seu ambiente.", route: "/panorama-360/integracao-telegram" },
  { title: "Como configurar Alertas", icon: Bell, description: "Guia para configuração de alertas na plataforma.", route: "/panorama-360/configurar-alertas" },
  { title: "Procedimentos para configurar Alertas", icon: Settings, description: "Procedimentos detalhados para configuração de alertas.", route: "/panorama-360/procedimentos-alertas" },
  { title: "Silenciando uma notificação de alerta", icon: BellOff, description: "Como silenciar notificações de alerta temporariamente.", route: "/panorama-360/silenciar-notificacao" },
  { title: "Visualizando e Removendo Silenciamentos", icon: EyeOff, description: "Gerencie e remova silenciamentos ativos na plataforma.", route: "/panorama-360/remover-silenciamentos" },
  { title: "Adicionando uma nova tag de label em alertas", icon: Tag, description: "Como criar e aplicar tags de label nos alertas.", route: "/panorama-360/tags-labels" },
  { title: "Configurando as consultas e condições de alertas", icon: SlidersHorizontal, description: "Defina consultas e condições para disparo de alertas.", route: "/panorama-360/consultas-condicoes" },
  { title: "Explorando e analisando os Logs", icon: ScrollText, description: "Como explorar e analisar logs da plataforma.", route: "/panorama-360/explorando-logs" },
  { title: "Instalando e configurando o Agente", icon: Download, description: "Guia de instalação e configuração do agente de monitoramento.", route: "/panorama-360/instalando-agente" },
];

export default function Panorama360() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Globe className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Panorama 360</h1>
          <p className="text-sm text-muted-foreground">Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {docTopics.map(({ title, icon: Icon, description, route }) => (
          <div
            key={title}
            onClick={() => route && navigate(route)}
            className={`rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow ${
              route
                ? "cursor-pointer hover:shadow-md hover:border-primary/40"
                : "cursor-default hover:shadow-sm opacity-80"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            {route && (
              <p className="mt-3 text-xs font-medium text-primary">Ver documentação →</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

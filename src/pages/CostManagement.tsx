import {
  TrendingDown,
  Globe,
  Receipt,
  History,
  CalendarClock,
  GitCompare,
  Wallet,
  ShieldAlert,
  FileText,
  Package,
  TrendingUp,
  Landmark,
  BarChart2,
  Layers,
  Tags,
  ClipboardList,
  CreditCard,
  Building2,
} from "lucide-react";

const docTopics = [
  { title: "Visão Geral", icon: Globe, description: "Visão geral consolidada de custos e economia na plataforma Cost Management." },
  { title: "Regras de Financeiro", icon: Receipt, description: "Configuração e gestão de regras financeiras aplicadas aos recursos em nuvem." },
  { title: "Histórico de Serviço", icon: History, description: "Acompanhamento do histórico de uso e custos por serviço ao longo do tempo." },
  { title: "Custo Cadenciado", icon: CalendarClock, description: "Análise de custos distribuídos em períodos cadenciados para melhor previsibilidade." },
  { title: "Custo Relacional de Produto", icon: GitCompare, description: "Comparativo de custos entre produtos e serviços correlacionados." },
  { title: "Budget", icon: Wallet, description: "Definição e acompanhamento de orçamentos por projeto, time ou serviço." },
  { title: "Limite de Custo", icon: ShieldAlert, description: "Configuração de limites de gasto com alertas automáticos ao atingir os thresholds." },
  { title: "Consolidado de Faturamento", icon: FileText, description: "Relatório consolidado de faturamento com visão unificada de todas as contas." },
  { title: "Franquia", icon: Package, description: "Gerenciamento de franquias de uso e créditos pré-contratados com os provedores." },
  { title: "Tendência de Faturamento", icon: TrendingUp, description: "Projeções e análise de tendências de crescimento dos custos de faturamento." },
  { title: "Centro de Custo", icon: Landmark, description: "Organização e atribuição de custos por centros de custo da empresa." },
  { title: "Margem de Custo", icon: BarChart2, description: "Análise de margens e variações de custo para otimização de gastos em nuvem." },
  { title: "Dimensão", icon: Layers, description: "Segmentação e agrupamento de custos por dimensões customizadas do negócio." },
  { title: "Tags Virtuais", icon: Tags, description: "Criação e gerenciamento de tags virtuais para categorização e rateio de custos." },
  { title: "Levantamento de Contas", icon: ClipboardList, description: "Inventário e levantamento detalhado de todas as contas e recursos provisionados." },
  { title: "Gestão de Créditos", icon: CreditCard, description: "Controle e aplicação de créditos junto aos provedores de nuvem." },
  { title: "Centro de Custos", icon: Building2, description: "Estruturação hierárquica de centros de custo para governança financeira." },
];

export default function CostManagement() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <TrendingDown className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Cost Management</h1>
          <p className="text-sm text-muted-foreground">Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {docTopics.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
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

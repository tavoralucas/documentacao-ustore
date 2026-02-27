import { Link } from "react-router-dom";
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
  { title: "Visão Geral", icon: Globe, route: "/cost-management/visao-geral", description: "Visão geral consolidada de custos e economia na plataforma Cost Management." },
  { title: "Regras de Financeiro", icon: Receipt, route: "/cost-management/regras-financeiro", description: "Configuração e gestão de regras financeiras aplicadas aos recursos em nuvem." },
  { title: "Relatórios de Consumo", icon: History, route: "/cost-management/relatorios-consumo", description: "Acompanhamento do histórico de uso e custos por serviço ao longo do tempo." },
  { title: "Relatórios de Fatura", icon: FileText, route: "/cost-management/relatorios-fatura", description: "Relatórios baseados em fatura com visão consolidada de faturamento." },
  { title: "Utilitários", icon: Layers, route: "/cost-management/utilitarios", description: "Ferramentas utilitárias: Dimensão, Tags Virtuais, Centro de Custo e Levantamento de Contas." },
  { title: "Budgets", icon: Wallet, route: "/cost-management/budgets", description: "Definição e acompanhamento de orçamentos por projeto, time ou serviço." },
  { title: "Relatórios Especiais", icon: TrendingUp, route: "/cost-management/relatorios-especiais", description: "Relatórios especiais: RCF, Tendência de Faturamento, Margem e Monitoramento de Consumo." },
  { title: "Franquia", icon: Package, route: "/cost-management/franquia", description: "Gerenciamento de franquias de uso e créditos pré-contratados (exclusivo para clientes GOV)." },
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

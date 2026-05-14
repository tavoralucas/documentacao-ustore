import { Link } from "react-router-dom";
import {
  TrendingDown,
  Globe,
  History,
  TrendingUp,
  Download,
  BarChart2,
  Wallet,
  Building2,
  DollarSign,
} from "lucide-react";

const docTopics = [
  // { title: "Visão Geral", icon: Globe, route: "/cost-management/visao-geral", description: "Visão geral consolidada de custos e economia na plataforma Cost Management." },
  { title: "Histórico de Serviço", icon: History, route: "/cost-management/historico-servico", description: "Histórico detalhado de consumo por serviço ao longo do tempo." },
  { title: "Tendência de Faturamento", icon: TrendingUp, route: "/cost-management/tendencia-faturamento", description: "Análise de tendências e projeções de faturamento por período." },
  { title: "Exportar Relatórios", icon: Download, route: "/cost-management/exportar-relatorios", description: "Exportação de relatórios financeiros em diferentes formatos." },
  { title: "Consolidado de Faturamento", icon: BarChart2, route: "/cost-management/consolidado-faturamento", description: "Visão consolidada do faturamento agrupado por contrato ou provedor." },
  { title: "Custo de Budget", icon: Wallet, route: "/cost-management/custo-budget", description: "Acompanhamento e controle de orçamentos definidos por projeto ou serviço." },
  { title: "Conta Master", icon: Building2, route: "/cost-management/conta-master", description: "Gerenciamento e visualização de custos da conta master e suas sub-contas." },
  { title: "Financeiro", icon: DollarSign, route: "/cost-management/financeiro", description: "Painel financeiro completo com governança e controle de custos em nuvem." },
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

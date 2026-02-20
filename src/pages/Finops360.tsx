import {
  PieChart,
  LayoutDashboard,
  Sliders,
  GitCompare,
  Cloud,
  Lightbulb,
} from "lucide-react";

const docTopics = [
  { title: "Visão Geral", icon: PieChart, description: "Introdução ao Finops 360 e visão consolidada das funcionalidades de economia e savings em nuvem." },
  { title: "Dashboard", icon: LayoutDashboard, description: "Painel central com métricas de custos, economias realizadas e oportunidades de otimização." },
  { title: "Rightsizing", icon: Sliders, description: "Recomendações inteligentes para ajuste de tamanho de instâncias, eliminando desperdício de recursos." },
  { title: "Compare Cloud", icon: GitCompare, description: "Compare preços e configurações entre diferentes provedores de nuvem para tomar decisões mais econômicas." },
  { title: "Imaginary Cloud", icon: Cloud, description: "Simulação e estimativa de custos em ambientes de nuvem hipotéticos para planejamento financeiro." },
  { title: "Provider Hint", icon: Lightbulb, description: "Dicas e sugestões automáticas de provedores com melhor custo-benefício para cada workload." },
];

export default function Finops360() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <PieChart className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Finops 360</h1>
          <p className="text-sm text-muted-foreground">Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

import {
  Leaf,
  Globe,
  Boxes,
  BookOpen,
  Receipt,
  Lightbulb,
  ShieldCheck,
  Server,
  GitBranch,
  HardDrive,
  CheckSquare,
  Layers,
} from "lucide-react";

const docTopics = [
  { title: "Visão Geral", icon: Globe, description: "Visão geral consolidada do ambiente Mangue e seus recursos de orquestração de containers." },
  { title: "Workloads", icon: Boxes, description: "Gerenciamento de workloads, deployments, pods e serviços no cluster Kubernetes." },
  { title: "Catálogo", icon: BookOpen, description: "Catálogo de aplicações e serviços disponíveis para implantação no ambiente." },
  { title: "Faturamento", icon: Receipt, description: "Acompanhamento e análise de custos e faturamento dos recursos consumidos." },
  { title: "Recomendações", icon: Lightbulb, description: "Sugestões inteligentes para otimização de recursos, performance e redução de custos." },
  { title: "Permissões e Integrações", icon: ShieldCheck, description: "Gerenciamento de permissões de acesso e integrações com sistemas externos." },
  { title: "Nodes e Namespaces", icon: Server, description: "Administração de nodes do cluster e organização por namespaces." },
  { title: "Migração de Cluster", icon: GitBranch, description: "Guia e ferramentas para migração de workloads entre clusters Kubernetes." },
  { title: "Storage", icon: HardDrive, description: "Configuração e gerenciamento de volumes de armazenamento persistente no cluster." },
  { title: "Tarefas", icon: CheckSquare, description: "Monitoramento e acompanhamento de tarefas agendadas e jobs em execução." },
  { title: "Clusters", icon: Layers, description: "Criação, configuração e administração de clusters Kubernetes no ambiente." },
];

export default function Mangue() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Leaf className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Mangue</h1>
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

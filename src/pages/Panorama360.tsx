import { Globe } from "lucide-react";

const docTopics = [
  "Visão Geral",
  "Acesso ao P360",
  "Autenticando com o Google Cloud",
  "Dashboards e Paineis",
  "Conectando e configurando Datasource no PMC P360",
  "Dados em tempo real: Refresh automático",
  "Criando e gerenciando Dashboards",
  "Adicionando um novo cliente na tela geral de monitoramento",
  "Integração com Telegram para notificações de alertas",
  "Como configurar Alertas",
  "Procedimentos para configurar Alertas",
  "Silenciando uma notificação de alerta",
  "Visualizando e Removendo Silenciamentos",
  "Adicionando uma nova tag de label em alertas",
  "Configurando as consultas e condições de alertas",
  "Explorando e analisando os Logs",
  "Instalando e configurando o Agente",
];

export default function Panorama360() {
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
        {docTopics.map((topic) => (
          <div
            key={topic}
            className="rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="font-semibold text-foreground">{topic}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Documentação detalhada sobre {topic.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

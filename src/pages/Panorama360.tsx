import { Globe, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const docTopics = [
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
        {/* Card Visão Geral - mantido */}
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Visão Geral</CardTitle>
            <CardDescription>
              Documentação detalhada sobre visão geral do Panorama 360.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Lista de tópicos de documentação */}
      <div className="flex flex-col gap-0">
        {docTopics.map((topic, index) => (
          <button
            key={index}
            className="flex items-center gap-3 rounded-md px-4 py-3 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted border-b border-border last:border-b-0"
          >
            <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span>{topic}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

import {
  FileBarChart,
  Target,
  Filter,
  Table2,
  Download,
  Route,
  AlertTriangle,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import { useTranslation } from "@/hooks/useTranslation";
import relatoriosTela from "@/assets/relatorios-analiticos-tela.png.asset.json";

const relatorioColunas = [
  {
    title: "Tipo do Relatório",
    desc: 'Por enquanto, todos aparecem como "Relatório analítico".',
  },
  {
    title: "Data",
    desc: "Dia de referência do relatório (os relatórios são gerados diariamente).",
  },
  {
    title: "Tamanho do arquivo",
    desc: "Peso do arquivo, que gira em torno de 180 a 230 MB — um indicativo de que são relatórios robustos, com bastante volume de dados.",
  },
  {
    title: "Ações",
    desc: "Link de Download para cada linha, permitindo baixar o relatório daquele dia específico.",
  },
];

const praticas = [
  "Alimentar planilhas e dashboards externos com os dados brutos da operação GPON.",
  "Cruzar informações da rede com outras bases de dados da empresa.",
  "Gerar relatórios gerenciais personalizados fora da plataforma.",
  "Arquivar o histórico diário da rede para auditorias e compliance.",
];

export default function RelatoriosGpon() {
  const { t } = useTranslation();
  return (
    <GponDocPage
      title={t("gpon360.reports")}
      subtitle={t("gpon360.reportsDescription")}
      icon={FileBarChart}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("common.whatIs")}</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Relatórios Analíticos</strong> é o espaço dedicado a baixar relatórios completos e
            detalhados gerados automaticamente pelo sistema GPON, um por dia. Diferente das telas de monitoramento
            (que mostram dashboards visuais e interativos), aqui o objetivo é simples e direto: te dar acesso a
            arquivos brutos de dados, prontos para download, que podem ser usados em análises externas, auditorias ou
            integrações com outras ferramentas.
          </p>
          <p>
            Você a encontra no menu lateral esquerdo, na opção <strong>Relatórios</strong> (ícone de documento/recibo).
          </p>
        </div>
        <figure className="mt-6">
          <img
            src={relatoriosTela.url}
            alt="Tela de Relatórios Analíticos com filtro de período, tabela de relatórios diários e colunas de download"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Tela principal de Relatórios Analíticos, com filtro de datas e lista de relatórios disponíveis para download.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como funciona</h2>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground mb-2">1. Filtro por período</h3>
            <p>
              No topo da tela, o bloco <strong>Filtrar novo relatório analítico</strong> permite escolher um intervalo
              de datas (campos <strong>"Período"</strong> e <strong>"Até"</strong>) para restringir a lista de relatórios
              exibidos. Depois de definir as datas, basta clicar em <strong>Buscar</strong> para atualizar a lista. Se
              quiser voltar à visão padrão, o botão <strong>Limpar</strong> apaga os campos de data — vale notar que, com
              os campos vazios, a tela mostra a mensagem "Nenhum relatório encontrado para o período selecionado", então
              o ideal é sempre definir novas datas ou recarregar a página para ver a lista completa novamente.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">2. Tabela de relatórios disponíveis</h3>
            <p className="mb-4">
              Abaixo do filtro, uma tabela lista os relatórios gerados, com as colunas:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatorioColunas.map((col) => (
                <div key={col.title} className="p-4 rounded-lg border border-border bg-muted/50">
                  <h4 className="font-semibold text-foreground mb-1">{col.title}</h4>
                  <p className="text-sm text-muted-foreground">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Por padrão, a tela exibe os relatórios dos últimos 15 dias, com paginação simples na parte inferior
              (botões de primeira página, anterior, número da página atual e próxima/última página).
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Route className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Para que serve, na prática?</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Essa tela é o canal oficial para quem precisa dos dados brutos da operação GPON fora do próprio sistema. Ela é
          útil para:
        </p>
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
          {praticas.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Atenção:</strong> como os arquivos são grandes (na casa das centenas de MB), o download pode
              levar alguns instantes dependendo da conexão. Recomendamos baixar apenas os dias realmente necessários
              usando o filtro de período, em vez de baixar tudo de uma vez.
            </p>
          </div>
        </div>
      </section>
    </GponDocPage>
  );
}

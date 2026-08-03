import {
  Siren,
  Target,
  CalendarRange,
  LayoutGrid,
  Table2,
  Eye,
  Trophy,
  Route,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import { useTranslation } from "@/hooks/useTranslation";
import trapPeriodoAsset from "@/assets/trap-massivo-periodo-analise.png.asset.json";
import trapDrillDownAsset from "@/assets/trap-massivo-drill-down.png.asset.json";
import trapRankingAsset from "@/assets/trap-massivo-ranking.png.asset.json";

const kpis = [
  { label: "Total de Registros", desc: "Quantidade total de traps recebidos no período selecionado." },
  { label: "Cidades", desc: "Número de cidades com registros no período. Esse card se transforma em \"Ruas\" quando você entra no detalhe de uma cidade específica, mantendo a mesma lógica hierárquica." },
  { label: "QoS Disponibilidade (Média)", desc: "Média do indicador de qualidade de serviço, numa escala em que 10 representa disponibilidade máxima. Aparece em verde quando está em bom nível." },
  { label: "Drop Events (Média)", desc: "Média de eventos de queda de conexão, exibida em vermelho — quanto menor, melhor." },
];

const colunas = [
  "Total de registros",
  "QoS Disp.",
  "Drop Events",
  "Ação (botão \"Ver\")",
];

const recursosTabela = [
  { title: "Filtro por Estado", desc: "Lista suspensa com busca interna, disponível na visão nacional." },
  { title: "Filtro por Cidade", desc: "Busca livre por texto. Ao entrar no detalhe de uma cidade, o filtro passa a ser por Rua." },
  { title: "Ordenação por coluna", desc: "Clique nas setinhas ao lado do nome da coluna — por exemplo, ordenar por Total para achar as cidades com mais registros, ou por QoS Disp. para achar as piores." },
  { title: "Paginação configurável", desc: "Escolha 5, 10, 20, 50, 100 ou 200 linhas por página e navegue entre as páginas." },
];

const rankings = [
  { title: "Rank Drop Events", desc: "Ordena do pior para o melhor pela média de eventos de queda — quanto maior a barra vermelha, pior a situação." },
  { title: "Rank QoS Disponibilidade", desc: "Ordena pela disponibilidade de QoS, destacando com barras verdes as localidades com melhor desempenho." },
];

const fluxo = [
  "Escolha o período de análise (3, 7, 15 ou 30 dias).",
  "Leia os quatro indicadores para entender o volume de traps e a qualidade média do período.",
  "Use os filtros de Estado e Cidade e a ordenação da tabela para encontrar as localidades críticas.",
  "Consulte as abas de ranking para identificar rapidamente os piores e os melhores da fila.",
  "Clique em \"Ver\" na cidade desejada para descer ao nível de rua.",
  "Analise os cards e o ranking recalculados para aquela cidade e priorize a manutenção.",
  "Remova o chip da cidade (\"x\") para voltar à visão nacional.",
];

export default function TrapMassivoGpon() {
  const { t } = useTranslation();
  return (
    <GponDocPage
      title={t("gpon360.massiveTrap")}
      subtitle={t("gpon360.massiveTrapDescription")}
      icon={Siren}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("common.overview")}</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Trap Massivo</strong> (subtítulo "GPON Trap Intelligence") é o painel de inteligência que
            consolida os traps — alertas técnicos automáticos — enviados pelos equipamentos da rede GPON.
          </p>
          <p>
            Diferente da tela de <strong>Monitoramento de Quedas</strong>, que foca em eventos de queda já
            classificados, essa tela olha para o volume bruto de registros de trap e para dois indicadores de
            qualidade — <strong>disponibilidade de QoS</strong> e <strong>taxa de drop events</strong> — permitindo
            enxergar, de forma hierárquica (país → estado → cidade → rua), onde a rede está performando melhor ou pior.
          </p>
          <p>
            Você a encontra no menu lateral esquerdo, na opção <strong>Trap Massivo</strong> (ícone de antena/sensor).
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <CalendarRange className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.periodFilter')}</h2>
        </div>
        <p className="text-muted-foreground">
          No canto superior direito, os atalhos <strong>3d</strong>, <strong>7d</strong>, <strong>15d</strong> e{" "}
          <strong>30d</strong> definem a janela de tempo analisada (por padrão, os últimos 3 dias). Assim como na tela
          de quedas, mudar o período recalcula tudo automaticamente.
        </p>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden bg-muted/30">
          <img
            src={trapPeriodoAsset.url}
            alt="Período de análise do Trap Massivo com atalhos de 3, 7, 15 e 30 dias e KPIs"
            className="w-full h-auto"
          />
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.kpiCards')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Quatro cartões resumem o cenário do período selecionado:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{kpi.label}</h3>
              <p className="text-sm text-muted-foreground">{kpi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Table2 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.citiesTable')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Do lado esquerdo, uma tabela lista cada cidade — ou cada rua, quando você já entrou em uma cidade
          ("Ruas GPON") — com quatro colunas comparáveis:
        </p>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {colunas.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>
        <h3 className="mb-3 font-semibold text-foreground">Recursos disponíveis</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {recursosTabela.map((r) => (
            <div key={r.title} className="p-4 rounded-lg border border-border bg-muted/50">
              <h4 className="font-semibold text-foreground mb-1">{r.title}</h4>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.drillDownButton')}</h2>
        </div>
        <p className="text-muted-foreground">
          Ao clicar em <strong>Ver</strong> em uma cidade, a tela "mergulha" para o nível de rua: aparece um chip com o
          nome da cidade selecionada (com um "x" para removê-lo e voltar à visão geral), os cards são recalculados só
          para aquela cidade, e a tabela da esquerda passa a listar as ruas dentro dela. Nesse nível de rua não há mais
          um botão de detalhe adicional — ali termina o drill-down.
        </p>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden bg-muted/30">
          <img
            src={trapDrillDownAsset.url}
            alt="Drill-down de Trap Massivo mostrando ruas de São Paulo e ranking de drop events"
            className="w-full h-auto"
          />
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.rankingPanel')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Duas abas permitem comparar as localidades — cidades ou ruas, dependendo do nível em que você está — por dois
          critérios diferentes:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {rankings.map((r) => (
            <div key={r.title} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Cada linha do ranking mostra a posição, o nome da localidade, uma barra visual proporcional ao indicador e o
          total de registros associado — uma forma rápida de identificar tanto os "piores da fila" quanto os "melhores
          da fila" sem precisar reordenar a tabela manualmente.
        </p>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden bg-muted/30">
          <img
            src={trapRankingAsset.url}
            alt="Painel de ranking do Trap Massivo com Rank Drop Events e Rank QoS Disponibilidade"
            className="w-full h-auto"
          />
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Route className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.usageFlowSummary')}</h2>
        </div>
        <ol className="space-y-3">
          {fluxo.map((passo, i) => (
            <li key={passo} className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </div>
              <p className="text-sm text-muted-foreground">{passo}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Na prática, essa tela é voltada para times de engenharia e operação de rede que precisam priorizar ações de
          manutenção com base em dados técnicos agregados: identificar quais cidades ou ruas concentram mais traps e
          mais eventos de queda, comparar o desempenho de QoS entre regiões e afunilar a investigação do nível nacional
          até a rua específica que está gerando mais ruído na rede.
        </p>
      </section>
    </GponDocPage>
  );
}

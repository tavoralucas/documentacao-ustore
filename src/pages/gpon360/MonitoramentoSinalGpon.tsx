import {
  SignalHigh,
  Target,
  LayoutGrid,
  CalendarRange,
  MapPin,
  Trophy,
  LineChart,
  Route,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import { useTranslation } from "@/hooks/useTranslation";
import monitoramentoSinalObjetivo from "@/assets/monitoramento-sinal-objetivo.png.asset.json";
import monitoramentoSinalCidadesGpon from "@/assets/monitoramento-sinal-cidades-gpon.png.asset.json";
import monitoramentoSinalRanking from "@/assets/monitoramento-sinal-ranking.png.asset.json";


const kpis = [
  { label: "Total Clientes", desc: "Quantidade total de clientes GPON considerados no filtro atual." },
  { label: "OK (-3 a -25 dBm)", desc: "Clientes com sinal dentro da faixa saudável, exibidos em verde." },
  { label: "Atenção (-25 a -27 dBm)", desc: "Clientes numa zona de alerta, sinalizados em laranja/amarelo." },
  { label: "Crítico (< -27 dBm)", desc: "Clientes com sinal ruim, sinalizados em vermelho." },
  { label: "Cidades (ou Ruas)", desc: "Quantas localidades estão dentro do recorte atual, conforme o filtro aplicado." },
];

const cidadesItens = [
  {
    n: 1,
    title: "Filtro Estado",
    desc: "Menu suspenso com busca. Clique, digite parte do nome do estado (ou role a lista) e selecione. Isso restringe toda a tela para aquele estado.",
  },
  {
    n: 2,
    title: "Campo Cidade",
    desc: "Busca livre por texto: digite parte do nome da cidade e a tabela filtra instantaneamente. Essa busca filtra apenas a lista de cidades — os cartões de resumo continuam mostrando os totais do filtro de estado/período.",
  },
  {
    n: 3,
    title: "Tabela de cidades",
    desc: "Mostra Cidade, Clientes, Crítico, Atenção e um botão Ver. Clicando nos títulos das colunas (ícone de setas) você ordena de forma crescente ou decrescente — útil para achar a cidade com mais clientes críticos.",
  },
  {
    n: 4,
    title: "Botão Ver",
    desc: "É a ação de \"entrar\" na cidade. A tela passa a mostrar as ruas daquela cidade, com uma etiqueta (chip) no topo indicando o filtro ativo e um X para removê-lo.",
  },
  {
    n: 5,
    title: "Paginação",
    desc: "Abaixo da tabela você define quantos itens por página deseja ver (5, 10, 20, 50, 100 ou 200) e navega com as setas de página anterior/próxima.",
  },
];

const abasRanking = [
  { title: "Rank Críticos (%)", desc: "Ordena as localidades pelo percentual de clientes com sinal crítico (abaixo de -27 dBm)." },
  { title: "Rank Atenção (%)", desc: "Ordena pelo percentual de clientes na faixa de atenção (-25 a -27 dBm)." },
  { title: "Média de Sinal (dBm)", desc: "Ordena pela média de sinal da localidade — quanto mais negativo, pior. Aparece em verde quando bom e em laranja/vermelho quando ruim." },
];

const fluxo = [
  "Escolha o período de análise (3d, 7d, 15d ou 30d).",
  "Selecione o estado ou pesquise direto pelo nome da cidade.",
  "Clique em \"Ver\" para entrar na cidade e listar as ruas.",
  "Clique em \"Ver\" numa rua específica para listar os clientes.",
  "Localize o cliente pela busca por contrato, MAC ou endereço.",
  "Use \"Conectar\" para abrir os detalhes técnicos do cliente.",
];

export default function MonitoramentoSinalGpon() {
  const { t } = useTranslation();
  return (
    <GponDocPage
      title={t("gpon360.signalMonitoring")}
      subtitle={t("gpon360.signalMonitoringDescription")}
      icon={SignalHigh}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("common.overview")}</h2>
        </div>
        <p className="text-muted-foreground">
          A tela de Monitoramento de Sinal é o painel de controle para acompanhar, em tempo quase real, a qualidade do
          sinal GPON de todos os clientes da base. Com ela você enxerga rapidamente onde estão os problemas de sinal —
          seja olhando o Brasil todo, um estado específico, uma cidade, uma rua ou até um cliente individual.
        </p>
        <figure className="mt-6">
          <img
            src={monitoramentoSinalObjetivo.url}
            alt="Tela de Monitoramento de Sinal com KPIs, tabela de cidades e rankings"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            Visão geral da tela de Monitoramento de Sinal.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.kpiCards')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Assim que a tela carrega, você vê cinco cartões com números totais:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{kpi.label}</h3>
              <p className="text-sm text-muted-foreground">{kpi.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Esses cartões mudam automaticamente sempre que você aplica um filtro, então eles sempre refletem o que está
          sendo visualizado no momento.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <CalendarRange className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.periodFilter')}</h2>
        </div>
        <p className="text-muted-foreground">
          No canto superior direito você escolhe a janela de tempo da análise: <strong>3d</strong>, <strong>7d</strong>,
          <strong> 15d</strong> ou <strong>30d</strong>. Ao lado aparece a data inicial e final do intervalo escolhido
          (ex.: "22/jul → 28/jul"). Basta clicar no botão do período desejado e todos os números, tabelas e gráficos da
          tela são recalculados — é só aguardar alguns segundos o carregamento.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.citiesGpon')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Esse é o coração da tela, no lado esquerdo. Aqui você tem dois filtros e uma tabela:
        </p>
        <div className="space-y-3">
          {cidadesItens.map((item) => (
            <div key={item.n} className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {item.n}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-6 mb-2 font-semibold text-foreground">Navegando mais fundo: Rua e Cliente</h3>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Depois de clicar em "Ver" numa cidade, a tabela passa a listar as ruas com sinal crítico/atenção. Clicando
            em "Ver" numa rua, você chega ao nível mais detalhado: a lista de clientes daquela rua, com contrato, MAC,
            endereço, terminal (modelo do equipamento), sinal em dBm, quedas de sinal, status (OK, Atenção ou Crítico)
            e um botão <strong>Conectar</strong>, que abre em uma nova aba o painel detalhado daquele cliente
            (informações do modem, QoS, redes Wi-Fi, etc.).
          </p>
          <p>
            Nesse nível também existe um campo de busca por contrato, MAC ou endereço, e um botão <strong>Download</strong>
            {" "}para exportar a lista — ação que pede confirmação antes de ser executada, já que gera um arquivo.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Dica:</strong> para voltar aos níveis anteriores, basta clicar no X das etiquetas (chips) que
              aparecem ao lado do título "Monitoramento de Sinal".
            </p>
          </div>
        </div>
        <figure className="mt-6">
          <img
            src={monitoramentoSinalCidadesGpon.url}
            alt="Tabela de Cidades GPON com filtros de estado e cidade, ranking e gráficos de níveis RX/TX"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            Tela de Cidades GPON exibindo filtros, tabela e rankings.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.rankingBlock')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          No lado direito, esse painel mostra rankings comparativos divididos em três abas:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {abasRanking.map((aba) => (
            <div key={aba.title} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{aba.title}</h3>
              <p className="text-sm text-muted-foreground">{aba.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Em cada aba você pode clicar nas colunas <strong>Percentual/Valor</strong> e <strong>Total</strong> para
          reordenar os resultados. Clicando no nome de uma cidade nesse ranking você também consegue "entrar" nela,
          assim como pelo botão Ver da tabela da esquerda.
        </p>
        <figure className="mt-6">
          <img
            src={monitoramentoSinalRanking.url}
            alt="Tela de Clientes GPON com filtros ativos de cidade e rua, tabela de clientes e botão Conectar"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            Visão detalhada de clientes após navegar por cidade e rua.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <LineChart className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t('gpon360.rxTxGraphs')}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Quando você filtra por um estado, cidade ou rua específica, aparecem dois gráficos de linha na parte de baixo
          da tela:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-1">Nível RX — Recepção</h3>
            <p className="text-sm text-muted-foreground">
              Mostra a evolução do nível de sinal recebido pelo cliente ao longo dos dias do período selecionado.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-1">Nível TX — Transmissão</h3>
            <p className="text-sm text-muted-foreground">
              Mostra a evolução do nível de sinal transmitido pelo equipamento.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Esses gráficos ajudam a visualizar se o sinal está melhorando, piorando ou estável ao longo do tempo.
        </p>
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
      </section>
    </GponDocPage>
  );
}

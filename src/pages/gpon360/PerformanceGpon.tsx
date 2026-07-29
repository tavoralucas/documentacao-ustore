import {
  Gauge,
  Target,
  Filter,
  LayoutGrid,
  BarChart3,
  Table2,
  MapPin,
  Route,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import performanceFiltrosKpis from "@/assets/performance-filtros-kpis.png.asset.json";

const filtros = [
  { n: 1, title: "UF", desc: "Sigla do estado (ex: SP)." },
  { n: 2, title: "Cidade", desc: "Nome do município (ex: Campinas)." },
  { n: 3, title: "Node/OLT", desc: "Identificador da central óptica específica." },
  { n: 4, title: "Modelo", desc: "Modelo do equipamento instalado na casa do cliente (ex: HG8245H)." },
  { n: 5, title: "Versão SW", desc: "Versão do firmware/software rodando no equipamento." },
  { n: 6, title: "Período inicial e Período final", desc: "Intervalo de datas a ser analisado." },
];

const kpis = [
  {
    label: "Velocidade Média Entregue",
    desc: "Percentual médio de aderência entre a velocidade medida e a contratada (por exemplo, 123% significa que, em média, os clientes analisados estão recebendo até mais do que o contratado). Clicando em \"Mais informações\", abre-se um painel detalhado com total de contratos, média, mínimo, máximo, desvio padrão e os percentis 25, 50 (mediana) e 75 — ótimo para quem precisa de uma análise estatística mais profunda.",
  },
  {
    label: "% Clientes < 90%, < 80% e < 70%",
    desc: "Três indicadores que mostram a fatia de clientes cuja velocidade medida ficou abaixo desses limiares (ou seja, entregando menos do que deveriam). Cada um também tem seu \"Mais informações\", revelando o total avaliado, quantos ficaram abaixo do limiar e o percentual correspondente.",
  },
  {
    label: "Clientes Avaliados Diretamente",
    desc: "Mostra quantos contratos, do total filtrado, tiveram sua velocidade efetivamente medida no período (por exemplo, 900 de 26.233 contratos, ou 3%). Esse número contextualiza a confiabilidade dos demais indicadores, mostrando o tamanho da amostra real por trás dos percentuais.",
  },
];

const graficos = [
  {
    title: "Distribuição de Performance (% Download)",
    desc: "Histograma mostrando quantos terminais caem em cada faixa de aderência (≥100%, 90–99%, 80–89%, 70–79%, <70%), permitindo ver rapidamente se a maioria dos clientes está bem atendida ou não.",
  },
  {
    title: "Performance Média por Modelo de Equipamento",
    desc: "Gráfico de barras horizontais comparando a velocidade média entregue por modelo de terminal/ONU, útil para identificar se algum modelo específico está com desempenho abaixo do esperado.",
  },
  {
    title: "Performance Média por Versão de Software",
    desc: "Mesma lógica, mas comparando por versão de firmware — ajuda a identificar se uma versão específica de software está causando perda de performance.",
  },
  {
    title: "Performance Média por UF",
    desc: "Comparação da performance média entre estados (ou, quando filtrado, entre as localidades retornadas).",
  },
];

const colunasEquipamentos = [
  "Modelo",
  "Versão SW",
  "Total de Clientes",
  "Download (%)",
  "% abaixo de 80%",
  "% abaixo de 70%",
];

const colunasRegional = [
  "UF",
  "Cidade",
  "Total de Clientes",
  "Download (%)",
  "% abaixo de 80%",
  "% abaixo de 70%",
];

const fluxo = [
  "Preencha pelo menos um filtro (idealmente cidade, OLT ou período curto) e clique em Buscar.",
  "Leia os cards de indicadores para entender a aderência média e a fatia de clientes abaixo dos limiares.",
  "Confira \"Clientes Avaliados Diretamente\" para dimensionar a amostra real por trás dos percentuais.",
  "Use os gráficos para identificar padrões por faixa, modelo, versão de software e UF.",
  "Aprofunde na tabela Equipamentos & Firmware para achar combinações críticas de equipamento + firmware.",
  "Compare localidades na tabela Performance Regional e exporte os dados em CSV quando necessário.",
];

export default function PerformanceGpon() {
  return (
    <GponDocPage
      title="Performance"
      subtitle="Performance Contratual — comparação entre a velocidade entregue e a velocidade contratada."
      icon={Gauge}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">O que é essa tela?</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Performance Contratual</strong> existe para responder a uma pergunta muito prática: "os
            clientes estão realmente recebendo a velocidade de internet que contrataram?". Ao invés de olhar para
            quedas ou traps de rede, aqui o foco é a <strong>qualidade da entrega</strong> — comparando a velocidade
            medida nos equipamentos com o que foi contratado, e permitindo enxergar esse desempenho por região, por
            modelo de equipamento e por versão de firmware instalada.
          </p>
          <p>
            Você a encontra no menu lateral esquerdo, na opção <strong>Performance</strong> (ícone de gráfico
            ascendente).
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como funciona a busca</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Diferente das outras telas de monitoramento, aqui a tela não carrega dados automaticamente. Ela começa vazia,
          mostrando apenas o bloco de <strong>Filtros</strong>, e só busca informações quando você preenche pelo menos
          um critério e clica em <strong>Buscar</strong>. Os filtros disponíveis são:
        </p>
        <div className="space-y-3">
          {filtros.map((item) => (
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
        <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Atenção:</strong> os filtros podem ser combinados livremente e o botão <strong>Limpar</strong>
            {" "}reseta tudo de uma vez. Buscas muito amplas (um estado inteiro, sem restringir cidade ou período) podem
            demorar bastante ou até retornar erro de indisponibilidade, já que envolvem processar um volume grande de
            dados — o ideal é sempre refinar por cidade, OLT ou um período mais curto.
          </p>
        </div>
        <figure className="mt-6">
          <img
            src={performanceFiltrosKpis.url}
            alt="Interface de filtros e KPIs da Performance Contratual mostrando UF, Cidade, Node/OLT, Modelo, Versão SW, Período e cards de velocidade média entregue"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Bloco de filtros e cards iniciais da Performance Contratual.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Indicadores principais (cards)</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
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
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Gráficos de análise visual</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {graficos.map((g) => (
            <div key={g.title} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Table2 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Tabela "Equipamentos &amp; Firmware"</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Uma tabela detalhada cruzando <strong>Modelo</strong> e <strong>Versão SW</strong>, com as colunas:
        </p>
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
          {colunasEquipamentos.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Todas as colunas são ordenáveis (clicando nas setinhas), a quantidade de itens por página é ajustável, há
          paginação para navegar entre os resultados e um botão <strong>Exportar CSV</strong> para baixar esses dados.
          Essa tabela é excelente para identificar rapidamente combinações específicas de equipamento + firmware que
          estejam performando mal.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Tabela "Performance Regional"</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Semelhante à anterior, mas organizada por <strong>UF</strong> e <strong>Cidade</strong>:
        </p>
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
          {colunasRegional.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Também é ordenável e possui seu próprio botão <strong>Exportar CSV</strong>, permitindo comparar o desempenho
          entre diferentes regiões atendidas.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Route className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Para que serve, na prática?</h2>
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
          Essa tela é voltada para times de engenharia, qualidade e produto que precisam garantir que a promessa
          contratual de velocidade está sendo cumprida. Com ela é possível verificar se um modelo de equipamento ou
          versão de firmware específica está entregando menos do que deveria, comparar o desempenho de diferentes
          cidades ou estados, e identificar rapidamente qual fatia da base de clientes está recebendo velocidade abaixo
          do combinado — sustentando decisões de troca de equipamento, atualização de firmware ou ações
          comerciais/técnicas direcionadas.
        </p>
      </section>
    </GponDocPage>
  );
}

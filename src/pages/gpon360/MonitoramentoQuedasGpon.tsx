import {
  Activity,
  Target,
  Filter,
  LayoutGrid,
  BarChart3,
  Table2,
  Eye,
  Route,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import monitoramentoQuedasFiltros from "@/assets/monitoramento-quedas-filtros.png.asset.json";
import monitoramentoQuedasKpis from "@/assets/monitoramento-quedas-kpis.png.asset.json";

const filtros = [
  { n: 1, title: "UF", desc: "Seleção múltipla de estados, com campo de busca interna e opção \"Selecionar todos\"." },
  { n: 2, title: "Cidade", desc: "Busca livre por texto: digite o nome da cidade desejada." },
  { n: 3, title: "Tipo de Queda", desc: "Filtra por categoria de causa: Todos, Energia, Sinal ou Outro." },
  { n: 4, title: "OLT", desc: "Seleção da central óptica específica, também com busca por texto entre centenas de equipamentos." },
  { n: 5, title: "Período", desc: "No lado direito, atalhos rápidos para os últimos 3, 7, 15 ou 30 dias." },
];

const kpis = [
  { label: "Clientes Afetados", desc: "Clientes impactados por quedas consideradas massivas. Ao passar o mouse no ícone de informação, o sistema explica que só entram nessa conta ocorrências que afetaram 3 ou mais clientes na mesma combinação de estado, cidade, OLT e rua." },
  { label: "Total de Quedas", desc: "Número de eventos de queda massiva registrados, seguindo o mesmo critério acima." },
  { label: "Quedas por Sinal", desc: "Quantas dessas quedas foram causadas por problema de sinal óptico." },
  { label: "Quedas por Energia", desc: "Quantas foram causadas por falta de energia no equipamento do cliente." },
  { label: "Cidades Afetadas", desc: "Abrangência geográfica do problema em número de cidades." },
  { label: "Ruas Afetadas", desc: "Abrangência geográfica do problema em número de ruas." },
];

const graficos = [
  {
    title: "Quedas por Estado",
    desc: "Gráfico de barras comparando o volume de quedas entre todos os estados. Importante: esse gráfico sempre mostra o total geral, ignorando os filtros aplicados — funciona como uma \"foto\" de contexto nacional.",
  },
  {
    title: "Linha do Tempo",
    desc: "Gráfico de linha com a quantidade de quedas agregadas por hora, permitindo enxergar picos e padrões ao longo do período selecionado.",
  },
];

const colunas = [
  "Clientes afetados",
  "Data/hora",
  "UF",
  "Cidade",
  "OLT",
  "Rua",
  "NAP",
  "Código do imóvel",
  "Tipo de queda (código e descrição técnica da causa)",
  "Ação \"Ver\"",
];

const recursosTabela = [
  { title: "Busca independente", desc: "Pesquise por Rua ou por NAP (identificador da caixa de distribuição óptica)." },
  { title: "Ordenação por coluna", desc: "Clique nas setinhas ao lado de \"Clientes Afetados\" e \"Quando\" para reordenar." },
  { title: "Paginação configurável", desc: "Escolha 5, 10, 20, 50, 100 ou 200 linhas por página e navegue entre as páginas." },
  { title: "Botão Download", desc: "Exporta os dados filtrados da tabela para um arquivo, útil para relatórios externos." },
];

const fluxo = [
  "Escolha o período de análise (3, 7, 15 ou 30 dias).",
  "Combine os filtros de UF, Cidade, Tipo de Queda e OLT conforme a investigação.",
  "Leia os seis indicadores e o destaque do \"Pico do Período\" para priorizar o incidente mais crítico.",
  "Use os gráficos para entender a distribuição por estado e os picos por hora.",
  "Localize o evento na tabela usando a busca por Rua ou NAP e a ordenação.",
  "Clique em \"Ver\" para abrir o detalhe do evento e a lista de clientes impactados.",
  "Use \"Conectar\" para abrir o Dashboard do cliente e iniciar o diagnóstico remoto.",
];

export default function MonitoramentoQuedasGpon() {
  return (
    <GponDocPage
      title="Monitoramento de Quedas"
      subtitle="Identificação de quedas, instabilidades e reincidências na rede."
      icon={Activity}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Objetivo</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Monitoramento de Quedas</strong> é o painel de controle onde você acompanha, em tempo quase
            real, todas as quedas de conexão que estão acontecendo na rede GPON da Claro. Ela mostra o cenário atual de
            forma visual (números e gráficos) e também permite investigar cada queda em detalhes, chegando até o cliente
            afetado.
          </p>
          <p>
            É a ferramenta ideal para responder rapidamente perguntas como "onde estão os problemas agora?", "qual
            bairro/rua está mais afetado?" e "quais clientes específicos foram impactados?".
          </p>
          <p>
            Você a encontra no menu lateral esquerdo, na opção <strong>Monitoramento de Quedas</strong> (ícone de
            tomada/energia desligada).
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Filtros de busca</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          No topo da tela você encontra quatro filtros que podem ser combinados livremente, além do seletor de período:
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
            <strong>Atenção:</strong> sempre que você muda um filtro ou o período, todos os números e gráficos da tela
            são recalculados automaticamente. Isso pode levar alguns segundos, já que envolve uma base grande de dados.
          </p>
        </div>
        <figure className="mt-6">
          <img
            src={monitoramentoQuedasFiltros.url}
            alt="Interface de filtros do Monitoramento de Quedas mostrando UF, Cidade, Tipo de Queda, OLT e período"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Filtros disponíveis no topo da tela de Monitoramento de Quedas.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Indicadores principais (cards)</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Logo abaixo dos filtros, seis cartões resumem a situação do período/filtro selecionado:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{kpi.label}</h3>
              <p className="text-sm text-muted-foreground">{kpi.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
          <p className="text-sm text-foreground">
            <strong>Pico do Período:</strong> logo abaixo dos cards, um destaque em vermelho mostra a maior ocorrência
            isolada — com localização, data/hora e quantidade de clientes atingidos — ajudando a identificar rapidamente
            o incidente mais crítico.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Gráficos</h2>
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
          <h2 className="text-xl font-semibold text-foreground">Tabela "Quedas de Conexão GPON"</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Esta é a lista detalhada, evento a evento, com as seguintes colunas:
        </p>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {colunas.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>
        <h3 className="mb-3 font-semibold text-foreground">Recursos disponíveis na tabela</h3>
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
          <h2 className="text-xl font-semibold text-foreground">Ação "Ver" — investigação detalhada</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Ao clicar em <strong>Ver</strong> em qualquer linha da tabela, a tela se transforma em uma visão focada
            naquele evento específico (rua, cidade e horário), mostrando um resumo — clientes afetados, total de quedas,
            quedas por sinal e por energia — e uma lista com cada cliente individualmente impactado: contrato, endereço
            MAC do equipamento, endereço, modelo do terminal (ONU/roteador) e quantas quedas aquele cliente específico
            teve.
          </p>
          <p>
            Nessa lista existe ainda o botão <strong>Conectar</strong>, que abre em uma nova aba o Dashboard daquele
            cliente, permitindo iniciar um diagnóstico remoto direto no equipamento dele — uma ponte entre o
            monitoramento macro e o atendimento individual.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Route className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Resumo do fluxo de uso recomendado</h2>
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
          Na prática, essa tela ajuda equipes de operação e suporte a identificar rapidamente regiões com problemas de
          rede, entender se a causa predominante é energia ou sinal óptico, priorizar atendimento em cima do "pico do
          período" e navegar do problema geral até o cliente específico afetado sem precisar trocar de sistema.
        </p>
      </section>
    </GponDocPage>
  );
}

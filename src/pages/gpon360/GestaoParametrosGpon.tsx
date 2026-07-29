import {
  SlidersHorizontal,
  Target,
  BookOpen,
  Eye,
  Pencil,
  AlertCircle,
  Wifi,
  Radio,
  Activity,
  Gauge,
  Network,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import gestaoParametrosDisponiveis from "@/assets/gestao-parametros-disponiveis.png.asset.json";

const categorias = [
  {
    icon: Wifi,
    title: "Qualidade de Wi-Fi",
    params: ["QoS Wifi", "RSSI", "Qualidade do Canal"],
  },
  {
    icon: Radio,
    title: "Sinal óptico",
    params: ["TX de sinais ópticos", "RX de sinais ópticos"],
  },
  {
    icon: Activity,
    title: "Disponibilidade do serviço",
    params: ["Disponibilidade", "Disponibilidade QoS Cálculo", "QoS Disponibilidade"],
  },
  {
    icon: Gauge,
    title: "Qualidade geral e de acesso",
    params: ["QoS Geral", "QoS Acesso"],
  },
  {
    icon: Network,
    title: "Métricas de rede",
    params: ["Pacotes Perdidos", "Latência", "Jitter"],
  },
];

const faixas = [
  { label: "Bom", cor: "verde", desc: "faixa considerada saudável/ideal para o indicador." },
  { label: "Regular", cor: "amarelo", desc: "faixa de atenção, fora do ideal mas ainda não crítica." },
  { label: "Ruim", cor: "vermelho", desc: "faixa crítica, indica problema que merece ação." },
];

const fluxoConsulta = [
  "Clique em Ver detalhes ao lado do parâmetro desejado.",
  "Confira as faixas organizadas por Bom, Regular e Ruim.",
  "Cada faixa exibe os valores mínimo (De) e máximo (Até).",
  "Use como resumo antes de editar ou para validar regras atuais.",
];

const fluxoEdicao = [
  "Clique em Editar para abrir a versão editável da janela.",
  "Ajuste os valores de De e Até nos campos numéricos.",
  "Use o botão + ao lado de cada categoria para adicionar novas faixas.",
  "Remova faixas desnecessárias com o ícone de lixeira.",
  "Clique em Salvar para confirmar as alterações.",
];

export default function GestaoParametrosGpon() {
  return (
    <GponDocPage
      title="Gestão de Parâmetros"
      subtitle="Configuração dos limites e faixas dos indicadores técnicos monitorados na rede GPON."
      icon={SlidersHorizontal}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">O que é essa tela?</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Gestão de Parâmetros</strong>, disponível no menu lateral do sistema GPON (ícone de
            ajustes/tune), é o painel onde a equipe configura as regras que definem se um indicador técnico da rede está
            em situação <strong>Boa</strong>, <strong>Regular</strong> ou <strong>Ruim</strong>. Em outras palavras, é aqui
            que se define, para cada métrica monitorada, quais faixas de valores representam um bom funcionamento e
            quais representam um problema.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Para que ela serve</h2>
        </div>
        <p className="text-muted-foreground">
          Pense nela como o <strong>"cérebro de regras"</strong> por trás dos painéis de monitoramento (Dashboard,
          Monitoramento de Sinal, Performance, etc). Em vez de o sistema decidir sozinho o que é um sinal bom ou ruim,
          é nesta tela que o time configura manualmente esses limites, garantindo que os alertas e classificações
          mostrados em outras áreas do sistema reflitam os critérios definidos pela operação.
        </p>
        <figure className="mt-6">
          <img
            src={gestaoParametrosDisponiveis.url}
            alt="Tabela de Parâmetros disponíveis com colunas Nome do Parâmetro e Ações, mostrando botões Ver detalhes e Editar"
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            Cartão Parâmetros disponíveis com a lista paginada de indicadores configuráveis.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como a tela está organizada</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Logo abaixo do título <strong>Gestão de parâmetros</strong>, existe um cartão chamado{" "}
            <strong>Parâmetros disponíveis</strong>, que lista todos os indicadores configuráveis em formato de tabela,
            com duas colunas: o nome do parâmetro e as ações disponíveis para ele. A lista é paginada — na primeira
            página aparecem 10 parâmetros e, na segunda, mais 3, totalizando 13 itens ao todo. A navegação entre páginas
            é feita pelas setas localizadas na parte inferior do cartão.
          </p>
          <p>Os parâmetros contemplam áreas bem variadas da operação:</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          {categorias.map((cat) => (
            <div key={cat.title} className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 mb-3">
                <cat.icon className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-1">
                {cat.params.map((param) => (
                  <li key={param} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {param}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Consultando um parâmetro (botão "Ver detalhes")</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Ao clicar em <strong>Ver detalhes</strong> ao lado de qualquer parâmetro, abre-se uma janela mostrando como
            aquele indicador está atualmente configurado. As faixas aparecem organizadas em três grupos coloridos:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {faixas.map((f) => (
              <div key={f.label} className="p-4 rounded-lg border border-border bg-muted/50">
                <h3 className="font-semibold text-foreground mb-1">{f.label}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <p>
            Cada um exibe os valores mínimo ("De") e máximo ("Até") daquela faixa. Um mesmo grupo pode ter mais de uma
            faixa de valores — por exemplo, o parâmetro de sinal óptico TX apresenta duas faixas diferentes classificadas
            como "Bom", cobrindo tanto valores positivos quanto negativos, já que sinais ópticos são medidos em dBm. Essa
            janela é somente para consulta rápida, funcionando como um resumo antes de uma eventual edição.
          </p>
        </div>
        <ol className="mt-4 space-y-2">
          {fluxoConsulta.map((passo, i) => (
            <li key={passo} className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </div>
              <p className="text-sm text-muted-foreground">{passo}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Pencil className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Editando um parâmetro (botão "Editar")</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            O botão <strong>Editar</strong> abre uma versão editável da mesma janela, permitindo ajustar os valores de
            "De" e "Até" de cada faixa diretamente nos campos numéricos. Cada categoria (Bom, Regular, Ruim) tem um
            botão de <strong>+</strong> ao lado do nome, que permite adicionar uma nova faixa de valores àquela
            classificação, e cada faixa adicional ganha um ícone de lixeira para ser removida, caso não seja mais
            necessária. Depois de ajustar os valores desejados, o botão <strong>Salvar</strong>, no canto inferior direito
            da janela, confirma as alterações.
          </p>
          <p>
            Vale destacar que nem todos os parâmetros já possuem faixas cadastradas: ao consultar o parâmetro{" "}
            <strong>Latência</strong>, por exemplo, a janela aparece vazia, indicando que essa configuração ainda precisa
            ser definida pela equipe responsável.
          </p>
        </div>
        <ol className="mt-4 space-y-2">
          {fluxoEdicao.map((passo, i) => (
            <li key={passo} className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </div>
              <p className="text-sm text-muted-foreground">{passo}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Por que essas classificações importam</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            As faixas de "Bom", "Regular" e "Ruim" definidas aqui alimentam outras telas do sistema (como monitoramento
            de sinal, performance e relatórios), servindo de referência para identificar automaticamente quando um
            cliente ou equipamento está fora do padrão esperado. Por isso, manter esses parâmetros bem calibrados é
            importante para que os alertas e indicadores do restante da plataforma sejam confiáveis.
          </p>
        </div>
      </section>
    </GponDocPage>
  );
}

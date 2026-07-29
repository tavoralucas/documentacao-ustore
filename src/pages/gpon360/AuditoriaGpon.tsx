import {
  ScrollText,
  Target,
  Filter,
  Table2,
  Download,
  ShieldCheck,
  History,
  UserSearch,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import GponDocPage from "./GponDocPage";
import auditoriaFiltrosImg from "@/assets/auditoria-filtros.png.asset.json";
import auditoriaTabelaResultadosImg from "@/assets/auditoria-tabela-resultados.png.asset.json";



const operacoesExemplo = [
  "Buscar por Clientes",
  "Conectar Cliente",
  "Pesquisar Cliente por Mac",
  "Ver Histórico de QoS de Acesso",
];

const colunasTabela = [
  {
    title: "Usuário",
    desc: "Nome da pessoa que realizou a ação dentro da plataforma.",
  },
  {
    title: "Email",
    desc: "Endereço de e-mail vinculado ao usuário que executou a operação.",
  },
  {
    title: "Operação",
    desc: "Nome da ação executada (por exemplo, busca por clientes ou conexão) junto com os parâmetros técnicos utilizados, como código da cidade, número de contrato, endereço MAC ou datas pesquisadas.",
  },
  {
    title: "Data",
    desc: "Data e hora exatas em que a ação foi registrada.",
  },
];

const passoAPasso = [
  "Certifique-se de que os campos Período e Até estejam preenchidos (ambos são obrigatórios).",
  "Digite o nome do usuário em Nome do usuário para investigar as ações de uma pessoa específica.",
  "Use o campo Operação para filtrar por um tipo de ação, como Conectar Cliente.",
  "Combine filtros (e-mail, tipo de operação e datas) para resultados mais precisos.",
  "Clique em Buscar para executar a consulta. Use Limpar para resetar os filtros.",
];

export default function AuditoriaGpon() {
  return (
    <GponDocPage
      title="Auditoria"
      subtitle="Registro e rastreabilidade das ações realizadas na plataforma GPON."
      icon={ScrollText}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">O que é essa tela?</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela <strong>Audit Log</strong>, acessível pelo menu lateral do sistema GPON (ícone de documento/retrato),
            funciona como o registro histórico de todas as ações realizadas pelos usuários dentro da plataforma. É uma
            espécie de "diário de bordo" do sistema: cada consulta, busca ou operação feita por qualquer pessoa do time fica
            registrada aqui, com data, hora, autor e detalhes da ação executada.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Para que ela serve</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Essa tela existe para dar <strong>transparência e rastreabilidade</strong> às operações do sistema. Ela permite
            que a equipe (geralmente supervisores, segurança ou suporte) consiga responder perguntas como:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>"Quem fez essa consulta?"</li>
            <li>"Quando esse cliente foi pesquisado?"</li>
            <li>"Quais operações um determinado usuário realizou hoje?"</li>
          </ul>
          <p>
            É uma ferramenta essencial de auditoria e conformidade, muito comum em sistemas que lidam com dados sensíveis de
            clientes.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <History className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como a tela está organizada</h2>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">1. Cartão Filtros</h3>
            </div>
            <p>
              No topo da página fica o cartão de filtros, onde é possível refinar a pesquisa por{" "}
              <strong>nome do usuário</strong>, <strong>e-mail</strong>, <strong>tipo de operação</strong> e um intervalo de
              datas (campos <strong>Período</strong> e <strong>Até</strong>). Há ainda a opção{" "}
              <strong>"Filtrar log mais recente por usuário"</strong>, que, quando marcada, provavelmente traz apenas o
              registro mais recente de cada usuário, em vez de todo o histórico. Ao lado dos filtros ficam os botões{" "}
              <strong>Buscar</strong>, que executa a consulta, e <strong>Limpar</strong>, que reseta todos os campos
              preenchidos.
            </p>
            <p className="mt-2">
              <strong>Importante:</strong> o preenchimento das duas datas (início e fim do período) é obrigatório para
              realizar qualquer busca. Se algum dos campos ficar vazio, o sistema exibe o aviso{" "}
              <em>"Ambas as datas devem ser preenchidas."</em> e a consulta não é executada.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Table2 className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">2. Tabela de resultados</h3>
            </div>
            <p>
              O segundo bloco exibe a tabela de resultados com as colunas principais. A coluna{" "}
              <strong>Operação</strong> é especialmente detalhada: além do nome da ação (como{" "}
              {operacoesExemplo.map((op, i) => (
                <span key={op}>
                  <em>{op}</em>
                  {i < operacoesExemplo.length - 1 ? ", " : ""}
                </span>
              ))}
              ), ela também mostra os parâmetros técnicos usados naquela consulta, como código da cidade, número de
              contrato, endereço MAC ou datas pesquisadas.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {colunasTabela.map((col) => (
                <div key={col.title} className="rounded-lg border border-border bg-background p-4">
                  <h4 className="mb-1 font-semibold text-foreground">{col.title}</h4>
                  <p className="text-sm text-muted-foreground">{col.desc}</p>
                </div>
              ))}
            </div>

            <figure className="mt-6 overflow-hidden rounded-lg border border-border">
              <img
                src={auditoriaFiltrosImg.url}
                alt="Cartão de filtros da tela Audit Log com campos de nome do usuário, e-mail, operação e intervalo de datas"
                className="w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-border bg-background px-4 py-2 text-center text-sm text-muted-foreground">
                Cartão de filtros da tela Audit Log
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Download className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Recursos disponíveis</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Logo acima da tabela fica o botão <strong>Exportar CSV</strong>, que permite baixar os registros filtrados em
            uma planilha. A tabela também conta com <strong>paginação</strong> na parte inferior, com setas para avançar ou
            voltar páginas e um seletor de "Itens por página", com opções de 5, 10, 20 ou 50 registros por vez — útil
            dependendo de quantos dados você precisa visualizar de uma vez.
          </p>
          <p>
            Por padrão, a tela carrega os registros das últimas 24 horas, mas o volume total de dados é grande (o sistema já
            acumula milhares de registros), então os filtros são fundamentais para encontrar rapidamente o que você procura.
          </p>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border">
            <img
              src={auditoriaTabelaResultadosImg.url}
              alt="Tabela de resultados do Audit Log com botão Exportar CSV, colunas Usuário, Email, Operação e Data, e paginação"
              className="w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-border bg-background px-4 py-2 text-center text-sm text-muted-foreground">
              Tabela de resultados do Audit Log com exportação e paginação
            </figcaption>
          </figure>

        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <UserSearch className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como usar — passo a passo</h2>
        </div>
        <ol className="space-y-2 text-muted-foreground">
          {passoAPasso.map((passo, i) => (
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
          <h2 className="text-xl font-semibold text-foreground">O que é possível inferir sobre essa tela</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Pela riqueza de detalhes técnicos registrados (endereços MAC, números de contrato, códigos de cidade, seriais de
            equipamentos), essa tela parece capturar automaticamente cada chamada relevante feita nas demais áreas do sistema
            GPON, como Clientes, Monitoramento de Sinal e Performance. Ou seja, o Audit Log não é uma tela onde se cadastra
            nada manualmente — ela é alimentada de forma automática pelo próprio sistema, servindo puramente como um painel
            de consulta e exportação de histórico.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Dica rápida para o time</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Se você já sabe o nome ou e-mail da pessoa que deseja investigar, vale usar a opção{" "}
            <strong>"Filtrar log mais recente por usuário"</strong> para ir direto à última ação registrada, economizando tempo
            em vez de navegar por várias páginas de resultados. E lembre-se sempre de ajustar o período de datas antes de
            buscar, já que ele é obrigatório e vem limitado às últimas 24 horas por padrão.
          </p>
        </div>
      </section>
    </GponDocPage>
  );
}

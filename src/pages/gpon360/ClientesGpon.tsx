import { Users, Search, Table, Monitor, Circle } from "lucide-react";
import clientesFiltros from "@/assets/clientes-filtros.png.asset.json";
import clientesTabelaResultados from "@/assets/clientes-tabela-resultados.png.asset.json";
import GponDocPage from "./GponDocPage";

export default function ClientesGpon() {
  return (
    <GponDocPage
      title="Clientes"
      subtitle="Consulta e gestão da base de clientes conectados à rede GPON."
      icon={Users}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">O que é</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            A tela de Clientes é o ponto de partida do módulo GPON para localizar e inspecionar qualquer
            equipamento (ONT/ONU) instalado na base de clientes. Ela reúne uma base bastante robusta,
            com mais de 3,1 milhões de registros distribuídos em uma tabela paginada, permitindo ao operador
            encontrar rapidamente um cliente específico e, a partir daí, abrir o painel completo de diagnóstico
            daquele modem.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como funciona a busca</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Logo no topo da página fica o bloco de Filtros, onde o usuário pode pesquisar por código da operadora,
            endereço MAC, número de contrato, cidade, modelo do terminal ou identificação do Nó/OLT. Existem ainda
            dois seletores complementares: um deles filtra pelo estado brasileiro (UF) onde o cliente está localizado,
            e o outro filtra pelo status da conexão, podendo mostrar apenas equipamentos Ativos ou Inativos.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Regra de uso:</strong> não é necessário preencher todos os campos, mas pelo menos um critério
              precisa ser informado para que a busca seja executada.
            </p>
          </div>
          <p>
            Os botões <strong>Buscar</strong> e <strong>Limpar</strong> completam esse bloco, permitindo aplicar o filtro
            ou resetar todos os campos de uma vez.
          </p>
          <img
            src={clientesFiltros.url}
            alt="Bloco de filtros da tela de Clientes"
            className="w-full border border-border mt-3"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Table className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">A tabela de resultados</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Abaixo dos filtros, a lista de clientes é exibida em formato de tabela, trazendo para cada linha
            informações como contrato, código da operadora, endereço MAC, status, modelo do terminal, velocidades
            contratadas de download e upload, Nó/OLT, além de dados de localização como CEP, cidade, UF e endereço
            completo.
          </p>
          <p>
            Como a base é muito extensa, a navegação é feita por paginação, com controle de quantos itens exibir por
            página e indicação clara de "página atual de total de páginas", o que ajuda o usuário a não se perder ao
            percorrer grandes volumes de dados.
          </p>
          <img
            src={clientesTabelaResultados.url}
            alt="Tabela de resultados da tela de Clientes"
            className="w-full border border-border mt-3"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Acessando o detalhe do cliente</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Cada linha da tabela conta com um botão de ação chamado <strong>Conectar</strong>. Ao clicar nele, o
            sistema direciona o usuário para a Visão Geral do Cliente, uma espécie de painel de diagnóstico individual
            do modem selecionado.
          </p>
          <p>Nesse painel é possível visualizar, entre outras informações:</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Estado da conexão (online/offline)</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Níveis de sinal de transmissão e recepção (com histórico)</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Tecnologia utilizada</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Último evento registrado e sua causa</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Dados do equipamento (Nó/OLT, MAC, número de série, modelo, versão de software, uso de CPU e memória)</span>
            </li>
            <li className="flex items-start gap-2">
              <Circle className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Tempo em que o equipamento está ativo</span>
            </li>
          </ul>
          <p>
            Mais abaixo, o painel também apresenta indicadores de qualidade de serviço (QoS geral, de Wi-Fi, de acesso e
            de disponibilidade, cada um com histórico próprio), a possibilidade de realizar um teste de velocidade sob
            demanda e consultar o histórico de testes já feitos, além da comparação entre a velocidade contratada e a
            velocidade efetivamente medida.
          </p>
          <p>
            Por fim, há um bloco dedicado às redes Wi-Fi de 2.4 GHz e 5.0 GHz, mostrando nome da rede, canal, tipo de
            segurança, largura de banda e protocolo, com opção de edição, e uma seção de equipamentos conectados, que
            informa a quantidade de dispositivos encontrados, permite acessar a topologia de rede do cliente e sinaliza
            equipamentos que estejam "distantes" (fora do padrão esperado de conexão).
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Resumo do fluxo de uso</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                1
              </div>
              <h3 className="font-semibold text-foreground">Filtrar</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              O usuário filtra e localiza o cliente desejado na tela de Clientes usando qualquer combinação de critérios disponíveis.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                2
              </div>
              <h3 className="font-semibold text-foreground">Conectar</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Clica em <strong>Conectar</strong> para abrir o diagnóstico completo daquele equipamento.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                3
              </div>
              <h3 className="font-semibold text-foreground">Investigar</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A partir dali consegue investigar sinal, qualidade de serviço, configuração de Wi-Fi e topologia de rede, tudo em um único painel centralizado.
            </p>
          </div>
        </div>
      </section>
    </GponDocPage>
  );
}

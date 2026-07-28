import {
  LayoutDashboard,
  Search,
  Router,
  Gauge,
  Activity,
  Wifi,
  Network,
} from "lucide-react";
import dashboardPesquisarCliente from "@/assets/dashboard-pesquisar-cliente.png.asset.json";
import dashboardInfoModem from "@/assets/dashboard-info-modem.png.asset.json";
import dashboardQos from "@/assets/dashboard-qos.png.asset.json";
import dashboardTesteVelocidade from "@/assets/dashboard-teste-velocidade.png.asset.json";
import GponDocPage from "./GponDocPage";

export default function DashboardsGpon() {
  return (
    <GponDocPage
      title="Dashboards"
      subtitle="Visão completa do cliente: modem, qualidade, velocidade, Wi-Fi e topologia."
      icon={LayoutDashboard}
    >
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Como chegar até o dashboard de um cliente</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Tudo começa no menu lateral, na opção <strong>Dashboard</strong>. Ao acessar, o sistema pede que você
            escolha um tipo de busca: por <strong>Endereço MAC</strong> ou por <strong>Número do contrato</strong>.
            Depois de selecionar a opção desejada, você digita o código da operadora (o "city code" da cidade do
            cliente) e o dado de busca correspondente, e clica em <strong>Pesquisar</strong>.
          </p>
          <p>
            O sistema então retorna o resultado encontrado, e basta clicar em <strong>Selecionar</strong> para abrir a
            visão completa daquele cliente. Se precisar pesquisar outro cliente depois, há sempre um botão
            <strong> Buscar novo</strong> no topo da tela para reiniciar a busca sem precisar sair da página.
          </p>
        </div>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden">
          <img
            src={dashboardPesquisarCliente.url}
            alt="Tela de pesquisa do cliente por Endereço MAC ou Número do contrato"
            className="w-full"
          />
          <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/50">
            Tela de pesquisa do cliente por Endereço MAC ou Número do contrato
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Router className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Informações sobre o modem</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Assim que o dashboard carrega, a primeira área que aparece é um painel com os dados essenciais do
            equipamento do cliente. Nele você encontra o status da conexão (Online ou Offline), os níveis de sinal de
            transmissão (TX) e recepção (RX) — que ajudam a diagnosticar problemas de qualidade de sinal —, a
            tecnologia utilizada (no caso, GPON), o horário do último evento registrado no equipamento e a causa desse
            evento (por exemplo, uma queda de energia).
          </p>
          <p>
            Também ficam visíveis dados de identificação como o Nó/OLT, o nome da OLT, o endereço MAC, o número do
            contrato, o tempo ligado (Up Time), a cidade vinculada ao contrato, o modelo do equipamento, o número de
            série, além de indicadores de desempenho do próprio modem como uso de CPU, uso de memória e a versão do
            software instalada.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Dica:</strong> ao lado dos campos de Nível TX, Nível RX e Último Evento existe um botão
              <strong> Histórico</strong>. Ele abre uma janela com gráficos mostrando a evolução desses valores ao
              longo do tempo, com períodos de 3, 7, 15 ou 30 dias — ou um período personalizado.
            </p>
          </div>
          <p>
            No caso específico do histórico do "Último Evento", a janela é ainda mais completa: mostra o
            <strong> Histórico de Quedas de Conexão</strong>, trazendo quantas quedas aconteceram, o tempo total que o
            cliente ficou offline, a duração da maior queda e o percentual de disponibilidade (QoS), tudo isso com um
            gráfico e uma legenda de cores que indica a gravidade de cada queda.
          </p>
        </div>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden">
          <img
            src={dashboardInfoModem.url}
            alt="Painel de informações gerais do modem do cliente"
            className="w-full"
          />
          <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/50">
            Painel de informações gerais do modem do cliente
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Indicadores de qualidade (QoS)</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Logo abaixo, há quatro cartões que resumem a qualidade do serviço prestado ao cliente, cada um exibido
            como uma nota:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "QoS geral", desc: "Nota consolidada da experiência do cliente." },
              { label: "QoS de Wi-Fi", desc: "Qualidade percebida nas redes sem fio." },
              { label: "QoS de acesso", desc: "Qualidade do acesso à rede GPON." },
              { label: "QoS de disponibilidade", desc: "Percentual de tempo com serviço disponível." },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-lg border border-border bg-muted/50">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>
            Assim como nos indicadores de sinal, cada cartão tem seu próprio botão <strong>Histórico</strong>, que
            abre uma janela mostrando a evolução dessas notas no período escolhido — muito útil para identificar se a
            qualidade da conexão do cliente está piorando ou melhorando com o tempo.
          </p>
        </div>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden">
          <img
            src={dashboardQos.url}
            alt="Cartões de indicadores de qualidade (QoS) do cliente"
            className="w-full"
          />
          <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/50">
            Cartões de indicadores de qualidade (QoS) do cliente
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Gauge className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Teste de velocidade</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Nessa mesma área você encontra dois cartões em destaque: <strong>Realizar teste de velocidade</strong>, que
            permite disparar um novo teste diretamente no equipamento do cliente, e <strong>Histórico de teste</strong>,
            que abre uma janela com o resumo das medições já realizadas, incluindo gráficos de download e upload
            comparados ao valor contratado.
          </p>
          <p>
            Logo abaixo desses cartões, a seção <strong>Velocidades contratuais e medidas</strong> mostra dois
            velocímetros visuais, um para download e outro para upload, comparando a velocidade medida com a
            velocidade contratada pelo cliente.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Atenção:</strong> se algum desses valores aparecer zerado, é sinal de que vale a pena rodar um
              novo teste de velocidade para atualizar a informação.
            </p>
          </div>
        </div>
        <figure className="mt-6 rounded-lg border border-border overflow-hidden">
          <img
            src={dashboardTesteVelocidade.url}
            alt="Tela de teste de velocidade com cartões de ação, velocímetros e histórico de medições"
            className="w-full"
          />
          <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/50">
            Tela de teste de velocidade com velocímetros e histórico de medições
          </figcaption>
        </figure>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Wifi className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Redes Wi-Fi (2.4 GHz e 5.0 GHz)</h2>
        </div>
        <div className="space-y-3 text-muted-foreground">
          <p>
            O dashboard também exibe dois cartões lado a lado com as configurações das redes sem fio do cliente, uma
            para a frequência de 2.4 GHz e outra para 5.0 GHz. Em cada cartão você visualiza se a rede está ativa, o
            nome da rede (SSID), o canal em uso, o tipo de segurança configurado (como WPA2-Personal), a largura de
            canal e os protocolos suportados.
          </p>
          <p>
            Caso seja necessário alterar o nome ou a senha da rede, existe um link <strong>Editar</strong> em cada
            cartão, que abre uma pequena janela para definir um novo nome e uma nova senha para aquela rede específica.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Network className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Equipamentos conectados e topologia</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Por fim, na parte inferior da tela, fica a seção <strong>Equipamentos</strong>, que reúne três
            funcionalidades bem úteis para diagnóstico.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                n: 1,
                title: "Dispositivos Conectados",
                desc: "Mostra a quantidade de equipamentos encontrados na rede e, ao clicar em Acessar, abre uma tabela com nome, tipo (roteador, celular, desconhecido etc.), MAC, IP, tipo de conexão (2.4 GHz, 5.0 GHz ou Ethernet) e intensidade do sinal sinalizada por cores.",
              },
              {
                n: 2,
                title: "Topologia da rede",
                desc: "Exibe um diagrama visual com o roteador no centro e os dispositivos conectados ao redor, com legenda de cores indicando se a conexão está boa, regular ou ruim, além do tipo de conexão utilizado.",
              },
              {
                n: 3,
                title: "Equipamentos distantes",
                desc: "Foca nos aparelhos com sinal fraco ou distantes do roteador, ajudando a identificar rapidamente possíveis pontos de melhoria na cobertura Wi-Fi do cliente.",
              },
            ].map((item) => (
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
        </div>
      </section>
    </GponDocPage>
  );
}

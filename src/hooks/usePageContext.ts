import { useLocation } from "react-router-dom";

export interface PageContext {
  title: string;
  description: string;
  data: string;
}

export function usePageContext(): PageContext {
  const location = useLocation();
  const path = location.pathname;

  const contexts: Record<string, PageContext> = {
    "/": {
      title: "Página Inicial - GPON Dashboard",
      description: "Visão geral do sistema de monitoramento GPON da Claro Brasil.",
      data: "Página inicial do painel de gestão de rede GPON.",
    },
    "/saude-geral": {
      title: "Saúde Geral da Rede GPON",
      description: "Dashboard consolidado de qualidade e estabilidade da rede GPON com KPIs principais.",
      data: `KPIs: QoS Geral: 7,8 | Disponibilidade: 99,2% | Velocidade Média: 94,3% | Sinal RX Médio: -21,4 dBm | Quedas D-1: 1.247 | % QoS Disponib. = 0: 2,3%.
Distribuição RX: predominância entre -19 e -22 dBm.
Distribuição QoS: maioria entre 80-100%.
Top OLTs com quedas: OLT-SP-01, OLT-RJ-03, OLT-MG-02.
OLTs críticas incluem nós com RX abaixo de -25 dBm e % críticos acima de 15%.`,
    },
    "/performance-contratual": {
      title: "Performance Contratual",
      description: "Análise do percentual de velocidade entregue versus velocidade contratada.",
      data: `KPIs de performance de download e upload por região.
Média nacional de entrega: ~86% do contratado.
Estados com menor performance: Norte e Nordeste.
Gráfico de evolução mensal de performance.`,
    },
    "/estabilidade-quedas": {
      title: "Estabilidade e Quedas",
      description: "Monitoramento de quedas e instabilidade de conexão na rede GPON.",
      data: `KPIs de quedas por OLT e por região.
Taxa média de quedas D-1: 1.247 eventos.
OLTs com maior taxa de quedas identificadas.
Tendência de evolução de quedas nos últimos 30 dias.`,
    },
    "/experiencia-wifi": {
      title: "Experiência Wi-Fi",
      description: "Qualidade da experiência Wi-Fi dos clientes conectados via GPON.",
      data: `KPIs de RSSI, qualidade de canal e QoS Wi-Fi.
Distribuição de dispositivos por faixa de RSSI.
Modelos de terminal mais comuns: ZTE F670L, Huawei HG8245Q2.
Análise de qualidade por canal (2.4GHz vs 5GHz).`,
    },
    "/capacidade-olt": {
      title: "Capacidade por OLT",
      description: "Análise de capacidade e utilização das OLTs da rede GPON.",
      data: `Capacidade disponível vs. utilizada por OLT.
OLTs próximas do limite de capacidade identificadas.
Ranking de OLTs por número de clientes conectados.
Previsão de saturação por região.`,
    },
    "/geo-estrategico": {
      title: "Geoestratégia",
      description: "Análise geográfica e estratégica da rede GPON por estado brasileiro.",
      data: `KPIs: QoS Médio Nacional: 7,8 | Média - Quedas/Cliente: 1,9 | % Clientes Baixa Cobertura: 18,4% | Performance Média: 86,2%.
Mapa interativo do Brasil com coloração por métrica selecionada.
Rankings regionais por UF.
Região Norte com maior concentração de problemas.`,
    },
    "/preditivo": {
      title: "Preditivo",
      description: "Análise preditiva de riscos e probabilidade de falhas na rede GPON.",
      data: `KPIs Preditivos: Score Médio de Risco: 38,4 | Total Monitorados: 142.380 | OLT Maior Concentração: OLT-MA-SLS.
Clientes com alto risco (score ≥ 71) monitorados.
Probabilidade de queda nas próximas 48h calculada por cliente.
Região Norte (MA, PA, AM, RR, AP) concentra 68% dos clientes de alto risco.`,
    },
    "/analitico": {
      title: "Relatórios Analíticos",
      description: "Download de relatórios analíticos diários da rede GPON.",
      data: `Relatórios analíticos diários disponíveis para download.
Tamanho médio dos arquivos: 130-150 MB.
Período disponível: últimos 30 dias.
Formato: CSV com dados completos de todos os clientes e OLTs.`,
    },
    "/clientes": {
      title: "Clientes GPON",
      description: "Base de clientes conectados à rede GPON com dados de terminal e conectividade.",
      data: `Total de itens: 4.281.820 clientes.
Campos disponíveis: Contrato, Operadora, MAC, Status, Modelo do Terminal, Download/Upload, Nó/OLT, CEP, Cidade, Estado.
Modelos de terminal: TERMINAL GPON ONT WIFI6 F6600P, TCG2232, F689.
Velocidades de download variam de 350 a 1000 Mbps.`,
    },
    "/dashboard": {
      title: "Dashboard - Pesquisa de Clientes",
      description: "Ferramenta de pesquisa rápida de clientes por MAC ou número de contrato.",
      data: `Busca por Endereço MAC ou Número do Contrato.
Campo obrigatório: Código da operadora.
Resultado exibe o MAC address do terminal do cliente.`,
    },
    "/gestao-parametros": {
      title: "Gestão de Parâmetros",
      description: "Gerenciamento dos parâmetros de qualidade e limites da rede GPON.",
      data: `Parâmetros disponíveis: QoS Wifi, Qualidade do Canal, QoS Disponibilidade, TX (Dados de Sinais Ópticos), Disponibilidade QoS Cálculo, Disponibilidade, QoS Geral, RSSI (Dados Wi-Fi), QoS Acesso, RX (Dados de Sinais Ópticos).
Total: 20 parâmetros configuráveis divididos em 2 páginas.
Cada parâmetro pode ter seus detalhes visualizados ou ser editado.`,
    },
    "/diagnostico": {
      title: "Diagnóstico Acesso",
      description: "Diagnóstico de acesso de clientes com análise de sinal RX e TX por estado.",
      data: `Filtros por UF (estado) e cidade.
Gráfico de Nível RX - Recepção (valores típicos entre -31 e -33 dBm).
Gráfico de Nível TX - Transmissão (valores típicos entre -12 e -14 dBm).
Período de análise: últimos 30 dias (jan-fev/2026).`,
    },
    "/audit-log": {
      title: "Audit Log",
      description: "Registro de auditoria de todas as operações realizadas no sistema GPON.",
      data: `Campos: Usuário, Email, Operação, Data/Hora.
Operações registradas: Conectar Cliente, Pesquisar por Mac, Pesquisar por Contrato, Ver Topologia de Rede, Ver Diagnóstico de Acesso, etc.
Total de itens: 26.595 registros.
Filtros: nome de usuário, email, operação, período/até, filtro por log mais recente.`,
    },
  };

  return contexts[path] || {
    title: "GPON Dashboard",
    description: "Sistema de monitoramento de rede GPON da Claro Brasil.",
    data: "Página não identificada. Use a navegação lateral para acessar os módulos disponíveis.",
  };
}

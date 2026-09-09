import type { NovidadesMes } from "@/data/novidades";

export const novidadesGponPorMes: NovidadesMes[] = [
  {
    mes: "Agosto",
    ano: 2026,
    slug: "2026-08",
    release: "Novidades",
    periodo: "01 a 31 de agosto de 2026",
    itens: [
      {
        id: "arquivos-troca-nome-rede-traps-report",
        data: "2026-08-01",
        titulo: "Arquivos de troca de nome de rede e traps no Report",
        categoria: "Nova funcionalidade",
        resumo: "Download dos arquivos de troca de nome de rede e dos traps na tela de Report",
        descricao:
          "A tela de Report ganhou reforço: agora é possível baixar os arquivos com os clientes que tiveram o nome da rede alterado após uma queda de conexão, junto com os arquivos de traps correspondentes.\n\nIsso facilita a integração com outras ferramentas e o acompanhamento do que aconteceu com o cliente logo após a instabilidade, tudo em um só lugar.",
        tags: ["GPON 360", "Relatórios", "Integração"],
        link: { href: "/gpon-360/relatorios", label: "Ver documentação de Relatórios" },
      },
      {
        id: "audit-log-indicadores-insights",
        data: "2026-08-01",
        titulo: "Audit Log com indicadores e insights de uso",
        categoria: "Nova funcionalidade",
        resumo: "Camada analítica de uso no topo da tela de auditoria",
        descricao:
          "Além dos registros individuais, a tela de auditoria passa a apresentar uma camada analítica completa logo no topo da página.\n\nEm poucos segundos você entende como, quando e por quem o GPON 360 está sendo usado, o que ajuda a acompanhar a adoção e identificar padrões de uso.",
        beneficios: [
          "Média de usuários e de operações por dia",
          "Variação de uso (últimos 7 dias vs. 7 dias anteriores)",
          "Horário de pico de utilização",
          "Série diária de usuários ativos",
          "Ranking das operações mais executadas",
          "Top usuários da plataforma",
        ],
        tags: ["GPON 360", "Auditoria", "Analytics"],
        link: { href: "/gpon-360/auditoria", label: "Ver documentação de Auditoria" },
      },
      {
        id: "analise-tecnica-incidente-infraestrutura",
        data: "2026-08-01",
        titulo: "Análise técnica de incidente de infraestrutura",
        categoria: "Melhoria",
        resumo: "Investigação de incidente de infraestrutura com ajustes de estabilidade",
        descricao:
          "Investigamos a fundo um incidente de engenharia relacionado à infraestrutura da aplicação, mapeando causas e impactos no ambiente. O trabalho já resultou em ajustes de estabilidade percebidos no dia a dia de uso da plataforma.",
        tags: ["GPON 360", "Infraestrutura", "Estabilidade"],
      },
      {
        id: "timeline-monitor-sinal-mais-limpa",
        data: "2026-08-01",
        titulo: "Timeline do Monitor de Sinal mais limpa",
        categoria: "Melhoria",
        resumo: "Registros de clientes offline deixam de poluir os gráficos de sinal",
        descricao:
          "Ajustamos a timeline de Nível RX (Recepção) e Nível TX (Transmissão) no Monitor de Sinal para ignorar registros com valor -100, que representam clientes offline.\n\nO resultado é um histórico de sinal muito mais coerente e fácil de interpretar, sem picos artificiais distorcendo a análise.",
        tags: ["GPON 360", "Monitoramento de Sinal", "UX"],
        link: { href: "/gpon-360/monitoramento-sinal", label: "Ver documentação de Monitoramento de Sinal" },
      },
      {
        id: "mais-detalhes-monitoramento-quedas",
        data: "2026-08-01",
        titulo: "Mais detalhes no Monitoramento de Quedas",
        categoria: "Melhoria",
        resumo: "Detalhe da ocorrência com mais contexto sobre a queda",
        descricao:
          "As ocorrências no Monitor de Quedas agora trazem muito mais contexto. Ao abrir o detalhe de uma queda, você passa a visualizar data de retorno da conexão, NAP, código do imóvel e OLT.\n\nMais informação na tela significa menos tempo navegando entre sistemas para entender e agir sobre cada ocorrência.",
        tags: ["GPON 360", "Monitoramento de Quedas", "Operação"],
        link: { href: "/gpon-360/monitoramento-quedas", label: "Ver documentação de Monitoramento de Quedas" },
      },
      {
        id: "novos-filtros-tela-clientes",
        data: "2026-08-01",
        titulo: "Novos filtros na tela de Clientes",
        categoria: "Melhoria",
        resumo: "Filtros de OLT e Rua na busca de clientes",
        descricao:
          "Para facilitar a busca, a tela de Clientes ganhou dois novos filtros: OLT e Rua.\n\nAgora fica mais fácil segmentar e localizar clientes durante o atendimento e as consultas operacionais do dia a dia.",
        tags: ["GPON 360", "Clientes", "Filtros"],
        link: { href: "/gpon-360/clientes", label: "Ver documentação de Clientes" },
      },
    ],
  },
];

export function getNovidadesGponPorSlug(slug: string): NovidadesMes | undefined {
  return novidadesGponPorMes.find((m) => m.slug === slug);
}

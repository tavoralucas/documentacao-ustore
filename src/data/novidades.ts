import financeiroImg from "@/assets/novidade-financeiro-2026-06-15.png.asset.json";
import custoRelacionalImg from "@/assets/custo-relacional-produto.png.asset.json";

export type Novidade = {
  id: string;
  data: string; // ISO date YYYY-MM-DD
  titulo: string;
  resumo?: string;
  categoria?: string;
  descricao: string;
  beneficios?: string[];
  imagem?: string;
  imagemAlt?: string;
  tags?: string[];
  link?: { href: string; label: string };
};

export type NovidadesMes = {
  mes: string;
  ano: number;
  slug: string;
  release?: string;
  periodo?: string;
  itens: Novidade[];
};

export const novidadesPorMes: NovidadesMes[] = [
  {
    mes: "Junho",
    ano: 2026,
    slug: "2026-06",
    itens: [
      {
        id: "melhorias-modulo-financeiro",
        data: "2026-06-15",
        titulo: "Melhorias no módulo financeiro",
        descricao:
          "Implementamos uma atualização no módulo financeiro com foco em organização, desempenho e experiência de navegação.\n\nAnteriormente, todas as informações eram carregadas e exibidas em uma única tela. Em alguns cenários, isso poderia impactar o desempenho e ocasionar falhas durante o carregamento, prejudicando a experiência de uso.\n\nCom essa melhoria, os detalhes financeiros passaram a ser apresentados em uma tela dedicada, separando o processo de carregamento das informações e tornando a navegação mais estável e eficiente. Dessa forma, eventuais falhas ou análises mais detalhadas podem ser realizadas sem comprometer o fluxo principal do sistema.",
        beneficios: [
          "Melhor organização das informações em tela",
          "Navegação mais simples e intuitiva",
          "Maior performance no carregamento dos dados",
          "Mais estabilidade durante a utilização",
          "Facilidade na análise de detalhes e possíveis inconsistências",
        ],
        imagem: financeiroImg.url,
        imagemAlt: "Nova tela do módulo Financeiro",
        tags: ["Financeiro", "Performance", "UX"],
        link: { href: "/cost-management/financeiro", label: "Ver documentação do Financeiro" },
      },
      {
        id: "custo-relacional-produto",
        data: "2026-06-15",
        titulo: "Custo Relacional de Produto",
        descricao:
          "Agora é possível configurar e visualizar o Custo Relacional de Produto, permitindo associar custos específicos às relações entre produtos e suas operações. Com isso, a composição dos valores passa a refletir de forma mais precisa as particularidades de cada contexto de utilização.\n\nEssa funcionalidade traz mais flexibilidade para a gestão financeira e reduz a necessidade de configurações manuais ou tratamentos externos, tornando a administração dos custos mais simples e confiável.",
        imagem: custoRelacionalImg.url,
        imagemAlt: "Tela de configuração do Custo Relacional de Produto",
        tags: ["Cost Management", "Financeiro", "Configuração"],
        link: { href: "/cost-management/custo-relacional-produto", label: "Ver documentação de Custo Relacional de Produto" },
      },
    ],
  },
  {
    mes: "Julho",
    ano: 2026,
    slug: "2026-07",
    release: "Billing — Novidades",
    periodo: "16 a 31 de julho de 2026",
    itens: [
      {
        id: "loaders-cards-tela-financeira",
        data: "2026-07-16",
        titulo: "Loaders nos cards da tela financeira",
        categoria: "Melhoria",
        resumo: "Indicadores de carregamento nos cards da tela financeira",
        descricao:
          "Agora, ao acessar a tela financeira, você vê um indicador visual de carregamento enquanto os dados são processados. Isso deixa claro que o sistema está trabalhando, evitando a sensação de que a tela travou.",
        tags: ["Billing", "Financeiro", "UX"],
      },
      {
        id: "tooltips-mobile-billing",
        data: "2026-07-16",
        titulo: "Tooltips ajustados na visualização mobile",
        categoria: "Melhoria",
        resumo: "Dicas de ícones (tooltips) agora aparecem corretamente no celular",
        descricao:
          "Ajustamos a exibição das dicas (tooltips) dos ícones ao acessar o billing pelo celular. As informações passam a aparecer completas e no lugar certo em telas como Histórico de Serviço, Tendência de Faturamento, Exportação de Relatórios, Custos de Budget e Conta Master.",
        tags: ["Billing", "Mobile", "UX"],
      },
      {
        id: "atualizacao-automatica-contrato",
        data: "2026-07-16",
        titulo: "Atualização automática ao selecionar contrato",
        categoria: "Melhoria",
        resumo: "Dados carregam automaticamente ao trocar de contrato",
        descricao:
          "Ao selecionar um contrato na barra lateral, os dados relacionados já são carregados automaticamente — sem precisar clicar em \"Filtrar\". A navegação fica mais rápida e fluida, principalmente para quem consulta vários contratos em sequência.",
        tags: ["Billing", "Contratos", "Performance"],
      },
      {
        id: "notificacao-bilhetagem-administradores",
        data: "2026-07-16",
        titulo: "Notificação de sucesso da bilhetagem para administradores",
        categoria: "Nova funcionalidade",
        resumo: "Administradores serão avisados quando a bilhetagem for concluída",
        descricao:
          "Administradores do contrato passarão a receber uma notificação automática sempre que a bilhetagem for concluída com sucesso. Isso reduz a necessidade de checar manualmente o sistema ou acionar o suporte para confirmar que o processo terminou.",
        tags: ["Billing", "Bilhetagem", "Notificações"],
      },
    ],
  },
  {
    mes: "Agosto",
    ano: 2026,
    slug: "2026-08",
    release: "Novidades",
    periodo: "01 a 31 de agosto de 2026",
    itens: [
      {
        id: "novo-dashboard-billing",
        data: "2026-08-01",
        titulo: "Novo Dashboard de Billing",
        categoria: "Nova funcionalidade",
        resumo: "Uma única tela reúne os principais relatórios de faturamento",
        descricao:
          "Agora você acessa em um só lugar os principais relatórios de faturamento — Tendência de Faturamento, Histórico de Serviço, Custo Cadenciado, Consolidado de Faturamento e Financeiro — já filtrados pelo contrato e período selecionados. Menos telas para navegar, mais visão consolidada do seu faturamento. Atualmente essa funcionalidade está disponível em ambiente caso haja solicitação, mas está ativa apenas para a versão anterior da interface do produto.",
        tags: ["Billing", "Dashboard", "Relatórios"],
      },
      {
        id: "suporte-moeda-sol-peruano",
        data: "2026-08-01",
        titulo: "Suporte à moeda Sol Peruano (PEN)",
        categoria: "Nova funcionalidade",
        resumo: "Cotação em tempo real para clientes do Peru",
        descricao:
          "Clientes do Peru agora contam com suporte nativo à moeda local, o Sol Peruano (PEN), com cotação atualizada direto da fonte oficial do Banco Central de Reserva del Perú. Isso permite visualizar valores e conversões de forma mais precisa para essa região.",
        tags: ["Billing", "Moedas", "Peru"],
      },
      {
        id: "suporte-moeda-peso-argentino",
        data: "2026-08-01",
        titulo: "Suporte à moeda Peso Argentino (ARS)",
        categoria: "Nova funcionalidade",
        resumo: "Cotação em tempo real para clientes da Argentina",
        descricao:
          "Clientes da Argentina agora contam com suporte nativo à moeda local, o Peso Argentino (ARS), com cotação atualizada direto da fonte oficial do Banco Central da República Argentina. Isso permite visualizar valores e conversões de forma mais precisa para essa região.",
        tags: ["Billing", "Moedas", "Argentina"],
      },
      {
        id: "controle-exibicao-cotacao-dolar",
        data: "2026-08-01",
        titulo: "Controle de exibição da cotação do dólar",
        categoria: "Melhoria",
        resumo: "Mais controle sobre as informações exibidas na fatura",
        descricao:
          "Agora é possível configurar a exibição da cotação do dólar na tela financeira e na fatura. Contratos que preferirem uma visualização mais simplificada podem ocultar essas informações, sem qualquer impacto nos valores calculados da fatura. Esse controle está disponivel apenas no menu de configuração do ambiente cuja a interface antiga está disponível. Essa implementação partiu da necessidade de uso para ocultar valores disponiveis em tela para o usuário final.",
        tags: ["Billing", "Financeiro", "Configuração"],
      },
    ],
  },
];

export function getNovidadesPorSlug(slug: string): NovidadesMes | undefined {
  return novidadesPorMes.find((m) => m.slug === slug);
}

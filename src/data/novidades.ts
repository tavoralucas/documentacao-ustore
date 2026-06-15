import financeiroImg from "@/assets/novidade-financeiro-2026-06-15.png.asset.json";

export type Novidade = {
  id: string;
  data: string; // ISO date YYYY-MM-DD
  titulo: string;
  descricao: string;
  beneficios?: string[];
  imagem?: string;
  imagemAlt?: string;
  tags?: string[];
};

export type NovidadesMes = {
  mes: string;
  ano: number;
  slug: string;
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
      },
    ],
  },
];

export function getNovidadesPorSlug(slug: string): NovidadesMes | undefined {
  return novidadesPorMes.find((m) => m.slug === slug);
}

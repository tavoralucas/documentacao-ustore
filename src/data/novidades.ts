export type Novidade = {
  id: string;
  data: string; // ISO date YYYY-MM-DD
  titulo: string;
  descricao: string;
  tags?: string[];
};

export type NovidadesMes = {
  mes: string; // nome do mês em português
  ano: number;
  slug: string; // ex.: "2026-06"
  itens: Novidade[];
};

export const novidadesPorMes: NovidadesMes[] = [
  {
    mes: "Junho",
    ano: 2026,
    slug: "2026-06",
    itens: [],
  },
];

export function getNovidadesPorSlug(slug: string): NovidadesMes | undefined {
  return novidadesPorMes.find((m) => m.slug === slug);
}

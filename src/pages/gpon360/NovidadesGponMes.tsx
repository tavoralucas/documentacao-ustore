import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNovidadesGponPorSlug } from "@/data/novidadesGpon";
import { useTranslation } from "@/hooks/useTranslation";

export default function NovidadesGponMes() {
  const { t } = useTranslation();
  const { slug = "" } = useParams();
  const mes = getNovidadesGponPorSlug(slug);

  if (!mes) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/gpon-360/novidades">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.previous')}
          </Link>
        </Button>
        <h1 className="text-2xl font-bold text-foreground">Mês não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/gpon-360/novidades">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('novidades.readMore')}
        </Link>
      </Button>

      <header className="mb-10">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          <span>Incognito - GPON 360</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {mes.mes} de {mes.ano}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {mes.release ? [mes.release, mes.periodo].filter(Boolean).join(" · ") : t('novidades.description')}
        </p>
      </header>

      <ol className="relative space-y-8 border-l-2 border-border pl-8">
        {mes.itens.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
            <div className="rounded-lg border bg-card p-5 shadow-sm">
              {item.categoria && (
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Badge variant={item.categoria === "Nova funcionalidade" ? "default" : "secondary"}>
                    {item.categoria}
                  </Badge>
                </div>
              )}
              <h3 className="mb-1 text-lg font-semibold text-foreground">{item.titulo}</h3>
              {item.resumo && (
                <p className="mb-3 text-sm font-medium text-foreground">{item.resumo}</p>
              )}
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {item.descricao.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {item.beneficios && item.beneficios.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {item.beneficios.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {item.imagem && (
                <img
                  src={item.imagem}
                  alt={item.imagemAlt ?? item.titulo}
                  loading="lazy"
                  className="mt-4 h-auto w-full rounded-md border"
                />
              )}
              {item.link && (
                <div className="mt-4">
                  <Link to={item.link.href} className="text-sm font-medium text-primary hover:underline">
                    {item.link.label} →
                  </Link>
                </div>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

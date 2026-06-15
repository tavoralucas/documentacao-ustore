import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { novidadesPorMes } from "@/data/novidades";

export default function Novidades() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <header className="mb-8">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          <span>Atualizações da plataforma</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Novidades</h1>
        <p className="mt-2 text-muted-foreground">
          Acompanhe as novas implementações organizadas por mês.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {novidadesPorMes.map((m) => (
          <Link key={m.slug} to={`/novidades/${m.slug}`} className="group">
            <Card className="h-full transition-all hover:border-primary hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">
                  {m.mes} de {m.ano}
                </CardTitle>
                <CardDescription>
                  Veja as novas implementações deste mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {m.itens.length} {m.itens.length === 1 ? "novidade" : "novidades"}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-primary transition-transform group-hover:translate-x-0.5">
                    Ver timeline
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

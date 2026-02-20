import { PieChart } from "lucide-react";

export default function Finops360() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <PieChart className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Finops 360</h1>
          <p className="text-sm text-muted-foreground">Documentação do produto</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["Visão Geral", "Arquitetura", "Guia de Uso", "APIs", "Configurações", "FAQ"].map((section) => (
          <div key={section} className="rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">{section}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Documentação detalhada sobre {section.toLowerCase()} do Finops 360.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

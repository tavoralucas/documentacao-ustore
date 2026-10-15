import { ArrowLeft, Calculator, Beaker, BadgeDollarSign, ShieldCheck, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function UtilitariosCostManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/cost-management")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('common.backTo', { module: t('costManagement.title') })}
      </button>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
          <TrendingDown className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.utilitarios.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.utilitarios.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.utilitarios.overviewSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.utilitarios.overviewText') }} />
          <p>
            {t('costManagement.utilitarios.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.utilitarios.ferramentas")}</h2>
        <div className="space-y-6">
          {/* Calculadora */}
          <div className="p-4 rounded-lg border border-border bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              {t('costManagement.utilitarios.calcTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.utilitarios.calcDesc')}
            </p>
            <div className="bg-background p-3 rounded border border-border">
              <p className="text-sm font-semibold mb-2">{t("costManagement.utilitarios.calcFeatures")}</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>{t('costManagement.utilitarios.calcScenario')}</li>
                <li>{t('costManagement.utilitarios.calcProvider')}</li>
                <li>{t('costManagement.utilitarios.calcReserved')}</li>
                <li>{t('costManagement.utilitarios.calcRegion')}</li>
                <li>{t('costManagement.utilitarios.calcSavings')}</li>
              </ul>
            </div>
          </div>

          {/* Simulador */}
          <div className="p-4 rounded-lg border border-border bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Beaker className="h-5 w-5 text-primary" />
              {t('costManagement.utilitarios.simTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.utilitarios.simDesc')}
            </p>
            <div className="bg-background p-3 rounded border border-border">
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>{t('costManagement.utilitarios.simWhatIf')}</li>
                <li>{t('costManagement.utilitarios.simGrowth')}</li>
                <li>{t('costManagement.utilitarios.simMigration')}</li>
                <li>{t('costManagement.utilitarios.simOptimization')}</li>
              </ul>
            </div>
          </div>

          {/* Conversor */}
          <div className="p-4 rounded-lg border border-border bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5 text-primary" />
              {t('costManagement.utilitarios.convTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.utilitarios.convDesc')}
            </p>
            <div className="bg-background p-3 rounded border border-border">
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>{t('costManagement.utilitarios.convFeatures')}</li>
                <li>{t('costManagement.utilitarios.convHistoric')}</li>
                <li>{t('costManagement.utilitarios.convMultiple')}</li>
              </ul>
            </div>
          </div>

          {/* SLA */}
          <div className="p-4 rounded-lg border border-border bg-muted/30">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              {t('costManagement.utilitarios.slaTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.utilitarios.slaDesc')}
            </p>
            <div className="bg-background p-3 rounded border border-border">
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>{t('costManagement.utilitarios.slaFeatures')}</li>
                <li>{t('costManagement.utilitarios.slaUptime')}</li>
                <li>{t('costManagement.utilitarios.slaCost')}</li>
                <li>{t('costManagement.utilitarios.slaReport')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

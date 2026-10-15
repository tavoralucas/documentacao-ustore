import { ArrowLeft, TrendingUp, CalendarDays, BarChart3, LineChart, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function TendenciaFaturamentoCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.tendenciaFaturamento.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.tendenciaFaturamento.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.tendenciaFaturamento.overviewSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.tendenciaFaturamento.overviewText') }} />
          <p>
            {t('costManagement.tendenciaFaturamento.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          {t('costManagement.tendenciaFaturamento.projectionsSection')}
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.tendenciaFaturamento.projectionShort")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.tendenciaFaturamento.projectionShortDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.tendenciaFaturamento.projectionMedium")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.tendenciaFaturamento.projectionMediumDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.tendenciaFaturamento.projectionLong")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.tendenciaFaturamento.projectionLongDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <LineChart className="h-5 w-5 text-primary" />
          {t('costManagement.tendenciaFaturamento.chartSection')}
        </h2>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.tendenciaFaturamento.chartDesc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.tendenciaFaturamento.chartHistorical')}</li>
          <li>{t('costManagement.tendenciaFaturamento.chartProjected')}</li>
          <li>{t('costManagement.tendenciaFaturamento.chartConfidence')}</li>
          <li>{t('costManagement.tendenciaFaturamento.chartAnomalies')}</li>
          <li>{t('costManagement.tendenciaFaturamento.chartTarget')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          {t('costManagement.tendenciaFaturamento.analysisFactors')}
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.tendenciaFaturamento.factorHistorical')}</li>
          <li>{t('costManagement.tendenciaFaturamento.factorSeasonality')}</li>
          <li>{t('costManagement.tendenciaFaturamento.factorGrowth')}</li>
          <li>{t('costManagement.tendenciaFaturamento.factorResources')}</li>
          <li>{t('costManagement.tendenciaFaturamento.factorPricing')}</li>
          <li>{t('costManagement.tendenciaFaturamento.factorContracts')}</li>
        </ul>
      </section>
    </div>
  );
}

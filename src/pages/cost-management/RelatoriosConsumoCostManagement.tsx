import { ArrowLeft, BarChart3, Filter, CalendarDays, Search, Download, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RelatoriosConsumoCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.relatoriosConsumo.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.relatoriosConsumo.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.overviewSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            {t('costManagement.relatoriosConsumo.overviewText')}
          </p>
          <p>
            {t('costManagement.relatoriosConsumo.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.mainFeatures")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosConsumo.feature1')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosConsumo.feature1Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosConsumo.feature2')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosConsumo.feature2Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosConsumo.feature3')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosConsumo.feature3Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosConsumo.feature4')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosConsumo.feature4Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosConsumo.feature5')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosConsumo.feature5Desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.reportTypes")}</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.relatoriosConsumo.typeCost')}</li>
          <li>{t('costManagement.relatoriosConsumo.typeVDC')}</li>
          <li>{t('costManagement.relatoriosConsumo.typeTag')}</li>
          <li>{t('costManagement.relatoriosConsumo.typeRegion')}</li>
          <li>{t('costManagement.relatoriosConsumo.typeDaily')}</li>
          <li>{t('costManagement.relatoriosConsumo.typeProvider')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.indicators")}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="p-3 rounded-lg border border-border bg-muted/50 text-center">
            <p className="text-2xl font-bold text-primary">R$ 0,00</p>
            <p className="text-xs text-muted-foreground mt-1">{t('costManagement.relatoriosConsumo.indTotalCost')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50 text-center">
            <p className="text-2xl font-bold text-primary">R$ 0,00</p>
            <p className="text-xs text-muted-foreground mt-1">{t('costManagement.relatoriosConsumo.indAvgDaily')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50 text-center">
            <p className="text-2xl font-bold text-primary">0%</p>
            <p className="text-xs text-muted-foreground mt-1">{t('costManagement.relatoriosConsumo.indVariation')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50 text-center">
            <p className="text-2xl font-bold text-primary">—</p>
            <p className="text-xs text-muted-foreground mt-1">{t('costManagement.relatoriosConsumo.indTopService')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50 text-center">
            <p className="text-2xl font-bold text-primary">0</p>
            <p className="text-xs text-muted-foreground mt-1">{t('costManagement.relatoriosConsumo.indResourceCount')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

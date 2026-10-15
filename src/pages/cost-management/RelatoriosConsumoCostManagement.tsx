import { ArrowLeft, BarChart3, TrendingUp, Eye, AlertCircle, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RelatoriosConsumoCostManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 p-6 max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate("/cost-management")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('common.backTo', { module: t('costManagement.title') })}
      </button>

      {/* Header */}
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

      {/* Introdução */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.introTitle")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.relatoriosConsumo.introText')}
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            {t('costManagement.relatoriosConsumo.introNote')}
          </p>
        </div>
      </section>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosConsumo.serviceHistory")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosConsumo.serviceHistoryDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosConsumo.custoPaced")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosConsumo.custoPacedDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosConsumo.crp")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosConsumo.crpDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosConsumo.costLimit")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosConsumo.costLimitDesc')}
          </p>
        </section>
      </div>

      {/* Fluxo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosConsumo.mainFlow")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.relatoriosConsumo.mainFlowSteps')}
        </p>
      </section>
    </div>
  );
}

import { ArrowLeft, PiggyBank, TrendingUp, AlertTriangle, Target, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function BudgetsCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.budgets.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.budgets.subtitle')}
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.budgets.intro")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.budgets.introPara')}
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200">
              {t('costManagement.budgets.introAlert')}
            </p>
          </div>
        </div>
      </section>

      {/* Cards de Funcionalidades */}
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <PiggyBank className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.budgets.budgetsCard")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.budgets.budgetsDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.budgets.subBudgets")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.budgets.subBudgetsDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.budgets.riskAnalysis")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.budgets.riskAnalysisDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.budgets.trendAnalysis")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.budgets.trendAnalysisDesc')}
          </p>
        </section>
      </div>

      {/* Seções de detalhamento */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.budgets.configuration")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.budgets.configurationDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.budgets.alerts")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.budgets.alertsDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("common.moreInfo")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.budgets.moreInfoDesc')}
        </p>
      </section>
    </div>
  );
}

import { ArrowLeft, Package, Users, Settings, AlertCircle, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function FranquiaCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.franquia.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.franquia.subtitle')}
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.introduction')}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.franquia.introText')}
        </p>
      </section>

      {/* Acesso Restrito */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <AlertCircle className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.restrictedAccess")}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('costManagement.franquia.restrictedAccessDesc')}
        </p>
      </section>

      {/* Modelo USN */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.franquia.usnModel")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.franquia.usnModelDesc')}
        </p>
      </section>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Package className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.franquiaManagement")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.franquia.franquiaManagementDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.franquiaReports")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.franquia.franquiaReportsDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Settings className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.ajusteFranquia")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.franquia.ajusteFranquiaDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Package className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.franquiaVsBudget")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.franquia.franquiaVsBudgetDesc')}
          </p>
        </section>
      </div>

      {/* Fluxo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.franquia.mainFlow")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.franquia.mainFlowSteps')}
        </p>
      </section>
    </div>
  );
}

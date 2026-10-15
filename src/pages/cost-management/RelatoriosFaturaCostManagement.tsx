import { ArrowLeft, FileText, Receipt, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RelatoriosFaturaCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.relatoriosFatura.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.relatoriosFatura.subtitle')}
          </p>
        </div>
      </div>

      {/* Introdução */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosFatura.introTitle")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.relatoriosFatura.introText')}
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            {t('costManagement.relatoriosFatura.introNote')}
          </p>
        </div>
      </section>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosFatura.minhaFatura")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosFatura.minhaFaturaDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Receipt className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosFatura.financeiro")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosFatura.financeiroDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosFatura.rcf")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosFatura.rcfDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingDown className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.relatoriosFatura.consumoVsFatura")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.relatoriosFatura.consumoVsFaturaDesc')}
          </p>
        </section>
      </div>
    </div>
  );
}

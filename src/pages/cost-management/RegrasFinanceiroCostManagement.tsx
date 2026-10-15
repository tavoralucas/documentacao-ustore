import { ArrowLeft, Settings, DollarSign, Calendar, Tag, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RegrasFinanceiroCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.regrasFinanceiro.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.regrasFinanceiro.subtitle')}
          </p>
        </div>
      </div>

      {/* Acessando */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.accessSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            {t('costManagement.regrasFinanceiro.accessText')}
          </p>
          <p>
            {t('costManagement.regrasFinanceiro.accessText2')}
          </p>
        </div>
      </section>

      {/* Card Regras */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.cardRegras")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.regrasFinanceiro.cardRegrasDesc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.regrasFinanceiro.cardItem1')}</li>
          <li>{t('costManagement.regrasFinanceiro.cardItem2')}</li>
          <li>{t('costManagement.regrasFinanceiro.cardItem3')}</li>
          <li>{t('costManagement.regrasFinanceiro.cardItem4')}</li>
        </ul>
      </section>

      {/* Regra de Faturamento */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.billingRule")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            {t('costManagement.regrasFinanceiro.billingRuleDesc')}
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <p className="text-blue-800 dark:text-blue-200">
              {t('costManagement.regrasFinanceiro.billingRuleNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Criando Regra */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.creatingBillingRule")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.regrasFinanceiro.creatingBillingRuleDesc')}
        </p>
      </section>

      {/* Regra por Tag */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.billingRuleByTag")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            {t('costManagement.regrasFinanceiro.billingRuleByTagDesc')}
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
            <p className="text-amber-800 dark:text-amber-200">
              {t('costManagement.regrasFinanceiro.billingRuleByTagNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Atualização */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.regrasFinanceiro.updateListing")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.regrasFinanceiro.updateListingDesc')}
        </p>
      </section>
    </div>
  );
}

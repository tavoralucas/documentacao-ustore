import { ArrowLeft, DollarSign, Building2, Landmark, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function VisaoGeralCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.visaoGeral.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.overviewDescription')}
          </p>
        </div>
      </div>

      {/* Logo e Apresentação */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-600 shrink-0">
            <DollarSign className="h-10 w-10 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.visaoGeral.financeTitle")}</h2>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.financeDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.visaoGeral.financeIntro")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.visaoGeral.financeIntroPara1')}
          </p>

          <p>
            {t('costManagement.visaoGeral.financeIntroPara2')}
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{t("common.howToUse")}</h3>
            <p className="text-blue-800 dark:text-blue-200">
              {t('costManagement.visaoGeral.financeHowToUse')}
            </p>
          </div>

          <p>
            {t('costManagement.visaoGeral.financeNoCustomization')}
          </p>
        </div>
      </section>

      {/* Perfis de Usuários */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.visaoGeral.userProfiles")}</h2>
        
        <p className="text-muted-foreground">
          {t('costManagement.visaoGeral.userProfilesDesc')}
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.visaoGeral.normalUser")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.visaoGeral.normalUserDesc')}
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.visaoGeral.contractAdmin")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.visaoGeral.contractAdminDesc')}
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.visaoGeral.groupAdmin")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.visaoGeral.groupAdminDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Empresas Privadas */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.visaoGeral.privateCompanies")}</h2>
        </div>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.visaoGeral.privateCompaniesPara1')}
          </p>

          <p>
            {t('costManagement.visaoGeral.privateCompaniesPara2')}
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{t('costManagement.visaoGeral.privateCompaniesItem1')}</li>
            <li>{t('costManagement.visaoGeral.privateCompaniesItem2')}</li>
            <li>{t('costManagement.visaoGeral.privateCompaniesItem3')}</li>
            <li>{t('costManagement.visaoGeral.privateCompaniesItem4')}</li>
          </ul>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">{t("costManagement.visaoGeral.conversionFormulas")}</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><strong>{t('costManagement.visaoGeral.conversionFormulaFixedLabel')}</strong></p>
              <p className="text-xs">{t('costManagement.visaoGeral.conversionFormulaFixedValue')}</p>
              
              <p className="mt-3"><strong>{t('costManagement.visaoGeral.conversionFormulaVariableLabel')}</strong></p>
              <p className="text-xs">{t('costManagement.visaoGeral.conversionFormulaVariableValue')}</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{t("costManagement.visaoGeral.important")}</h3>
            <p className="text-blue-800 dark:text-blue-200">
              {t('costManagement.visaoGeral.importantDesc')}
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800 mt-4">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">{t("costManagement.visaoGeral.warning")}</h3>
            <p className="text-red-800 dark:text-red-200">
              {t('costManagement.visaoGeral.warningDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Empresas Públicas (USN) */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Landmark className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.visaoGeral.publicCompanies")}</h2>
        </div>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.visaoGeral.publicCompaniesPara1')}
          </p>

          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">{t("costManagement.visaoGeral.usnUnit")}</h3>
            <p className="text-green-800 dark:text-green-200">
              {t('costManagement.visaoGeral.usnUnitDesc')}
            </p>
          </div>

          <p>
            {t('costManagement.visaoGeral.usnUnitPara2')}
          </p>

          <h3 className="font-semibold text-foreground mt-4">{t("costManagement.visaoGeral.usnCalculation")}</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{t('costManagement.visaoGeral.usnCalculationItem1')}</li>
            <li>{t('costManagement.visaoGeral.usnCalculationItem2')}</li>
            <li>{t('costManagement.visaoGeral.usnCalculationItem3')}</li>
            <li>{t('costManagement.visaoGeral.usnCalculationItem4')}</li>
          </ul>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">{t("costManagement.visaoGeral.usnConversionFormulas")}</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><strong>{t('costManagement.visaoGeral.usnConversionFormulaFixedLabel')}</strong></p>
              <p className="text-xs">{t('costManagement.visaoGeral.usnConversionFormulaFixedValue')}</p>
              
              <p className="mt-3"><strong>{t('costManagement.visaoGeral.usnConversionFormulaVariableLabel')}</strong></p>
              <p className="text-xs">{t('costManagement.visaoGeral.usnConversionFormulaVariableValue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiente Corporativo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.visaoGeral.corporateEnvironment")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.visaoGeral.corporateEnvironmentPara1')}
          </p>

          <p>
            {t('costManagement.visaoGeral.corporateEnvironmentPara2')}
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{t('costManagement.visaoGeral.corporateEnvironmentItem1')}</li>
            <li>{t('costManagement.visaoGeral.corporateEnvironmentItem2')}</li>
            <li>{t('costManagement.visaoGeral.corporateEnvironmentItem3')}</li>
            <li>{t('costManagement.visaoGeral.corporateEnvironmentItem4')}</li>
            <li>{t('costManagement.visaoGeral.corporateEnvironmentItem5')}</li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mt-4">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">{t("costManagement.visaoGeral.importantNote")}</h3>
            <p className="text-purple-800 dark:text-purple-200">
              {t('costManagement.visaoGeral.importantNoteDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Painéis */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.visaoGeral.financialPanels")}</h2>
        
        <p className="text-muted-foreground">
          {t('costManagement.visaoGeral.financialPanelsDesc')}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.visaoGeral.consumptionPanels")}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.visaoGeral.consumptionPanelsDesc')}
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-xs">
              <p className="text-amber-800 dark:text-amber-200">
                <strong>{t("costManagement.visaoGeral.processingWindow")}:</strong> {t('costManagement.visaoGeral.processingWindowDesc')}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.visaoGeral.invoicePanels")}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {t('costManagement.visaoGeral.invoicePanelsDesc')}
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-xs">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>{t("costManagement.visaoGeral.example")}:</strong> {t('costManagement.visaoGeral.exampleDesc')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
          <p className="text-blue-800 dark:text-blue-200">
            {t('costManagement.visaoGeral.invoiceMonth')}
          </p>
        </div>
      </section>
    </div>
  );
}

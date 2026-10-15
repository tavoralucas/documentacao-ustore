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
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.whatIs')}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.introText') }} />

          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">{t("costManagement.franquia.restrictedAccess")}</p>
                <p className="text-amber-800 dark:text-amber-200">
                  {t('costManagement.franquia.restrictedAccessDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_franquia/ucloud_menu_franquia_001.png" 
              alt={t("costManagement.franquia.menuImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Modelo USN */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          {t('costManagement.franquia.usnModel')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.franquia.usnModelDesc')}
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.usnConversion")}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {t('costManagement.franquia.usnConversionPara')}
              </p>
              <div className="bg-background p-3 rounded border border-border">
                <div className="grid gap-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span>{t('costManagement.franquia.usnConversionVcpu')}</span>
                    <span className="text-primary font-semibold">= 10 USN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('costManagement.franquia.usnConversionRam')}</span>
                    <span className="text-primary font-semibold">= 2 USN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('costManagement.franquia.usnConversionStorage')}</span>
                    <span className="text-primary font-semibold">= 1 USN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('costManagement.franquia.usnConversionTraffic')}</span>
                    <span className="text-primary font-semibold">= 0.5 USN</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                {t('costManagement.franquia.usnConversionNote')}
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.usnMonetaryValue")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.franquia.usnMonetaryValuePara')}
              </p>
              <div className="bg-background p-3 rounded border border-border text-center">
                <p className="text-2xl font-bold text-primary">{t("costManagement.franquia.usnMonetaryValueRate")}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('costManagement.franquia.usnMonetaryValueNote')}
                </p>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.usnCalcExample")}</h3>
              <div className="bg-background p-3 rounded border border-border">
                <p className="text-sm mb-2">{t('costManagement.franquia.usnCalcServer')}</p>
                <ul className="text-sm space-y-1 ml-4 mb-3">
                  <li>{t('costManagement.franquia.usnCalcLine1')}</li>
                  <li>{t('costManagement.franquia.usnCalcLine2')}</li>
                  <li>{t('costManagement.franquia.usnCalcLine3')}</li>
                </ul>
                <div className="border-t border-border pt-2">
                  <p className="text-sm"><strong>{t("costManagement.franquia.usnCalcTotal")}</strong> {t('costManagement.franquia.usnCalcTotalValue')}</p>
                  <p className="text-sm"><strong>{t("costManagement.franquia.usnCalcCost")}</strong> {t('costManagement.franquia.usnCalcCostValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gestão de Franquia */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          {t('costManagement.franquia.franquiaManagement')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.franquia.franquiaManagementDesc')}
          </p>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_franquia/ucloud_menu_franquia_002.png" 
              alt={t("costManagement.franquia.painelImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.painelInfo")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoTotal') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoConsumed') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoAvailable') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoPct') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoForecast') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.painelInfoStatus') }} />
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.franquiasOrgao")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.franquia.franquiasOrgaoPara')}
              </p>
              <div className="bg-background p-3 rounded border border-border">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>{t('costManagement.franquia.orgaoEducacao')}</span>
                    <span className="font-semibold">5.000 USN</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>{t('costManagement.franquia.orgaoSaude')}</span>
                    <span className="font-semibold">8.000 USN</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>{t('costManagement.franquia.orgaoFinancas')}</span>
                    <span className="font-semibold">3.000 USN</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>{t('costManagement.franquia.orgaoOutros')}</span>
                    <span className="font-semibold">4.000 USN</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-primary/10 rounded border border-primary">
                    <span className="font-bold">{t('costManagement.franquia.orgaoTotalAlocado')}</span>
                    <span className="font-bold text-primary">20.000 USN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.controleExcedente")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.franquia.controleExcedentePara')}
              </p>
              <div className="grid gap-2 mt-2">
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.franquia.modoBloqueio")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.franquia.modoBloqueioDesc')}
                  </p>
                </div>
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.franquia.modoAlerta")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.franquia.modoAlertaDesc')}
                  </p>
                </div>
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.franquia.modoCobranca")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.franquia.modoCobrancaDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.alertasNotificacoes")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.franquia.alertasNotificacoesPara')}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li><span className="text-yellow-600 font-semibold">{t("costManagement.franquia.alerta70")}</span> {t('costManagement.franquia.alerta70Desc')}</li>
                <li><span className="text-orange-600 font-semibold">{t("costManagement.franquia.alerta85")}</span> {t('costManagement.franquia.alerta85Desc')}</li>
                <li><span className="text-red-600 font-semibold">{t("costManagement.franquia.alerta95")}</span> {t('costManagement.franquia.alerta95Desc')}</li>
                <li><span className="text-red-800 font-semibold">{t("costManagement.franquia.alerta100")}</span> {t('costManagement.franquia.alerta100Desc')}</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_franquia/ucloud_menu_franquia_003.png" 
              alt={t("costManagement.franquia.detalhesImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>
        </div>
      </div>

      {/* Relatórios de Franquia */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.relatoriosTitle")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.franquia.relatoriosPara')}
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.relatorioOrgao")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.franquia.relatorioOrgaoDesc')}
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.relatorioHistorico")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.franquia.relatorioHistoricoDesc')}
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.relatorioProjecao")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.franquia.relatorioProjecaoDesc')}
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.relatorioRecurso")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.franquia.relatorioRecursoDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ajuste de Franquia */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          {t('costManagement.franquia.ajusteTitle')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.franquia.ajusteDesc')}
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.ajusteAumento")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.franquia.ajusteAumentoStep1')}</li>
                <li>{t('costManagement.franquia.ajusteAumentoStep2')}</li>
                <li>{t('costManagement.franquia.ajusteAumentoStep3')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.ajusteRedistribuicao")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.franquia.ajusteRedistribuicaoStep1')}</li>
                <li>{t('costManagement.franquia.ajusteRedistribuicaoStep2')}</li>
                <li>{t('costManagement.franquia.ajusteRedistribuicaoStep3')}</li>
                <li>{t('costManagement.franquia.ajusteRedistribuicaoStep4')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.franquia.ajusteReserva")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.franquia.ajusteReservaDesc')}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200" dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.ajusteDica') }} />
          </div>
        </div>
      </div>

      {/* Diferenças entre Franquia e Budget */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">{t("costManagement.franquia.vsBudgetTitle")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/30">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">{t("costManagement.franquia.vsBudgetFranquiaTitle")}</h3>
              <ul className="list-disc list-inside text-sm space-y-2 text-purple-800 dark:text-purple-200">
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetFranquiaMeasure') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetFranquiaConversion') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetFranquiaControl') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetFranquiaUsage') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetFranquiaBlock') }} />
              </ul>
            </div>

            <div className="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-950/30">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">{t("costManagement.franquia.vsBudgetBudgetTitle")}</h3>
              <ul className="list-disc list-inside text-sm space-y-2 text-green-800 dark:text-green-200">
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetBudgetMeasure') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetBudgetConversion') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetBudgetControl') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetBudgetUsage') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetBudgetBlock') }} />
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-amber-800 dark:text-amber-200" dangerouslySetInnerHTML={{ __html: t('costManagement.franquia.vsBudgetNote') }} />
          </div>
        </div>
      </div>
    </div>
  );
}

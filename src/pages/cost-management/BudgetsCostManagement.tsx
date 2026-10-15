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
            <p className="text-blue-800 dark:text-blue-200" dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.introAlert') }} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.budgetsCard")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.budgets.budgetsDesc')}
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.subBudgets")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.budgets.subBudgetsDesc')}
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.riskAnalysis")}</h3>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.budgets.riskAnalysisDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budgets */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          {t('costManagement.budgets.creatingManaging')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.budgets.creatingManagingPara')}
          </p>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_budget/ucloud_menu_budget_gerenciamento_001.png" 
              alt={t("costManagement.budgets.budgetsImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.creatingBudget")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.creatingBudgetStep1')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep2')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep3')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep4')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep5')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep6')}</li>
                <li>{t('costManagement.budgets.creatingBudgetStep7')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.budgetTypes")}</h3>
              <div className="grid gap-3 md:grid-cols-2 mt-2">
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.budgets.budgetFixo")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.budgets.budgetFixoDesc')}
                  </p>
                </div>
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.budgets.budgetVariavel")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.budgets.budgetVariavelDesc')}
                  </p>
                </div>
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.budgets.budgetProjeto")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.budgets.budgetProjetoDesc')}
                  </p>
                </div>
                <div className="p-3 bg-background rounded border border-border">
                  <p className="font-semibold text-sm mb-1">{t("costManagement.budgets.budgetRecorrente")}</p>
                  <p className="text-xs text-muted-foreground">
                    {t('costManagement.budgets.budgetRecorrenteDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.alertConfig")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.budgets.alertConfigPara')}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li><span className="text-yellow-600 font-semibold">{t("costManagement.budgets.alert50")}</span> {t('costManagement.budgets.alert50Desc')}</li>
                <li><span className="text-orange-600 font-semibold">{t("costManagement.budgets.alert75")}</span> {t('costManagement.budgets.alert75Desc')}</li>
                <li><span className="text-red-600 font-semibold">{t("costManagement.budgets.alert90")}</span> {t('costManagement.budgets.alert90Desc')}</li>
                <li><span className="text-red-800 font-semibold">{t("costManagement.budgets.alert100")}</span> {t('costManagement.budgets.alert100Desc')}</li>
                <li><span className="text-purple-600 font-semibold">{t("costManagement.budgets.alertForecast")}</span> {t('costManagement.budgets.alertForecastDesc')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.budgetView")}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('costManagement.budgets.budgetViewPara')}</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.budgetViewTotal')}</li>
                <li>{t('costManagement.budgets.budgetViewConsumed')}</li>
                <li>{t('costManagement.budgets.budgetViewPct')}</li>
                <li>{t('costManagement.budgets.budgetViewBalance')}</li>
                <li>{t('costManagement.budgets.budgetViewProjection')}</li>
                <li>{t('costManagement.budgets.budgetViewChart')}</li>
                <li>{t('costManagement.budgets.budgetViewComparison')}</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_budget/ucloud_menu_budget_gerenciamento_002.png" 
              alt={t("costManagement.budgets.budgetViewImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>
        </div>
      </div>

      {/* Sub-Budgets */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">{t("costManagement.budgets.subBudgetTitle")}</h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.budgets.subBudgetPara')}
          </p>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_budget/ucloud_menu_budget_gerenciamento_003.png" 
              alt={t("costManagement.budgets.subBudgetImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.subBudgetHierarchy")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.budgets.subBudgetHierarchyPara')}
              </p>
              <div className="ml-4 text-sm font-mono bg-background p-3 rounded border border-border">
                <div className="text-primary font-semibold">{t("costManagement.budgets.subBudgetHierarchyMain")}</div>
                <div className="ml-4 mt-2">{t('costManagement.budgets.subBudgetHierarchyIT')}</div>
                <div className="ml-8">{t('costManagement.budgets.subBudgetHierarchyInfra')}</div>
                <div className="ml-8">{t('costManagement.budgets.subBudgetHierarchyDev')}</div>
                <div className="ml-4 mt-2">{t('costManagement.budgets.subBudgetHierarchyMarketing')}</div>
                <div className="ml-8">{t('costManagement.budgets.subBudgetHierarchyCampaigns')}</div>
                <div className="ml-8">{t('costManagement.budgets.subBudgetHierarchyAnalytics')}</div>
                <div className="ml-4 mt-2">{t('costManagement.budgets.subBudgetHierarchySales')}</div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.subBudgetCreating")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.subBudgetCreatingStep1')}</li>
                <li>{t('costManagement.budgets.subBudgetCreatingStep2')}</li>
                <li>{t('costManagement.budgets.subBudgetCreatingStep3')}</li>
                <li>{t('costManagement.budgets.subBudgetCreatingStep4')}</li>
                <li>{t('costManagement.budgets.subBudgetCreatingStep5')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.subBudgetAdvantages")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.subBudgetAdvantage1')}</li>
                <li>{t('costManagement.budgets.subBudgetAdvantage2')}</li>
                <li>{t('costManagement.budgets.subBudgetAdvantage3')}</li>
                <li>{t('costManagement.budgets.subBudgetAdvantage4')}</li>
                <li>{t('costManagement.budgets.subBudgetAdvantage5')}</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.subBudgetSumRules")}</h3>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded border border-amber-200 dark:border-amber-800">
                <p className="text-amber-800 dark:text-amber-200 text-sm" dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.subBudgetSumRulesAlert') }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Análise de Risco */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-primary" />
          {t('costManagement.budgets.riskAnalysisTitle')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p>
            {t('costManagement.budgets.riskAnalysisPara')}
          </p>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_budget/ucloud_menu_budget_analise_risco_001.png" 
              alt={t("costManagement.budgets.riskAnalysisImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.riskIndicators")}</h3>
              <div className="grid gap-3 mt-2">
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">L</div>
                  <div>
                    <p className="font-semibold text-sm text-green-900 dark:text-green-100">{t("costManagement.budgets.riskLow")}</p>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      {t('costManagement.budgets.riskLowDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded border border-yellow-200 dark:border-yellow-800">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">M</div>
                  <div>
                    <p className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">{t("costManagement.budgets.riskMedium")}</p>
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      {t('costManagement.budgets.riskMediumDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/30 rounded border border-red-200 dark:border-red-800">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">H</div>
                  <div>
                    <p className="font-semibold text-sm text-red-900 dark:text-red-100">{t("costManagement.budgets.riskHigh")}</p>
                    <p className="text-xs text-red-800 dark:text-red-200">
                      {t('costManagement.budgets.riskHighDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.riskFactors")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.budgets.riskFactorsPara')}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskFactorTrend') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskFactorSeasonality') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskFactorRecent') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskFactorSpeed') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskFactorOutliers') }} />
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.riskProjections")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.budgets.riskProjectionsPara')}
              </p>
              <div className="space-y-2 mt-2">
                <div className="p-2 bg-background rounded border border-border text-sm">
                  <span className="font-semibold">{t("costManagement.budgets.riskProjectionConservative")}</span> {t('costManagement.budgets.riskProjectionConservativeDesc')}
                </div>
                <div className="p-2 bg-background rounded border border-border text-sm">
                  <span className="font-semibold">{t("costManagement.budgets.riskProjectionModerate")}</span> {t('costManagement.budgets.riskProjectionModerateDesc')}
                </div>
                <div className="p-2 bg-background rounded border border-border text-sm">
                  <span className="font-semibold">{t("costManagement.budgets.riskProjectionAggressive")}</span> {t('costManagement.budgets.riskProjectionAggressiveDesc')}
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.riskRecommendations")}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {t('costManagement.budgets.riskRecommendationsPara')}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.riskRecommendation1')}</li>
                <li>{t('costManagement.budgets.riskRecommendation2')}</li>
                <li>{t('costManagement.budgets.riskRecommendation3')}</li>
                <li>{t('costManagement.budgets.riskRecommendation4')}</li>
                <li>{t('costManagement.budgets.riskRecommendation5')}</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <img 
              src="/images/cost-management/fig_budget/ucloud_menu_budget_analise_risco_002.png" 
              alt={t("costManagement.budgets.riskChartImageAlt")} 
              className="rounded-lg border border-border max-w-3xl"
            />
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-purple-800 dark:text-purple-200" dangerouslySetInnerHTML={{ __html: t('costManagement.budgets.riskMLAlert') }} />
          </div>
        </div>
      </div>

      {/* Melhores Práticas */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          {t('costManagement.budgets.bestPractices')}
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.bestPracticesDo")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.bestPracticeDo1')}</li>
                <li>{t('costManagement.budgets.bestPracticeDo2')}</li>
                <li>{t('costManagement.budgets.bestPracticeDo3')}</li>
                <li>{t('costManagement.budgets.bestPracticeDo4')}</li>
                <li>{t('costManagement.budgets.bestPracticeDo5')}</li>
                <li>{t('costManagement.budgets.bestPracticeDo6')}</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold mb-2">{t("costManagement.budgets.bestPracticesDont")}</h3>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>{t('costManagement.budgets.bestPracticeDont1')}</li>
                <li>{t('costManagement.budgets.bestPracticeDont2')}</li>
                <li>{t('costManagement.budgets.bestPracticeDont3')}</li>
                <li>{t('costManagement.budgets.bestPracticeDont4')}</li>
                <li>{t('costManagement.budgets.bestPracticeDont5')}</li>
                <li>{t('costManagement.budgets.bestPracticeDont6')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

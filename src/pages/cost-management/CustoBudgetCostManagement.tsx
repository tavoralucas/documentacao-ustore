import { ArrowLeft, Wallet, PlusCircle, Edit, Trash2, Star, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import custoBudgetTela from "@/assets/custo-budget-tela.png";
import criarNovoBudgetTela from "@/assets/criar-novo-budget-tela.png";
import editarBudgetTela from "@/assets/editar-budget-tela.png";
import excluirBudgetModal from "@/assets/excluir-budget-modal.png";
import painelResumoBudget from "@/assets/painel-resumo-budget.png";
import recorrenciaAlertasBudget from "@/assets/recorrencia-alertas-budget.png";

export default function CustoBudgetCostManagement() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
          <Wallet className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.custoBudget.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.custoBudget.subtitle')}
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("common.overview")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.custoBudget.overviewText')}
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { label: t("costManagement.custoBudget.role1"), desc: t("costManagement.custoBudget.role1Desc") },
            { label: t("costManagement.custoBudget.role2"), desc: t("costManagement.custoBudget.role2Desc") },
            { label: t("costManagement.custoBudget.role3"), desc: t("costManagement.custoBudget.role3Desc") },
          ].map(({ label, desc }) => (
            <div key={label} className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground text-sm">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
        <img
          src={custoBudgetTela}
          alt={t("costManagement.custoBudget.custoBudgetTelaAlt")}
          className="w-full rounded-lg border border-border"
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">
          {t('costManagement.custoBudget.custoBudgetTelaAlt')}
        </figcaption>
      </figure>

      {/* Sistema de Semáforo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.semaforoTitle")}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 dark:border-green-800">
            <p className="font-semibold text-green-800 dark:text-green-200">{t("costManagement.custoBudget.safeLevel")}</p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">{t("costManagement.custoBudget.safeLevelPct")}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">{t("costManagement.custoBudget.safeLevelDesc")}</p>
          </div>
          <div className="p-4 rounded-lg border border-orange-200 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-800">
            <p className="font-semibold text-orange-800 dark:text-orange-200">{t("costManagement.custoBudget.attentionLevel")}</p>
            <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">{t("costManagement.custoBudget.attentionLevelPct")}</p>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">{t("costManagement.custoBudget.attentionLevelDesc")}</p>
          </div>
          <div className="p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-800">
            <p className="font-semibold text-red-800 dark:text-red-200">{t("costManagement.custoBudget.criticalLevel")}</p>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">{t("costManagement.custoBudget.criticalLevelPct")}</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">{t("costManagement.custoBudget.criticalLevelDesc")}</p>
          </div>
        </div>
        <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            {t('costManagement.custoBudget.semaforoNote')}
          </p>
        </div>
      </section>

      {/* Tabela de Budgets */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.budgetTable")}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold text-foreground">{t("costManagement.custoBudget.budgetTableCol")}</th>
                <th className="text-left py-2 font-semibold text-foreground">{t("costManagement.custoBudget.budgetTableDesc")}</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                [t("costManagement.custoBudget.budgetTableFav"), t("costManagement.custoBudget.budgetTableFavDesc")],
                [t("costManagement.custoBudget.budgetTableName"), t("costManagement.custoBudget.budgetTableNameDesc")],
                [t("costManagement.custoBudget.budgetTableAlerts"), t("costManagement.custoBudget.budgetTableAlertsDesc")],
                [t("costManagement.custoBudget.budgetTableInterval"), t("costManagement.custoBudget.budgetTableIntervalDesc")],
                [t("costManagement.custoBudget.budgetTableStart"), t("costManagement.custoBudget.budgetTableStartDesc")],
                [t("costManagement.custoBudget.budgetTableTotal"), t("costManagement.custoBudget.budgetTableTotalDesc")],
                [t("costManagement.custoBudget.budgetTableConsumed"), t("costManagement.custoBudget.budgetTableConsumedDesc")],
                [t("costManagement.custoBudget.budgetTablePct"), t("costManagement.custoBudget.budgetTablePctDesc")],
                [t("costManagement.custoBudget.budgetTableActions"), t("costManagement.custoBudget.budgetTableActionsDesc")],
              ].map(([col, desc]) => (
                <tr key={col} className="border-b border-border/50">
                  <td className="py-2 pr-3 font-medium whitespace-nowrap">{col}</td>
                  <td className="py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {t('costManagement.custoBudget.formulaText')}
        </p>
      </section>

      {/* CRUD */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.crudTitle")}</h2>

        <div className="space-y-4">
          {/* CREATE */}
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2 mb-3">
              <PlusCircle className="h-4 w-4 text-green-600" />
              <h3 className="font-semibold text-foreground">{t("costManagement.custoBudget.creatingBudget")}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{t('costManagement.custoBudget.formSections')}</p>
            <div className="grid gap-3 md:grid-cols-3 text-sm">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-semibold text-foreground mb-1">{t("costManagement.custoBudget.formGeneralInfo")}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t('costManagement.custoBudget.formGeneralInfo1')}</li>
                  <li>{t('costManagement.custoBudget.formGeneralInfo2')}</li>
                  <li>{t('costManagement.custoBudget.formGeneralInfo3')}</li>
                  <li>{t('costManagement.custoBudget.formGeneralInfo4')}</li>
                  <li>{t('costManagement.custoBudget.formGeneralInfo5')}</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-semibold text-foreground mb-1">{t("costManagement.custoBudget.formAllocation")}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t('costManagement.custoBudget.formAllocation1')}</li>
                  <li>{t('costManagement.custoBudget.formAllocation2')}</li>
                  <li>{t('costManagement.custoBudget.formAllocation3')}</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-semibold text-foreground mb-1">{t("costManagement.custoBudget.formRecurrence")}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>{t('costManagement.custoBudget.formRecurrence1')}</li>
                  <li>{t('costManagement.custoBudget.formRecurrence2')}</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-800 text-sm">
              <p className="text-red-800 dark:text-red-200">
                {t('costManagement.custoBudget.createRule')}
              </p>
            </div>
            <figure className="mt-4">
              <img
                src={criarNovoBudgetTela}
                alt={t("costManagement.custoBudget.criarNovoAlt")}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                {t('costManagement.custoBudget.criarNovoAlt')}
              </figcaption>
            </figure>
          </div>

          {/* UPDATE */}
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Edit className="h-4 w-4 text-blue-600" />
              <h3 className="font-semibold text-foreground">{t("costManagement.custoBudget.editingBudget")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoBudget.editingBudgetDesc')}
            </p>
            <figure className="mt-4">
              <img
                src={editarBudgetTela}
                alt={t("costManagement.custoBudget.editarAlt")}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                {t('costManagement.custoBudget.editarAlt')}
              </figcaption>
            </figure>
          </div>

          {/* DELETE */}
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trash2 className="h-4 w-4 text-red-600" />
              <h3 className="font-semibold text-foreground">{t("costManagement.custoBudget.deletingBudget")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoBudget.deletingBudgetDesc')}
            </p>
            <figure className="mt-4 max-w-2xl mx-auto">
              <img
                src={excluirBudgetModal}
                alt={t("costManagement.custoBudget.excluirAlt")}
                className="w-full rounded-lg border border-border"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                {t('costManagement.custoBudget.excluirAlt')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Painel Resumo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.resumoPainel")}</h2>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-3 text-sm">
            {[
              { label: t("costManagement.custoBudget.resumoContract"), desc: t("costManagement.custoBudget.resumoContractDesc") },
              { label: t("costManagement.custoBudget.resumoName"), desc: t("costManagement.custoBudget.resumoNameDesc") },
              { label: t("costManagement.custoBudget.resumoTotal"), desc: t("costManagement.custoBudget.resumoTotalDesc") },
              { label: t("costManagement.custoBudget.resumoAllocated"), desc: t("costManagement.custoBudget.resumoAllocatedDesc") },
              { label: t("costManagement.custoBudget.resumoBalance"), desc: t("costManagement.custoBudget.resumoBalanceDesc") },
            ].map(({ label, desc }) => (
              <div key={label} className="p-3 rounded-lg border border-border bg-muted/50">
                <p className="font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <figure>
            <img
              src={painelResumoBudget}
              alt={t("costManagement.custoBudget.painelResumoAlt")}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="text-xs text-muted-foreground mt-2 text-center">
              {t('costManagement.custoBudget.painelResumoAlt')}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Alertas e Favoritos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.alertasFavoritos")}</h2>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{t("costManagement.custoBudget.alertSystem")}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.custoBudget.alertSystemDesc')}
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">{t("costManagement.custoBudget.favorites")}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('costManagement.custoBudget.favoritesDesc')}
              </p>
            </div>
          </div>
          <figure>
            <img
              src={recorrenciaAlertasBudget}
              alt={t("costManagement.custoBudget.recorrenciaAlt")}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="text-xs text-muted-foreground mt-2 text-center">
              {t('costManagement.custoBudget.recorrenciaAlt')}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Fluxo Completo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoBudget.completeFlow")}</h2>
        <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
          <li>{t('costManagement.custoBudget.flowStep1')}</li>
          <li>{t('costManagement.custoBudget.flowStep2')}</li>
          <li>{t('costManagement.custoBudget.flowStep3')}</li>
          <li>{t('costManagement.custoBudget.flowStep4')}</li>
          <li>{t('costManagement.custoBudget.flowStep5')}</li>
          <li>{t('costManagement.custoBudget.flowStep6')}</li>
          <li>{t('costManagement.custoBudget.flowStep7')}</li>
          <li>{t('costManagement.custoBudget.flowStep8')}</li>
          <li>{t('costManagement.custoBudget.flowStep9')}</li>
        </ol>
      </section>
    </div>
  );
}

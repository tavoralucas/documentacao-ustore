import { ArrowLeft, BarChart2, RefreshCw, X, Info, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import consolidadoFaturamentoTela from "@/assets/consolidado-faturamento-tela.png";


export default function ConsolidadoFaturamentoCostManagement() {
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
          <BarChart2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.consolidadoFaturamento.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.consolidadoFaturamento.subtitle')}
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("common.overview")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.consolidadoFaturamento.overview')}
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {t('costManagement.consolidadoFaturamento.overviewNote')}
          </p>
        </div>
      </section>

      <img
        src={consolidadoFaturamentoTela}
        alt={t("costManagement.consolidadoFaturamento.mainImageAlt")}
        className="w-full h-auto"
        style={{ borderRadius: "8px" }}
      />

      {/* Filtros */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.consolidadoFaturamento.filters")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.consolidadoFaturamento.contractList")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.consolidadoFaturamento.contractListDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.consolidadoFaturamento.period")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.consolidadoFaturamento.periodDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.consolidadoFaturamento.tableTitle")}</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.tableColHeader")}</th>
                <th className="text-left py-2 font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.tableDescHeader")}</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                [t("costManagement.consolidadoFaturamento.tableRowContract"), t("costManagement.consolidadoFaturamento.tableRowContractDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowPeriod"), t("costManagement.consolidadoFaturamento.tableRowPeriodDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowBilling"), t("costManagement.consolidadoFaturamento.tableRowBillingDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowClosing"), t("costManagement.consolidadoFaturamento.tableRowClosingDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowStatus"), t("costManagement.consolidadoFaturamento.tableRowStatusDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowPrice"), t("costManagement.consolidadoFaturamento.tableRowPriceDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowPriceUsd"), t("costManagement.consolidadoFaturamento.tableRowPriceUsdDesc")],
                [t("costManagement.consolidadoFaturamento.tableRowActions"), t("costManagement.consolidadoFaturamento.tableRowActionsDesc")],
              ].map(([col, desc]) => (
                <tr key={col} className="border-b border-border/50">
                  <td className="py-2 pr-3 font-medium whitespace-nowrap">{col}</td>
                  <td className="py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            {t('costManagement.consolidadoFaturamento.tableCompetenciaPeriodo')}
          </p>
        </div>
      </section>

      {/* Ações por Linha */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.consolidadoFaturamento.actionsTitle")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.actionReopen")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t('costManagement.consolidadoFaturamento.actionReopenDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <X className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.actionClose")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t('costManagement.consolidadoFaturamento.actionCloseDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.actionDetails")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t('costManagement.consolidadoFaturamento.actionDetailsDesc')}</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">{t("costManagement.consolidadoFaturamento.actionOnScreen")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t('costManagement.consolidadoFaturamento.actionOnScreenDesc')}</p>
          </div>
        </div>
      </section>

      {/* Modal Detalhes Financeiros */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.consolidadoFaturamento.modalTitle")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>{t('costManagement.consolidadoFaturamento.modalDesc')}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-3 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{t("costManagement.consolidadoFaturamento.modalViewType")}</h3>
              <p className="text-sm">{t('costManagement.consolidadoFaturamento.modalViewResource')}</p>
              <p className="text-sm mt-1">{t('costManagement.consolidadoFaturamento.modalViewGroup')}</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-muted/50">
              <h3 className="font-semibold text-foreground mb-1">{t("costManagement.consolidadoFaturamento.modalTable")}</h3>
              <p className="text-sm">{t('costManagement.consolidadoFaturamento.modalTableDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxos Principais */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.consolidadoFaturamento.mainFlows")}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.consolidadoFaturamento.flow1")}</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>{t('costManagement.consolidadoFaturamento.flow1Step1')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow1Step2')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow1Step3')}</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.consolidadoFaturamento.flow2")}</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>{t('costManagement.consolidadoFaturamento.flow2Step1')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow2Step2')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow2Step3')}</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.consolidadoFaturamento.flow3")}</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>{t('costManagement.consolidadoFaturamento.flow3Step1')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow3Step2')}</li>
              <li>{t('costManagement.consolidadoFaturamento.flow3Step3')}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Paginação */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-3">{t("costManagement.consolidadoFaturamento.pagination")}</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">{t("costManagement.consolidadoFaturamento.paginationItems")}</p>
            <p>{t('costManagement.consolidadoFaturamento.paginationItemsDesc')}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">{t("costManagement.consolidadoFaturamento.currencyFormats")}</p>
            <p>{t('costManagement.consolidadoFaturamento.currencyFormatsDesc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

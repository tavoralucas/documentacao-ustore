import { ArrowLeft, History, Table2, BarChart3, Download, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function HistoricoServicoCostManagement() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <TrendingDown className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.historicoServico.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.historicoServico.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.overview")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.historicoServico.overviewText') }} />
          <p>
            {t('costManagement.historicoServico.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Table2 className="h-5 w-5 text-primary" />
          {t('costManagement.historicoServico.tableColumns')}
        </h2>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.historicoServico.tableColumnsDesc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.historicoServico.colRecurso')}</li>
          <li>{t('costManagement.historicoServico.colProvider')}</li>
          <li>{t('costManagement.historicoServico.colFamilia')}</li>
          <li>{t('costManagement.historicoServico.colProduto')}</li>
          <li>{t('costManagement.historicoServico.colVDC')}</li>
          <li>{t('costManagement.historicoServico.colRegiao')}</li>
          <li>{t('costManagement.historicoServico.colCredito')}</li>
          <li>{t('costManagement.historicoServico.colCusto')}</li>
          <li>{t('costManagement.historicoServico.colValor')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          {t('costManagement.historicoServico.summaryPanel')}
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.historicoServico.summaryTotalCost')}</li>
          <li>{t('costManagement.historicoServico.summaryTotalCredits')}</li>
          <li>{t('costManagement.historicoServico.summaryFinalValue')}</li>
          <li>{t('costManagement.historicoServico.summaryPeriod')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Download className="h-5 w-5 text-primary" />
          {t('costManagement.historicoServico.actions')}
        </h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.historicoServico.actionFilter')}</li>
          <li>{t('costManagement.historicoServico.actionExport')}</li>
          <li>{t('costManagement.historicoServico.actionDetails')}</li>
        </ul>
      </section>
    </div>
  );
}

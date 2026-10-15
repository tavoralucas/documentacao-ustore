import { ArrowLeft, FileText, Search, Download, History, BarChart3, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RelatoriosFaturaCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.relatoriosFatura.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.relatoriosFatura.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosFatura.overviewSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.relatoriosFatura.overviewText') }} />
          <p>
            {t('costManagement.relatoriosFatura.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosFatura.mainFeatures")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosFatura.featureList')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosFatura.featureListDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Search className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosFatura.featureDetail')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosFatura.featureDetailDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosFatura.featureDownload')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosFatura.featureDownloadDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <History className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosFatura.featureHistory')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosFatura.featureHistoryDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosFatura.featureCompare')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosFatura.featureCompareDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosFatura.invoiceFields")}</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.relatoriosFatura.invoiceNumber')}</li>
          <li>{t('costManagement.relatoriosFatura.invoicePeriod')}</li>
          <li>{t('costManagement.relatoriosFatura.invoiceIssueDate')}</li>
          <li>{t('costManagement.relatoriosFatura.invoiceDueDate')}</li>
          <li>{t('costManagement.relatoriosFatura.invoiceTotal')}</li>
          <li>{t('costManagement.relatoriosFatura.invoiceStatus')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosFatura.invoiceDetails")}</h2>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.relatoriosFatura.invoiceDetailsDesc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.relatoriosFatura.detailByService')}</li>
          <li>{t('costManagement.relatoriosFatura.detailByVDC')}</li>
          <li>{t('costManagement.relatoriosFatura.detailByResource')}</li>
          <li>{t('costManagement.relatoriosFatura.detailCredits')}</li>
          <li>{t('costManagement.relatoriosFatura.detailTaxes')}</li>
          <li>{t('costManagement.relatoriosFatura.detailTotal')}</li>
        </ul>
      </section>
    </div>
  );
}

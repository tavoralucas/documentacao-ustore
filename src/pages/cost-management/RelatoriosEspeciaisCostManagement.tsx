import { ArrowLeft, FileSpreadsheet, Save, CalendarClock, Share2, Download, TrendingDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function RelatoriosEspeciaisCostManagement() {
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
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.relatoriosEspeciais.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.relatoriosEspeciais.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosEspeciais.overviewSection")}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.relatoriosEspeciais.overviewText') }} />
          <p>
            {t('costManagement.relatoriosEspeciais.overviewText2')}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosEspeciais.keyFeatures")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosEspeciais.featureFlexibility')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.featureFlexibilityDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Save className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosEspeciais.featureSave')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.featureSaveDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosEspeciais.featureSchedule')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.featureScheduleDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Share2 className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosEspeciais.featureShare')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.featureShareDesc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              {t('costManagement.relatoriosEspeciais.featureExport')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.featureExportDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosEspeciais.reportBuilder")}</h2>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.relatoriosEspeciais.builderDesc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.relatoriosEspeciais.builderMetrics')}</li>
          <li>{t('costManagement.relatoriosEspeciais.builderFilters')}</li>
          <li>{t('costManagement.relatoriosEspeciais.builderGrouping')}</li>
          <li>{t('costManagement.relatoriosEspeciais.builderSorting')}</li>
          <li>{t('costManagement.relatoriosEspeciais.builderVisualization')}</li>
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.relatoriosEspeciais.useCases")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.relatoriosEspeciais.useCase1")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.useCase1Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.relatoriosEspeciais.useCase2")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.useCase2Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.relatoriosEspeciais.useCase3")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.useCase3Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.relatoriosEspeciais.useCase4")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.relatoriosEspeciais.useCase4Desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

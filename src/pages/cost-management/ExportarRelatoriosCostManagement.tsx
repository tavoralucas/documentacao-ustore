import { ArrowLeft, Download, FileText, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import exportarRelatoriosTela from "@/assets/exportar-relatorios-tela.png";


export default function ExportarRelatoriosCostManagement() {
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
          <Download className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.exportarRelatorios.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.exportarRelatorios.subtitle')}
          </p>
        </div>
      </div>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.overview")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.overviewText')}
        </p>
      </section>

      <img
        src={exportarRelatoriosTela}
        alt={t("costManagement.exportarRelatorios.telaAlt")}
        className="w-full rounded-xl border border-border shadow-sm"
      />

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.commonFields")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.commonFieldsDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.reportTypes")}</h2>
        <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('costManagement.exportarRelatorios.reportTypesList') }} />
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.validations")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.validationsDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.asyncProcessing")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.asyncProcessingDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.exportHistory")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.exportHistoryDesc')}
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.exportarRelatorios.mainFlow")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.exportarRelatorios.mainFlowSteps')}
        </p>
      </section>
    </div>
  );
}

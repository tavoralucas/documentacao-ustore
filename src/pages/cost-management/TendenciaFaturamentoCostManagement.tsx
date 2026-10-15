import { ArrowLeft, TrendingUp, AlertTriangle, BarChart3, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import tendenciaFaturamentoFiltros from "@/assets/tendencia-faturamento-filtros.png";
import tendenciaFaturamentoContrato from "@/assets/tendencia-faturamento-contrato.png";
import tendenciaFaturamentoGrafico from "@/assets/tendencia-faturamento-grafico.png";
import tendenciaFaturamentoProjecao from "@/assets/tendencia-faturamento-projecao.png";
import tendenciaFaturamentoRecursoGrade from "@/assets/tendencia-faturamento-recurso-grade.png";
import tendenciaFaturamentoRecursoLista from "@/assets/tendencia-faturamento-recurso-lista.png";

export default function TendenciaFaturamentoCostManagement() {
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
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.tendenciaFaturamento.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.tendenciaFaturamento.subtitle')}
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.overview')}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.tendenciaFaturamento.overviewText')}
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            {t('costManagement.tendenciaFaturamento.overviewGoal')}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.tendenciaFaturamento.filters")}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('costManagement.tendenciaFaturamento.filtersDesc')}
        </p>
        <figure className="mt-4">
          <img
            src={tendenciaFaturamentoFiltros}
            alt={t("costManagement.tendenciaFaturamento.filtrosAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.filtrosAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Visão por Contrato */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.tendenciaFaturamento.contractView")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.tendenciaFaturamento.contractViewDesc')}
        </p>
        <figure>
          <img
            src={tendenciaFaturamentoContrato}
            alt={t("costManagement.tendenciaFaturamento.contratoAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.contratoAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Gráfico */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.tendenciaFaturamento.mainChart")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.tendenciaFaturamento.mainChartDesc')}
        </p>
        <figure>
          <img
            src={tendenciaFaturamentoGrafico}
            alt={t("costManagement.tendenciaFaturamento.graficoAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.graficoAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Projeção */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.tendenciaFaturamento.costProjection")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.tendenciaFaturamento.costProjectionDesc')}
        </p>
        <figure>
          <img
            src={tendenciaFaturamentoProjecao}
            alt={t("costManagement.tendenciaFaturamento.projecaoAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.projecaoAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.tendenciaFaturamento.anomalyDetection")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.tendenciaFaturamento.anomalyDetectionDesc')}
          </p>
        </section>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t("costManagement.tendenciaFaturamento.resourceReport")}</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.tendenciaFaturamento.resourceReportDesc')}
          </p>
        </section>
      </div>

      {/* Imagens Grade e Lista */}
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
          <img
            src={tendenciaFaturamentoRecursoGrade}
            alt={t("costManagement.tendenciaFaturamento.gradeAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.gradeAlt')}
          </figcaption>
        </figure>
        <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
          <img
            src={tendenciaFaturamentoRecursoLista}
            alt={t("costManagement.tendenciaFaturamento.listaAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.tendenciaFaturamento.listaAlt')}
          </figcaption>
        </figure>
      </div>

      {/* Fluxo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.tendenciaFaturamento.usageFlow")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.tendenciaFaturamento.usageFlowSteps')}
        </p>
      </section>
    </div>
  );
}

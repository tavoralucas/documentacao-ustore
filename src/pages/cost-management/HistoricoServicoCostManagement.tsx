import { ArrowLeft, History, DollarSign, AlertTriangle, Filter, BarChart3, Table } from "lucide-react";
import historicoServicoFiltros from "@/assets/historico-servico-filtros.png";
import historicoServicoIndicadores from "@/assets/historico-servico-indicadores.png";
import historicoServicoGrafico from "@/assets/historico-servico-grafico.png";
import historicoServicoTabela from "@/assets/historico-servico-tabela.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";


export default function HistoricoServicoCostManagement() {
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
          <History className="h-6 w-6 text-primary" />
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

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.overview')}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.historicoServico.overviewText')}
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            {t('costManagement.historicoServico.overviewNote')}
          </p>
        </div>
      </section>

      {/* Objetivo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.objective")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.historicoServico.personas')}
        </p>
      </section>

      {/* Seletor de Contrato */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.historicoServico.contractSelector")}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('costManagement.historicoServico.filterPanel')}
        </p>
      </section>

      <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
        <img
          src={historicoServicoFiltros}
          alt={t("costManagement.historicoServico.filtrosAlt")}
          className="w-full rounded-lg border border-border"
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">
          {t('costManagement.historicoServico.filtrosAlt')}
        </figcaption>
      </figure>

      {/* Indicadores */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.indicators")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.historicoServico.indicatorsDesc')}
        </p>
        <figure>
          <img
            src={historicoServicoIndicadores}
            alt={t("costManagement.historicoServico.indicadoresAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.historicoServico.indicadoresAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Gráfico */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.chart")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.historicoServico.chartDesc')}
        </p>
        <figure>
          <img
            src={historicoServicoGrafico}
            alt={t("costManagement.historicoServico.graficoAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.historicoServico.graficoAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Tabela */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.table")}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.historicoServico.tableDesc')}
        </p>
        <figure>
          <img
            src={historicoServicoTabela}
            alt={t("costManagement.historicoServico.tabelaAlt")}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            {t('costManagement.historicoServico.tabelaAlt')}
          </figcaption>
        </figure>
      </section>

      {/* Fluxo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.historicoServico.flowSteps")}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.historicoServico.flowSteps')}
        </p>
      </section>
    </div>
  );
}

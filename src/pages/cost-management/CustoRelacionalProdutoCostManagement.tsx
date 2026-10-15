import { ArrowLeft, Network, Filter, Search, Lightbulb, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import custoRelacionalImg from "@/assets/custo-relacional-produto.png.asset.json";
import custoRelacionalResultadoImg from "@/assets/custo-relacional-resultado.png.asset.json";
import { useTranslation } from "@/hooks/useTranslation";

export default function CustoRelacionalProdutoCostManagement() {
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
          <Network className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.custoRelacionalProduto.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.custoRelacionalProduto.subtitle')}
          </p>
        </div>
      </div>

      {/* O que é */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.whatIs')}</h2>
        <div className="space-y-3 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.overviewText') }} />
          <p>
            {t('costManagement.custoRelacionalProduto.overviewText2')}
          </p>
        </div>
        <img
          src={custoRelacionalImg.url}
          alt={t("costManagement.custoRelacionalProduto.mainAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Como funciona */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-2">{t("costManagement.custoRelacionalProduto.howItWorks")}</h2>
        <p className="text-muted-foreground mb-6">
          {t('costManagement.custoRelacionalProduto.howItWorksDesc')}
        </p>

        {/* Passo 1 */}
        <div className="rounded-lg border border-border bg-muted/30 p-5 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              {t('costManagement.custoRelacionalProduto.step1')}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t('costManagement.custoRelacionalProduto.step1Desc')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <p dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1Interval') }} />
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1IntervalMensal') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1IntervalSemanal') }} />
                <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1IntervalDiario') }} />
              </ul>
            </li>
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1Periodo') }} />
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1Contratos') }} />
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1Provider') }} />
          </ul>
          <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-200">
            <p dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step1Action') }} />
          </div>
        </div>

        {/* Passo 2 */}
        <div className="rounded-lg border border-border bg-muted/30 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Search className="h-4 w-4 text-primary" />
              {t('costManagement.custoRelacionalProduto.step2')}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {t('costManagement.custoRelacionalProduto.step2Desc')}
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step2Linkeds') }} />
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step2Produto') }} />
            <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step2Familia') }} />
          </ul>
          <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-200">
            <p dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.step2Action') }} />
          </div>
        </div>

        <img
          src={custoRelacionalResultadoImg.url}
          alt={t("costManagement.custoRelacionalProduto.resultAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Fluxo resumido */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ListChecks className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.custoRelacionalProduto.summaryFlow")}</h2>
        </div>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
          <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.flowStep1') }} />
          <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.flowStep2') }} />
          <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.flowStep3') }} />
          <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.flowStep4') }} />
          <li dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.flowStep5') }} />
        </ol>
      </section>

      {/* Casos de uso */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoRelacionalProduto.useCases")}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.custoRelacionalProduto.useCase1")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoRelacionalProduto.useCase1Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.custoRelacionalProduto.useCase2")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoRelacionalProduto.useCase2Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.custoRelacionalProduto.useCase3")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoRelacionalProduto.useCase3Desc')}
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.custoRelacionalProduto.useCase4")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.custoRelacionalProduto.useCase4Desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Dica */}
      <section className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <Lightbulb className="h-5 w-5 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 dark:text-amber-100" dangerouslySetInnerHTML={{ __html: t('costManagement.custoRelacionalProduto.tip') }} />
        </div>
      </section>
    </div>
  );
}

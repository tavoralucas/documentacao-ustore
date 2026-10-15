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
          <p>
            {t('costManagement.custoRelacionalProduto.overviewText')}
          </p>
          <p>
            {t('costManagement.custoRelacionalProduto.overviewText2')}
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoRelacionalProduto.howItWorks")}</h2>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.custoRelacionalProduto.howItWorksDesc')}
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">1</div>
              <h3 className="font-semibold text-foreground">{t("costManagement.custoRelacionalProduto.step1")}</h3>
            </div>
            <p className="text-sm text-muted-foreground ml-10">
              {t('costManagement.custoRelacionalProduto.step1Desc')}
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">2</div>
              <h3 className="font-semibold text-foreground">{t("costManagement.custoRelacionalProduto.step2")}</h3>
            </div>
            <p className="text-sm text-muted-foreground ml-10">
              {t('costManagement.custoRelacionalProduto.step2Desc')}
            </p>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            {t('costManagement.custoRelacionalProduto.tip')}
          </p>
        </div>
      </section>

      <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
        <img
          src={custoRelacionalImg.url}
          alt={t("costManagement.custoRelacionalProduto.mainAlt")}
          className="w-full rounded-lg border border-border"
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">
          {t('costManagement.custoRelacionalProduto.mainAlt')}
        </figcaption>
      </figure>

      {/* Fluxo resumido */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoRelacionalProduto.summaryFlow")}</h2>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside ml-2">
          <li>{t('costManagement.custoRelacionalProduto.flowStep1')}</li>
          <li>{t('costManagement.custoRelacionalProduto.flowStep2')}</li>
          <li>{t('costManagement.custoRelacionalProduto.flowStep3')}</li>
          <li>{t('costManagement.custoRelacionalProduto.flowStep4')}</li>
        </ol>
      </section>

      {/* Casos de uso */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.custoRelacionalProduto.useCases")}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <Search className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">{t("costManagement.custoRelacionalProduto.useCase1")}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{t('costManagement.custoRelacionalProduto.useCase1Desc')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">{t("costManagement.custoRelacionalProduto.useCase2")}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{t('costManagement.custoRelacionalProduto.useCase2Desc')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <ListChecks className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">{t("costManagement.custoRelacionalProduto.useCase3")}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{t('costManagement.custoRelacionalProduto.useCase3Desc')}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-1">
              <Filter className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">{t("costManagement.custoRelacionalProduto.useCase4")}</h3>
            </div>
            <p className="text-xs text-muted-foreground">{t('costManagement.custoRelacionalProduto.useCase4Desc')}</p>
          </div>
        </div>
      </section>

      <figure className="rounded-xl border border-border bg-card p-3 shadow-sm">
        <img
          src={custoRelacionalResultadoImg.url}
          alt={t("costManagement.custoRelacionalProduto.resultAlt")}
          className="w-full rounded-lg border border-border"
        />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">
          {t('costManagement.custoRelacionalProduto.resultAlt')}
        </figcaption>
      </figure>

    </div>
  );
}

import { ArrowLeft, Building2, Filter, ChevronRight, DollarSign } from "lucide-react";
import contaMasterTabela from "@/assets/conta-master-tabela.png";
import contaMasterResumo from "@/assets/conta-master-resumo.png";
import contaMasterFiltros from "@/assets/conta-master-filtros.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContaMasterCostManagement() {
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
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.contaMaster.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.contaMaster.subtitle')}
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t('common.overview')}</h2>
        <p className="text-muted-foreground mb-3">
          {t('costManagement.contaMaster.overviewText')}
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>{t("costManagement.contaMaster.goalBoxTitle")}:</strong> {t('costManagement.contaMaster.goalBoxText')}
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.contaMaster.filters")}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.contaMaster.contractSelector")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.contaMaster.contractSelectorDesc')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {t('costManagement.contaMaster.contractSelectorFormat')}
              <br />
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.contaMaster.period")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.contaMaster.periodDesc')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {t('costManagement.contaMaster.periodFormat')}
            </p>
        </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <img src={contaMasterFiltros} alt={t("costManagement.contaMaster.filtersAlt")} className="block w-full h-auto" />
        </div>
      </section>

      {/* Card Resumo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.contaMaster.resumoCard")}</h2>
        </div>
        <p className="text-muted-foreground mb-3">{t('costManagement.contaMaster.resumoCardDesc')}</p>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          {[
            { label: t("costManagement.contaMaster.resumoCardTitle"), desc: t("costManagement.contaMaster.resumoCardTitleDesc") },
            { label: t("costManagement.contaMaster.resumoCardTotal"), desc: t("costManagement.contaMaster.resumoCardTotalDesc") },
            { label: t("costManagement.contaMaster.resumoCardCurrency"), desc: t("costManagement.contaMaster.resumoCardCurrencyDesc") },
            { label: t("costManagement.contaMaster.resumoCardRate"), desc: t("costManagement.contaMaster.resumoCardRateDesc") },
          ].map(({ label, desc }) => (
            <div key={label} className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            {t('costManagement.contaMaster.decimalNote')}
          </p>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <img src={contaMasterResumo} alt={t("costManagement.contaMaster.resumoAlt")} className="w-full h-auto" />
        </div>
      </section>

      {/* Tabela Hierárquica */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <ChevronRight className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.contaMaster.tableHierarchic")}</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{t('costManagement.contaMaster.tableHierarchicDesc')}</p>
        <div className="space-y-2">
          {[
            { nivel: "1", entidade: t("costManagement.contaMaster.hierarchicLevel1"), exemplo: t("costManagement.contaMaster.hierarchicLevel1Example"), desc: t("costManagement.contaMaster.hierarchicLevel1Desc") },
            { nivel: "2", entidade: t("costManagement.contaMaster.hierarchicLevel2"), exemplo: t("costManagement.contaMaster.hierarchicLevel2Example"), desc: t("costManagement.contaMaster.hierarchicLevel2Desc") },
            { nivel: "3", entidade: t("costManagement.contaMaster.hierarchicLevel3"), exemplo: t("costManagement.contaMaster.hierarchicLevel3Example"), desc: t("costManagement.contaMaster.hierarchicLevel3Desc") },
            { nivel: "4", entidade: t("costManagement.contaMaster.hierarchicLevel4"), exemplo: t("costManagement.contaMaster.hierarchicLevel4Example"), desc: t("costManagement.contaMaster.hierarchicLevel4Desc") },
            { nivel: "5", entidade: t("costManagement.contaMaster.hierarchicLevel5"), exemplo: t("costManagement.contaMaster.hierarchicLevel5Example"), desc: t("costManagement.contaMaster.hierarchicLevel5Desc") },
          ].map(({ nivel, entidade, exemplo, desc }) => (
            <div key={nivel} className="flex gap-3 p-3 rounded-lg border border-border bg-muted/50 text-sm">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs shrink-0">
                {nivel}
              </div>
              <div>
                <p className="font-semibold text-foreground">{entidade}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">{exemplo}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg border border-border bg-muted/50 text-sm">
          <p className="font-semibold text-foreground mb-1">{t("costManagement.contaMaster.tableColumns")}</p>
          <p className="text-muted-foreground text-xs">
            {t('costManagement.contaMaster.tableColumnsDesc')}
          </p>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-border">
          <img src={contaMasterTabela} alt={t("costManagement.contaMaster.tableAlt")} className="w-full h-auto" />
        </div>
      </section>

      {/* Serviços AWS */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.contaMaster.awsServices")}</h2>
        <p className="text-muted-foreground text-sm mb-3">{t('costManagement.contaMaster.awsServicesDesc')}</p>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {[
            ["Amazon Elastic Compute Cloud", "R$ 2.671,1165 (maior custo)"],
            ["Amazon Virtual Private Cloud", "R$ 67,0056"],
            ["Amazon GuardDuty", "R$ 20,4118"],
            ["AmazonCloudWatch", "R$ 8,3655"],
            ["AWS Cost Explorer", "R$ 1,2506"],
            ["AWS Key Management Service", "R$ 0,3175"],
            ["Amazon Simple Storage Service", "R$ 0,2097"],
            ["Amazon DynamoDB / AWS CloudTrail", "R$ 0,0000"],
          ].map(([servico, valor]) => (
            <div key={servico} className="flex justify-between p-2 rounded bg-muted/50">
              <span className="text-muted-foreground">{servico}</span>
              <span className="font-mono text-foreground text-xs">{valor}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {t('costManagement.contaMaster.awsServicesZeroCost')}
        </p>
      </section>

      {/* Fluxos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.contaMaster.userFlows")}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.contaMaster.mainFlow")}</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>{t('costManagement.contaMaster.mainFlowStep1')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep2')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep3')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep4')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep5')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep6')}</li>
              <li>{t('costManagement.contaMaster.mainFlowStep7')}</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.contaMaster.switchContractFlow")}</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>{t('costManagement.contaMaster.switchContractStep1')}</li>
              <li>{t('costManagement.contaMaster.switchContractStep2')}</li>
              <li>{t('costManagement.contaMaster.switchContractStep3')}</li>
              <li>{t('costManagement.contaMaster.switchContractStep4')}</li>
            </ol>
          </div>
        </div>
      </section>

    </div>
  );
}

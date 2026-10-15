import { ArrowLeft, DollarSign, Filter, FileText, BarChart3, Users, User, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";
import financeiroPasso1 from "@/assets/financeiro-passo1.png.asset.json";
import financeiroPasso2 from "@/assets/financeiro-passo2.png.asset.json";
import financeiroPasso4 from "@/assets/financeiro-passo4.png.asset.json";
import financeiroPasso5 from "@/assets/financeiro-passo5.png.asset.json";
import { useTranslation } from "@/hooks/useTranslation";

export default function FinanceiroCostManagement() {
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
          <DollarSign className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            {t('common.productDoc', { module: t('costManagement.title') })}
          </p>
          <h1 className="text-3xl font-bold text-foreground">{t("costManagement.financeiro.title")}</h1>
          <p className="mt-1 text-muted-foreground">
            {t('costManagement.financeiro.subtitle')}
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-3">{t('common.overview')}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.financeiro.overview')}
        </p>
      </section>

      {/* Como acessar */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-3">{t('costManagement.financeiro.howToAccess')}</h2>
        <p className="text-muted-foreground">
          {t('costManagement.financeiro.howToAccessDesc')}
        </p>
      </section>

      {/* Passo 1 */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.step1Title")}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.financeiro.step1Desc')}
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <p className="font-semibold text-foreground mb-1">{t("costManagement.financeiro.step1Field1Title")}</p>
            <p className="text-muted-foreground">{t("costManagement.financeiro.step1Field1Desc")}</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <p className="font-semibold text-foreground mb-1">{t("costManagement.financeiro.step1Field2Title")}</p>
            <p className="text-muted-foreground">{t("costManagement.financeiro.step1Field2Desc")}</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-4 text-sm">
          {t('costManagement.financeiro.step1Action')}
        </p>
        <img
          src={financeiroPasso1.url}
          alt={t("costManagement.financeiro.step1ImageAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Passo 2 */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.step2Title")}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.financeiro.step2Desc')}
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.financeiro.step2InvoiceTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-3">{t("costManagement.financeiro.step2InvoiceIntro")}</p>
            <ul className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
              {[
                [t("costManagement.financeiro.step2InvoiceItem1Label"), t("costManagement.financeiro.step2InvoiceItem1Desc")],
                [t("costManagement.financeiro.step2InvoiceItem2Label"), t("costManagement.financeiro.step2InvoiceItem2Desc")],
                [t("costManagement.financeiro.step2InvoiceItem3Label"), t("costManagement.financeiro.step2InvoiceItem3Desc")],
                [t("costManagement.financeiro.step2InvoiceItem4Label"), t("costManagement.financeiro.step2InvoiceItem4Desc")],
                [t("costManagement.financeiro.step2InvoiceItem5Label"), t("costManagement.financeiro.step2InvoiceItem5Desc")],
                [t("costManagement.financeiro.step2InvoiceItem6Label"), t("costManagement.financeiro.step2InvoiceItem6Desc")],
                [t("costManagement.financeiro.step2InvoiceItem7Label"), t("costManagement.financeiro.step2InvoiceItem7Desc")],
                [t("costManagement.financeiro.step2InvoiceItem8Label"), t("costManagement.financeiro.step2InvoiceItem8Desc")],
              ].map(([c, d]) => (
                <li key={c}><strong className="text-foreground">{c}</strong> — {d}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.financeiro.step2GroupsTitle")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.financeiro.step2GroupsDesc')}
            </p>
          </div>

          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">{t("costManagement.financeiro.step2ChartTitle")}</h3>
            <p className="text-sm text-muted-foreground">
              {t('costManagement.financeiro.step2ChartDesc')}
            </p>
          </div>
        </div>
        <img
          src={financeiroPasso2.url}
          alt={t("costManagement.financeiro.step2ImageAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Passo 3 */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.step3Title")}</h2>
        </div>
        <p className="text-muted-foreground">
          {t('costManagement.financeiro.step3Desc')}
        </p>
      </section>

      {/* Passo 4 */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.step4Title")}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.financeiro.step4Desc')}
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail1")}</strong></li>
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail2")}</strong></li>
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail3")}</strong></li>
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail4")}</strong></li>
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail5")}</strong></li>
          <li><strong className="text-foreground">{t("costManagement.financeiro.step4Detail6")}</strong></li>
        </ul>
        <img
          src={financeiroPasso4.url}
          alt={t("costManagement.financeiro.step4ImageAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Passo 5 */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <User className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.step5Title")}</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          {t('costManagement.financeiro.step5Desc')}
        </p>

        <div className="p-4 rounded-lg border border-border bg-muted/50 mb-4">
          <h3 className="font-semibold text-foreground mb-2">{t("costManagement.financeiro.step5UserInvoiceTitle")}</h3>
          <p className="text-sm text-muted-foreground mb-3">{t("costManagement.financeiro.step5UserInvoiceIntro")}</p>
          <ul className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
            {[
              [t("costManagement.financeiro.step5UserInvoiceItem1Label"), t("costManagement.financeiro.step5UserInvoiceItem1Desc")],
              [t("costManagement.financeiro.step5UserInvoiceItem2Label"), t("costManagement.financeiro.step5UserInvoiceItem2Desc")],
              [t("costManagement.financeiro.step5UserInvoiceItem3Label"), t("costManagement.financeiro.step5UserInvoiceItem3Desc")],
              [t("costManagement.financeiro.step5UserInvoiceItem4Label"), t("costManagement.financeiro.step5UserInvoiceItem4Desc")],
              [t("costManagement.financeiro.step5UserInvoiceItem5Label"), t("costManagement.financeiro.step5UserInvoiceItem5Desc")],
              [t("costManagement.financeiro.step5UserInvoiceItem6Label"), t("costManagement.financeiro.step5UserInvoiceItem6Desc")],
            ].map(([c, d]) => (
              <li key={c}><strong className="text-foreground">{c}</strong> — {d}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-border bg-muted/50 mb-4">
          <h3 className="font-semibold text-foreground mb-2">{t("costManagement.financeiro.step5ResourcesTitle")}</h3>
          <p className="text-sm text-muted-foreground">
            {t('costManagement.financeiro.step5ResourcesDesc')}
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm mb-4">
          <p className="text-blue-800 dark:text-blue-200">
            {t('costManagement.financeiro.step5Tip')}
          </p>
        </div>

        <p className="text-muted-foreground mb-3 text-sm">
          {t('costManagement.financeiro.step5CardsDesc')}
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          {[
            [t("costManagement.financeiro.step5Card1"), t("costManagement.financeiro.step5Card1Desc")],
            [t("costManagement.financeiro.step5Card2"), t("costManagement.financeiro.step5Card2Desc")],
            [t("costManagement.financeiro.step5Card3"), t("costManagement.financeiro.step5Card3Desc")],
            [t("costManagement.financeiro.step5Card4"), t("costManagement.financeiro.step5Card4Desc")],
          ].map(([c, d]) => (
            <div key={c} className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground mb-1">{c}</p>
              <p className="text-muted-foreground text-xs">{d}</p>
            </div>
          ))}
        </div>
        <img
          src={financeiroPasso5.url}
          alt={t("costManagement.financeiro.step5ImageAlt")}
          loading="lazy"
          className="mt-6 w-full rounded-md border border-border"
        />
      </section>

      {/* Navegação e Ações Gerais */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">{t("costManagement.financeiro.step5Navigation")}</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>{t('costManagement.financeiro.navItem1')}</li>
          <li>{t('costManagement.financeiro.navItem2')}</li>
          <li>{t('costManagement.financeiro.navItem3')}</li>
          <li>{t('costManagement.financeiro.navItem4')}</li>
        </ul>
      </section>

      {/* Hierarquia */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">{t("costManagement.financeiro.hierarchy")}</h2>
        </div>
        <p className="text-muted-foreground mb-3 text-sm">{t('costManagement.financeiro.hierarchyDesc')}</p>
        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>{t('costManagement.financeiro.hierarchyItem1')}</li>
          <li>{t('costManagement.financeiro.hierarchyItem2')}</li>
          <li>{t('costManagement.financeiro.hierarchyItem3')}</li>
          <li>{t('costManagement.financeiro.hierarchyItem4')}</li>
        </ol>
      </section>
    </div>
  );
}

import { ArrowLeft, Building2, Filter, ChevronRight, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContaMasterCostManagement() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/cost-management")}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Cost Management
      </button>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            Cost Management · Documentação
          </p>
          <h1 className="text-3xl font-bold text-foreground">Conta Master</h1>
          <p className="mt-1 text-muted-foreground">
            Veja os gastos da Conta Master e Linked Accounts associadas à sua conta
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Visão Geral</h2>
        <p className="text-muted-foreground mb-3">
          A Conta Master é um módulo de visibilidade financeira dentro da Gestão de Custos. Consolida e apresenta
          os gastos de uma Conta Master de provedor cloud (AWS, Azure, OCI, Huawei) junto com todas as Contas Linked
          (subcontas) associadas, permitindo navegar pela hierarquia de custos do mais agregado ao mais granular.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Rota:</strong> <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">/billing/control-tower</code>
            · <strong>Stack:</strong> Angular 19.2.0 · <strong>Auth:</strong> SSO Keycloak/OIDC (JWT em localStorage)
            · <strong>Moeda padrão:</strong> BRL com 4 casas decimais
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Filtros</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">Seletor de Contrato (local)</h3>
            <p className="text-sm text-muted-foreground">
              Dropdown com campo de busca textual. Lista os contratos disponíveis para o usuário autenticado.
              O contrato selecionado aqui define qual Conta Master será exibida, independentemente do contexto global.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Formato: <code className="bg-muted px-1 rounded">[A]XXXXXXXX-NOMECLIENTE-PROVEDOR (AccountID)</code>
              <br />Ex: <code className="bg-muted px-1 rounded">[A]1004608-JEVA-AWS (605212350047)</code>
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <h3 className="font-semibold text-foreground mb-2">Período</h3>
            <p className="text-sm text-muted-foreground">
              Granularidade mensal (MM/YYYY). Padrão: mês atual. A consulta não é automática —
              o usuário deve clicar em <strong>"Filtrar"</strong> após selecionar contrato e período.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Formato enviado à API: <code className="bg-muted px-1 rounded">YYYY-MM-01T00:00:00</code>
            </p>
          </div>
        </div>
      </section>

      {/* Card Resumo */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Card Resumo da Conta Master</h2>
        </div>
        <p className="text-muted-foreground mb-3">Após aplicar o filtro, o card exibe:</p>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          {[
            { label: "Título", desc: "Nome do contrato + Account ID do provedor" },
            { label: "Total (BRL)", desc: "Valor total convertido para Real com 4 casas decimais" },
            { label: "Moeda do Provedor", desc: "Valor original na moeda do provedor (USD para AWS, EUR para Azure)" },
            { label: "Cotação do Dólar", desc: "Taxa de câmbio usada para conversão, em vermelho (ex: $4.99). Obtida por API para a data efetiva do período." },
          ].map(({ label, desc }) => (
            <div key={label} className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>RN-11:</strong> Todos os valores são exibidos com <strong>4 casas decimais</strong>
            (ex: R$ 2.835,7941 / $521.5183), garantindo precisão de custos fracionais.
          </p>
        </div>
      </section>

      {/* Tabela Hierárquica */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <ChevronRight className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Tabela Hierárquica "Informações de Custos"</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-4">A tabela é organizada em hierarquia expansível com 5 níveis:</p>
        <div className="space-y-2">
          {[
            { nivel: "1", entidade: "Subconta (Linked Account)", exemplo: "jeva (108361471849)", desc: "Nome + Account ID" },
            { nivel: "2", entidade: "Serviço Cloud", exemplo: "Amazon Elastic Compute Cloud", desc: "Nome oficial do serviço" },
            { nivel: "3", entidade: "Região", exemplo: "US East (N. Virginia) / Sem Região", desc: "Nome da região ou 'Sem Região' para serviços globais" },
            { nivel: "4", entidade: "Categoria de Uso", exemplo: "Compute Instance, Storage, Data Transfer", desc: "Categoria funcional" },
            { nivel: "5", entidade: "Tipo de Uso (SKU)", exemplo: "BoxUsage:r5.large", desc: "Código do SKU do provedor — nível folha" },
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
          <p className="font-semibold text-foreground mb-1">Colunas da tabela:</p>
          <p className="text-muted-foreground text-xs">
            <strong>SUBCONTAS</strong> (com indentação visual por nível) ·
            <strong> TOTAL (BRL)</strong> com 4 casas decimais ·
            <strong> MOEDA DO PROVEDOR (USD)</strong> com 4 casas decimais
          </p>
        </div>
      </section>

      {/* Serviços AWS */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Serviços AWS Identificados (exemplo)</h2>
        <p className="text-muted-foreground text-sm mb-3">Subconta <code className="bg-muted px-1 rounded">jeva (108361471849)</code> para 05/2026:</p>
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
          Serviços com custo zero são exibidos normalmente — permitem confirmar que o serviço existe mas não gerou custo no período.
        </p>
      </section>

      {/* Fluxos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Fluxos de Usuário</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Fluxo Principal — Visualizar custos</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>Acesso à <code className="bg-muted px-1 rounded">/billing/control-tower</code></li>
              <li>Sistema verifica token JWT e carrega lista de contratos do usuário</li>
              <li>Pré-seleciona contrato ativo do contexto global e mês atual</li>
              <li>Busca cotação do dólar para o mês atual via API dedicada</li>
              <li>Renderiza card resumo e tabela com subcontas colapsadas</li>
              <li>Usuário clica na seta de uma subconta → expande para ver serviços</li>
              <li>Continua expandindo até o nível de SKUs individuais (nível 5)</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Fluxo — Trocar Contrato</h3>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside ml-2">
              <li>Clicar em "Filtros" → painel se expande</li>
              <li>Selecionar novo contrato no dropdown com busca textual</li>
              <li>Selecionar mês/ano no calendário mensal</li>
              <li>Clicar em "Filtrar" → API atualiza todos os dados</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Autenticação */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Autenticação e Multi-tenant</h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground mb-1">SSO Keycloak (OIDC)</p>
              <p className="text-xs">Token renovado silenciosamente via <code className="bg-muted px-1 rounded">silent-check-sso.html</code>. JWT armazenado em <code className="bg-muted px-1 rounded">localStorage['token-billing']</code></p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground mb-1">Multi-tenant</p>
              <p className="text-xs">API busca com <code className="bg-muted px-1 rounded">size=999999</code> — retorna todos os contratos sem paginação. Observado até 865 contratos para um único usuário.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

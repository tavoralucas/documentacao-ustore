import { ArrowLeft, DollarSign, BarChart3, PieChart, Package, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FinanceiroCostManagement() {
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
          <DollarSign className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            Cost Management · Documentação
          </p>
          <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
          <p className="mt-1 text-muted-foreground">
            Visão consolidada e detalhada de faturamento por contrato, grupo e produto
          </p>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Visão Geral</h2>
        <p className="text-muted-foreground mb-3">
          O módulo Financeiro é o hub central de faturamento do PMC. Permite que gestores de conta, administradores
          e clientes visualizem, compreendam e naveguem pelos valores de suas faturas multicloud organizadas por
          contrato, grupo e produto. Último item do menu lateral de Gestão de Custos.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Rota:</strong> <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">/billing/financial</code>
            · <strong>Suporta parâmetros de URL</strong> para deep linking por contrato, mês, ano e moeda.
          </p>
        </div>
      </section>

      {/* Estrutura de Tela */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Estrutura de Tela</h2>
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-xs">
          <p>┌─────────────────────────────────────────────────────────┐</p>
          <p>│  [1] FILTRO — Seleção de Contrato + Período + Buscar    │</p>
          <p>├────────────────┬───────────────┬────────────────────────┤</p>
          <p>│ [2] FATURA     │ [3] GRUPOS    │ [4] CONSUMO POR GRUPO  │</p>
          <p>│  do Contrato   │               │     (Gráfico Donut)    │</p>
          <p>├────────────────┴───────────────┴────────────────────────┤</p>
          <p>│              [5] CONSUMO DE RECURSOS DURANTE O MÊS      │</p>
          <p>│                    (Gráfico de Barras Histórico)         │</p>
          <p>├─────────────────────────────────────────────────────────┤</p>
          <p>│              [6] PRODUTOS (Tabela expansível)            │</p>
          <p>└─────────────────────────────────────────────────────────┘</p>
        </div>
      </section>

      {/* Bloco 1 — Filtro */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Bloco [1] — Filtro Principal</h2>
        <div className="space-y-3 text-muted-foreground">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-3 rounded-lg border border-border bg-muted/50 text-sm">
              <h3 className="font-semibold text-foreground mb-1">Seleção de Contrato</h3>
              <p>Dropdown com busca. Suporta múltiplos tipos de contrato: <code className="bg-muted px-1 rounded text-xs">[A]</code> ativo,
                <code className="bg-muted px-1 rounded text-xs">[M]</code> master,
                <code className="bg-muted px-1 rounded text-xs">[P]</code> partner,
                <code className="bg-muted px-1 rounded text-xs">[X]</code> inativo,
                <code className="bg-muted px-1 rounded text-xs">GOV-</code>,
                <code className="bg-muted px-1 rounded text-xs">EBT-</code></p>
              <p className="mt-1">Plataformas: AWS, AZURE, AZURE-EA, GCP, OCI, HUAWEI, AZION, IBM</p>
            </div>
            <div className="p-3 rounded-lg border border-border bg-muted/50 text-sm">
              <h3 className="font-semibold text-foreground mb-1">Seletor de Período</h3>
              <p>Formato: <code className="bg-muted px-1 rounded text-xs">MM/AAAA</code>. Picker mensal com mês destacado em vermelho.
                Seleção fecha o picker automaticamente.</p>
              <p className="mt-1 text-amber-700 dark:text-amber-400"><strong>A busca NÃO é automática</strong> — clicar em "Buscar" é obrigatório após alterar o período.</p>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>URL resultante após Buscar:</strong>
              <code className="block mt-1 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                /billing/financial?ucloudIdentifier=&#123;uuid&#125;&companyUUID=&#123;uuid&#125;&selectedMonth=5&selectedYear=2026&selectedDecimalPlace=4&selectedCurrency=BRL
              </code>
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2 — Fatura */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Bloco [2] — Fatura do Contrato</h2>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg border border-amber-200 dark:border-amber-800 text-sm mb-4">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>Regra de período:</strong> O sistema exibe dados do <strong>mês de fechamento imediatamente anterior</strong>
            ao mês selecionado no filtro. Ao selecionar 05/2026, o período exibido será 01/04/2026 até 30/04/2026.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-sm">
          {[
            ["Consumo total", "Valor agregado em BRL (4 casas decimais)"],
            ["Consumo", "Subtotal de consumo de recursos cloud"],
            ["Custo de produto", "Custo adicional de produtos marketplace/SVA — pode ser R$ 0,0000"],
            ["Cotação do dólar", "Taxa de câmbio USD/BRL para conversão"],
            ["Cotação do marketplace", "Taxa USD/BRL específica do marketplace (com data de referência)"],
            ["Período", "Data de início e fim da competência (ex: 01-04-2026 até 30-04-2026)"],
          ].map(([campo, desc]) => (
            <div key={campo} className="p-3 rounded-lg border border-border bg-muted/50">
              <p className="font-semibold text-foreground">{campo}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco 3 — Grupos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Bloco [3] — Grupos</h2>
        </div>
        <div className="space-y-3 text-muted-foreground text-sm">
          <p>Lista paginada dos grupos vinculados ao contrato. Cada linha: <strong>Nome do grupo</strong> (link clicável) + <strong>Valor em BRL</strong> (4 casas decimais).</p>
          <p>Navegação paginada via botões <code className="bg-muted px-1 rounded">&lt;Anterior</code> e <code className="bg-muted px-1 rounded">Próximo&gt;</code> com indicador de página (bullet points). Um grupo por vez.</p>
          <div className="p-3 rounded-lg border border-border bg-muted/50">
            <p className="font-semibold text-foreground mb-1">Drill-down de Grupo (ao clicar no nome)</p>
            <p className="text-xs">Navega para <code className="bg-muted px-1 rounded">/billing/financial/groups?{"{params}"}</code>. Todos os blocos são filtrados para aquele grupo.
            Botão de voltar {"<"} no header retorna à view do contrato completo.</p>
          </div>
        </div>
      </section>

      {/* Blocos 4 e 5 — Gráficos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Blocos [4] e [5] — Gráficos</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">Consumo por Grupo (Donut)</h3>
            </div>
            <p className="text-muted-foreground text-xs">
              Gráfico de rosca em tons rosa/vermelho (cores Claro). Representa a proporção de consumo de cada grupo
              em relação ao total do contrato. Com apenas um grupo, exibe como arco de ~270°.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground">Consumo de Recursos (Barras)</h3>
            </div>
            <p className="text-muted-foreground text-xs">
              Exibe os <strong>últimos 4 meses</strong> a partir do mês selecionado. Eixo X: MM/AAAA.
              Tooltip: mês, nome do grupo, valor BRL e <strong>status da fatura</strong> (ex: Fatura fechada).
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 6 — Produtos */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Package className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Bloco [6] — Produtos</h2>
        </div>
        <div className="space-y-3 text-muted-foreground text-sm">
          <p>Painel expansível (acordeão). Header: ícone + label <strong>"Produtos (N)"</strong>. Por padrão, inicia <strong>recolhido</strong>.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 font-semibold text-foreground">Coluna</th>
                  <th className="text-left py-2 font-semibold text-foreground">Descrição</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[["Nome", "Nome do produto/serviço"], ["Quantidade", "Quantidade consumida"], ["Valor", "Valor em BRL"]].map(([col, desc]) => (
                  <tr key={col} className="border-b border-border/50">
                    <td className="py-2 pr-3 font-medium">{col}</td>
                    <td className="py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs">Quando N = 0, a tabela é exibida vazia — indica ausência de produtos além do consumo cloud padrão.</p>
        </div>
      </section>

      {/* Parâmetros de URL */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Parâmetros de URL</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold text-foreground">Parâmetro</th>
                <th className="text-left py-2 pr-3 font-semibold text-foreground">Tipo</th>
                <th className="text-left py-2 font-semibold text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground text-xs">
              {[
                ["ucloudIdentifier", "UUID", "Identificador único do contrato"],
                ["companyUUID", "UUID", "UUID da empresa/grupo vinculada"],
                ["selectedMonth", "int (1–12)", "Mês selecionado no filtro"],
                ["selectedYear", "int", "Ano selecionado no filtro"],
                ["selectedDecimalPlace", "int", "Precisão decimal (padrão: 4)"],
                ["selectedCurrency", "string", "Moeda de exibição (padrão: BRL)"],
              ].map(([param, tipo, desc]) => (
                <tr key={param} className="border-b border-border/50">
                  <td className="py-2 pr-3 font-mono">{param}</td>
                  <td className="py-2 pr-3">{tipo}</td>
                  <td className="py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regras de Interface */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Regras de Interface</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>Sem auto-refresh:</strong> alterações no período exigem clique explícito em "Buscar"</li>
          <li>• <strong>Contrato independente:</strong> o filtro da tela pode ser diferente do contrato global do header</li>
          <li>• <strong>Cotação do marketplace:</strong> usa o último dia útil do mês de referência</li>
          <li>• <strong>Período de competência:</strong> sempre exibe o mês imediatamente anterior ao selecionado</li>
          <li>• <strong>Precisão:</strong> todos os valores com 4 casas decimais (configurável via <code className="bg-muted px-1 rounded">selectedDecimalPlace</code>)</li>
          <li>• <strong>Estado inicial:</strong> ao acessar sem parâmetros, carrega o contrato do usuário atual com mês corrente</li>
          <li>• <strong>Discrepância:</strong> pode haver diferença mínima de centavos entre Fatura e Grupos por arredondamento de cotação</li>
        </ul>
      </section>

      {/* Segmentos de Contrato */}
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground mb-4">Segmentos de Contrato Suportados</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold text-foreground">Segmento</th>
                <th className="text-left py-2 pr-3 font-semibold text-foreground">Prefixo</th>
                <th className="text-left py-2 font-semibold text-foreground">Exemplos</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground text-xs">
              {[
                ["Clientes B2B Ativos", "[A]", "LYRA, RCHLO, AZUL, LEROY MERLIN"],
                ["Clientes B2B Master", "[M]", "RODOBENS, RD_SAUDE, EINSTEIN"],
                ["Clientes B2B Partner", "[P]", "INBURSA, CSN, LYRA-AZURE"],
                ["Governo", "GOV-", "TCU, CGU, CNJ, CEMIG, TJRJ"],
                ["Embratel/EBT", "EBT-", "PRODESP, RESOLD, BRADESCO"],
                ["Claro Insights", "[Claro Insights]", "Banco Itaú, Nubank, Serasa, Magalu"],
                ["Claro Interno", "Sem prefixo", "CLARO_TI-AWS, CLARO_ECOMMERCE-AWS"],
              ].map(([seg, pref, ex]) => (
                <tr key={seg} className="border-b border-border/50">
                  <td className="py-2 pr-3 font-medium">{seg}</td>
                  <td className="py-2 pr-3 font-mono">{pref}</td>
                  <td className="py-2">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

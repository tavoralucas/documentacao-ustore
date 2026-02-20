

## Relatório de Saúde Geral da Rede

Nova tela de dashboard executivo para monitoramento da saúde da rede GPON, seguindo rigorosamente a identidade visual existente (fundo claro, cards brancos, botões vermelhos, tabelas com cabeçalho vermelho).

> **Nota:** Como não há backend conectado, os dados serão mockados com valores realistas. A estrutura estará pronta para integração futura com API.

### 1. Cabeçalho e Filtros
- Título "Saúde Geral da Rede" + subtítulo explicativo
- Card de filtros com: Período (data inicial/final), UF (select), Cidade (autocomplete), Node/OLT (select)
- Botões "Buscar" (vermelho preenchido) e "Limpar" (borda vermelha) — mesmo padrão das telas existentes

### 2. KPIs Executivos (6 cards)
Linha de cards com indicadores principais:
- Total de Clientes Monitorados
- % Clientes com QoS Geral < 7
- % Clientes com QoS Disponibilidade = 0
- % Clientes abaixo de 80% da velocidade contratada
- Média RX (Down) da rede
- Média de Quedas D-1 por cliente

Cada card com número grande, subtítulo descritivo e indicador visual de status (verde/amarelo/vermelho) usando tons compatíveis com a identidade.

### 3. Gráficos Analíticos (4 gráficos)
- **Distribuição de RX (Down) por faixa** — gráfico de barras
- **Distribuição de QoS Geral** — gráfico de barras/histograma
- **Top 10 OLTs com maior taxa de quedas** — gráfico de barras horizontal
- **Performance média (% download entregue)** — gráfico de linha

Estilo minimalista com fundo branco, linhas discretas e cores consistentes (usando Recharts).

### 4. Tabela de OLTs Críticas
- Cabeçalho vermelho (mesmo padrão da tela de Relatórios)
- Colunas: Node/OLT, Total Clientes, RX Médio, QoS Médio, Média Quedas D-1, % Clientes Críticos
- Ordenação por coluna clicável
- Paginação no padrão existente

### 5. Insights Automáticos
- Card branco com lista de até 5 insights gerados dinamicamente com base nos dados
- Exemplos: "OLT X apresenta RX médio abaixo de -23 dBm", "UF Y concentra 32% dos clientes com QoS Disponibilidade = 0"

### 6. Rota e Navegação
- Nova rota `/saude-geral` no router
- Página responsiva: KPIs empilham verticalmente em telas menores, gráficos em grid 2x2 no desktop


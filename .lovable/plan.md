## Contexto

Uma busca no projeto (`rg "Visão Geral do Produto"`) confirma que **não há mais nenhuma ocorrência** do texto em componentes, páginas, breadcrumbs, menus ou arquivos de tradução. Todas as menções anteriores já foram substituídas por "Visão Geral" em interações passadas.

Resta apenas garantir que o texto não retorne ao projeto no futuro.

## Plano

### 1. Criar teste de regressão automatizado

Criar `src/test/no-visao-geral-do-produto.test.ts` que:

- Varre recursivamente os diretórios de código-fonte relevantes (`src/`, `index.html`, `public/` quando aplicável a texto, excluindo `node_modules`, `dist`, `.git` e o próprio arquivo de teste).
- Lê o conteúdo de cada arquivo `.ts`, `.tsx`, `.js`, `.jsx`, `.html`, `.json`, `.md` (cobrindo também eventuais arquivos de tradução/i18n).
- Falha o teste se encontrar a string literal `"Visão Geral do Produto"` (case-insensitive, normalizando acentuação para evitar falsos negativos por composição Unicode).
- Reporta o caminho e a linha de cada ocorrência encontrada para facilitar o debug.

O teste roda via Vitest (já configurado em `vitest.config.ts`).

### 2. Verificação

Após criar o teste, executar a suíte para confirmar que passa no estado atual (sem ocorrências).

## Detalhes técnicos

- Usar `fs/promises` + recursão simples (sem dependências novas).
- Self-exclusion: o arquivo de teste contém a string como literal de busca; excluir o próprio arquivo da varredura pelo caminho absoluto.
- Normalização: `text.normalize("NFC")` antes de comparar, para cobrir variações de codificação do "ã".

## Fora de escopo

- Nenhuma mudança de UI/navegação/breadcrumbs é necessária — a substituição já está completa no código.

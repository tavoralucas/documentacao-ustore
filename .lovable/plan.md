## Objetivo
Adicionar a primeira novidade de Junho/2026 (15/06): "Melhorias no módulo financeiro", incluindo a imagem anexa, e suportar imagens nos itens da timeline.

## Mudanças

### 1. Asset da imagem
- Subir a imagem anexa como Lovable Asset:
  - `src/assets/novidade-financeiro-2026-06-15.png.asset.json` (via `lovable-assets create` a partir de `/mnt/user-uploads/image-27.png`).

### 2. Tipos e dados (`src/data/novidades.ts`)
- Estender `Novidade` com campos opcionais:
  - `imagem?: string` (URL do asset)
  - `imagemAlt?: string`
  - `beneficios?: string[]`
- Adicionar o primeiro item em `2026-06`:
  - `id: "melhorias-modulo-financeiro"`
  - `data: "2026-06-15"`
  - `titulo: "Melhorias no módulo financeiro"`
  - `descricao`: texto completo enviado (intro + contexto anterior + melhoria atual).
  - `beneficios`: lista de 5 bullets enviada.
  - `tags: ["Financeiro", "Performance", "UX"]`
  - `imagem`: URL do asset; `imagemAlt: "Nova tela do módulo Financeiro"`.

### 3. Timeline (`src/pages/novidades/NovidadesMes.tsx`)
- Renderizar, quando presentes:
  - `descricao` em parágrafos (split por linha em branco) preservando quebras.
  - Bloco "Principais benefícios" com lista `ul` quando `beneficios` existir.
  - `imagem` em `<img>` responsivo (`rounded-md border`, `w-full h-auto`), com `loading="lazy"` e `alt` apropriado, posicionado abaixo do texto.
- Manter design tokens existentes (sem cores hardcoded).

## Resultado esperado
Card de Junho/2026 mostra "1 novidade". Página `/novidades/2026-06` exibe um item de timeline em 15/06/2026 com título, descrição em parágrafos, lista de benefícios, tags e a screenshot do módulo Financeiro.

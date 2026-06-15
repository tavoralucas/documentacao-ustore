## Objetivo
Adicionar um item "Novidades" na sidebar esquerda que leva a uma página com cards mensais (começando por Junho/2026). Ao clicar no card do mês, abre uma página com uma linha do tempo das novas implementações daquele mês.

## Mudanças

### 1. Sidebar (`src/components/AppLayout.tsx`)
- Adicionar item de menu "Novidades" (ícone `Sparkles` do lucide-react) apontando para `/novidades`.
- Mantém o padrão visual atual (mesma estrutura do item "Cost Management").

### 2. Nova página: `src/pages/Novidades.tsx` (rota `/novidades`)
- Título "Novidades".
- Grid de cards por mês. Inicialmente um único card: **Junho de 2026**.
- Card mostra: mês/ano, ícone, breve descrição ("Veja as novas implementações deste mês") e contador de itens.
- Ao clicar, navega para `/novidades/2026-06`.

### 3. Nova página: `src/pages/novidades/NovidadesJunho2026.tsx` (rota `/novidades/2026-06`)
- Cabeçalho com título "Junho de 2026" e botão "Voltar".
- Linha do tempo vertical (timeline) com marcadores por data.
- Inicialmente **vazia** com um estado placeholder ("Em breve — aguardando primeira novidade"), pronto para receber a primeira entrada que o usuário enviará na próxima mensagem.

### 4. Dados: `src/data/novidades.ts`
- Estrutura tipada para futuras entradas:
  ```ts
  type Novidade = { id: string; data: string; titulo: string; descricao: string; tags?: string[] };
  type NovidadesMes = { mes: string; ano: number; slug: string; itens: Novidade[] };
  ```
- Array `novidadesPorMes` exportado, começando com `2026-06` vazio. Facilita adicionar a primeira novidade depois sem mexer em componentes.

### 5. Rotas (`src/App.tsx`)
- Registrar `/novidades` e `/novidades/2026-06` dentro do `AppLayout`.

## Aparência da timeline
- Linha vertical à esquerda com pontos (`bg-primary`) em cada item.
- Cada item: data (small/muted), título (semibold), descrição, tags opcionais.
- Usa tokens do design system (sem cores hardcoded).

## Próximo passo
Após aprovação e implementação, você envia a primeira novidade (data, título, descrição) e eu adiciono em `src/data/novidades.ts`.

# Novidades do Incognito - GPON 360

Replicar o fluxo de Novidades que já existe no Cost Management para o GPON 360, com o conteúdo de agosto de 2026.

## O que o usuário verá

1. Um card de destaque "Novidades" no topo da página `/gpon-360`, no mesmo estilo do card destacado que existe hoje no Cost Management (borda diferenciada, separado dos cards de módulos).
2. Ao clicar, uma página com o card do mês "Agosto de 2026" e a quantidade de novidades.
3. Ao abrir o mês, a linha do tempo com as novidades de agosto, sem emojis, cada uma com título, categoria, resumo, descrição, tags e (quando fizer sentido) link para a documentação do módulo correspondente.

## Conteúdo de agosto de 2026 (GPON 360)

Período: 01 a 31 de agosto de 2026.

1. **Arquivos de troca de nome de rede e traps no Report** — Nova funcionalidade. Download dos arquivos de clientes que tiveram o nome da rede alterado após queda de conexão, junto com os arquivos de traps correspondentes. Link para a documentação de Relatórios.
2. **Audit Log com indicadores e insights de uso** — Nova funcionalidade. Camada analítica no topo da auditoria: média de usuários e operações por dia, variação de uso (7 dias vs. 7 anteriores), horário de pico, série diária de usuários ativos, ranking de operações e top usuários. Link para a documentação de Auditoria.
3. **Análise técnica de incidente de infraestrutura** — Melhoria. Investigação de incidente de infraestrutura da aplicação, com mapeamento de causas e impactos e ajustes de estabilidade.
4. **Timeline do Monitor de Sinal mais limpa** — Melhoria. As timelines de Nível RX e Nível TX passam a ignorar registros com valor -100 (clientes offline), tornando o histórico mais coerente. Link para Monitoramento de Sinal.
5. **Mais detalhes no Monitoramento de Quedas** — Melhoria. O detalhe de cada ocorrência passa a exibir data de retorno da conexão, NAP, código do imóvel e OLT. Link para Monitoramento de Quedas.
6. **Novos filtros na tela de Clientes** — Melhoria. Filtros de OLT e Rua na tela de Clientes. Link para Clientes.

Nenhum texto usará emojis.

**Imagens:** o texto enviado cita quatro imagens (audit-log, monitor-sinal-timeline, monitor-quedas, clientes-filtros), mas elas não foram anexadas. As novidades serão publicadas sem imagens; basta enviar os prints depois para eu incluí-los.

## Detalhes técnicos

- Novo arquivo `src/data/novidadesGpon.ts` reaproveitando os tipos `Novidade` / `NovidadesMes` exportados de `src/data/novidades.ts`, com um `getNovidadesGponPorSlug`.
- Generalizar `src/pages/Novidades.tsx` e `src/pages/novidades/NovidadesMes.tsx` para receberem a fonte de dados e a rota base por props (ou criar wrappers finos `GponNovidades` / `GponNovidadesMes` que reutilizam a mesma apresentação), mantendo o comportamento atual do Cost Management inalterado.
- Novas rotas em `src/App.tsx`: `/gpon-360/novidades` e `/gpon-360/novidades/:slug`.
- Card de destaque no topo de `src/pages/Gpon360.tsx`, replicando o markup do bloco de novidades de `src/pages/CostManagement.tsx`.
- Sem alteração na sidebar (o acesso é pelo card, como no Cost Management).

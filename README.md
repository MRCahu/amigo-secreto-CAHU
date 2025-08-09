# Amigo Secreto (CAHU)

Aplicação web para gerenciar participantes e realizar sorteios de Amigo Secreto com validações robustas, persistência local (localStorage) e acessibilidade aprimorada. Interface moderna, responsiva e pronta para publicação no GitHub Pages.

## Sumário

- Visão geral
- Capturas e Demo
- Principais recursos
- Como usar
- Atalhos de teclado
- Critérios de aceitação
- Acessibilidade (A11y)
- Como rodar localmente
- Stack e estrutura do projeto
- Qualidade (Lint, Testes e CI)
- Roadmap
- Changelog (resumo)
- Privacidade e dados
- FAQ

## Visão geral

Este projeto permite cadastrar participantes, validar entradas (impedindo duplicados e nomes inválidos), realizar o sorteio garantindo que ninguém tire a si mesmo, visualizar o resultado e manter o estado entre recarregamentos via localStorage. A UI foi construída com foco em clareza, acessibilidade (WCAG AA) e boa experiência em dispositivos móveis.

## Capturas e Demo

- Screenshot (UI moderna): assets/amigo-secreto.png (substitua por suas imagens reais, se desejar).
- Demo (GitHub Pages): adicione o link aqui quando publicar.

Dica: para publicar no GitHub Pages, acesse Settings → Pages e selecione a branch (ex.: main).

## Principais recursos

- Validações: trim de espaços, mínimo de 2 caracteres, limite de 60, bloqueio de duplicados (case-insensitive).
- Persistência: participantes e resultado ficam salvos no localStorage.
- Sorteio justo: embaralhamento + rotação para evitar auto-atribuição; erro claro se não houver combinação válida.
- Acessibilidade: mensagens com aria-live, foco programático no alerta, labels e foco visível.
- UX: botões para adicionar, remover, limpar lista e limpar resultado; estados vazios comunicados; layout responsivo (mobile → desktop).

## Como usar

1) Digite o nome no campo “Nome” e clique em “Adicionar” (ou pressione Enter).
2) Com 2+ participantes, o botão “Sortear” é habilitado.
3) Clique em “Sortear” para gerar os pares; o resultado aparece na área de sorteio.
4) Para remover alguém, use o botão “Remover” ao lado do nome.
5) Para recomeçar, use “Limpar” (lista) e/ou “Limpar resultado”.
6) Recarregue a página para confirmar a persistência do estado (lista e último sorteio).

## Atalhos de teclado

- Enter dentro do campo “Nome”: adiciona o participante.
- Tab/Shift+Tab: navegação por teclado pela interface.

## Critérios de aceitação

- Não permite sortear com menos de 2 participantes.
- Impede nomes vazios, curtos, só espaços ou duplicados (case-insensitive).
- Garantia: ninguém tira a si mesmo.
- Estado persiste entre recarregamentos (participantes e último sorteio).
- Botões refletem o estado (ex.: “Sortear” desabilitado quando < 2 participantes).
- Layout responsivo e contraste adequado (alvo WCAG AA+).

## Acessibilidade (A11y)

- aria-live="polite" para mensagens de feedback e foco programático no contêiner de alertas após ações.
- Labels vinculadas a inputs e aria-label em botões de remover.
- Foco visível em inputs e botões; navegação por teclado total.

## Como rodar localmente

Projeto estático (HTML/CSS/JS). Não requer build.

Opção 1: abra o index.html diretamente no navegador.

Opção 2 (recomendado): servidor local simples para testar melhor o localStorage.
- Python 3 (Windows/macOS/Linux):
  - No terminal, navegue até a pasta do projeto e rode: python -m http.server 8000
  - Acesse: http://localhost:8000
- Alternativas: extensões como “Live Server” no VS Code.

## Stack e estrutura do projeto

- HTML + CSS (tema escuro, cards, foco visível, responsivo).
- JavaScript (app.js único, simples e direto).
- localStorage para persistir participantes e pares.

Estrutura sugerida:
- index.html: marcação semântica com seções de participantes, sorteio e alertas.
- style.css: tema moderno com variáveis CSS e responsividade.
- app.js: validações, sorteio seguro e integração de UI.
- assets/: imagens e ícones (opcional).

## Qualidade (Lint, Testes e CI)

- Lint/format: sugerido ESLint + Prettier (scripts npm opcionais).
- Testes: unitários para drawPairs e ParticipantStore; testes de DOM para fluxos básicos.
- CI: GitHub Actions (opcional) para rodar lint/test e publicar no Pages.

## Roadmap

Curto prazo:
- Testes unitários para drawPairs e ParticipantStore.
- ESLint + Prettier e scripts npm (lint, format, test).
- Workflow de CI e publicação automática no Pages.

Médio prazo:
- Exportar CSV de métricas anônimas (nº de participantes e timestamp do sorteio).
- Telemetria local (opt-in) para análises no Power BI.
- Modo confidencial (exibir receptores individualmente, se necessário).

Longo prazo:
- Integração com Microsoft Power Automate (logs em SharePoint/Teams).
- Restrições de pareamento (evitar pares de um mesmo grupo, por exemplo).
- Internacionalização (i18n) e tema claro/escuro.

## Changelog (resumo)

- feat: validações (trim, mínimo 2, limite 60, duplicados case-insensitive).
- feat: persistência local (localStorage) de participantes e pares.
- feat: acessibilidade (aria-live, foco, labels) e responsividade.
- feat: UI moderna com cards, gradientes e foco visível.
- refactor: mensagens e organização da lógica.

## Privacidade e dados

- Os dados ficam apenas no localStorage do navegador; nada é enviado a servidores.
- Para limpar dados, remova itens via interface ou limpe o armazenamento do site no navegador.
- Para auditoria/transparência, recomenda-se registrar somente métricas anônimas (sem nomes) quando habilitadas.

## FAQ

1) Posso impedir que certas pessoas se tirem entre si?
- Não nesta versão. Está no roadmap um módulo de restrições.

2) O sorteio é “justo” (sem vieses)?
- O algoritmo embaralha receptores e aplica rotação/tentativas para evitar auto-atribuição, retornando erro se não houver combinação válida.

3) Onde ficam os dados?
- No localStorage do seu navegador. Em outro dispositivo/navegador, os dados não aparecem.

4) Como publicar a aplicação?
- Ative o GitHub Pages no repositório, selecione a branch com o index.html e use o link público na seção “Demo”.

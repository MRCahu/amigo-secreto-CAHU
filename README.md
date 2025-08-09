### Amigo Secreto (CAHU)

Aplicação web simples para gerenciar participantes e realizar sorteio de Amigo Secreto com validações robustas, persistência local (localStorage) e acessibilidade (a11y) melhorada.

#### Sumário

- Visão Geral
- Demo (opcional)
- Recursos Principais
- Como Usar
- Critérios de Aceitação
- Acessibilidade (A11y)
- Qualidade (Lint, Testes e CI)
- Como Rodar Localmente
- Estrutura do Projeto
- Roadmap
- Changelog (resumo)
- Privacidade e Dados
- Perguntas Frequentes (FAQ)

#### Visão Geral

O projeto permite cadastrar participantes, validar entradas (incluindo duplicados e nomes inválidos), realizar sorteios garantindo que ninguém tire a si mesmo, visualizar o resultado e manter o estado entre recarregamentos por meio de localStorage. A UI segue boas práticas de acessibilidade.

#### Demo (opcional)

- Habilite o GitHub Pages no repositório (Settings → Pages) para publicar a versão estática do site (branch main ou docs). Após habilitar, adicione aqui o link público da demo.
- Alternativamente, use um servidor local conforme instruções abaixo.

#### Recursos Principais

- Validações: remoção de espaços extras, mínimo de 2 caracteres, limite de 60, bloqueio de duplicados case-insensitive.
- Persistência: participantes e resultado do último sorteio salvos no localStorage.
- Sorteio: algoritmo que evita auto-atribuição com tentativas controladas e rotação.
- Acessibilidade: mensagens via aria-live, foco programático, labels e foco visível.
- UX: botão “Sortear” só habilita com 2+ participantes; pares são invalidados quando a lista é alterada.

#### Como Usar

1) Adicione nomes no campo “Nome” e clique em “Adicionar” (ou pressione Enter).
2) Após incluir ao menos 2 participantes, o botão “Sortear” é habilitado.
3) Clique em “Sortear” para gerar os pares; o resultado aparecerá na lista de sorteio.
4) Use o botão “Remover” ao lado de um nome para excluí-lo; isso zera o resultado do sorteio.
5) Recarregue a página: a lista e o último sorteio serão restaurados automaticamente.

Atalhos úteis:
- Enter no campo de nome: adiciona o participante.

#### Critérios de Aceitação

- Não permite sortear com menos de 2 participantes.
- Impede nomes vazios, muito curtos, só espaços ou duplicados (case-insensitive).
- Ninguém tira a si mesmo no sorteio.
- Estado persiste entre recarregamentos (participantes e último sorteio).
- Botão “Sortear” reflete corretamente o estado (habilita/desabilita conforme a lista).
- Leiaute responsivo e contraste adequado (foco visível; WCAG AA+ como alvo).

#### Acessibilidade (A11y)

- aria-live="polite" para mensagens de feedback e foco programático no contêiner de alertas após ações relevantes.
- Labels vinculadas a inputs e aria-label nos botões de remover.
- Foco visível em botões e inputs; navegação por teclado suportada.

#### Qualidade (Lint, Testes e CI)

- Lint/Format sugeridos: ESLint + Prettier (scripts a configurar via npm, opcional).
- Testes sugeridos: unitários para drawPairs e ParticipantStore; testes de DOM para interações básicas.
- CI (opcional): GitHub Actions para rodar lint e testes a cada PR; deploy automatizado no Pages.

#### Como Rodar Localmente

Por ser projeto estático (HTML/CSS/JS), não requer build.

Opção 1: abrir o index.html diretamente no navegador.

Opção 2: usar um servidor local simples (recomendado para testar localStorage e rotas):
- Com Python 3: navegue até a pasta do projeto e rode:
  - Windows/macOS/Linux: `python -m http.server 8000`
  - Depois, acesse http://localhost:8000 no navegador.
- Extensões como “Live Server” do VS Code também funcionam bem.

#### Estrutura do Projeto

- index.html: marcação semântica com áreas de participantes, sorteio e alertas.
- style.css: estilos com variáveis CSS, foco visível, responsividade.
- app.js: validações, persistência via localStorage, sorteio e lógica de UI.
- assets/ (opcional): imagens e ícones.

#### Roadmap

Curto prazo:
- Testes unitários para drawPairs e ParticipantStore.
- Adição de ESLint + Prettier e scripts npm (lint, format, test).
- Workflow de CI (GitHub Actions) e publicação no Pages.

Médio prazo:
- Exportação CSV de métricas anônimas (número de participantes, timestamp do sorteio).
- Mini-telemetria local (opt-in) para relatórios no Power BI.
- Modo confidencial (ocultar receptores ao público e exibir individualmente por link/código, se necessário).

Longo prazo:
- Integração com Microsoft Power Automate para enviar logs a SharePoint/Teams.
- Mecanismo de restrições (ex.: evitar que pessoas de um mesmo grupo tirem entre si).
- Internacionalização (i18n) e tema claro/escuro.

#### Changelog (resumo)

- feat: validações de entrada (trim, mínimo 2, limite 60, duplicados case-insensitive).
- feat: persistência local (localStorage) de participantes e pares.
- feat: melhorias de acessibilidade (aria-live, foco, labels) e responsividade.
- refactor: organização da lógica e mensagens de feedback.

#### Privacidade e Dados

- O aplicativo utiliza apenas localStorage do navegador; não há envio de dados a servidores.
- Dados podem ser limpos removendo itens via interface ou apagando o armazenamento do site no navegador.
- Para auditoria/transparência, recomendamos manter registros somente de métricas anônimas, se habilitadas no futuro (sem nomes dos participantes).

#### Perguntas Frequentes (FAQ)

1) Posso impedir que alguém tire um par específico?
- Não nesta versão. Está no roadmap um módulo de restrições (evitar pares indesejados ou do mesmo grupo).

2) O sorteio é “justo” (sem vieses)?
- O algoritmo embaralha receptores e aplica rotação/tentativas para evitar auto-atribuição, reduzindo falhas. Para grupos grandes, a chance de colisão é baixa; para grupos pequenos, o mecanismo de tentativa garante um resultado válido ou falha com mensagem.

3) Onde ficam os dados?
- No localStorage do seu navegador. Se abrir em outro navegador/dispositivo, não haverá sincronização automática.

4) Como publicar a aplicação?
- Ative o GitHub Pages e aponte para a branch com o index.html. Atualize a seção “Demo” com o link público.

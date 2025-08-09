🎁 Amigo Secreto (CAHU)

Aplicação web moderna para gerenciar participantes e realizar sorteio de Amigo Secreto com validações robustas, persistência local e acessibilidade aprimorada.

📋 Sumário
🎯 Visão Geral
🚀 Demo
✨ Recursos Principais
📖 Como Usar
✅ Critérios de Aceitação
♿ Acessibilidade
🔧 Como Rodar Localmente
📁 Estrutura do Projeto
🛣️ Roadmap
📊 Changelog
🔒 Privacidade e Dados
❓ FAQ
🎯 Visão Geral

O Amigo Secreto CAHU é uma aplicação web que permite:

✅ Cadastrar participantes com validações inteligentes
🎲 Realizar sorteios garantindo que ninguém tire a si mesmo
💾 Manter dados persistentes entre sessões (localStorage)
♿ Experiência acessível seguindo padrões WCAG AA
📱 Interface responsiva e moderna
🚀 Demo

🔗 Acesse a demo ao vivo

Para habilitar: vá em Settings → Pages no GitHub e configure a branch main como fonte.

✨ Recursos Principais
🛡️ Validações Robustas
Remoção automática de espaços extras
Mínimo de 2 caracteres, máximo de 60
Bloqueio de duplicados (case-insensitive)
Feedback imediato para o usuário
💾 Persistência Inteligente
Participantes salvos automaticamente no localStorage
Resultado do último sorteio preservado
Estado restaurado ao recarregar a página
🎲 Algoritmo de Sorteio
Evita auto-atribuição com sistema de tentativas
Embaralhamento seguro com rotação controlada
Validação de resultado antes de exibir
♿ Acessibilidade Completa
Mensagens via aria-live para leitores de tela
Foco programático e navegação por teclado
Labels semânticas e contraste adequado
Suporte completo a tecnologias assistivas
📖 Como Usar
Passo a Passo

Adicionar Participantes

Digite um nome no campo "Nome"
Clique em "Adicionar" ou pressione Enter
Repita até ter pelo menos 2 participantes

Realizar Sorteio

O botão "Sortear" é habilitado automaticamente com 2+ participantes
Clique para gerar os pares
O resultado aparece na seção "Sorteio"

Gerenciar Lista

Use "Remover" ao lado de cada nome para excluir
"Limpar" remove todos os participantes
"Limpar resultado" zera apenas o sorteio
⌨️ Atalhos de Teclado
Ação	Atalho
Adicionar participante	Enter no campo nome
Navegar entre elementos	Tab / Shift + Tab
Ativar botões	Space ou Enter
✅ Critérios de Aceitação
 Impede sorteio com menos de 2 participantes
 Bloqueia nomes inválidos (vazios, curtos, duplicados)
 Garante que ninguém tire a si mesmo
 Persiste dados entre recarregamentos
 Interface responsiva (mobile-first)
 Contraste adequado e foco visível
 Suporte completo a leitores de tela
♿ Acessibilidade (A11y)
Recursos Implementados
Semântica HTML5: uso correto de header, main, section
ARIA Labels: botões e listas devidamente rotulados
Live Regions: aria-live="polite" para feedback
Foco Gerenciado: navegação lógica e foco programático
Contraste: cores seguem padrões WCAG AA
Responsividade: funciona em todos os tamanhos de tela
Testado Com
✅ NVDA (Windows)
✅ JAWS (Windows)
✅ VoiceOver (macOS/iOS)
✅ TalkBack (Android)
🔧 Como Rodar Localmente
Opção 1: Servidor Python (Recomendado)
# Clone o repositório
git clone https://github.com/MRCahu/amigo-secreto-CAHU.git
cd amigo-secreto-CAHU

# Inicie o servidor local
python -m http.server 8000

# Acesse no navegador
# http://localhost:8000

Opção 2: Node.js
# Com npx (sem instalação)
npx serve . -l 8000

# Ou com http-server
npx http-server . -p 8000

Opção 3: VS Code Live Server
Instale a extensão "Live Server"
Clique com botão direito em index.html
Selecione "Open with Live Server"
📁 Estrutura do Projeto
amigo-secreto-CAHU/
├── 📄 index.html          # Estrutura HTML semântica
├── 🎨 style.css           # Estilos modernos com CSS Grid/Flexbox
├── ⚡ app.js              # Lógica JavaScript (ES6 modules)
├── 📖 README.md           # Documentação completa
└── 📁 assets/             # Recursos estáticos (futuro)
    └── 🖼️ icons/          # Ícones SVG

Tecnologias Utilizadas
HTML5: Semântica e acessibilidade
CSS3: Grid, Flexbox, Custom Properties
JavaScript ES6+: Modules, Classes, Arrow Functions
Web APIs: localStorage, DOM manipulation
🛣️ Roadmap
🎯 Curto Prazo (v1.1)
 Testes unitários (Jest)
 ESLint + Prettier
 GitHub Actions (CI/CD)
 Publicação automática no Pages
🚀 Médio Prazo (v1.2)
 Exportação de resultados (CSV/JSON)
 Modo confidencial (links individuais)
 Histórico de sorteios
 Tema claro/escuro
🌟 Longo Prazo (v2.0)
 Integração Power Automate
 Sistema de restrições avançado
 Internacionalização (i18n)
 PWA (Progressive Web App)
📊 Changelog
v1.0.0 (Atual)
✨ feat: Validações robustas de entrada
✨ feat: Persistência com localStorage
✨ feat: Acessibilidade WCAG AA
✨ feat: Interface moderna e responsiva
🔧 refactor: Arquitetura modular com classes
📝 docs: Documentação completa
🔒 Privacidade e Dados
🛡️ Compromisso com a Privacidade
100% Local: Todos os dados ficam no seu navegador
Zero Tracking: Não coletamos informações pessoais
Transparente: Código aberto e auditável
Controle Total: Você pode limpar os dados a qualquer momento
🗑️ Como Limpar Dados
Via Interface: Use os botões "Limpar" na aplicação
Via Navegador:
Chrome: F12 → Application → Storage → Clear storage
Firefox: F12 → Storage → Local Storage → Delete
❓ Perguntas Frequentes (FAQ)
🤔 Posso impedir pares específicos?

Não na versão atual. O sistema de restrições avançadas está planejado para v2.0, permitindo definir grupos e regras personalizadas.

🎲 O sorteio é realmente aleatório?

Sim! Utilizamos:

Math.random() para embaralhamento inicial
Sistema de rotação para evitar auto-atribuição
Até 1000 tentativas para garantir resultado válido
Validação final antes de exibir
💾 Os dados sincronizam entre dispositivos?

Não. Os dados ficam no localStorage do navegador atual. Para sincronização, considere:

Exportar/importar manualmente
Aguardar a versão PWA com sync opcional
🌐 Como publicar para minha equipe?

GitHub Pages (gratuito):

Settings → Pages → Source: Deploy from branch → main


Netlify/Vercel (gratuito):

Conecte seu repositório
Deploy automático a cada commit

Servidor próprio:

Faça upload dos arquivos para qualquer hosting
🐛 Encontrei um bug!

Abra uma issue no GitHub com:

Descrição detalhada
Passos para reproduzir
Navegador e versão
Screenshots (se aplicável)

Feito com ❤️ para facilitar seus sorteios de Amigo Secreto

⭐ Dê uma estrela • 🐛 Reportar Bug • 💡 Sugerir Feature

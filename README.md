# 🎁 Amigo Secreto (CAHU)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%20AA-blue)](https://www.w3.org/WAI/WCAG21/quickref/)

> Aplicação web moderna para gerenciar participantes e realizar sorteio de Amigo Secreto com validações robustas, persistência local e acessibilidade aprimorada.

## 📋 Sumário

- [🎯 Visão Geral](#-visão-geral)
- [🚀 Demo](#-demo)
- [✨ Recursos Principais](#-recursos-principais)
- [📖 Como Usar](#-como-usar)
- [✅ Critérios de Aceitação](#-critérios-de-aceitação)
- [♿ Acessibilidade](#-acessibilidade-a11y)
- [🔧 Como Rodar Localmente](#-como-rodar-localmente)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛣️ Roadmap](#️-roadmap)
- [📊 Changelog](#-changelog)
- [🔒 Privacidade e Dados](#-privacidade-e-dados)
- [❓ FAQ](#-perguntas-frequentes-faq)

## 🎯 Visão Geral

O **Amigo Secreto CAHU** permite cadastrar participantes com validações inteligentes, realizar sorteios garantindo que ninguém tire a si mesmo, manter dados persistentes entre sessões (localStorage), oferecer experiência acessível (WCAG AA) e interface responsiva e moderna.

## 🚀 Demo

- Após publicar no GitHub Pages, substitua pelo link da sua demo:
  - Demo pública: INSIRA_AQUI_O_LINK_DA_DEMO
- Alternativamente, utilize um servidor local (ver seção “Como Rodar Localmente”).

## ✨ Recursos Principais

### 🛡️ Validações robustas
- Remoção automática de espaços extras.
- Mínimo de 2 caracteres, máximo de 60.
- Bloqueio de duplicados (case-insensitive).
- Feedback imediato para o usuário.

### 💾 Persistência inteligente
- Participantes salvos automaticamente no localStorage.
- Resultado do último sorteio preservado.
- Estado restaurado ao recarregar a página.

### 🎲 Algoritmo de sorteio
- Evita auto-atribuição com sistema de tentativas e rotação.
- Embaralhamento seguro (Fisher–Yates).
- Validação de resultado antes de exibir.

### ♿ Acessibilidade
- Mensagens via `aria-live` para leitores de tela.
- Foco programático e navegação por teclado.
- Labels semânticas e contraste adequado.

## 📖 Como Usar

1) Adicione nomes no campo “Nome” e clique em “Adicionar” (ou pressione Enter).  
2) Após incluir ao menos 2 participantes, o botão “Sortear” é habilitado.  
3) Clique em “Sortear” para gerar os pares; o resultado aparecerá na seção de sorteio.  
4) Use o botão “Remover” ao lado de um nome para excluí-lo; isso zera o resultado do sorteio.  
5) Recarregue a página: a lista e o último sorteio serão restaurados automaticamente.

Atalhos de teclado:
- Enter no campo de nome: adiciona participante.
- Tab/Shift+Tab: navegação entre elementos.
- Space/Enter: ativa botões focados.

## ✅ Critérios de Aceitação

- Impede sortear com menos de 2 participantes.
- Bloqueia nomes inválidos: vazios, muito curtos, só espaços, duplicados (case-insensitive).
- Garante que ninguém tire a si mesmo.
- Persiste dados entre recarregamentos (participantes e último sorteio).
- Botão “Sortear” habilita/desabilita corretamente conforme a lista.
- Leiaute responsivo e contraste adequado (foco visível; alvo WCAG AA+).

## ♿ Acessibilidade (A11y)

- `aria-live="polite"` para mensagens de feedback e foco programático no contêiner de alertas após ações relevantes.
- Labels vinculadas a inputs e `aria-label` nos botões de remover.
- Foco visível em botões e inputs; navegação por teclado suportada.

Testado com: NVDA/JAWS (Windows), VoiceOver (macOS/iOS) e TalkBack (Android).

## 🔧 Como Rodar Localmente

Projeto estático (HTML/CSS/JS), sem build obrigatório.

Opção 1: abrir o `index.html` diretamente no navegador.

Opção 2: servidor local simples (recomendado para testar localStorage e rotas):

```bash
# Clone o repositório
git clone https://github.com/MRCahu/amigo-secreto-CAHU.git
cd amigo-secreto-CAHU

# Iniciar com Python 3 (Windows/macOS/Linux)
python -m http.server 8000

# Acesse no navegador:
# http://localhost:8000

<img width="1220" height="573" alt="image" src="https://github.com/user-attachments/assets/2cfcc91a-995d-4b28-9904-36182df54189" />

# 🎁 Amigo Secreto (CAHU)

> Aplicação web moderna para gerenciar participantes e realizar sorteio de Amigo Secreto com validações robustas, persistência local e acessibilidade aprimorada.

## 📋 Sumário

- [🎯 Visão Geral](#-visão-geral)
- [🚀 Demo](#-demo)
- [✨ Recursos Principais](#-recursos-principais)
- [📖 Como Usar](#-como-usar)
- [✅ Critérios de Aceitação](#-critérios-de-aceitação)
- [♿ Acessibilidade](#-acessibilidade-a11y)
- [🔧 Como Rodar Localmente](#-como-rodar-localmente)

## 🎯 Visão Geral

O Amigo Secreto CAHU é uma aplicação web que permite:

- ✅ Cadastrar participantes com validações inteligentes  
- 🎲 Realizar sorteios garantindo que ninguém tire a si mesmo  
- 💾 Manter dados persistentes entre sessões (localStorage)  
- ♿ Experiência acessível seguindo padrões WCAG AA  
- 📱 Interface responsiva e moderna

## 🚀 Demo

- 🔗 Acesse a demo ao vivo: [INSIRA_AQUI_O_LINK_DA_DEMO](https://mrcahu.github.io/amigo-secreto-CAHU)

Para habilitar: vá em Settings → Pages no GitHub e configure a branch main como fonte.

## ✨ Recursos Principais

### 🛡️ Validações Robustas
- Remoção automática de espaços extras  
- Mínimo de 2 caracteres, máximo de 60  
- Bloqueio de duplicados (case-insensitive)  
- Feedback imediato para o usuário

### 💾 Persistência Inteligente
- Participantes salvos automaticamente no localStorage  
- Resultado do último sorteio preservado  
- Estado restaurado ao recarregar a página

### 🎲 Algoritmo de Sorteio
- Evita auto-atribuição com sistema de tentativas  
- Embaralhamento seguro com rotação controlada  
- Validação de resultado antes de exibir

### ♿ Acessibilidade Completa
- Mensagens via aria-live para leitores de tela  
- Foco programático e navegação por teclado  
- Labels semânticas e contraste adequado  
- Suporte completo a tecnologias assistivas

## 📖 Como Usar

### Passo a Passo

1) Adicionar Participantes  
- Digite um nome no campo "Nome"  
- Clique em "Adicionar" ou pressione Enter  
- Repita até ter pelo menos 2 participantes

2) Realizar Sorteio  
- O botão "Sortear" é habilitado automaticamente com 2+ participantes  
- Clique para gerar os pares  
- O resultado aparece na seção "Sorteio"

3) Gerenciar Lista  
- Use "Remover" ao lado de cada nome para excluir  
- "Limpar" remove todos os participantes  
- "Limpar resultado" zera apenas o sorteio

### ⌨️ Atalhos de Teclado

| Ação                     | Atalho                     |
|--------------------------|----------------------------|
| Adicionar participante   | Enter no campo nome        |
| Navegar entre elementos  | Tab / Shift + Tab          |
| Ativar botões            | Space ou Enter             |

## ✅ Critérios de Aceitação

- Impede sorteio com menos de 2 participantes  
- Bloqueia nomes inválidos (vazios, curtos, duplicados)  
- Garante que ninguém tire a si mesmo  
- Persiste dados entre recarregamentos  
- Interface responsiva (mobile-first)  
- Contraste adequado e foco visível  
- Suporte completo a leitores de tela

## ♿ Acessibilidade (A11y)

### Recursos Implementados
- Semântica HTML5: uso correto de header, main, section  
- ARIA Labels: botões e listas devidamente rotulados  
- Live Regions: aria-live="polite" para feedback  
- Foco Gerenciado: navegação lógica e foco programático  
- Contraste: cores seguem padrões WCAG AA  
- Responsividade: funciona em todos os tamanhos de tela

### Testado Com
- ✅ NVDA (Windows)  
- ✅ JAWS (Windows)  
- ✅ VoiceOver (macOS/iOS)  
- ✅ TalkBack (Android)

## 🔧 Como Rodar Localmente

### Opção 1: Servidor Python (Recomendado)

```bash
# Clone o repositório
git clone https://github.com/MRCahu/amigo-secreto-CAHU.git
cd amigo-secreto-CAHU

# Inicie o servidor local
python -m http.server 8000

# Acesse no navegador
# http://localhost:8000

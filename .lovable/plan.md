

# Ajuste Global de Layout — Alinhamento e Coesão

## Problema
Inconsistência de layout em todo o site: muitas páginas ainda usam `container max-w-[1600px] mx-auto` ou `container max-w-3xl mx-auto`, que conflita com a arquitetura de sidebar fixa (80px) + conteúdo fluido à esquerda. O Footer também usa esse padrão centralizado. Isso causa desalinhamentos visuais entre páginas e seções.

## Solução
Padronizar **todas as páginas e o Footer** para usar apenas `px-6` como padding horizontal, sem `container`, `max-w-*` ou `mx-auto`. Conteúdo de texto longo (Sobre, Termos, Privacidade, FAQ, Contato) usará `max-w-3xl` sem `mx-auto` (alinhado à esquerda). Login/Register mantêm centralização vertical mas com `mx-auto` apenas no card do formulário.

## Arquivos a Modificar

### 1. Footer.tsx
- Trocar `container max-w-[1600px] mx-auto px-6` por `px-6`

### 2. Páginas com `container max-w-[1600px] mx-auto px-6`
Trocar por apenas `px-6` em:
- **Events.tsx** (linha 38)
- **Marketplace.tsx** (linha 46)
- **EventDetail.tsx** (linha 57)
- **AdDetail.tsx** (linha 40)
- **Dashboard.tsx** (linha 51)
- **News.tsx** (linha 9)
- **PostDetail.tsx** (linha 26)

### 3. Páginas com `container max-w-3xl mx-auto px-6`
Trocar por `px-6 max-w-3xl` (sem container, sem mx-auto) em:
- **About.tsx** (linha 8)
- **Terms.tsx** (linha 7)
- **Privacy.tsx** (linha 7)
- **FAQ.tsx** (linha 18)

### 4. Contact.tsx
- Trocar `container max-w-lg mx-auto px-6` por `px-6 max-w-lg`

### 5. EventDetail.tsx (linha 21)
- Trocar `container` por `px-6` no bloco "não encontrado"

### Total: 13 arquivos, substituição simples de classes CSS em cada um


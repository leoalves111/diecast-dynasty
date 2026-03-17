

# Redesign CollectorsHub com Layout e Estilo do Loot Box Drops

## O que muda

Transformar completamente o visual e layout do CollectorsHub para seguir o estilo do projeto "Loot Box Drops" (Lootly): layout com sidebar fixa lateral + navbar superior, tema neon-verde (#CCFF00) sobre fundo escuro, tipografia Inter bold/black, cards com gradientes e glows por categoria, grid pattern de fundo, scrollbar customizado, ticker de drops ao vivo.

## Arquitetura de Layout

```text
┌──────┬───────────────────────────────────┐
│      │  NAVBAR (sticky, search, user)    │
│ SIDE │───────────────────────────────────│
│ BAR  │                                   │
│ 96px │  CONTENT AREA (scrollable)        │
│      │  - grid-pattern background        │
│      │  - max-w-[1600px] centered        │
│      │                                   │
│      │  FOOTER (inside content)          │
└──────┴───────────────────────────────────┘
```

O header atual (fixo no topo) será substituído por:
1. **Sidebar fixa** (96px, esquerda) com ícones + labels (Início, Eventos, Marketplace, Novidades, Sobre)
2. **Navbar superior** (dentro da área de conteúdo) com busca, botão destaque e menu do usuário

## Design System (index.css + tailwind.config.ts)

### Paleta de Cores
- Primary: `78 100% 50%` (#CCFF00 neon green)
- Background: `222 17% 8%`
- Card: `222 17% 10%`
- Border/Secondary: `217 19% 27%`
- Muted foreground: `215 20% 65%`
- Custom tokens: gold, purple, blue, surface, rarity colors

### Tipografia
- Apenas Inter (sem Outfit) — font-black, uppercase, italic para headings
- Tracking tight/wide conforme contexto

### Efeitos CSS
- Scrollbar customizado (5px, cinza escuro)
- Ticker animation para live drops
- Glow effects (gold, por categoria)
- Grid pattern overlay
- Gradient border pseudo-element
- hide-scrollbar utility

## Arquivos a Criar/Modificar

### Novos Componentes
1. **`src/components/layout/Sidebar.tsx`** — Sidebar fixa com ícones (Home, Box/Eventos, ShoppingCart/Marketplace, Newspaper/Novidades, Info/Sobre) + tooltips + indicador ativo (barra verde lateral)
2. **`src/components/layout/Navbar.tsx`** — Barra superior com busca, botão "Participar de Eventos" (neon), notificações, avatar/dropdown do usuário
3. **`src/components/layout/MainLayout.tsx`** — Wrapper: Sidebar + coluna principal (Navbar + content com grid-pattern)

### Arquivos Modificados
4. **`src/index.css`** — Trocar toda a paleta para Lootly style, adicionar scrollbar, ticker, glow, grid-pattern, gradient-border utilities
5. **`tailwind.config.ts`** — Remover font-display (Outfit), adicionar cores custom (gold, surface, rarity), animações (glow-pulse, ticker)
6. **`src/components/layout/Layout.tsx`** — Usar MainLayout ao invés de Header+Footer separados
7. **`src/components/layout/Header.tsx`** — Removido/deprecated (substituído por Sidebar+Navbar)
8. **`src/components/layout/Footer.tsx`** — Redesign no estilo Lootly: fundo #050608, links com hover verde neon, ícones sociais com hover bg-primary, badge "Operacional", métodos de pagamento
9. **`src/pages/Index.tsx`** — Hero com imagem de fundo + overlay + skewed button, ticker de drops ao vivo, features/trust indicators, live statistics, carrosséis com border-l-4 primary, marketing banners, categorias em grid, seção top 5, FAQ accordion — tudo no estilo visual Lootly
10. **`src/components/cards/EventCard.tsx`** — Redesign: aspect-ratio vertical, gradient thumbnail, preço no canto superior, hover com translate-y e glow, texto uppercase bold
11. **`src/components/cards/AdCard.tsx`** — Mesmo padrão visual
12. **`src/components/cards/PostCard.tsx`** — Mesmo padrão visual
13. **Todas as páginas** — Remover referências a `font-display`, `text-gradient-primary`, `bg-gradient-primary` antigos; substituir por classes neon green (`text-primary`, `bg-primary`, uppercase bold italic headings)

### Detalhes Técnicos

- Remover import do Google Fonts Outfit (manter apenas Inter)
- Substituir `bg-gradient-primary` (laranja) por `bg-primary` (neon green) em todos os botões
- Substituir `text-gradient-primary` por `text-primary` em headings
- Headers: de `font-display text-3xl font-bold` para `text-2xl font-black italic uppercase tracking-tighter`
- Cards: adicionar `backdrop-blur-sm`, borders com `border-white/5`, hover com `border-primary/50`
- Botões de destaque: `skew-x-[-10deg]` com `shadow-[0_0_15px_rgba(204,255,0,0.2)]`
- Section headers: `border-l-4 border-primary pl-4` pattern
- Stats: uppercase tracking-widest labels, font-black values

## Escopo por Prioridade

1. **Design system** (index.css, tailwind.config.ts) — Base de tudo
2. **Layout** (Sidebar, Navbar, MainLayout, Layout.tsx) — Estrutura visual
3. **Home page** (Index.tsx) — Impacto visual principal
4. **Cards** (EventCard, AdCard, PostCard) — Componentes reutilizáveis
5. **Footer** — Redesign completo
6. **Páginas restantes** — Aplicar novo estilo (Events, Marketplace, EventDetail, AdDetail, News, PostDetail, Dashboard, Auth pages, institutional pages)


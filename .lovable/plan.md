

# Análise de Implementação — CollectorsHub

## ✅ O que já foi implementado

### Design System
- Paleta de cores correta (#0B0D10, #14181F, #FF5C1A, #FFB800)
- Tipografia Outfit + Inter
- Cards com hover, bordas, sombras
- Gradientes e glows premium

### Páginas Implementadas
- **Home**: Hero, stats, eventos em destaque, como funciona, marketplace, novidades, benefícios, prova social, CTA final ✅
- **Eventos**: Listagem com filtros (status, marca), busca, grid responsivo ✅
- **Detalhe do Evento**: Galeria, info completa, bloco item, regras, sidebar fixa, eventos relacionados, FAQ ✅
- **Marketplace**: Listagem com filtros (marca, condição, ordenação), busca ✅
- **Detalhe do Anúncio**: Galeria, info, bloco vendedor, botão WhatsApp, aviso, relacionados ✅
- **Novidades**: Grid de posts ✅
- **Detalhe do Post**: Banner, conteúdo, sidebar com outros posts ✅
- **Dashboard**: Visão geral, perfil, meus anúncios, criar anúncio, eventos, favoritos, configurações ✅
- **Login, Cadastro, Recuperar Senha**: Formulários completos ✅
- **Sobre, Termos, Privacidade, FAQ, Contato**: Páginas institucionais ✅
- **Header e Footer**: Completos com navegação e links ✅

### Componentes
- EventCard, AdCard, PostCard com visual premium ✅
- Barras de progresso, badges, tags, status ✅

---

## ❌ O que está faltando ou pode ser melhorado

### 1. **Filtros faltando em Eventos**
- [ ] Filtro "em destaque"
- [ ] Filtro por faixa de valor (preço)
- [ ] Filtro por categoria

### 2. **Filtros faltando em Marketplace**
- [ ] Filtro por categoria
- [ ] Filtro por cidade
- [ ] Filtro por estado
- [ ] Filtro por faixa de preço (slider ou range)

### 3. **EventCard — Zoom na galeria**
- [ ] Implementar modal/lightbox com zoom ao clicar nas imagens do evento

### 4. **Dashboard — Upload de fotos**
- [ ] Adicionar campo visual para upload de fotos no formulário "Criar Anúncio"
- [ ] Adicionar campo para foto de perfil/avatar

### 5. **Footer — Redes sociais**
- [ ] Adicionar ícones de redes sociais (Instagram, YouTube, etc.)

### 6. **AdDetail — Galeria com múltiplas fotos**
- [ ] Implementar navegação de miniaturas como no EventDetail (atualmente usa apenas a primeira imagem)

---

## Plano de Implementação

### Fase 1 — Filtros completos
1. **Eventos**: Adicionar filtros por categoria e faixa de valor
2. **Marketplace**: Adicionar filtros por categoria, cidade, estado e faixa de preço

### Fase 2 — Melhorias visuais
3. **EventDetail**: Adicionar modal/lightbox com zoom nas imagens
4. **AdDetail**: Implementar navegação de galeria com miniaturas

### Fase 3 — Upload e perfil
5. **Dashboard**: Adicionar campos de upload visual para fotos (simulado, sem backend)
6. **Perfil**: Adicionar campo de avatar

### Fase 4 — Footer
7. Adicionar ícones de redes sociais com links

---

## Detalhes Técnicos

- **Filtros**: Usar estado local com `useState`, arrays de opções e lógica de filtragem
- **Modal de zoom**: Usar Radix Dialog com imagem em tela cheia
- **Upload simulado**: Usar `input type="file"` com preview visual (sem persistência)
- **Redes sociais**: Usar ícones do Lucide (Instagram, Youtube, Twitter/X)


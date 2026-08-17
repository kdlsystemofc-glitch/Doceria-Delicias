# 08 — MOTION IMPLEMENTATION SPECIFICATION
## DOCERIA DELÍCIAS — FIDELIDADE DE MOVIMENTO & INTERAÇÃO (PHASE 06)
### Gramática de Movimento Reversa, Gatilhos, Easing e Métricas de Performance

---

```
================================================================================
                       SISTEMA DE MOTION & FIDELIDADE INTERATIVA
================================================================================
Filosofia: Motion as Architecture (§13 Manifesto). Movimento atrelado à física
           confeiteira, progressão contínua de scroll e microinterações táteis.
Biblioteca: GSAP 3.12.5 + ScrollTrigger + CSS Transitions com aceleração de hardware.
================================================================================
```

---

## 1. TABELA COMPLETA DE INTERAÇÕES E MOTION GRAMMAR

| # | Cena / Componente | TRIGGER | TARGET | PROPERTY | DURATION | EASING | SCROLL RELATIONSHIP | RESPONSIVE BEHAVIOR |
| :- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Hero Entrance Sequence** | `DOMContentLoaded` | `.hero-giant-heading`, `.hero-lead-paragraph`, `.falling-candy`, `.hero-sticker-badge` | `opacity`, `transform: translateY()`, `scale()`, `rotation` | `1.2s` total (`stagger: 0.05s` nos doces) | `power3.out` e `back.out(1.4)` | N/A (Entrada inicial na viewport) | Distâncias reduzidas no mobile (390px) para evitar overflow lateral. |
| **02** | **Continuous Candies Float** | Ambient Loop (`@keyframes`) | `.blur-candy`, `.falling-candy` | `transform: translateY() rotate()` | `5.5s` a `8.5s` | `ease-in-out` infinito | Movimento oscilatório suave independente | Mantido com amplitudes menores no mobile. |
| **03** | **Sticker Continuous Spin** | Ambient Loop (`@keyframes`) | `.sticker-scallop-svg` | `transform: rotate()` | `22s` | `linear` infinito | Rotação 360° contínua | Mantido em 7.5rem de diâmetro no mobile. |
| **04** | **Sticker Hover Bounce** | Mouse Hover / Touch | `.hero-sticker-badge` | `transform: scale() rotate()` | `0.35s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | N/A | Escala para `1.14` com leve inclinação anti-horária (`-10deg`). |
| **05** | **Header Frosted Glass** | `window.onscroll` (> 25px) | `.site-header` | `background-color`, `backdrop-filter`, `box-shadow`, `padding` | `0.4s` | `cubic-bezier(0.16, 1, 0.3, 1)` | Atrelado ao scroll da página (passivo) | Compacta de 1.75rem para 1.1rem de padding mantendo legibilidade. |
| **06** | **Fullscreen Mega Menu** | Click no Pill Button | `#mega-menu-overlay`, `.menu-content-wrapper`, `.menu-giant-link` | `opacity`, `transform: translateY()`, `scale()` | `0.45s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Trava o scroll do body (`overflow: hidden`) | Links se adaptam à largura da tela com escala tátil no toque. Suporte à tecla `Escape`. |
| **07** | **Pinned Cloud Zoom (Portal)** | Scroll na seção Portal | `.portal-cloud-top`, `.portal-cloud-left`, `.portal-sticky-center` | `x`, `y`, `scale`, `opacity` | Scrubbed (`scrub: 1`) | `power2.out` | GSAP ScrollTrigger (`top bottom` até `center center`) | Nuvens se afastam lateralmente enquanto o título se aproxima com escala suave (`1.05x`). |
| **08** | **Atelier Hotspots Radar** | Ambient Loop (`@keyframes`) | `.hotspot-ping` | `transform: scale()`, `opacity` | `2.2s` | `cubic-bezier(0.4, 0, 0.6, 1)` infinito | N/A | Pulso contínuo indicando interatividade em cada obra da vitrine. |
| **09** | **Atelier Hotspot Modal** | Click no Hotspot Pin | `#atelier-modal-backdrop`, `.atelier-modal-card` | `opacity: 0 -> 1`, `transform: translateY(30px) scale(0.95) -> 0 scale(1)` | `0.35s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Abre gaveta modal com foto real, ingredientes e CTA WhatsApp | Fecha ao clicar fora, no botão `X` ou com a tecla `Escape`. |
| **10** | **4 Realms Stagger Reveal** | ScrollTrigger no Grid | `.realm-card` | `y: 50 -> 0`, `opacity: 0 -> 1` | `0.8s` | `power3.out` (`stagger: 0.15s`) | Disparado quando o topo da seção atinge 75% da viewport | No mobile, cada card entra sequencialmente em coluna única. |
| **11** | **Realm Card Overflow Hover** | Hover / Touch | `.realm-card`, `.realm-image-overflow` | `transform: translateY(-10px)`, `scale(1.1) rotate(4deg)` | `0.45s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | N/A | A imagem do produto transborda e se projeta em direção ao usuário com mola tátil. |
| **12** | **Bestsellers Drag & Scroll** | Mouse Drag / Touch Swipe | `.bestsellers-track-wrapper` | `scrollLeft` | Físico com inércia | Momentum contínuo | Cursor muda para `grab` / `grabbing` no desktop e swipe nativo no mobile. |
| **13** | **Celebration Stacked Cards** | ScrollTrigger | `.celebration-card` | `y: 40 -> 0`, `opacity: 0 -> 1` | `0.75s` | `power2.out` (`stagger: 0.18s`) | Coluna esquerda permanece fixa (`position: sticky; top: 7rem`) | No mobile, a coluna esquerda destrava e os cards seguem o fluxo vertical. |
| **14** | **Heritage Pillars Stagger** | ScrollTrigger | `.heritage-pillar-item` | `y: 30 -> 0`, `opacity: 0 -> 1` | `0.6s` | `power2.out` (`stagger: 0.12s`) | Disparado aos 70% da viewport | Cards ganham destaque visual e elevação sutil no hover. |
| **15** | **Reviews Satellite Pop** | ScrollTrigger | `.reviews-center-emblem`, `.satellite-review-card` | `scale: 0.85 -> 1`, `y: 40 -> 0`, `opacity: 0 -> 1` | `0.8s` | `back.out(1.5)` | Disparado aos 75% da viewport | Emblema 4.7★ surge em escala elástica seguido pelos cards orbitais. |
| **16** | **WhatsApp CTA Pulse** | Hover / Touch | `.whatsapp-main-button`, `.chip-action-btn` | `transform: translateY(-4px) scale(1.02)`, `box-shadow` | `0.3s` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | N/A | Elevação verde expressiva com sombra difusa verde (`rgba(37, 211, 102, 0.45)`). |

---

## 2. POLÍTICA DE PERFORMANCE & ACESSIBILIDADE

### A. Zero Layout Thrashing & GPU Offload
- Todas as animações utilizam exclusivamente as propriedades `transform`, `opacity` e `backdrop-filter`.
- Zero recálculo de layout forçado (`offsetWidth` em loops) ou re-layout desnecessário.
- Uso de `will-change: transform` nos elementos que sofrem deslocamento contínuo durante a rolagem.

### B. Respeito Rigoroso a `prefers-reduced-motion`
Para usuários com sensibilidade a movimento:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
No JavaScript, a flag `window.matchMedia('(prefers-reduced-motion: reduce)').matches` desativa automaticamente o scrubbing do ScrollTrigger e as timelines de queda do Hero.

### C. Testes Automatizados de Scroll
Executado via Puppeteer:
- Rolagem contínua do topo ao rodapé: **Sucesso 100% sem jank ou travamentos**.
- Interação com Mega-Menu e tecla `Escape`: **Sucesso**.
- Abertura e fechamento de modal de Hotspots no Ateliê: **Sucesso**.
- **Erros de console:** `0 erros`.

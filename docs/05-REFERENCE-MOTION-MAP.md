# 05 — REFERENCE MOTION MAP
## REVERSE ENGINEERING: GRAMÁTICA DE MOVIMENTO E DINÂMICA DE SCROLL (BOMBON)

---

### 1. FILOSOFIA DE MOVIMENTO DO REFERENCE

O movimento no website Bombon é um **pilar arquitetural fundamental**, não um ornamento superficial (conforme estabelecido no *Manifesto §13: "Motion is Architecture"*). As animações são orientadas por física de profundidade, progressão de scroll contínua e microinterações táteis que transmitem frescor e energia lúdica.

```
================================================================================
                           GRAMÁTICA DE MOVIMENTO
================================================================================
1. ENTRADA ESCALONADA (Hero Entrance) -> Queda suave dos doces em camadas Z.
2. PROGRESSÃO POR SCROLL (ScrollTrigger) -> Deslocamento contínuo atrelado à rolagem.
3. ROTAÇÃO CONTÍNUA (Continuous Spin)   -> Selos circulares em 360° constante.
4. PARALLAX EM PROFUNDIDADE (Depth Parallax) -> Nuvens e elementos de primeiro plano.
5. MICROINTERAÇÕES TÁTEIS (Tactile Hovers) -> Expansão de imagens e rotação de ícones.
================================================================================
```

---

### 2. MAPEAMENTO DETALHADO DE ANIMAÇÕES POR CENA

| Cena | Elemento | Tipo de Movimento | Mecanismo Técnico | Easing / Duração / Trigger | Comportamento Interativo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01. Header** | Barra de navegação | Transição de opacidade e blur | CSS `backdrop-filter: blur(12px)` + `background-color` dinâmico | `transition: all 0.4s ease` | Transparente no topo; adquire fundo translúcido e sombra sutil ao rolar. |
| **01. Mega Menu** | Gaveta de tela cheia | Fade & Scale expansivo | CSS + JS classes de visibilidade | `transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)` | Abre com fade suave e os links monumentais crescem no hover (`hover:!text-[6.875rem]`). |
| **02. Hero Stage** | Doces ejetados e pacote | Queda com física de gravidade | GSAP Timeline / CSS Keyframes escalonados | `stagger: 0.04s`, `ease: power3.out`, duração 1.2s | Doces caem com leve flutuação e se acomodam em camadas 3D na frente e atrás do pacote. |
| **02. Hero Sticker** | Selo circular no canto | Rotação contínua 360° | CSS `@keyframes spin { to { transform: rotate(360deg); } }` | `animation: spin 16s linear infinite` | O anel de texto gira sem parar; o ícone central reage ao hover com escala (`scale(1.2)`) e inclinação (`rotate(-12deg)`). |
| **03. Pinned Zoom** | Nuvens e Título Monumental | Zoom & Parallax de abertura | GSAP ScrollTrigger com `scrub: 1` em trilho de `350vh` | Vinculado à posição de scroll (`start: "top top"`, `end: "bottom bottom"`) | Nuvens laterais se afastam para fora da viewport enquanto o texto central ganha foco e escala. |
| **04. Interactive Map** | Hotspots de Confeitaria | Pulsação radial e rotação | CSS pulso contínuo + rotação no hover | `transition: transform 0.3s ease`, `hover:rotate-45` | Círculo tracejado pulsa suavemente. Ao clicar, abre modal com animação de escala elástica. |
| **05. 2x2 Realms** | Cards de Categorias | Elevação e projeção do produto | CSS `transform: translateY(-8px)` + `scale(1.04)` | `transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` | A foto do doce ultrapassa a borda do card e se projeta em direção ao usuário no hover. |
| **06. Bestsellers** | Carrossel horizontal | Deslizamento suave com arraste | CSS Scroll-Snap / JS Drag Slider | Suave com inércia física | Usuário pode arrastar ou navegar com setas em transição contínua sem quebras de layout. |
| **07. Flavor Mixes** | Coluna esquerda fixa + Cards | Fixação de rolagem (Sticky) | CSS `position: sticky; top: 120px;` | Vinculado à altura da seção pai | O texto narrativo permanece visível enquanto os 4 cartões de mix deslizam pela coluna da direita. |
| **09. Review Satellite** | Palco de Depoimentos | Crossfade e rotação de cartões | GSAP ScrollTrigger com `scrub: 0.8` | Transição de opacidade `opacity: 0 -> 1 -> 0` | Conforme o usuário rola a seção fixada, os depoimentos se sucedem de forma fluida. |
| **10. Footer** | Botões e Campo de E-mail | Expansão de preenchimento e elevação | CSS `transition: all 0.25s ease` | `hover:translate-y-[-2px]` | Botões pílula com realce de borda inferior reagem com feedback tátil imediato. |

---

### 3. DIRETRIZES DE IMPLEMENTAÇÃO DE MOTION

1. **Performance e Respeito a `prefers-reduced-motion`**: Todas as animações devem possuir fallbacks acessíveis para usuários com sensibilidade a movimento.
2. **Uso de CSS Moderno Primeiro**: Utilizar CSS transitions e keyframes com aceleração de hardware (`transform: translate3d`, `will-change`) para elementos leves e GSAP ScrollTrigger para transições complexas de scroll.
3. **Sem Animações Aleatórias**: Cada transição deve comunicar um estado ou uma transição espacial lógica dentro do universo da doceria.

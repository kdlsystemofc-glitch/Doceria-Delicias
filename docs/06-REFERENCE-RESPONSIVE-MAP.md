# 06 — REFERENCE RESPONSIVE MAP
## REVERSE ENGINEERING: REGRAS DE ADAPTAÇÃO RESPONSIVA (BOMBON)
### Desktop (1440x900+) → Tablet (768–1024px) → Mobile (390x844)

---

### 1. FILOSOFIA RESPONSIVA DO REFERENCE (MANIFESTO §14)

Conforme estabelecido no *Manifesto §14 ("Responsive Design is not Stacking")*, a adaptação para dispositivos móveis não é uma simples conversão mecânica de colunas desktop para `flex-direction: column`. A experiência mobile deve ser **intencionalmente desenhada**, preservando o impacto sensorial, a hierarquia de leitura, a dominância das imagens e o conforto do toque (touch-first ergonomics).

```
================================================================================
                         MATRIZ DE TRANSIÇÃO RESPONSIVA
================================================================================
ELEMENTO                DESKTOP (1440x900)       TABLET (768-1024px)      MOBILE (390x844)
--------------------------------------------------------------------------------
Header Navigation       3 Colunas completas      3 Colunas compactas      Logo Compacto + Pill Central + Cart
Hero H1 Titular         4.5rem a 6rem            3.5rem a 4.2rem          2.5rem a 3.2rem (3 linhas balanceadas)
Hero Sanduíche 3D       Escala 100% (292px larg) Escala 80% (200px larg)  Escala 100% largura de viewport
Spinning Sticker        14rem no canto direito   11rem no canto           9rem / Posicionado no fluxo
Pinned Cloud Zoom       350vh scroll track       250vh scroll track       200vh scroll track otimizado
2x2 Realms Grid         2 Colunas Assimétricas   2 Colunas Ajustadas      1 Coluna com cards de largura total
Sticky 2-Col Mixes      Split 7/12 + 5/12        Split 50/50              Fluxo vertical (Intro topo + Cards)
Reviews Satellite       Palco Orbital Pinned     Palco Compacto           Carrossel / Stack de toque fluido
Footer Newsletter       Grid 2 Colunas + H1 5rem Colunas Empilhadas       Coluna Única + H1 3rem + Input Full
================================================================================
```

---

### 2. DETALHAMENTO DE COMPORTAMENTO POR BREAKPOINT

#### 2.1. Breakpoint Desktop (≥ 1024px)
* **Espaço e Densidade**: Máximo aproveitamento do espaço horizontal, com contêineres centralizados (`max-w-7xl` ou `max-w-6xl`) e margens laterais generosas (`px-8` a `px-16`).
* **Interação**: Efeitos ricos de hover em botões, cartões e imagens de produtos; suporte a cursores customizados e tracking magnético suave.
* **Scroll-Tracks Pinned**: Trilhas de rolagem completas (350vh e 200vh) com GSAP ScrollTrigger para transições cinematográficas completas.

#### 2.2. Breakpoint Tablet (768px a 1023px)
* **Ajuste de Escala Tipográfica**: Redução de ~20% a 30% nos tamanhos de fontes para evitar quebras de linha indesejadas em títulos monumentais.
* **Header**: Mantém a estrutura de 3 colunas, mas reduz os espaçamentos internos para acomodar o logotipo e botões sem colisão.
* **Grids de Produtos**: Mantém 2 colunas com `gap` reduzido de `gap-20` para `gap-10`.

#### 2.3. Breakpoint Mobile (≤ 767px — Target: 390x844)
* **Header Compacto & Touch Target**: O logotipo adota sua versão compacta em vetor, o botão central de menu ganha área de toque mínima de `48x48px` e o acesso à sacola/WhatsApp fica posicionado no polegar.
* **Hero Mobile**:
  * O título H1 ocupa o terço superior com espaçamento refinado;
  * O sanduíche tridimensional com os doces recortados se posiciona no centro-inferior da tela;
  * O selo giratório (*Spinning Badge*) é redimensionado para `9rem` (`144px`) e posicionado no canto inferior sem cobrir os botões de ação.
* **Transição Pinned Zoom Otimizada**:
  * O trilho de rolagem é reduzido para `200vh` para não cansar o polegar do usuário no swipe;
  * Nuvens e elementos de moldura se adaptam às laterais verticais mantendo o texto central 100% legível.
* **Cards de Categorias 2x2 → Fluxo Vertical**:
  * Cada categoria se transforma em um cartão de tela quase cheia, onde a foto do doce transborda o topo do card criando profundidade vertical.
* **Kits & Mixes Divididos**:
  * A coluna esquerda (título e descrição) fica no topo como introdução e os cartões de produtos vêm logo abaixo em cartões verticais confortáveis para scroll.
* **Botões & Entradas de Formulário**:
  * Todos os botões ocupam largura total ou tamanho pílula generoso com altura mínima de `52px` para toque ergonômico.

---

### 3. TESTES DE VALIDAÇÃO RESPONSIVA OBRIGATÓRIOS

* **Desktop Viewport**: `1440x900 px` (Pixel-perfect, sem scroll horizontal indesejado, alinhamentos rigorosos).
* **Mobile Viewport**: `390x844 px` (Ergonomia de toque, proporções harmônicas de imagens, ausência total de overflow X).

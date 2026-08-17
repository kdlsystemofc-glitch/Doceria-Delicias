# 03 — REFERENCE LOCK
## REVERSE ENGINEERING: BOMBON (https://bombon.rs/)
### Target de Arquitetura Visual, Gramática Espacial e Comportamento Interativo

---

### 1. SÍNTESE DA IDENTIDADE DO REFERENCE (DNA DA REFERÊNCIA)

O website **Bombon (Square43)** é uma experiência digital de e-commerce e branding gastronômico de alto nível (premiada no Awwwards), que transforma uma loja de doces em um "reino encantado de sabores". A sua arquitetura destaca-se pela fusão entre **design editorial arrojado**, **camadas físicas tridimensionais (sanduíche de recortes)**, **microinterações táteis lúdicas**, **scroll-driven storytelling** e **espaçamento monumental**.

```
================================================================================
                        A LEI CENTRAL DO PROJETO (MANIFESTO §1)
================================================================================
REFERENCE DNA  -> Controla COMO a experiência é construída (Arquitetura, Proporções,
                  Rhythm, Grids, Motion, Camadas, Silhueta e Interação).
CLIENT DNA     -> Controla A QUEM a experiência pertence (Logo, Cores Reais, Fotos Reais,
                  Conteúdo Autêntico, Endereço de SBC, Combos Reais, Tom de Voz).
================================================================================
```

---

### 2. DECONSTRUÇÃO ESTÁTICA SCENE-BY-SCENE (REFERENCE FULL PNG)

| Cena | Altura Estimada | Largura do Conteúdo | Grid / Layout | Massa Visual Dominante | Escala Tipográfica | Imagens / Proporção | Espaçamento / Densidade | Sobreposições & Transições |
| :--- | :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **01. Header & Navigation** | ~100px (Fixed) | Full-width container (padding lateral generoso) | 3 Colunas: Logo (esq), Botão Pílula Menu (centro), Links + Carrinho (dir) | Botão central em pílula com borda destacada | Sans moderna geométrica refinada (16px) | Logo em SVG vetorial | Alta respiração, fixo com backdrop blur suave | Flutua sobre a cena sem bloquear o conteúdo |
| **02. Hero Stage (Sandwich Layering)** | 100vh | Centralizado max-w-5xl | Coluna única centralizada com camadas em profundidade z-index | Pacote de doces em camadas físicas (fundo + doces + frente) | H1 Monumental Caixa Alta (~4.5rem a 6rem) + Subtítulo calmo (1.25rem) | Recortes transparentes com doces nítidos e desfoques de profundidade (Bokeh) | Amplo respiro superior e inferior | Doces "voam" de dentro do pacote criando efeito 3D real; badge giratório flutuante no canto inferior direito |
| **03. Pinned Cloud Zoom (Portal)** | 350vh (Scroll track) | Centralizado max-w-6xl | Palco centralizado fixo durante o scroll | Tipografia monumental emoldurada por camadas de nuvens peroladas | H2 Monumental Display (~5rem a 7rem) + Subtítulo em caixa baixa | Camadas de nuvens em `mix-blend-screen` à esquerda, direita e topo | Extrema sensação de abertura e imersão | Nuvens se afastam em parallax lateral/zoom conforme o usuário rola a página, revelando a mensagem |
| **04. Illustrated Realm (Interactive Map)** | ~1200px | Full width responsivo | Cenário contínuo ilustrado com pontos de interesse (Hotspots) | Ilustração do castelo com doces integrados na paisagem | Títulos de obras de arte / cartões pop-up (H3 2rem) | Elementos cênicos com sombras suaves e botões circulares tracejados | Densidade média com foco na descoberta lúdica | Clicar nos pontos de interesse abre cartões com obras parodiadas e reproduz efeito sonoro |
| **05. 4 Realms / Categorias (2x2 Asymmetrical)** | ~1400px | Container max-w-7xl | Grid 2 colunas com cartões assimétricos generosos | 4 Grandes cartões temáticos com fundos pastel distintos | H2 Editorial (3rem a 4rem) + Descritivo fluido | Recortes de doces que ultrapassam as bordas dos cards (overflow) | Spacing generoso (gap-x-6 gap-y-20) | Hover suave eleva o card e projeta o produto para fora da moldura |
| **06. Best Sellers Carousel / Vitrine** | ~900px | Container + Carrossel horizontal | Cabeçalho editorial alinhado à esquerda + trilho horizontal de produtos | Cards de produtos com fundo circular ou oval suave | H1/H2 Seção (3.5rem) + Tags de ingredientes (pílulas) + Preço | Recortes nítidos dos pacotes/doces | Fundo com gradiente radial elíptico concentrando o olhar | Botão de adicionar ao carrinho direto no card com feedback visual |
| **07. Flavor Mixes (Sticky Split Narrative)** | ~1600px | Container 12 colunas (7/12 texto + 5/12 mix) | Coluna esquerda com introdução editorial + Coluna direita com cartões expansivos | Cartões com cores vibrantes e ilustrações de pacotes | H2 Titular (3.5rem) + H4 Nomes dos Mixes (2rem) | Recortes de embalagens com detalhes de textura | Altíssimo respiro visual | Scroll mantém a coluna de texto contextual enquanto os mixes se alternam |
| **08. About / Heritage (Split Section)** | ~800px | Container 2 colunas balanceadas | 50% Visual Mascote/Selo + 50% Manifesto da Marca | Grande selo ilustrado ou elemento de identidade à esquerda | H2 Manifesto (3rem) + H1 Statement de Fechamento (3.5rem) | Arte vetorial / selo de alta definição | Espaçamento generoso (pt-40 pb-20) | Linhas limpas e tipografia com contraste entre serifa/display e sans de leitura |
| **09. Reviews Satellite (Pinned Stack)** | 200vh (Scroll track) | Container centralizado | Palco fixo central com cartões orbitais de depoimentos | Ícone central (Coração / Doce gigante) + Cartões flutuantes | H1 Chamada (3.5rem) + Citações em 1.25rem com autor verificado | Elemento central 3D/ilustrado com sombras suaves | Visual limpo e focado na prova social | Conforme o scroll avança, os depoimentos se alternam em fade e transição suave |
| **10. Newsletter & Big Footer** | ~600px | Container full-width estruturado | Bloco de captura com tipografia monumental + Grade de links de navegação | Frase de impacto monumental em caixa alta | H1 Gigante (4rem a 5rem) + Input elegante | Sem fotos pesadas; foco em grafismos, selos e links | Rodapé limpo, estruturado e informativo | Campo de e-mail integrado com botão fluido e copyright |

---

### 3. SILHUETA MACROSCÓPICA DA PÁGINA (ASCII BLUEPRINT)

```
+-------------------------------------------------------------------------+
| [LOGO]                      ( MENU PILL )                 [SHOP] [CART] |  <- Fixed Header
+-------------------------------------------------------------------------+
|                                                                         |
|                     H1: BOMBON ROYAL SWEDISH CANDY                      |
|                  Sub: In the land of Bombon, flavor...                  |
|                                                                         |
|                          /~~~~~~~~~~~~~~\                               |
|                         / [BLURRED CANDY]\                              |
|                        |   [FALLING CANDY]|                             |
|                        |   ============== |             [SPINNING BADGE]|
|                         \  [FRONT OF BAG]/                              |
|                          \______________/                               |
|                                                                         |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+  <- Soft Gradient Fade
| [CLOUD-L]                                                     [CLOUD-R] |
|                                                                         |
|                   H2: WELCOME TO THE KINGDOM OF BOMBON                  |  <- 350vh Pinned Zoom
|                   Sub: ...where sweet & sour rule...                    |
|                                                                         |
| [CLOUD-L2]                                                   [CLOUD-R2] |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|                                                                         |
|             /~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\             |
|            /            [ILLUSTRATED CASTLE SCENE]         \            |
|           |  (*) Candy 1 Hotspot             (*) Candy 2    |           |  <- Interactive Realm
|           |                 (*) Candy 3 Hotspot             |           |
|            \_______________________________________________/            |
|                                                                         |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  EYEBROW: SHOP THE LATEST SWEETS                                        |
|  H2: Discover the 4 hidden realms of our Candy Kingdom   [BADGE SPIN]   |
|                                                                         |
|  +---------------------------+   +---------------------------+          |
|  | [REALM 1: SUGAR RUSH]     |   | [REALM 2: SOUR POWER]     |          |
|  | Pastel Pink Card          |   | Pastel Green Card         |          |  <- 2x2 Asymmetrical
|  | Overlapping Candy Cutout  |   | Overlapping Candy Cutout  |          |     Editorial Grid
|  +---------------------------+   +---------------------------+          |
|  | [REALM 3: COCOA BLISS]    |   | [REALM 4: LICORIZZ]       |          |
|  | Warm Caramel Card         |   | Rich Dark Tint Card       |          |
|  | Overlapping Candy Cutout  |   | Overlapping Candy Cutout  |          |
|  +---------------------------+   +---------------------------+          |
|                                                                         |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  RADIAL GLOW BACKGROUND                                                 |
|  H2: OUR BESTSELLING TREATS                                             |
|  <--- [PRODUCT CARD] [PRODUCT CARD] [PRODUCT CARD] [PRODUCT CARD] --->  |  <- Horizontal Carousel
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  STICKY 2-COL:                                                          |
|  [LEFT: Sticky Narrative]    |   [RIGHT: 4 FLAVOR MIXES STACK]          |
|  H2: 4 Flavor Mixes Beloved  |   - Mix Card 1 (Sweet Spot)              |  <- Sticky Split
|  Paragraph description       |   - Mix Card 2 (Tangy Tango)             |     Narrative
|                              |   - Mix Card 3 (Oops! All Choco)         |
|                              |   - Mix Card 4 (Lakrits Mixtape)         |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  [BRAND EMBLEM / SEAL]       |   [EDITORIAL ABOUT STORY]                |
|  Large round graphic badge   |   H2: In the land of Bombon...           |  <- Brand Heritage
|                              |   H1: Classic flavours, Nordic twist...  |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  PINNED TESTIMONIAL SATELLITE:                                          |
|  H1: Bombon fans CAN'T STOP TALKING!                                    |
|                      [ GIANT SWEET / HEART ]                            |  <- Pinned Reviews
|             "Quote 1..."               "Quote 2..."                     |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  H1: THE SWEETEST NEWS EVER!                                            |
|  [ Email Input Field                       ] [ SEND BUTTON ]            |  <- Big Type Footer
|  [ Links: Home | Shop | Mixes | Contact ]     © 2026 Brand Details      |
+-------------------------------------------------------------------------+
```

---

### 4. OS 5 DISPOSITIVOS DE ASSINATURA DA REFERÊNCIA (SIGNATURE DEVICES)

1. **Sanduíche Tridimensional no Hero (Layered Pouch & Flying Items)**:
   A composição do topo não é uma foto estática dentro de um retângulo. O elemento frontal (abertura da embalagem) e o elemento traseiro (fundo da embalagem) formam um sanduíche visual onde os doces parecem ser ejetados e flutuar em múltiplos planos focais (doces nítidos no meio, doces desfocados em primeiro plano e doces ao fundo).
2. **Portal de Entrada com Zoom em Camadas de Nuvens (Pinned Cloud Parallax)**:
   Uma transição cinematográfica que usa um scroll track de 350vh com `position: sticky`. Conforme a página é rolada, nuvens desenhadas com modos de mesclagem se abrem para as extremidades da tela, revelando uma mensagem monumental de boas-vindas com transição suave.
3. **Cartões Editoriais com Doces Quebrando as Bordas (Boundary-Breaking Overflows)**:
   Nos 4 quadrantes de categorias, as fotos dos doces e confeitos não ficam presas dentro do padding dos cartões: elas ultrapassam o topo e as laterais dos retângulos de cor pastel, criando uma rica sensação táctil e volumétrica.
4. **Sticker Flutuante com Rotação Contínua (Interactive Spinning Badge)**:
   Em pontos estratégicos (canto do Hero e cabeçalho de coleções), existe um selo circular com texto em órbita que gira continuamente em 360° com animação CSS suave, contendo um ícone central que responde com escala e inclinação ao passar o mouse.
5. **Palco Pinned de Depoimentos Orbitais (Satellite Review Stage)**:
   A seção de avaliações não é um carrossel genérico de 3 colunas de cards cinzas. É um palco central com um ícone de afeto dominante cercado por citações reais em cartões com elevação suave que se alternam com base no progresso de rolagem.

---

### 5. POR QUE ESTA REFERÊNCIA NÃO PARECE UM TEMPLATE GENÉRICO (ANTI-GENERIC PROOF)

* **Ausência de Grids Pré-Fabricados de 3 Cards**: A página rejeita o padrão SaaS (3 caixas com ícones e títulos idênticos). Ela utiliza blocos de 2 colunas assimétricas, palcos centralizados, faixas horizontais de grande impacto e trilhos com profundidade.
* **Profundidade e Camadas Reais**: Em vez de cartões planos com sombras padrão de Bootstrap/Tailwind, a interface usa sobreposição de elementos recortados, máscaras, desfoques de lente e texturas.
* **Escala Tipográfica Monumental com Equilíbrio Suave**: Os títulos possuem peso dramático (4rem a 7rem), mas são acompanhados por subtítulos e parágrafos curtos com entrelinha arejada e tracking calibrado.
* **Espaço Negativo como Elemento Ativo**: O espaço em branco/pastel não é vazio acidental, mas uma respiração calculada para valorizar o produto.

---

### 6. MATRIZ DE PRESERVAÇÃO & ADAPTAÇÃO (REFERENCE LOCK)

```
================================================================================
                    MATRIZ DE DECISÃO DE FIDELIDADE (REFERENCE LOCK)
================================================================================
```

#### A. MUST PRESERVE (Mecanismos Arquiteturais Obrigatórios)
* **A silhueta macroscópica completa de 10 cenas** na mesma ordem rítmica e narrativa.
* **A estrutura de 3 camadas físicas no Hero** (elemento traseiro + produtos centrais ejetados + elemento frontal).
* **O dispositivo do selo/badge circular giratório com texto em órbita**.
* **A cena cinematográfica de transição em scroll-track longo (Pinned Zoom)** com camadas de respiro.
* **O grid assimétrico 2x2 com produtos que quebram as bordas dos cards**.
* **A seção com layout dividido (Sticky 2-Col)** para as linhas de produtos especiais.
* **O rodapé com tipografia monumental de encerramento**.

#### B. SHOULD PRESERVE (Diretrizes Fortemente Recomendadas)
* As proporções monumentais de tipografia em títulos principais.
* O sistema de microinterações em botões pílula com bordas inferiores marcadas.
* O uso de fundos cromáticos em tons pastéis harmônicos para categorizar cada linha de doces.
* O carrossel horizontal fluido para a vitrine rápida de produtos avulsos.

#### C. MAY ADAPT (Adaptações Permitidas para o Negócio do Cliente)
* Substituir o mapa de castelo nórdico por um **Cenário Artístico da Doceria / Ateliê da Confeiteira / Fachada Histórica Ilustrada** ou **Vitrine Interativa com Hotspots nos doces clássicos** (Saint-Honoré, Torta de Limão, Bolo de Festa e Festa na Caixa).
* Adaptar o ícone da cesta/carrinho para **"Sacola de Encomendas / WhatsApp Express"**, já que a doceria opera com encomendas de festas e pedidos diretos no balcão de SBC.
* Adaptar as paródias de pinturas de museu para **momentos de celebração da vida real** (Chá de Bebê, Dia dos Pais, Aniversários e Casamentos).

#### D. MUST NOT COPY (Proibições Absolutas de Identidade)
* **NÃO COPIAR a marca Bombon**, logotipo, bandeira da Suécia ou referências nórdicas.
* **NÃO COPIAR os doces de goma/balas suecas** da Bombon (a Doceria Delícias vende bolos de festa brasileiros, tortas refinadas, docinhos de festa de 20g, salgados e lanches).
* **NÃO COPIAR a paleta lilás/roxo nórdico como identidade primária** (a Doceria Delícias tem como DNA real o Bordô Cacau, o Terracota da Fachada, o Ouro Caramelo e o Creme Baunilha).
* **NÃO COPIAR os textos em inglês ou moedas estrangeiras (RSD)** — utilizar o português autêntico e os preços reais de SBC em Reais (R$).

# 07 — CLIENT DESIGN SYSTEM
## DOCERIA DELÍCIAS — SISTEMA DE DESIGN BASEADO EM EVIDÊNCIAS REAIS

---

### 1. VISÃO GERAL & FILOSOFIA DE TRADUÇÃO

O **Sistema de Design da Doceria Delícias** traduz a verdade física, gastronômica e humana da loja no Centro de São Bernardo do Campo para a arquitetura de alta fidelidade aprovada na Fase 03. 

* **REFERENCE DNA (Arquitetura & Estrutura)**: Hierarquia monumental, sanduíche físico 3D em camadas, confeitos em órbita com profundidade de campo, navegação minimalista e selos circulares esculturais.
* **CLIENT DNA (Identidade & Alma)**: Tons quentes de cacau nobre, terracota da fachada histórica, ouro caramelo, creme baunilha artesanal e forminhas rosa poá de docinhos 20g.

---

### 2. COLOR SYSTEM (SISTEMA DE CORES BASEADO EM EVIDÊNCIAS)

```
========================================================================================================================
                                      MATRIZ DE TOKENS CROMÁTICOS DO CLIENTE
========================================================================================================================
TOKEN                 HEX / RGB         FONTE DA EVIDÊNCIA                PAPEL (ROLE)                  RATIONALE
------------------------------------------------------------------------------------------------------------------------
--brand-primary       #4A0E17           Fita e base do Logotipo (imgi_2)  Identidade principal, cacau   Transmite nobreza, tradição de
                      rgb(74, 14, 23)                                     profundo e contraste nobre    confeitaria e solidez artesanal.
------------------------------------------------------------------------------------------------------------------------
--brand-secondary     #CE5226           Pintura da Fachada (imgi_46)      Identidade física da loja,    Acolhimento caloroso e energia
                      rgb(206, 82, 38)  R. Américo Brasiliense 709        destaques e calor humano      do ponto de encontro presencial.
------------------------------------------------------------------------------------------------------------------------
--brand-accent        #E8A317           Ripas da Fachada e Caramelo       Selos de ação, botões         Desperta apetite imediato e
                      rgb(232, 163, 23) da Torta Saint-Honoré (imgi_42)   principais e conversão        contraste luminoso irresistível.
------------------------------------------------------------------------------------------------------------------------
--bg-primary          #FAF5EE           Fundo do selo do Logotipo e       Canvas global da página       Substitui o branco estéril por
                      rgb(250, 245, 238) massas de bolo artesanais        e atmosfera de conforto       um tom quente de baunilha e farinha.
------------------------------------------------------------------------------------------------------------------------
--bg-secondary        #F2E8DC           Embalagens kraft de doces e       Seções de contraste, cards    Sensação tátil de papelaria fina
                      rgb(242, 232, 220) caixas de presente (imgi_33)     e transições suaves           e caixas de doces comemorativos.
------------------------------------------------------------------------------------------------------------------------
--surface             #FFFFFF           Chantilly e arcos da fachada      Superfícies ativas, gavetas   Pureza, limpeza impecável de
                      rgb(255, 255, 255) arquitetônica (imgi_46)          de navegação e modais         ateliê e alto contraste funcional.
------------------------------------------------------------------------------------------------------------------------
--text-primary        #261114           Chocolate amargo 70% e            Títulos monumentais, textos   Legibilidade máxima e peso
                      rgb(38, 17, 20)   letreiros da loja física          principais e microcopy        tipográfico sem a dureza do preto puro.
------------------------------------------------------------------------------------------------------------------------
--text-secondary      #6E5852           Pães de mel e canela (imgi_33)    Subtítulos, legendas e        Hierarquia visual equilibrada e
                      rgb(110, 88, 82)                                    endereço da loja              suavidade de leitura prolongada.
------------------------------------------------------------------------------------------------------------------------
--interactive         #E8A317           Caramelo brilhante e calda        Links ativos, hover states    Gatilho de apetite e clique claro
                      rgb(232, 163, 23) de doces finos (imgi_42)          e botões de encomenda         em dispositivos touch e desktop.
------------------------------------------------------------------------------------------------------------------------
--border              #E8DDD1           Rótulos físicos e acabamentos     Bordas de componentes,        Delimitação orgânica suave sem
                      rgb(232, 221, 209) de fita de cetim                 divisórias e molduras         criar aspecto rígido de dashboard.
------------------------------------------------------------------------------------------------------------------------
--accent-pink         #E87A90           Forminhas pétala rosa poá         Docinhos 20g e toques         Memória afetiva de aniversários
                      rgb(232, 122, 144) dos docinhos de festa (imgi_20)  comemorativos delicados       e celebrações familiares clássicas.
========================================================================================================================
```

---

### 3. TYPOGRAPHY SYSTEM (SISTEMA TIPOGRÁFICO)

A tipografia preserva rigorosamente a **geometria monumental e peso ultra-chunky da referência**, enquanto expressa a **natureza tátil, generosa e afetuosa da confeitaria artesanal**:

* **DISPLAY (Títulos Monumentais / Hero)**:
  * **Família**: `Dela Gothic One` / `Titan One`
  * **Pesos & Estilo**: Extra-Bold / Chunky Black, Uppercase, `letter-spacing: -0.035em`, `line-height: 1.02`.
  * **Rationale**: Possui massa visual densa, curvas infladas e presença imponente similar a bolos bem recheados e doces esculturais, eliminando completamente a frieza de sans-serifs corporativas.
* **HEADING (Seções & Títulos Secundários)**:
  * **Família**: `Dela Gothic One` / `Plus Jakarta Sans 800`
  * **Pesos & Estilo**: Bold 800, `line-height: 1.15`, `letter-spacing: -0.02em`.
  * **Rationale**: Continuidade estrutural com fácil leitura em escalas médias.
* **BODY (Corpo de Texto & Descrições)**:
  * **Família**: `Plus Jakarta Sans`
  * **Pesos & Estilo**: Medium 500 & SemiBold 600, `font-size: 1.15rem`, `line-height: 1.5`, `color: var(--text-secondary)`.
  * **Rationale**: Tipografia humanista com aberturas amplas, perfeita para cardápios, descrições de doces e depoimentos reais de clientes.
* **META & BADGES (Etiquetas, Horários e Preços)**:
  * **Família**: `Plus Jakarta Sans`
  * **Pesos & Estilo**: Bold 700 / 800, Uppercase, `font-size: 0.85rem`, `letter-spacing: +0.04em`.
* **CTA (Chamadas de Ação & Selos)**:
  * **Família**: `Dela Gothic One` / `Titan One`
  * **Pesos & Estilo**: Black 900, Uppercase, alto impacto e contraste em botões circulares e selos esculturais.

---

### 4. IMAGE LANGUAGE (LINGUAGEM FOTOGRÁFICA & VISUAL)

* **Verdade Gastronômica (Real Food)**: Fotos de produtos reais produzidos na loja (bolos decorados, fatias recheadas, docinhos de 20g e kits festa).
* **Corte & Enquadramento**: Recortes generosos focados na textura (brilho da cobertura de chocolate, morangos frescos suculentos, granulado crocante e merengue tostado).
* **Lógica de Raios & Molduras**:
  * Elementos isolados: Recortes transparentes PNG com sombras de contato orgânicas (`filter: drop-shadow(0 14px 24px rgba(38, 17, 20, 0.22))`);
  * Cards e Recipientes: `border-radius: 1.5rem` (24px) a `2rem` (32px), harmonizando com o perfil arredondado de formas de bolo e travessas;
  * Botões e Pílulas: `border-radius: 9999px` (pílula total) ou `1rem` com borda inferior acentuada.
* **Profundidade de Campo**: Confeitos desfocados (`filter: blur(4px)` a `blur(8px)`) em camadas frontais e de fundo para criar dimensionalidade fotográfica.

---

### 5. GRAPHIC LANGUAGE (MOTIVOS GRÁFICOS & FORMAS)

* **Linhas Confeiteiras Onduladas**: Três traços ondulados no botão de menu central (`nav-pill-btn`), representando o bico de confeitar e as fitas de embalagem.
* **Forminhas Pétala / Selos Recortados (Scallop)**: Selo circular recortado no botão flutuante de encomenda (`hero-sticker-badge`), inspirado nas forminhas pétala de docinhos e selos tradicionais de confeitaria.
* **Camadas Físicas (O Sanduíche 3D)**: Recipiente aberto de embalagem artesanal no centro inferior com doces voando e entrando em perspectiva tridimensional.
* **Selo de Autenticidade & Afeto**: Destaque para o selo de empresa gerida por mulheres empreendedoras e loja física aberta no Centro de SBC.

---

### 6. UI LANGUAGE (COMPONENTES DE INTERFACE)

* **Header Fixo**:
  * Logotipo em tipografia display nobre à esquerda (`DOCERIA DELÍCIAS`);
  * Pílula de menu central em fundo creme baunilha (`#FFF7EB`) com borda inferior acentuada (`#E8DDD1`);
  * Links funcionais à direita em caixa baixa (`cardápio`, `encomendas`) com gatilho direto para WhatsApp.
* **Mega-Menu Drawer**:
  * Tela cheia com fundo creme acolhedor (`#F2E8DC`), links monumentais em display font intercalados com ícones de confeitos reais da loja e dados de contato no rodapé.
* **Botão Selo Escultural (Sticker CTA)**:
  * Posicionado no canto inferior direito, em formato recortado (scallop) em tom Ouro Caramelo (`#E8A317`), com ícone de estrela e texto *"PEÇA ONLINE"*, reagindo com rotação e escala ao passar o mouse.
* **Badge de Status Operacional (Audio / Loja)**:
  * Posicionado no canto inferior esquerdo, com badge escuro em formato recortado, ícone musical/afetivo e indicador verde pulsante *"Loja Aberta • Centro SBC"*.

---

### 7. MOTION PERSONALITY (PERSONALIDADE DE MOVIMENTO)

* **Flutuação de Confeitos**: Ciclos contínuos de 5.5s a 7.5s em curva senoidal suave (`ease-in-out`), simulando leveza e doçura no ar.
* **Micro-interações de Hover**: Easing elástico e responsivo (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`), proporcionando resposta tátil imediata ao toque ou clique.
* **Transições de Menu & Drawer**: Deslize suave com `cubic-bezier(0.16, 1, 0.3, 1)` em 400ms.

---

### 8. AUDITORIA DE FIDELIDADE (REFERENCE DNA + CLIENT IDENTITY)

```
[ARQUITETURA DA REFERÊNCIA PRESERVADA]
✔ Header minimalista com pílula de ondas central
✔ Headline monumental ultra-chunky
✔ Sanduíche 3D com embalagem aberta + confeitos em queda livre
✔ Profundidade de campo com elementos desfocados
✔ Selo escultural giratório no canto inferior direito
✔ Badge de status no canto inferior esquerdo
✔ Transição suave para o portal de boas-vindas

[IDENTIDADE DO CLIENTE APLICADA]
✔ Paleta de cores extraída de fotos reais, fachada e logotipo da Doceria Delícias
✔ Confeitos reais recortados (Brigadeiros 20g, Cupcakes florais, Tortas e Bombons)
✔ Textos, dados de contato e endereço verificados de São Bernardo do Campo
✔ Selo de empresa de mulheres empreendedoras e status real de atendimento
```

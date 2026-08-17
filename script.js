/**
 * DOCERIA DELÍCIAS — FULL EXPERIENCE SCRIPT WITH MOTION FIDELITY (PHASE 06)
 * GSAP ScrollTrigger • Physics-based Candies • Staggered Reveals • Drag Rail
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------------------
  // 1. Header Scroll Transformation
  // ------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // ------------------------------------------------------------------------
  // 2. Fullscreen Mega-Menu Toggle & Keyboard Trap
  // ------------------------------------------------------------------------
  const menuBtn = document.getElementById('menu-toggle-btn');
  const megaMenu = document.getElementById('mega-menu-overlay');

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', isExpanded);
    megaMenu.classList.toggle('active', isExpanded);
    megaMenu.setAttribute('aria-hidden', !isExpanded);
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';

    if (isExpanded && !isReducedMotion && typeof gsap !== 'undefined') {
      gsap.fromTo('.menu-giant-link', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power2.out' }
      );
    }
  };

  if (menuBtn && megaMenu) {
    menuBtn.addEventListener('click', () => toggleMenu());

    const menuLinks = megaMenu.querySelectorAll('.menu-giant-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // ------------------------------------------------------------------------
  // 3. Interactive Atelier Hotspot Modals
  // ------------------------------------------------------------------------
  const hotspotData = {
    'modal-sainthonore': {
      title: 'Gâteau Saint-Honoré',
      tag: 'CONFEITARIA CLÁSSICA FRANCESA',
      image: 'assets/photos/imgi_42_763103872_1507106274764817_7703813695497113038_n.jpg',
      desc: 'Base folhada artesanal crocante com aro de profiteroles banhados em caramelo crocante brilhante e recheados com creme patissière leve.',
      ingredients: 'Massa folhada, patissière de baunilha, profiteroles e caramelo tostado.',
      ctaText: 'Encomendar Saint-Honoré no WhatsApp'
    },
    'modal-limao': {
      title: 'Torta de Limão Merengada',
      tag: 'EQUILÍBRIO CÍTRICO & DOCE',
      image: 'assets/photos/imgi_43_761795002_1506463874829057_1790820669500515269_n.jpg',
      desc: 'Massa sablée amanteigada com recheio aveludado de limão taiti fresco e cobertura generosa de merengue maçaricado no ponto perfeito.',
      ingredients: 'Limão fresco, leite condensado artesanal, massa crocante e merengue tostado.',
      ctaText: 'Encomendar Torta de Limão no WhatsApp'
    },
    'modal-holandesa': {
      title: 'Torta Holandesa Nobre',
      tag: 'CHOCOLATE & CROCÂNCIA',
      image: 'assets/photos/imgi_32_766223203_1511643404311104_2212397122201925731_n.jpg',
      desc: 'Creme aveludado holandês sobre base amanteigada, coroa de biscoitos Calypso e cobertura de ganache espelhada de chocolate meio amargo.',
      ingredients: 'Chocolate nobre, creme holandês especial, biscoito Calypso e cacau.',
      ctaText: 'Encomendar Torta Holandesa no WhatsApp'
    },
    'modal-bentocake': {
      title: 'Bento Cakes de Afeto',
      tag: 'PERSONALIZADO COM MEMES & AFETO',
      image: 'assets/photos/imgi_37_765818197_1508985061243605_7572832144725576490_n.jpg',
      desc: 'Minibolos na marmitinha com frases descontraídas, memes Flork e declarações personalizadas feitas com bico fino de chocolate.',
      ingredients: 'Massa fofinha de baunilha ou chocolate com recheio à sua escolha.',
      ctaText: 'Pedir Bento Cake Personalizado'
    }
  };

  const modalBackdrop = document.getElementById('atelier-modal-backdrop');
  const modalBody = document.getElementById('atelier-modal-body');
  const modalClose = document.getElementById('atelier-modal-close');
  const hotspotBtns = document.querySelectorAll('.atelier-hotspot-btn');

  const closeModal = () => {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      modalBackdrop.setAttribute('aria-hidden', 'true');
    }
  };

  hotspotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetKey = btn.getAttribute('data-target');
      const item = hotspotData[targetKey];
      if (item && modalBackdrop && modalBody) {
        modalBody.innerHTML = `
          <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <img src="${item.image}" alt="${item.title}" style="width: 140px; height: 140px; border-radius: 1.25rem; object-fit: cover; box-shadow: 0 8px 20px rgba(0,0,0,0.15);" />
            <div>
              <span style="display: inline-block; font-size: 0.78rem; font-weight: 800; color: var(--brand-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">${item.tag}</span>
              <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">${item.title}</h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.4;">${item.ingredients}</p>
            </div>
          </div>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem;">${item.desc}</p>
          <a href="https://wa.me/5511980145064?text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20o%20${encodeURIComponent(item.title)}." target="_blank" class="primary-solid-btn" style="width: 100%; text-align: center;">
            <span>${item.ctaText}</span>
          </a>
        `;
        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Global Escape Listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      toggleMenu(false);
    }
  });

  // ------------------------------------------------------------------------
  // 4. Bestsellers Rail Drag-to-Scroll Interaction
  // ------------------------------------------------------------------------
  const trackWrapper = document.querySelector('.bestsellers-track-wrapper');
  if (trackWrapper) {
    let isDown = false;
    let startX;
    let scrollLeft;

    trackWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      trackWrapper.classList.add('active');
      startX = e.pageX - trackWrapper.offsetLeft;
      scrollLeft = trackWrapper.scrollLeft;
    });

    trackWrapper.addEventListener('mouseleave', () => { isDown = false; });
    trackWrapper.addEventListener('mouseup', () => { isDown = false; });

    trackWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - trackWrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      trackWrapper.scrollLeft = scrollLeft - walk;
    });
  }

  // ------------------------------------------------------------------------
  // 5. GSAP Motion Grammar & ScrollTrigger Implementations
  // ------------------------------------------------------------------------
  if (!isReducedMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance Sequence
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
      .from('.hero-giant-heading', { y: 60, opacity: 0, duration: 1 })
      .from('.hero-lead-paragraph', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.falling-candy', {
        y: -120,
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 1.1,
        ease: 'back.out(1.4)'
      }, '-=0.7')
      .from('.hero-sticker-badge', {
        scale: 0,
        rotation: -45,
        duration: 0.8,
        ease: 'back.out(1.8)'
      }, '-=0.5');

    // Scene 03: Pinned Cloud Zoom & Monumental Typography Parallax
    gsap.to('.portal-cloud-top', {
      scrollTrigger: {
        trigger: '.portal-transition-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      scale: 1.15
    });

    gsap.to('.portal-cloud-left', {
      scrollTrigger: {
        trigger: '.portal-transition-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2
      },
      x: -120,
      opacity: 0.3
    });

    gsap.fromTo('.portal-sticky-center', 
      { scale: 0.88, opacity: 0.4, y: 50 },
      {
        scrollTrigger: {
          trigger: '.portal-transition-section',
          start: 'top 75%',
          end: 'center center',
          scrub: 0.8
        },
        scale: 1.05,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }
    );

    // Scene 05: 4 Realms Staggered Scroll Reveal
    gsap.from('.realm-card', {
      scrollTrigger: {
        trigger: '.realms-editorial-section',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Scene 07: Celebration Stacked Cards Reveal
    gsap.from('.celebration-card', {
      scrollTrigger: {
        trigger: '.celebration-split-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.75,
      stagger: 0.18,
      ease: 'power2.out'
    });

    // Scene 08: Heritage Pillars Staggered Reveal
    gsap.from('.heritage-pillar-item', {
      scrollTrigger: {
        trigger: '.heritage-split-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // Scene 09: Reviews Satellite Stage Reveal
    gsap.from('.reviews-center-emblem', {
      scrollTrigger: {
        trigger: '.reviews-satellite-section',
        start: 'top 75%',
        toggleActions: 'play none none none'
      },
      scale: 0.85,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)'
    });

    gsap.from('.satellite-review-card', {
      scrollTrigger: {
        trigger: '.reviews-satellite-section',
        start: 'top 65%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.14,
      ease: 'power2.out'
    });

    // Scene 10: Monumental Footer CTA Pop
    gsap.from('.whatsapp-action-box', {
      scrollTrigger: {
        trigger: '.monumental-footer-cta-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }
});

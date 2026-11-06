/**
 * PROJETO HISTÓRIA, SOCIOLOGIA E CIÊNCIAS HUMANAS — DIREITA POLÍTICA
 * Motor Interativo Completo: Leitor de HQ, Transições, Atalhos e Portal
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Elementos do Leitor da História em Quadrinhos ---
  const comicSection = document.getElementById('comic-experience');
  const comicSlides = document.querySelectorAll('.comic-slide');
  const comicDots = document.querySelectorAll('.comic-dot');
  const comicHeaderTitle = document.getElementById('comic-header-title');
  const comicCounterText = document.getElementById('comic-counter-text');
  const btnPrev = document.getElementById('comic-btn-prev');
  const btnNext = document.getElementById('comic-btn-next');
  const btnSaibaMais = document.getElementById('btn-saiba-mais');
  
  // --- Elementos da Transição e Portal ---
  const transitionCurtain = document.getElementById('transition-curtain');
  const politicalPortal = document.getElementById('political-portal');
  const btnReturnComicNav = document.getElementById('btn-return-to-comic');
  const btnReturnComicMobile = document.getElementById('mobile-btn-return-comic');
  const btnClosingComic = document.getElementById('btn-closing-to-comic');
  
  // --- Elementos de Navegação Mobile ---
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDropdown = document.getElementById('mobile-dropdown');
  const mobileLinks = document.querySelectorAll('.mobile-item');

  // --- Modal de vídeo ---
  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
  const btnVerVideo = document.getElementById('btn-ver-video');
  const btnCloseVideo = document.getElementById('video-modal-close');

  const totalPages = comicSlides.length;
  let currentPage = 1;

  /**
   * Atualiza a página atual da HQ
   * @param {number} pageNumber Número da página (1 a 6)
   */
  function goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    currentPage = pageNumber;

    // Atualiza slides
    comicSlides.forEach((slide) => {
      const slideIndex = parseInt(slide.dataset.index, 10);
      if (slideIndex === currentPage) {
        slide.classList.add('active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    // Atualiza dots de navegação
    comicDots.forEach((dot) => {
      const dotPage = parseInt(dot.dataset.page, 10);
      if (dotPage === currentPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Atualiza cabeçalho e badge contador
    if (comicHeaderTitle) {
      comicHeaderTitle.textContent = `HISTÓRIA EM QUADRINHOS — PÁGINA ${currentPage} DE ${totalPages}`;
    }
    if (comicCounterText) {
      comicCounterText.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    // Gerencia estado dos botões Anterior / Próxima
    if (btnPrev) {
      btnPrev.disabled = currentPage === 1;
    }

    if (btnNext) {
      if (currentPage === totalPages) {
        btnNext.disabled = true;
        btnNext.style.opacity = '0.35';
      } else {
        btnNext.disabled = false;
        btnNext.style.opacity = '1';
      }
    }
  }

  // Eventos de clique nos controles da HQ
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      goToPage(currentPage - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      goToPage(currentPage + 1);
    });
  }

  // Navegação pelos pontos (dots)
  comicDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetPage = parseInt(dot.dataset.page, 10);
      goToPage(targetPage);
    });
  });

  // Clique na imagem para avançar
  comicSlides.forEach((slide) => {
    const imgFrame = slide.querySelector('.comic-image-frame');
    if (imgFrame) {
      imgFrame.addEventListener('click', () => {
        const slideIndex = parseInt(slide.dataset.index, 10);
        if (slideIndex < totalPages) {
          goToPage(slideIndex + 1);
        } else {
          // Na última página, clicar na imagem também dispara o Saiba Mais
          triggerPortalTransition();
        }
      });
      imgFrame.style.cursor = 'pointer';
    }
  });

  // Navegação por teclado (Setas Esquerda e Direita)
  document.addEventListener('keydown', (e) => {
    if (videoModal && !videoModal.hidden) return; // vídeo aberto: setas não trocam a página
    if (comicSection && !comicSection.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') {
        goToPage(currentPage - 1);
      } else if (e.key === 'ArrowRight') {
        goToPage(currentPage + 1);
      }
    }
  });

  // Suporte a gestos touch/swipe em dispositivos móveis
  let touchStartX = 0;
  let touchEndX = 0;
  const comicStage = document.getElementById('comic-stage');

  if (comicStage) {
    comicStage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    comicStage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 45;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff < 0) {
        // Swipe esquerda -> Próxima
        goToPage(currentPage + 1);
      } else {
        // Swipe direita -> Anterior
        goToPage(currentPage - 1);
      }
    }
  }

  /**
   * Dispara a transição para o portal político e histórico
   */
  function triggerPortalTransition() {
    if (transitionCurtain) {
      transitionCurtain.classList.add('active');
      transitionCurtain.setAttribute('aria-hidden', 'false');
    }

    setTimeout(() => {
      if (comicSection) {
        comicSection.classList.add('hidden');
      }
      if (politicalPortal) {
        politicalPortal.classList.remove('hidden');
        politicalPortal.setAttribute('aria-hidden', 'false');
      }
      if (transitionCurtain) {
        transitionCurtain.classList.remove('active');
        transitionCurtain.setAttribute('aria-hidden', 'true');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1400);
  }

  if (btnSaibaMais) {
    btnSaibaMais.addEventListener('click', triggerPortalTransition);
  }

  /**
   * Modal do vídeo: abrir, fechar (X, fundo ou Esc) e pausar ao sair
   */
  function openVideo() {
    if (!videoModal) return;
    videoModal.hidden = false;
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (videoPlayer) {
      const p = videoPlayer.play();
      if (p && p.catch) p.catch(() => {}); // se o navegador bloquear, o usuário aperta play
    }
    if (btnCloseVideo) btnCloseVideo.focus();
  }

  function closeVideo() {
    if (!videoModal || videoModal.hidden) return;
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
    videoModal.hidden = true;
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (btnVerVideo) btnVerVideo.focus();
  }

  if (btnVerVideo) btnVerVideo.addEventListener('click', openVideo);
  if (videoModal) {
    videoModal.querySelectorAll('[data-close-video]').forEach((el) => {
      el.addEventListener('click', closeVideo);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });

  /**
   * Retorna para a História em Quadrinhos (Página 1)
   */
  function returnToComic() {
    if (politicalPortal) {
      politicalPortal.classList.add('hidden');
      politicalPortal.setAttribute('aria-hidden', 'true');
    }
    if (comicSection) {
      comicSection.classList.remove('hidden');
    }

    goToPage(1);

    if (mobileDropdown) {
      mobileDropdown.classList.remove('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Vincula botões de retorno à HQ
  if (btnReturnComicNav) {
    btnReturnComicNav.addEventListener('click', returnToComic);
  }
  if (btnReturnComicMobile) {
    btnReturnComicMobile.addEventListener('click', returnToComic);
  }
  if (btnClosingComic) {
    btnClosingComic.addEventListener('click', returnToComic);
  }

  // Menu Mobile Dropdown
  if (mobileToggleBtn && mobileDropdown) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDropdown.classList.contains('active');
      mobileDropdown.classList.toggle('active');
      mobileToggleBtn.setAttribute('aria-expanded', !isOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('active');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Cards Interativos de Princípios
  const principleCards = document.querySelectorAll('.principle-card');
  principleCards.forEach((card) => {
    const toggleBtn = card.querySelector('.btn-toggle-principle');
    
    function toggleCard() {
      const isExpanded = card.classList.contains('expanded');
      card.classList.toggle('expanded');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        const textSpan = toggleBtn.querySelector('span:first-child');
        if (textSpan) {
          textSpan.textContent = !isExpanded ? 'Recolher explicação' : 'Ver explicação completa';
        }
      }
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCard();
      });
    }

    card.addEventListener('click', () => {
      toggleCard();
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });

  // Acordeão de Mitos e Verdades (FAQ)
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach((card) => {
    const btn = card.querySelector('.faq-question-btn');
    const panel = card.querySelector('.faq-answer-panel');

    if (btn && panel) {
      btn.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        if (isOpen) {
          card.classList.remove('open');
          panel.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          card.classList.add('open');
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Verificação de Hash na URL para navegação direta e testes
  function checkUrlHash() {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#page')) {
      const p = parseInt(hash.replace('#page', ''), 10);
      if (p >= 1 && p <= totalPages) {
        if (comicSection) comicSection.classList.remove('hidden');
        if (politicalPortal) politicalPortal.classList.add('hidden');
        goToPage(p);
      }
    } else if (hash.length > 1) {
      // Qualquer âncora do portal abre o portal
      if (comicSection) comicSection.classList.add('hidden');
      if (politicalPortal) {
        politicalPortal.classList.remove('hidden');
        politicalPortal.setAttribute('aria-hidden', 'false');
      }
      setTimeout(() => {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 100);
    } else {
      goToPage(1);
    }
  }

  checkUrlHash();
  window.addEventListener('hashchange', checkUrlHash);
});



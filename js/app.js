/**
 * 김선경 크리에이티브 스튜디오 (SUNKYUNG KIM)
 * Standalone Client-side UI & Interaction Logic
 * 
 * 모든 연산은 브라우저(클라이언트 PC) 내부에서 즉각 실행되며, 
 * index.html을 더블 클릭하여 file:// 프로토콜로 열어도 100% 완벽하게 동작합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.studioData || {};

  // =========================================================================
  // 1. 헤더 스크롤 효과 및 모바일 메뉴
  // =========================================================================
  const siteHeader = document.getElementById('site-header');
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // 스크롤 시 헤더 배경 블러 및 테두리 변화
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 모바일 햄버거 메뉴 토글
  if (menuToggleBtn && mobileNavDrawer) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.contains('open');
      if (isOpen) {
        mobileNavDrawer.classList.remove('open');
        menuToggleBtn.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileNavDrawer.classList.add('open');
        menuToggleBtn.classList.add('open');
        menuToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // 모바일 링크 클릭 시 드로어 자동 닫힘
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        menuToggleBtn.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 스크롤 위치에 따른 활성 내비게이션 하이라이트
  const sectionIds = ['home', 'about', 'explore', 'works', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 130;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((l) => {
            l.classList.toggle('active', l.dataset.section === id);
          });
          mobileNavLinks.forEach((l) => {
            l.classList.toggle('active', l.dataset.section === id);
          });
        }
      }
    });
  });

  // =========================================================================
  // 2. 포트폴리오 갤러리 필터링 & 렌더링
  // =========================================================================
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProjects(category) {
    if (!portfolioGrid || !data.projects) return;

    const filtered = category === 'ALL'
      ? data.projects
      : data.projects.filter((p) => p.category === category);

    if (filtered.length === 0) {
      portfolioGrid.innerHTML = `
        <div class="empty-gallery-state reveal-on-scroll revealed">
          <div class="empty-state-title">선택한 카테고리의 새로운 창작 작업이 준비 중입니다.</div>
          <p class="empty-state-desc">일상 속 영감을 바탕으로 감각적인 새 프로젝트를 구상하고 있습니다. 곧 새로운 작업물이 업데이트됩니다.</p>
        </div>
      `;
      return;
    }

    portfolioGrid.innerHTML = filtered.map((proj, idx) => `
      <article class="project-card reveal-on-scroll revealed delay-${((idx % 2) + 1) * 100}" data-project-id="${proj.id}">
        <div class="project-thumb-box">
          <img 
            src="${proj.image}" 
            alt="${proj.title} - ${proj.summary}" 
            class="project-thumb-img"
            loading="lazy"
          />
          <span class="project-status-badge">${proj.statusBadge || 'IN PROGRESS'}</span>
        </div>

        <div class="project-info-box">
          <div class="project-meta-row">
            <span class="project-category-tag">${proj.category}</span>
            <span class="project-year">${proj.year}</span>
          </div>

          <h3 class="project-title">${proj.title}</h3>
          <p class="project-summary">${proj.summary}</p>

          <div class="project-card-footer">
            <span class="view-detail-btn">
              <span>VIEW DETAILS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </article>
    `).join('');

    bindCardClickEvents();
  }

  // 필터 버튼 클릭 이벤트
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category || 'ALL';
      renderProjects(cat);
    });
  });

  // =========================================================================
  // 3. 프로젝트 상세 모달 (Popup Dialog)
  // =========================================================================
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-image');
  const modalCategory = document.getElementById('modal-category');
  const modalStatus = document.getElementById('modal-status');
  const modalYear = document.getElementById('modal-year');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTools = document.getElementById('modal-tools');
  const modalNote = document.getElementById('modal-note');
  const modalLinkContainer = document.getElementById('modal-link-container');
  const modalLinkBtn = document.getElementById('modal-link-btn');

  function openModal(project) {
    if (!modalOverlay || !project) return;

    modalImage.src = project.image;
    modalImage.alt = `${project.title} - ${project.summary}`;
    modalCategory.textContent = project.category;
    modalStatus.textContent = project.statusBadge || 'IN PROGRESS';
    modalYear.textContent = project.year || '2026';
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description || project.summary;

    modalTools.innerHTML = (project.tools || [])
      .map((t) => `<span class="modal-tool-badge">${t}</span>`)
      .join('');

    modalNote.textContent = project.statusNote || '본 프로젝트는 창작자의 감각적 표현과 스토리텔링을 위한 연구 작업입니다.';

    if (project.link && project.link.trim() !== '') {
      modalLinkBtn.href = project.link;
      modalLinkContainer.style.display = 'block';
    } else {
      modalLinkContainer.style.display = 'none';
    }

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function bindCardClickEvents() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const pId = card.dataset.projectId;
        const project = (data.projects || []).find((p) => p.id === pId);
        if (project) {
          openModal(project);
        }
      });
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // ESC 키로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // 초기 프로젝트 렌더링
  renderProjects('ALL');

  // =========================================================================
  // 4. 이메일 주소 복사 기능
  // =========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const contactEmail = data.contact ? data.contact.email : '';

  if (copyEmailBtn && contactEmail) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(contactEmail);
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = '이메일 주소 복사 완료!';
        copyEmailBtn.style.borderColor = 'var(--lavender-deep)';
        copyEmailBtn.style.color = 'var(--lavender-darker)';
        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for copy
        window.location.href = `mailto:${contactEmail}`;
      }
    });
  }

  // =========================================================================
  // 5. 최상단 이동 버튼 (Back to Top)
  // =========================================================================
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 6. 자동 푸터 연도 계산
  // =========================================================================
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 7. 스크롤 진입 인터랙션 (Intersection Observer)
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }
});

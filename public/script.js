(function () {
  if (typeof window === "undefined") return;

  function ready() {
    // ===== 1. 햄버거 메뉴 =====
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (hamburger && nav) {
      hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        hamburger.classList.toggle("is-open");
      });
    }

    // ===== 2. 스크롤 페이드인 =====
    const fadeEls = document.querySelectorAll(".fade-in");

    if ("IntersectionObserver" in window && fadeEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      fadeEls.forEach((el) => io.observe(el));
    } else {
      fadeEls.forEach((el) => el.classList.add("visible"));
    }

    // ===== 3. FAQ 아코디언 =====
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!btn || !answer) return;

      answer.style.maxHeight = "0px";

      btn.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        if (isOpen) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = "0px";
        }
      });
    });

    // ===== 4. 리뷰 모달 =====
    const modal = document.getElementById("reviewModal");
    const modalBody = document.getElementById("modalBody");
    const modalClose = document.getElementById("modalClose");

    if (modal && modalBody) {
      const reviewCards = document.querySelectorAll(".review-card");

      reviewCards.forEach((card) => {
        const btn = card.querySelector(".review-more");
        if (!btn) return;

        btn.addEventListener("click", () => {
          modal.classList.add("open");
          const text = card.querySelector(".review-text")?.textContent || "";
          const author = card.querySelector(".author-name")?.textContent || "";
          const age = card.querySelector(".author-age")?.textContent || "";
          const rating = card.querySelector(".review-rating")?.textContent || "";

          modalBody.innerHTML = `
            <div class="review-modal-inner">
              <div class="review-rating">${rating}</div>
              <p class="review-text">${text}</p>
              <div class="review-author">
                <span class="author-name">${author}</span>
                <span class="author-age">${age}</span>
              </div>
            </div>
          `;
        });
      });

      modalClose?.addEventListener("click", () => {
        modal.classList.remove("open");
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("open");
        }
      });
    }

    // ===== 5. 토스트 & 상담 폼 =====
    const toast = document.getElementById("toast");

    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("상담 신청이 접수되었습니다. 곧 연락드릴게요.");
        contactForm.reset();
      });
    }

    // ===== 6. 예상 프로그램 금액 계산기 =====
    const programSelect = document.getElementById("programDuration");
    const periodText = document.getElementById("calc-period-text");
    const priceText = document.getElementById("calc-price-text");

    const programMap = {
      "1": { period: "절식 프로그램", price: "270,000원" },
      "2": { period: "다이어트 풀세트", price: "360,000원" },
      "3": { period: "장 디톡스/기타", price: "상담 후 안내" },
    };

    if (programSelect && periodText && priceText) {
      programSelect.addEventListener("change", () => {
        const value = programSelect.value;
        const info = programMap[value];

        if (info) {
          periodText.textContent = info.period;
          priceText.textContent = info.price;
        } else {
          periodText.textContent = "-";
          priceText.textContent = "-";
        }
      });
    }

    // ===== 7. 플로팅 CTA 노출 =====
    const floatingCta = document.getElementById("floatingCta");
    if (floatingCta) {
      const onScroll = () => {
        if (window.scrollY > 500) {
          floatingCta.classList.add("visible");
        } else {
          floatingCta.classList.remove("visible");
        }
      };
      window.addEventListener("scroll", onScroll);
      onScroll();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

const productCards = [
  {
    id: "dplus",
    href: "/products/dplus",
    title: "파비스 디플러스",
    badge: "장 케어",
    description: "배변 원활 · 노폐물 배출에 도움을 줄 수 있습니다",
    image: "/images/13.jpg",
    alt: "파비스 애니원 디플러스 효소",
    originalPrice: 84000,
    salePrice: 58800,
  },
  {
    id: "milzyme",
    href: "/products/milzyme",
    title: "파비스 밀자임",
    badge: "소화 케어",
    description: "식후 소화 · 장내 환경 개선에 도움을 줄 수 있습니다",
    image: "/images/25.jpg",
    alt: "파비스 애니원 밀자임 효소",
    originalPrice: 134000,
    salePrice: 93800,
  },
  {
    id: "slim",
    href: "/products/slim",
    title: "파비스 슬림",
    badge: "다이어트 서포트",
    description: "체중 관리 · 체지방 감소에 도움을 줄 수 있습니다",
    image: "/images/23.jpg",
    alt: "파비스 애니원 다이어트 슬림",
    badgeAccent: true,
    originalPrice: 224000,
    salePrice: 156800,
  },
  {
    id: "tea",
    href: "/products/tea",
    title: "파비스 차",
    badge: "편안함",
    description: "장 이완 · 편안한 배변 활동에 도움을 줄 수 있습니다",
    image: "/images/24.jpg",
    alt: "파비스 애니원 다이어트 차",
    originalPrice: 50000,
    salePrice: 35000,
  },
  {
    id: "qzyme",
    href: "/products/qzyme",
    title: "파비스 큐자임",
    badge: "숙변 케어",
    description: "장 정화 · 숙변 배출에 도움을 줄 수 있습니다",
    image: "/images/26.jpg",
    alt: "파비스 애니원 다이어트 차",
    originalPrice: 84000,
    salePrice: 58800,
  },
  {
    id: "sokzyme",
    href: "/products/sokzyme",
    title: "파비스 속자임",
    badge: "속 편안",
    description: "속 쓰림 완화 · 위 건강에 도움을 줄 수 있습니다",
    image: "/images/27.jpg",
    alt: "파비스 애니원 속자임 효소",
    originalPrice: 108000,
    salePrice: 75600,
  }
];

export default function Home() {
  return (
    <>
      <Script src="/script.js" strategy="afterInteractive" />
      
          
          <header className="header" id="header">
              <div className="container">
                  <div className="header-content">
                      <div className="logo">
                          <h1>Pharvis AnyOne</h1>
                          <p className="logo-subtitle">파비스 애니원 다이어트 프로그램</p>
                      </div>
      
                      <nav className="nav" id="nav">
                          <ul className="nav-list">
                              <li><a href="#program" className="nav-link">프로그램 소개</a></li>
                              <li><a href="#products" className="nav-link">제품 구성</a></li>
                              <li><a href="#target" className="nav-link">추천 대상</a></li>
                              <li><a href="#reviews" className="nav-link">실제 후기</a></li>
                              <li><a href="#faq" className="nav-link">FAQ</a></li>
                              <li><a href="#contact" className="nav-link nav-cta">신청하기</a></li>
                          </ul>
                      </nav>
      
                      <button className="hamburger" id="hamburger" aria-label="메뉴 열기">
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                  </div>
              </div>
          </header>
      
          
          <section className="hero" id="hero">
              <div className="container">
                  <div className="hero-content">
                      <div className="hero-text fade-in">
                          <h2 className="hero-headline">다이어트! 의지?! <br />효소로, EASY 하게</h2>
                          <p className="hero-subtext">파비스 애니원 효소와 함께 하는<br />다이어트 · 장 디톡스 · 절식 EASY 루틴</p>
                          <p className="hero-description">· MZ들의 요즘 다어어트 필수템</p>
                          <p className="hero-description">· 중년 여성도 부담 없이 시작할 수 있는 간편한 효소 루틴</p>
                          <p className="hero-description">· 굶으면서 버티는 다이어트 말고<br />하루 한 포로 장부터 가볍게 시작해 보세요</p>
      
      
                          <div className="hero-trust">
      
                          </div>
                          <div className="hero-cta">
                              <a href="#contact" className="btn btn-primary">EASY하게 시작하기</a>
                              <a href="#contact" className="btn btn-secondary">카카오톡 상담하기</a>
                          </div>
      
                          <div className="hero-stats">
                              <div className="stat-item">
                                  <span className="stat-number">92%</span>
                                  <span className="stat-label">재구매율</span>
                              </div>
                              <div className="stat-item">
                                  <span className="stat-number">4.8/5.0</span>
                                  <span className="stat-label">고객 만족도</span>
                              </div>
                              <div className="stat-item">
                                  <span className="stat-number">15,000+</span>
                                  <span className="stat-label">누적 고객</span>
                              </div>
                          </div>
                      </div>
      
                      <div className="hero-image fade-in">
                        <div className="hero-image-wrapper">
                          <img src="images/14.jpg" alt="파비스 애니원 디플러스 효소" />
                        </div>
                      </div>
                  </div>
              </div>
      
      
          </section>
      
          
          <section className="program-section" id="program">
              <div className="container">
                  <div className="section-header fade-in">
                      <h2 className="section-title">체계적인 4단계 프로그램</h2>
                      <p className="section-subtitle">과학적으로 설계된 다이어트 프로세스</p>
                  </div>
      
                  <div className="timeline">
                      <div className="timeline-item fade-in">
                          <div className="timeline-icon">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                  <circle cx="24" cy="24" r="20" fill="#E7F3E9" />
                                  <path d="M24 14V28M18 24H30" stroke="#6BAA46" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                          </div>
                          <div className="timeline-badge">감식기</div>
                          <h3 className="timeline-title">5일</h3>
                          <p className="timeline-description">식사량을 절반으로 줄이며<br />몸을 준비하는 단계</p>
      
                          <p><br /></p>
                          <p className="timeline-description timeline-description-en">Warming up</p>
      
                      </div>
      
                      <div className="timeline-connector"></div>
      
                      <div className="timeline-item fade-in">
                          <div className="timeline-icon">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                  <circle cx="24" cy="24" r="20" fill="#E7F3E9" />
                                  <path d="M24 12C24 12 18 18 18 24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24C30 18 24 12 24 12Z" stroke="#6BAA46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </div>
                          <div className="timeline-badge accent">절식기</div>
                          <h3 className="timeline-title">10일</h3>
                          <p className="timeline-description">파비스 애니원 효소 프로그램으로<br />장을 가볍게 리셋</p>
                          <p><br /></p>
                          <p className="timeline-description timeline-description-en">Reset</p>
                      </div>
      
                      <div className="timeline-connector"></div>
      
                      <div className="timeline-item fade-in">
                          <div className="timeline-icon">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                  <circle cx="24" cy="24" r="20" fill="#E7F3E9" />
                                  <path d="M16 24L22 30L32 18" stroke="#6BAA46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </div>
                          <div className="timeline-badge">보식기</div>
                          <h3 className="timeline-title">10일</h3>
                          <p className="timeline-description">천천히 식사량을 회복하며<br />장 컨디션을 보호</p>
                          <p><br /></p>
                          <p className="timeline-description timeline-description-en">Protect</p>
                      </div>
      
                      <div className="timeline-connector"></div>
      
                      <div className="timeline-item fade-in">
                          <div className="timeline-icon">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                  <circle cx="24" cy="24" r="20" fill="#E7F3E9" />
                                  <circle cx="24" cy="24" r="8" stroke="#6BAA46" strokeWidth="2.5" />
                                  <path d="M24 16V24L28 28" stroke="#6BAA46" strokeWidth="2.5" strokeLinecap="round" />
                              </svg>
                          </div>
                          <div className="timeline-badge">유지기</div>
                          <h3 className="timeline-title">지속적 관리</h3>
                          <p className="timeline-description">하루 1~2회 효소로<br />편안한 배 상태를 유지</p>
                          <p><br /></p>
                          <p className="timeline-description timeline-description-en">Keep</p>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="products-section" id="products">
              <div className="container">
                  <div className="section-header fade-in">
                      <h2 className="section-title">프로그램 구성 제품</h2>
                      <p className="section-subtitle">장 건강을 위한 파비스 애니원 프리미엄 라인업</p>
                  </div>
      
                                    <div className="products-grid">
                                            {productCards.map((card) => (
                                                <article key={card.id} className="product-card fade-in relative">
                                                    <div className="product-image">
                                                        <Link href={card.href} className="group block relative">
                                                            <div className="overflow-hidden rounded-2xl bg-[#F3F0E8]">
                                                                <Image
                                                                    src={card.image}
                                                                    alt={card.alt}
                                                                    width={600}
                                                                    height={800}
                                                                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                                                />
                                                            </div>

                                                            <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
                                                                <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                                                    상품 보기
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className={`product-badge${card.badgeAccent ? " accent" : ""}`}>{card.badge}</div>
                                                    <h3 className="product-name">{card.title}</h3>
                                                    <p className="product-description">{card.description}</p>
                                                    <div className="mt-3 space-y-1">
                                                      <p className="text-xs text-zinc-400 line-through">
                                                        정가 {card.originalPrice.toLocaleString("ko-KR")}원
                                                      </p>
                                                      <p className="text-lg font-bold text-emerald-600">
                                                        {card.salePrice.toLocaleString("ko-KR")}원
                                                        <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                                                          30% OFF
                                                        </span>
                                                      </p>
                                                    </div>
                                                </article>
                                            ))}
                                    </div>
      
                  <div className="packages">
                      <h3 className="packages-title fade-in">추천 패키지</h3>
      
                      <div className="package-grid">
                          <div className="package-card fade-in">
                              <div className="package-label">BASIC</div>
                              <h4 className="package-name">절식 프로그램 기본 세트</h4>
                              <p className="package-description">디플러스, 밀자임, 차 조합으로<br />장 건강 기본 케어</p>
                              <ul className="package-includes">
                                  <li>파비스 디플러스 × 3박스</li>
                                  <li>파비스 밀자임 × 3박스</li>
                                  <li>파비스 차 × 3박스</li>
                              </ul>
                              <div className="package-price">
                                  <span className="price-label">3개월 기준</span>
                                  <span className="price">270,000원</span>
                              </div>
                          </div>
      
                          <div className="package-card featured fade-in">
                              <div className="package-label accent">PREMIUM</div>
                              <h4 className="package-name">집중 다이어트 세트</h4>
                              <p className="package-description">슬림 추가로<br />체중 관리까지 한 번에</p>
                              <ul className="package-includes">
                                  <li>파비스 디플러스 × 3박스</li>
                                  <li>파비스 슬림 × 3박스</li>
                                  <li>파비스 큐자임 × 3박스</li>
                                  <li>파비스 차 × 3박스</li>
                              </ul>
                              <div className="package-price">
                                  <span className="price-label">3개월 기준</span>
                                  <span className="price">360,000원</span>
                              </div>
                          </div>
      
                          <div className="package-card fade-in">
                              <div className="package-label">CUSTOM</div>
                              <h4 className="package-name">맞춤형 디톡스 세트</h4>
                              <p className="package-description">개인 상태에 맞춘<br />1:1 맞춤 구성</p>
                              <ul className="package-includes">
                                  <li>전문가 상담 후 제품 선정</li>
                                  <li>3개월 프로그램 설계</li>
                                  <li>정기 체크업 포함</li>
                              </ul>
                              <div className="package-price">
                                  <span className="price-label">상담 후 결정</span>
                                  <span className="price">문의 필요</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="target-section" id="target">
              <div className="container">
                  <div className="target-content">
                      <div className="target-text fade-in">
                          <h2 className="section-title">이런 분들께 추천합니다</h2>
                          <p className="section-subtitle">하나라도 해당되신다면 지금 시작하세요</p>
      
                          <ul className="checklist">
                              <li className="checklist-item">
                                  <span className="checkbox">✓</span>
                                  <span>아침마다 화장실에서 시원하지 않은 느낌이 계속된다</span>
                              </li>
                              <li className="checklist-item">
                                  <span className="checkbox">✓</span>
                                  <span>식사 후 배가 자주 더부룩하다</span>
                              </li>
                              <li className="checklist-item">
                                  <span className="checkbox">✓</span>
                                  <span>나이가 들면서 장이 예전 같지 않다고 느낀다</span>
                              </li>
                              <li className="checklist-item">
                                  <span className="checkbox">✓</span>
                                  <span>다이어트하면 항상 변비부터 온다</span>
                              </li>
                              <li className="checklist-item">
                                  <span className="checkbox">✓</span>
                                  <span>배에 가스가 자주 차고 불편하다</span>
                              </li>
                          </ul>
      
                          <p className="target-cta-text">위 항목 중 하나라도 해당된다면,<br /><strong>파비스 애니원 효소 프로그램</strong>을 고려해 보세요.</p>
                      </div>
      
                      <div className="target-image fade-in">
                          <div className="image-placeholder">
                              <p><img src="images/28.jpg" alt="타겟 고객 이미지" /></p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="changes-section">
              <div className="container">
                  <div className="section-header fade-in">
                      <h2 className="section-title">3개월 후 기대할 수 있는 변화</h2>
                      <p className="section-subtitle">시간이 지날수록 달라지는 몸의 느낌</p>
                  </div>
      
                  <div className="changes-timeline">
                      <div className="change-card fade-in">
                          <div className="change-month">1개월</div>
                          <h3 className="change-title">배변 리듬 회복</h3>
                          <p className="change-description">배변 리듬이 점점 규칙적으로 돌아오는 느낌을 받을 수 있습니다</p>
                          <div className="change-graph">
                              <div className="graph-bar" style={{ height: "75%" }}></div>
                          </div>
                      </div>
      
                      <div className="change-card fade-in">
                          <div className="change-month accent">2개월</div>
                          <h3 className="change-title">소화 개선</h3>
                          <p className="change-description">속이 가벼워지고 식후 불편감이 줄어드는 것을 느낄 수 있습니다</p>
                          <div className="change-graph">
                              <div className="graph-bar" style={{ height: "50%" }}></div>
                          </div>
                      </div>
      
                      <div className="change-card fade-in">
                          <div className="change-month">3개월</div>
                          <h3 className="change-title">체형 변화</h3>
                          <p className="change-description">체중 관리와 복부 라인이 한층 편안해질 수 있습니다</p>
                          <div className="change-graph">
                              <div className="graph-bar" style={{ height: "25%" }}></div>
                          </div>
                      </div>
                  </div>
      
                  <div className="discomfort-chart fade-in">
                      <h3 className="chart-title">배 불편감 변화 추이</h3>
                      <div className="chart">
                          <div className="chart-line">
                              <svg viewBox="0 0 400 200" preserveAspectRatio="none">
                                  <polyline
                                      fill="none"
                                      stroke="#6BAA46"
                                      strokeWidth="3"
                                      points="0,50 100,60 200,100 300,150 400,180"
                                  />
                              </svg>
                          </div>
                          <div className="chart-labels">
                              <span>시작</span>
                              <span>1개월</span>
                              <span>2개월</span>
                              <span>3개월</span>
                          </div>
                      </div>
                      <p className="chart-note">* 개인차가 있을 수 있으며, 위 그래프는 참고용입니다.</p>
                  </div>
              </div>
          </section>
      
          
          <section className="reviews-section" id="reviews">
              <div className="container">
                  <div className="section-header fade-in">
                      <h2 className="section-title">실제 고객 후기</h2>
                      <p className="section-subtitle">파비스 애니원과 함께한 분들의 진솔한 이야기</p>
                  </div>
      
                  <div className="reviews-grid">
                      <article className="review-card fade-in" data-review="1">
                          <div className="review-rating">★★★★★</div>
                          <p className="review-text">50대 되면서 장이 정말 예민해졌는데, 3개월 프로그램 하고 나서 아침이 편해졌어요. 화장실 가는 게 더 이상 스트레스가 아니에요.</p>
                          <div className="review-author">
                              <span className="author-name">김○희</span>
                              <span className="author-age">52세, 주부</span>
                          </div>
                          <button className="review-more">전체 후기 보기</button>
                      </article>
      
                      <article className="review-card fade-in" data-review="2">
                          <div className="review-rating">★★★★★</div>
                          <p className="review-text">직장 다니면서 불규칙하게 먹다 보니 늘 배가 더부룩했는데, 효소 먹으면서 소화가 훨씬 잘되는 느낌이에요. 다이어트에도 도움이 되는 것 같아요.</p>
                          <div className="review-author">
                              <span className="author-name">이○영</span>
                              <span className="author-age">47세, 직장인</span>
                          </div>
                          <button className="review-more">전체 후기 보기</button>
                      </article>
      
                      <article className="review-card fade-in" data-review="3">
                          <div className="review-rating">★★★★☆</div>
                          <p className="review-text">갱년기 증상으로 장이 더 예민해졌는데, 파비스 프로그램 시작하고 2개월쯤 지나니까 확실히 몸이 가벼워진 느낌이에요.</p>
                          <div className="review-author">
                              <span className="author-name">박○숙</span>
                              <span className="author-age">54세, 주부</span>
                          </div>
                          <button className="review-more">전체 후기 보기</button>
                      </article>
      
                      <article className="review-card fade-in" data-review="4">
                          <div className="review-rating">★★★★★</div>
                          <p className="review-text">변비 때문에 항상 고생했는데, 규칙적으로 효소 먹으니까 배변이 훨씬 수월해졌어요. 복부팽만감도 많이 줄었고요.</p>
                          <div className="review-author">
                              <span className="author-name">최○진</span>
                              <span className="author-age">45세, 자영업</span>
                          </div>
                          <button className="review-more">전체 후기 보기</button>
                      </article>
                  </div>
              </div>
          </section>
      
          
          <section className="faq-section" id="faq">
              <div className="container">
                  <div className="section-header fade-in">
                      <h2 className="section-title">자주 묻는 질문</h2>
                      <p className="section-subtitle">궁금하신 점을 확인해 보세요</p>
                  </div>
      
                  <div className="faq-list">
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>약이 아니라 식품인가요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>네, 파비스 애니원 제품들은 모두 건강기능식품으로 식품의약품안전처에서 인정한 기능성 원료를 사용합니다. 의약품이 아니므로 질병의 예방 및 치료를 위한 것이 아니며, 일상적인 건강 관리를 위한 식품입니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>다른 건강기능식품과 함께 먹어도 되나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>일반적으로는 가능하지만, 복용 중인 다른 건강기능식품이나 약이 있다면 전문가와 상담 후 섭취하시는 것을 권장합니다. 특히 특정 질환으로 약물을 복용 중이시라면 의사와 상담이 필요합니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>공복에 먹어야 하나요, 식후에 먹어야 하나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>제품마다 권장 섭취 방법이 다를 수 있습니다. 일반적으로 효소 제품은 식전 30분 또는 식후 2시간에 섭취하는 것이 좋으나, 개인의 위 상태에 따라 조절이 필요합니다. 상담 시 개인에 맞는 섭취 방법을 안내해 드립니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>3개월 이상 계속 먹어도 되나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>네, 건강기능식품은 장기 섭취가 가능합니다. 오히려 3개월 프로그램 이후 유지기로 지속적으로 관리하시는 것을 권장드립니다. 다만 몸 상태에 따라 섭취량이나 빈도를 조절하실 수 있습니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>변비가 없는데도 먹어도 되나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>물론입니다. 파비스 애니원 프로그램은 단순히 변비 해소만을 위한 것이 아니라, 장 건강 전반과 인체 정화를 목적으로 합니다. 소화 개선, 노폐물 배출, 체중 관리 등 다양한 목적으로 섭취하실 수 있습니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>임신 중이거나 수유 중에도 먹을 수 있나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>임신 중이거나 수유 중인 경우, 섭취 전 반드시 의사와 상담하시기 바랍니다. 개인의 건강 상태와 태아/영유아의 안전을 최우선으로 고려해야 하므로, 전문의의 판단이 필요합니다.</p>
                          </div>
                      </div>
      
                      <div className="faq-item fade-in">
                          <button className="faq-question">
                              <span>배송은 얼마나 걸리나요?</span>
                              <span className="faq-icon">+</span>
                          </button>
                          <div className="faq-answer">
                              <p>주문 확인 후 2-3일 이내에 배송이 시작되며, 지역에 따라 1-2일 내 수령 가능합니다. 3개월 프로그램의 경우 정기배송으로 진행되어 매월 자동으로 발송됩니다.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section className="contact-section" id="contact">
              <div className="container">
                  <div className="contact-content">
                      <div className="contact-text fade-in">
                          <h2 className="section-title">지금 바로 상담 신청하기</h2>
                          <p className="section-subtitle">연락처를 남겨주시면,<br />담당자가 프로그램 구성과 가격을 안내해 드립니다.</p>
      
                          <div className="contact-benefits">
                              <div className="benefit-item">
                                  <span className="benefit-icon">✓</span>
                                  <span>1:1 맞춤 상담</span>
                              </div>
                              <div className="benefit-item">
                                  <span className="benefit-icon">✓</span>
                                  <span>개인별 프로그램 설계</span>
                              </div>
                              <div className="benefit-item">
                                  <span className="benefit-icon">✓</span>
                                  <span>3개월 관리 서포트</span>
                              </div>
                          </div>
      
                          <p className="privacy-note">* 개인정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.</p>
      
                          <div className="price-calculator fade-in">
                              <h3>예상 프로그램 금액</h3>
                              <div className="calculator-display">
                                  <div className="calc-period">선택된 기간: <span id="calc-period-text">-</span></div>
                                  <div className="calc-price">예상 금액: <span id="calc-price-text">-</span></div>
                              </div>
                              <p className="calc-note">* 정확한 금액은 상담 후 안내됩니다.</p>
                          </div>
                      </div>
      
                      <div className="contact-form-wrapper fade-in">
                          <form className="contact-form" id="contactForm">
                              <div className="form-group">
                                  <label htmlFor="name">이름 *</label>
                                  <input type="text" id="name" name="name" required placeholder="홍길동" />
                              </div>
      
                              <div className="form-group">
                                  <label htmlFor="phone">연락처 *</label>
                                  <input type="tel" id="phone" name="phone" required placeholder="010-0000-0000" />
                              </div>
      
                              <div className="form-group">
                                  <label htmlFor="age">나이대 *</label>
                                  <select id="age" name="age" required>
                                      <option value="">선택해주세요</option>
                                      <option value="30s">30대</option>
                                      <option value="40s">40대</option>
                                      <option value="50s">50대</option>
                                      <option value="60s">60대 이상</option>
                                  </select>
                              </div>
      
                              <div className="form-group">
                                  <label>관심 항목 *</label>
                                  <div className="checkbox-group">
                                      <label className="checkbox-label">
                                          <input type="checkbox" name="interest" value="gut" />
                                          <span>장 건강</span>
                                      </label>
                                      <label className="checkbox-label">
                                          <input type="checkbox" name="interest" value="diet" />
                                          <span>다이어트</span>
                                      </label>
                                      <label className="checkbox-label">
                                          <input type="checkbox" name="interest" value="detox" />
                                          <span>숙변 케어</span>
                                      </label>
                                      <label className="checkbox-label">
                                          <input type="checkbox" name="interest" value="other" />
                                          <span>기타</span>
                                      </label>
                                  </div>
                              </div>
      
                              <div className="form-group">
                                  <label htmlFor="programDuration">희망 프로그램 기간 *</label>
                                  <select id="programDuration" name="program" required>
                                      <option value="">선택해주세요</option>
                                      <option value="1">절식 프로그램</option>
                                      <option value="2">다이어트 풀세트</option>
                                      <option value="3">장 디톡스 프로그램</option>
                                      <option value="3">풀세트 5종</option>
                                      <option value="3">단품 선택</option>
                                  </select>
                              </div>
      
                              <div className="form-group">
                                  <label htmlFor="message">문의사항</label>
                                  <textarea id="message" name="message" rows={4} placeholder="궁금하신 점을 자유롭게 작성해주세요"></textarea>
                              </div>
      
                              <button type="submit" className="btn btn-primary btn-large">상담 신청하기</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <footer className="footer">
              <div className="container">
                  <div className="footer-content">
                      <div className="footer-brand">
                          <h3>Pharvis AnyOne</h3>
                          <p>파비스 애니원 효소 프로그램</p>
                      </div>
      
                      <div className="footer-info">
                          <p><strong>상호명:</strong> 더라이프365</p>
                          <p><strong>사업자등록번호:</strong> 882-09-02873</p>
                          <p><strong>통신판매업 신고번호:</strong> 2025-김해장유-0324</p>
                          <p><strong>주소:</strong> 경남 김해시 율하2로 236번길 17-15, 301</p>
                          <p><strong>대표전화:</strong> 010-5955-9909</p>
                          <p><strong>이메일:</strong> thelife365@gmail.com</p>
                      </div>
                  </div>
      
                  <div className="footer-disclaimer">
                      <p>이 페이지에 기재된 내용은 개인에 따라 다를 수 있으며, 질병의 예방 및 치료를 위한 의약품이 아닙니다.</p>
                      <p>건강기능식품은 질병의 치료나 예방을 위한 것이 아니며, 균형 잡힌 식사와 함께 섭취하시기 바랍니다.</p>
                  </div>
      
                  <div className="footer-copyright">
                      <p>&copy; 2025 Pharvis AnyOne. All rights reserved.</p>
                  </div>
              </div>
          </footer>
      
          
          <div className="floating-cta" id="floatingCta">
              <a href="#contact" className="floating-cta-btn">3개월 장 디톡스 상담하기</a>
          </div>
      
          
          <div className="modal" id="reviewModal">
              <div className="modal-content">
                  <button className="modal-close" id="modalClose">&times;</button>
                  <div className="modal-body" id="modalBody"></div>
              </div>
          </div>
      
          
          <div className="toast" id="toast"></div>
    </>
  );
}

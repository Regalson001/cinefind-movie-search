
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #090b12;
  --surface: #111520;
  --surface-light: #191f2d;
  --border: rgba(255,255,255,.09);
  --text: #f4f5fa;
  --muted: #9299aa;
  --accent: #a78bfa;
  --accent-bright: #8b5cf6;
  --gold: #f4c76a;
  --radius: 18px;
  --font: 'DM Sans', sans-serif;
  --heading: 'Outfit', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background:
    radial-gradient(ellipse at 80% 0%, rgba(105, 75, 180, .12), transparent 35%),
    var(--bg);
  color: var(--text);
  font-family: var(--font);
  min-height: 100vh;
}

button, input, select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

[hidden] {
  display: none !important;
}

.page-shell {
  max-width: 1440px;
  margin: auto;
  padding: 0 6%;
}

/* HEADER */

.site-header {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--heading);
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -.8px;
}

.brand > span:last-child > span {
  color: var(--accent);
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  background: linear-gradient(135deg, #a78bfa, #6944c6);
  box-shadow: 0 6px 20px rgba(139, 92, 246, .3);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-link {
  position: relative;
  border: 0;
  background: transparent;
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 0;
  transition: color .2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
}

.nav-link.active::after {
  content: "";
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: -1px;
  background: var(--accent);
  border-radius: 10px;
}

.watch-count {
  display: inline-grid;
  place-items: center;
  min-width: 21px;
  height: 21px;
  margin-left: 5px;
  border-radius: 50px;
  background: rgba(167, 139, 250, .18);
  color: #c5b5ff;
  font-size: 11px;
}

.header-note {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-size: 12px;
}

.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #67d7a2;
  box-shadow: 0 0 10px #67d7a2;
}

/* HERO */

.hero {
  min-height: 510px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 30px;
  padding: 58px 0 65px;
  overflow: hidden;
}

.hero-copy {
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 17px;
}

.eyebrow > span {
  width: 20px;
  height: 2px;
  background: var(--accent);
}

.hero h1 {
  font-family: var(--heading);
  font-size: clamp(48px, 6.1vw, 76px);
  font-weight: 800;
  line-height: .99;
  letter-spacing: -3.5px;
}

.hero h1 span {
  color: var(--accent);
}

.hero-description {
  max-width: 475px;
  margin-top: 22px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}

.search-form {
  max-width: 525px;
  height: 61px;
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 30px;
  padding: 6px 7px 6px 19px;
  background: #171b27;
  border: 1px solid rgba(167, 139, 250, .28);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,.2);
}

.search-icon {
  font-size: 27px;
  color: var(--accent);
  line-height: 1;
}

.search-form input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font-size: 13px;
}

.search-form input::placeholder {
  color: #777f91;
}

.search-form button,
.primary-button {
  border: 0;
  border-radius: 9px;
  padding: 13px 19px;
  background: linear-gradient(135deg, #a78bfa, #7952d4);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  transition: transform .2s, filter .2s;
}

.search-form button:hover,
.primary-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.search-form button span {
  margin-left: 7px;
  font-size: 17px;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  color: var(--muted);
  font-size: 11px;
}

.meta-star {
  color: var(--gold);
  font-style: normal;
  margin-right: 3px;
}

/* HERO ART */

.hero-art {
  position: relative;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;
}

.hero-art-glow {
  position: absolute;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  background: rgba(119, 83, 213, .23);
  filter: blur(80px);
  z-index: -1;
}

.hero-poster-wrap {
  position: relative;
  width: 220px;
  height: 320px;
  transform: rotate(5deg);
  border: 5px solid rgba(255,255,255,.1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 25px 65px rgba(0,0,0,.55);
  background: var(--surface-light);
  z-index: 2;
}

.hero-poster-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-floating-card {
  position: absolute;
  z-index: 3;
  left: 2%;
  bottom: 27px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 205px;
  max-width: 250px;
  padding: 16px 19px;
  background: rgba(25, 30, 44, .93);
  border: 1px solid var(--border);
  border-radius: 13px;
  backdrop-filter: blur(15px);
  box-shadow: 0 12px 40px rgba(0,0,0,.3);
}

.floating-label {
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.hero-floating-card strong {
  font-family: var(--heading);
  font-size: 15px;
}

.hero-floating-card > span:last-child {
  color: var(--muted);
  font-size: 11px;
}

.hero-orbit {
  position: absolute;
  width: 320px;
  height: 320px;
  border: 1px solid rgba(167, 139, 250, .12);
  border-radius: 50%;
}

.orbit-two {
  width: 380px;
  height: 380px;
}

/* COLLECTION */

.content-section,
.watchlist-section {
  padding: 48px 0 75px;
  border-top: 1px solid var(--border);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 25px;
}

.section-heading .eyebrow {
  margin-bottom: 8px;
}

.section-heading h2 {
  font-family: var(--heading);
  font-size: 31px;
  letter-spacing: -.8px;
}

.section-subtitle {
  margin-top: 7px;
  color: var(--muted);
  font-size: 12px;
}

.filter-controls {
  display: flex;
  gap: 10px;
}

.filter-controls select {
  min-width: 130px;
  padding: 11px 14px;
  border: 1px solid var(--border);
  border-radius: 9px;
  outline: none;
  background: var(--surface);
  color: var(--text);
  font-size: 11px;
}

.category-row {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 25px 0;
}

.category-chip {
  padding: 9px 16px;
  border: 1px solid var(--border);
  border-radius: 30px;
  background: transparent;
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
  transition: all .2s;
}

.category-chip:hover,
.category-chip.active {
  color: #fff;
  border-color: var(--accent);
  background: rgba(167, 139, 250, .14);
}

.results-message {
  min-height: 18px;
  margin-bottom: 15px;
  color: var(--muted);
  font-size: 11px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 27px 19px;
}

.movie-card {
  min-width: 0;
  cursor: pointer;
  animation: cardIn .35s ease both;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.poster-wrap {
  position: relative;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: 12px;
  background: var(--surface-light);
  border: 1px solid var(--border);
}

.poster-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}

.movie-card:hover .poster-wrap img {
  transform: scale(1.06);
}

.poster-fallback {
  height: 100%;
  display: grid;
  place-items: center;
  padding: 15px;
  color: var(--muted);
  text-align: center;
  font-size: 12px;
}

.rating-pill {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 6px 9px;
  border-radius: 7px;
  background: rgba(8, 10, 17, .85);
  color: var(--gold);
  font-size: 10px;
  font-weight: 800;
  backdrop-filter: blur(8px);
}

.watch-toggle {
  position: absolute;
  top: 9px;
  right: 9px;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 50%;
  background: rgba(8,10,17,.78);
  color: white;
  font-size: 18px;
  transition: all .2s;
}

.watch-toggle:hover,
.watch-toggle.saved {
  background: var(--accent-bright);
  border-color: var(--accent-bright);
}

.movie-info {
  padding: 12px 2px 0;
}

.movie-title {
  overflow: hidden;
  font-family: var(--heading);
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-subtitle {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
  color: var(--muted);
  font-size: 10px;
}

/* LOADING, EMPTY AND PAGINATION */

.loading-state,
.empty-state {
  padding: 60px 15px;
  text-align: center;
  color: var(--muted);
}

.loader {
  width: 38px;
  height: 38px;
  margin: 0 auto 17px;
  border: 3px solid rgba(167,139,250,.2);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state > span {
  display: block;
  margin-bottom: 15px;
  font-size: 36px;
}

.empty-state h3 {
  color: var(--text);
  font-family: var(--heading);
  font-size: 21px;
}

.empty-state p {
  margin: 9px 0 20px;
  font-size: 12px;
}

.outline-button {
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 9px;
  background: var(--surface);
  color: var(--text);
  font-size: 11px;
  font-weight: 700;
  transition: border-color .2s, background .2s;
}

.outline-button:hover:not(:disabled) {
  border-color: var(--accent);
  background: var(--surface-light);
}

.outline-button:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.pagination span {
  color: var(--muted);
  font-size: 11px;
}

/* FOOTER */

.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 35px 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer-brand {
  font-size: 20px;
}

.footer-brand .brand-icon {
  width: 30px;
  height: 30px;
  font-size: 16px;
  border-radius: 9px;
}

.site-footer > p {
  color: var(--muted);
  font-size: 11px;
}

.footer-credit a {
  color: var(--accent);
  text-decoration: underline;
}

/* MOVIE DETAILS MODAL */

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0,0,0,.78);
  backdrop-filter: blur(8px);
}

.movie-modal {
  position: relative;
  width: min(680px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #121622;
  box-shadow: 0 30px 100px rgba(0,0,0,.6);
}

.modal-close {
  position: absolute;
  z-index: 3;
  top: 15px;
  right: 15px;
  width: 37px;
  height: 37px;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  background: rgba(0,0,0,.6);
  color: #fff;
  font-size: 25px;
}

.modal-backdrop-image {
  height: 240px;
  background:
    linear-gradient(to bottom, transparent, #121622),
    linear-gradient(135deg, #382c63, #151b2c);
  background-position: center;
  background-size: cover;
}

.modal-content {
  position: relative;
  padding: 0 30px 30px;
  margin-top: -35px;
}

.modal-content .eyebrow {
  margin-bottom: 9px;
}

.modal-content h2 {
  font-family: var(--heading);
  font-size: 32px;
  line-height: 1.15;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 13px 0 20px;
  color: var(--gold);
  font-size: 11px;
}

.modal-overview {
  color: #c0c5d2;
  font-size: 13px;
  line-height: 1.8;
}

.modal-extra {
  margin: 17px 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

.modal-content .primary-button {
  margin-top: 5px;
}

/* TOAST */

.toast {
  position: fixed;
  z-index: 30;
  right: 25px;
  bottom: 25px;
  max-width: min(350px, calc(100% - 40px));
  padding: 13px 18px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #202638;
  color: var(--text);
  font-size: 12px;
  box-shadow: 0 10px 35px rgba(0,0,0,.3);
  opacity: 0;
  transform: translateY(15px);
  pointer-events: none;
  transition: all .25s;
}

.toast.show {
  opacity: 1;
  transform: translateY(0);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* RESPONSIVE */

@media (max-width: 1050px) {
  .movie-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .header-note {
    display: none;
  }

  .hero {
    min-height: 460px;
  }
}

@media (max-width: 760px) {
  .page-shell {
    padding: 0 5%;
  }

  .site-header {
    min-height: 75px;
    flex-wrap: wrap;
    padding: 16px 0 10px;
    gap: 15px;
  }

  .brand {
    font-size: 22px;
  }

  .main-nav {
    order: 2;
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }

  .nav-link {
    font-size: 12px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 55px 0 35px;
    gap: 5px;
  }

  .hero h1 {
    font-size: clamp(48px, 12vw, 68px);
  }

  .hero-art {
    height: 330px;
  }

  .hero-poster-wrap {
    width: 180px;
    height: 265px;
  }

  .hero-floating-card {
    left: 0;
    bottom: 15px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .filter-controls {
    width: 100%;
  }

  .filter-controls select {
    flex: 1;
    min-width: 0;
  }

  .movie-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 23px 13px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 42px;
  }

  .hero h1 {
    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 13px;
  }

  .search-form {
    height: 55px;
    gap: 8px;
    padding-left: 12px;
  }

  .search-form button {
    padding: 12px;
    font-size: 11px;
  }

  .hero-meta {
    flex-wrap: wrap;
    font-size: 10px;
  }

  .hero-art {
    height: 300px;
  }

  .hero-poster-wrap {
    width: 160px;
    height: 240px;
  }

  .hero-floating-card {
    min-width: 170px;
    max-width: 190px;
    padding: 12px;
  }

  .movie-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px 13px;
  }

  .section-heading h2 {
    font-size: 27px;
  }

  .category-row {
    gap: 7px;
  }

  .category-chip {
    padding: 8px 12px;
    font-size: 10px;
  }

  .pagination {
    gap: 10px;
  }

  .pagination .outline-button {
    padding: 9px 11px;
  }

  .modal-content {
    padding: 0 20px 23px;
  }

  .modal-content h2 {
    font-size: 26px;
  }

  .modal-backdrop-image {
    height: 180px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}

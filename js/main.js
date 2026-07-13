/* =============================================
   MEDINA DIGITAL — JAVASCRIPT PRINCIPAL
   ============================================= */

let visibleCount = 6;
let currentFilter = "all";
let exitShown = false;

// =============================================
// INICIALIZAÇÃO
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initCookieBanner();
  renderCategories();
  renderProducts();
  initFilters();
  animateStats();
  initExitIntent();
  document.getElementById("year").textContent = new Date().getFullYear();
});

// =============================================
// HEADER — Scroll
// =============================================
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("open");
}

// =============================================
// COOKIES
// =============================================
function initCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (!banner) return;
  if (!localStorage.getItem("cookies_consent")) {
    setTimeout(() => banner.classList.add("show"), 1500);
  }
}

function acceptCookies() {
  localStorage.setItem("cookies_consent", "accepted");
  document.getElementById("cookieBanner").classList.remove("show");
  activatePixels();
}

function rejectCookies() {
  localStorage.setItem("cookies_consent", "rejected");
  document.getElementById("cookieBanner").classList.remove("show");
}

function activatePixels() {
  // Os pixels do Meta, Google e TikTok são ativados automaticamente
  // ao carregar a página se os IDs estiverem configurados no <head>
  console.log("Pixels ativados");
}

// =============================================
// CATEGORIAS
// =============================================
function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  CATEGORIES.forEach(cat => {
    const count = PRODUCTS.filter(p => p.category === cat.id && p.active).length;
    const el = document.createElement("div");
    el.className = "category-card";
    el.setAttribute("data-category", cat.id);
    el.innerHTML = `
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${count} ebook${count !== 1 ? 's' : ''}</div>
    `;
    el.onclick = () => filterByCategory(cat.id);
    grid.appendChild(el);
  });
}

function filterByCategory(categoryId) {
  currentFilter = categoryId;
  visibleCount = 6;

  document.querySelectorAll(".category-card").forEach(c => {
    c.classList.toggle("active", c.dataset.category === categoryId);
  });
  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === categoryId);
  });

  renderProducts();
  document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
}

// =============================================
// FILTROS
// =============================================
function initFilters() {
  const container = document.getElementById("filters");
  if (!container) return;

  const allBtn = container.querySelector('[data-filter="all"]');
  if (allBtn) allBtn.onclick = () => { currentFilter = "all"; visibleCount = 6; resetFilters(); renderProducts(); };

  CATEGORIES.forEach(cat => {
    const count = PRODUCTS.filter(p => p.category === cat.id && p.active).length;
    if (count === 0) return;
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = cat.id;
    btn.textContent = cat.name;
    btn.onclick = () => filterByCategory(cat.id);
    container.appendChild(btn);
  });
}

function resetFilters() {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
}

// =============================================
// PRODUTOS
// =============================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    if (!p.active) return false;
    if (currentFilter === "all") return true;
    return p.category === currentFilter;
  });

  const toShow = filtered.slice(0, visibleCount);
  grid.innerHTML = "";

  if (toShow.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--color-text-muted)">
      <div style="font-size:48px;margin-bottom:16px">📚</div>
      <p>Nenhum ebook encontrado nesta categoria.</p>
    </div>`;
  } else {
    toShow.forEach(p => grid.appendChild(createProductCard(p)));
  }

  const loadBtn = document.getElementById("loadMoreBtn");
  if (loadBtn) loadBtn.style.display = filtered.length > visibleCount ? "block" : "none";
}

function createProductCard(product) {
  const cat = CATEGORIES.find(c => c.id === product.category);
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    ${product.badge ? `<div class="product-badge badge-${product.badgeType}">${product.badge}</div>` : ""}
    <div class="product-cover">
      <img src="${product.image}" alt="${product.title}" loading="lazy">
    </div>
    <div class="product-info">
      <div class="product-category">${cat ? cat.icon + " " + cat.name : ""}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-desc">${product.description}</div>
      <div class="product-meta">
        <div class="product-price">
          ${product.originalPrice ? `<span class="price-original">R$ ${product.originalPrice.toFixed(2).replace(".",",")}</span>` : ""}
          <span class="price-current">R$ ${product.price.toFixed(2).replace(".",",")}</span>
        </div>
      </div>
    </div>
    <div class="product-actions">
      <a href="${product.buyLink}" target="_blank" class="btn-primary" onclick="trackPurchase(${product.id})">Comprar agora</a>
      <button class="btn-detail" onclick="openProduct(${product.id})">+ Detalhes</button>
    </div>
  `;
  return card;
}

function loadMore() {
  visibleCount += 6;
  renderProducts();
}

function openProduct(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  window.open(product.buyLink, "_blank");
}

// =============================================
// TRACKING / PIXEL
// =============================================
function trackPurchase(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Meta Pixel
  if (typeof fbq !== "undefined") {
    fbq("track", "InitiateCheckout", { value: product.price, currency: "BRL", content_name: product.title });
  }
  // Google
  if (typeof gtag !== "undefined") {
    gtag("event", "begin_checkout", { value: product.price, currency: "BRL", items: [{ item_name: product.title }] });
  }
}

// =============================================
// CONTAGEM ANIMADA DAS STATS
// =============================================
function animateStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // contadores removidos — hero agora usa posicionamento de marca
        observer.disconnect();
      }
    });
  });
  const heroStats = document.querySelector(".hero-stats");
  if (heroStats) observer.observe(heroStats);
}

function countUp(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString("pt-BR") + suffix;
    if (current >= target) clearInterval(timer);
  }, 25);
}

// =============================================
// EXIT INTENT POPUP
// =============================================
function initExitIntent() {
  if (localStorage.getItem("exit_popup_shown")) return;
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY <= 0 && !exitShown) {
      exitShown = true;
      showPopup();
      localStorage.setItem("exit_popup_shown", "1");
    }
  });
}

function showPopup() {
  const popup = document.getElementById("exitPopup");
  if (popup) popup.classList.add("show");
}

function closePopup() {
  const popup = document.getElementById("exitPopup");
  if (popup) popup.classList.remove("show");
}

// =============================================
// NEWSLETTER
// =============================================
function subscribeNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const email = input.value;
  const btn = e.target.querySelector("button");
  btn.textContent = "✓ Cadastrado!";
  btn.style.background = "var(--color-success)";
  input.value = "";
  setTimeout(() => {
    btn.textContent = "Quero receber";
    btn.style.background = "";
  }, 3000);
  console.log("Email cadastrado:", email);
  // Integrar com seu serviço de e-mail marketing aqui (Mailchimp, RD Station, etc.)
}

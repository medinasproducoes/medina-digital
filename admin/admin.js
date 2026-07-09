/* =============================================
   MEDINA DIGITAL — PAINEL ADMIN JS
   
   ✏️ EDITAR SENHA: altere a variável abaixo
   ============================================= */

const ADMIN_PASSWORD = "MedinaDigital2026@"; // ← senha alterada

let editingProductId = null;
let localProducts = JSON.parse(localStorage.getItem("md_products") || "null") || PRODUCTS;

// =============================================
// LOGIN
// =============================================
function checkLogin() {
  const pwd = document.getElementById("adminPassword").value;
  const storedPwd = localStorage.getItem("admin_password") || ADMIN_PASSWORD;
  if (pwd === storedPwd) {
    localStorage.setItem("admin_logged", "1");
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("adminLayout").style.display = "flex";
    initAdmin();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

function logout() {
  localStorage.removeItem("admin_logged");
  location.reload();
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("admin_logged")) {
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("adminLayout").style.display = "flex";
    initAdmin();
  }
});

// =============================================
// INIT
// =============================================
function initAdmin() {
  document.getElementById("adminDate").textContent = new Date().toLocaleDateString("pt-BR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
  populateCategorySelect();
  loadDashboard();
  loadProductsTable();
  loadCategoriasTable();
  loadConfigForm();
}

// =============================================
// NAVEGAÇÃO
// =============================================
function showSection(name) {
  document.querySelectorAll(".admin-section").forEach(s => s.style.display = "none");
  document.getElementById(`section-${name}`).style.display = "block";
  document.querySelectorAll(".admin-nav a").forEach(a => a.classList.remove("active"));
  event.currentTarget?.classList.add("active");
}

// =============================================
// DASHBOARD
// =============================================
function loadDashboard() {
  const active = localProducts.filter(p => p.active).length;
  document.getElementById("dashEbooks").textContent = active;
  document.getElementById("dashCategorias").textContent = CATEGORIES.length;
  document.getElementById("dashDepoimentos").textContent = "3";

  const tbody = document.getElementById("dashTableBody");
  tbody.innerHTML = "";
  localProducts.slice(0, 8).forEach(p => {
    const cat = CATEGORIES.find(c => c.id === p.category);
    tbody.innerHTML += `<tr>
      <td><strong style="color:var(--color-white)">${p.title}</strong></td>
      <td>${cat ? cat.icon + " " + cat.name : p.category}</td>
      <td style="color:var(--color-gold)">R$ ${Number(p.price).toFixed(2).replace(".",",")}</td>
      <td><span class="badge ${p.active ? 'badge-active' : 'badge-inactive'}">${p.active ? "Ativo" : "Inativo"}</span></td>
    </tr>`;
  });
}

// =============================================
// PRODUTOS — CRUD
// =============================================
function populateCategorySelect() {
  const sel = document.getElementById("pCategory");
  if (!sel) return;
  sel.innerHTML = CATEGORIES.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join("");
}

function loadProductsTable() {
  const tbody = document.getElementById("productsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  localProducts.forEach(p => {
    const cat = CATEGORIES.find(c => c.id === p.category);
    tbody.innerHTML += `<tr>
      <td><strong style="color:var(--color-white)">${p.title}</strong></td>
      <td>${cat ? cat.icon + " " + cat.name : p.category}</td>
      <td style="color:var(--color-gold)">R$ ${Number(p.price).toFixed(2).replace(".",",")}</td>
      <td><span class="badge ${p.active ? 'badge-active' : 'badge-inactive'}">${p.active ? "Ativo" : "Inativo"}</span></td>
      <td>
        <button class="btn-table-edit" onclick="openEditProduct(${p.id})">✏️ Editar</button>
        <button class="btn-table-toggle" onclick="toggleProduct(${p.id})">${p.active ? "⏸ Pausar" : "▶ Ativar"}</button>
        <button class="btn-table-delete" onclick="deleteProduct(${p.id})">🗑️ Excluir</button>
      </td>
    </tr>`;
  });
}

function openAddProduct() {
  editingProductId = null;
  document.getElementById("productFormTitle").textContent = "Novo Ebook";
  document.getElementById("productFormCard").style.display = "block";
  clearProductForm();
  document.getElementById("productFormCard").scrollIntoView({ behavior: "smooth" });
}

function openEditProduct(id) {
  const p = localProducts.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;
  document.getElementById("productFormTitle").textContent = "Editar Ebook";
  document.getElementById("productFormCard").style.display = "block";
  document.getElementById("pId").value = p.id;
  document.getElementById("pTitle").value = p.title;
  document.getElementById("pCategory").value = p.category;
  document.getElementById("pDesc").value = p.description;
  document.getElementById("pPrice").value = p.price;
  document.getElementById("pOriginalPrice").value = p.originalPrice || "";
  document.getElementById("pBuyLink").value = p.buyLink || "";
  document.getElementById("pImage").value = p.image || "";
  document.getElementById("pPages").value = p.pages || "";
  document.getElementById("pRating").value = p.rating || "";
  document.getElementById("pBadge").value = p.badge || "";
  document.getElementById("pBadgeType").value = p.badgeType || "gold";
  document.getElementById("pFeatures").value = (p.features || []).join("\n");
  document.getElementById("pActive").value = String(p.active);
  document.getElementById("productFormCard").scrollIntoView({ behavior: "smooth" });
}

function saveProduct(e) {
  e.preventDefault();
  const features = document.getElementById("pFeatures").value
    .split("\n").map(f => f.trim()).filter(Boolean);

  const product = {
    id: editingProductId || Date.now(),
    title: document.getElementById("pTitle").value,
    category: document.getElementById("pCategory").value,
    description: document.getElementById("pDesc").value,
    price: parseFloat(document.getElementById("pPrice").value),
    originalPrice: parseFloat(document.getElementById("pOriginalPrice").value) || null,
    buyLink: document.getElementById("pBuyLink").value,
    image: document.getElementById("pImage").value || "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=800&fit=crop",
    pages: parseInt(document.getElementById("pPages").value) || 0,
    rating: parseFloat(document.getElementById("pRating").value) || 5.0,
    reviews: 0,
    badge: document.getElementById("pBadge").value,
    badgeType: document.getElementById("pBadgeType").value,
    features: features,
    format: "PDF + EPUB",
    active: document.getElementById("pActive").value === "true"
  };

  if (editingProductId) {
    const idx = localProducts.findIndex(p => p.id === editingProductId);
    if (idx !== -1) localProducts[idx] = product;
  } else {
    localProducts.push(product);
  }

  saveProducts();
  closeProductForm();
  loadProductsTable();
  loadDashboard();
  alert(`✅ Ebook "${product.title}" salvo com sucesso!\n\n⚠️ Para aplicar permanentemente, cole os dados no arquivo js/data.js`);
}

function toggleProduct(id) {
  const p = localProducts.find(x => x.id === id);
  if (p) { p.active = !p.active; saveProducts(); loadProductsTable(); loadDashboard(); }
}

function deleteProduct(id) {
  const p = localProducts.find(x => x.id === id);
  if (!p) return;
  if (!confirm(`Excluir "${p.title}"?\n\nEsta ação não pode ser desfeita.`)) return;
  localProducts = localProducts.filter(x => x.id !== id);
  saveProducts();
  loadProductsTable();
  loadDashboard();
}

function saveProducts() {
  localStorage.setItem("md_products", JSON.stringify(localProducts));
}

function clearProductForm() {
  ["pTitle","pDesc","pPrice","pOriginalPrice","pBuyLink","pImage","pPages","pRating","pBadge","pFeatures","pId"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("pBadgeType").value = "gold";
  document.getElementById("pActive").value = "true";
  document.getElementById("pCategory").selectedIndex = 0;
}

function closeProductForm() {
  document.getElementById("productFormCard").style.display = "none";
  editingProductId = null;
}

// =============================================
// CATEGORIAS
// =============================================
function loadCategoriasTable() {
  const tbody = document.getElementById("categoriasTableBody");
  if (!tbody) return;
  tbody.innerHTML = CATEGORIES.map(cat => {
    const count = localProducts.filter(p => p.category === cat.id && p.active).length;
    return `<tr>
      <td style="font-size:24px">${cat.icon}</td>
      <td style="color:var(--color-white)">${cat.name}</td>
      <td><code style="color:var(--color-gold)">${cat.id}</code></td>
      <td>${count} ebook${count !== 1 ? 's' : ''}</td>
    </tr>`;
  }).join("");
}

// =============================================
// CONFIGURAÇÕES
// =============================================
function loadConfigForm() {
  const cfg = JSON.parse(localStorage.getItem("md_config") || "null") || STORE_CONFIG;
  document.getElementById("cfgName").value = cfg.name || "";
  document.getElementById("cfgSlogan").value = cfg.slogan || "";
  document.getElementById("cfgEmail").value = cfg.email || "";
  document.getElementById("cfgWhatsapp").value = cfg.whatsapp || "";
  document.getElementById("cfgInstagram").value = cfg.instagram || "";
  document.getElementById("cfgKiwify").value = cfg.kiwifyUrl || "";
  document.getElementById("cfgEbooks").value = cfg.stats?.ebooks || "";
  document.getElementById("cfgClientes").value = cfg.stats?.clientes || "";
}

function saveConfig() {
  const cfg = {
    name: document.getElementById("cfgName").value,
    slogan: document.getElementById("cfgSlogan").value,
    email: document.getElementById("cfgEmail").value,
    whatsapp: document.getElementById("cfgWhatsapp").value,
    instagram: document.getElementById("cfgInstagram").value,
    kiwifyUrl: document.getElementById("cfgKiwify").value,
    stats: {
      ebooks: parseInt(document.getElementById("cfgEbooks").value),
      clientes: parseInt(document.getElementById("cfgClientes").value),
      avaliacao: STORE_CONFIG.stats.avaliacao
    }
  };
  localStorage.setItem("md_config", JSON.stringify(cfg));
  const msg = document.getElementById("configMsg");
  msg.style.display = "block";
  setTimeout(() => msg.style.display = "none", 5000);
}

function changePassword() {
  const np = document.getElementById("newPassword").value;
  const cp = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("passMsg");
  if (!np) { msg.style.display = "block"; msg.style.color = "var(--color-danger)"; msg.textContent = "Digite uma senha."; return; }
  if (np !== cp) { msg.style.display = "block"; msg.style.color = "var(--color-danger)"; msg.textContent = "As senhas não coincidem."; return; }
  localStorage.setItem("admin_password", np);
  msg.style.display = "block";
  msg.style.color = "var(--color-success)";
  msg.textContent = "✓ Senha alterada com sucesso!";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

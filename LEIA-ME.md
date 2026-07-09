# 📚 Medina Digital — Guia Completo

## 🗂️ Estrutura do Projeto

```
medina-digital/
├── index.html              ← Página principal
├── sitemap.xml             ← SEO (atualize com seu domínio)
├── css/
│   ├── style.css           ← Todo o visual do site
│   └── admin.css           ← Estilos do painel admin
├── js/
│   ├── data.js             ← ⭐ DADOS DA LOJA (ebooks, categorias)
│   └── main.js             ← Funcionalidades do site
├── admin/
│   ├── index.html          ← Painel de controle
│   └── admin.js            ← Lógica do admin
└── pages/
    ├── produto.html         ← Página individual de cada ebook
    ├── sobre.html           ← Quem Somos
    ├── contato.html         ← Fale Conosco
    ├── faq.html             ← Perguntas Frequentes
    ├── como-funciona.html   ← Como Funciona
    ├── termos.html          ← Termos e Condições
    ├── privacidade.html     ← Política de Privacidade
    ├── cookies.html         ← Política de Cookies
    └── acessibilidade.html  ← Acessibilidade
```

---

## ✏️ Como Editar

### 1. Adicionar novo ebook
Abra `js/data.js` e adicione um bloco no array `PRODUCTS`:
```javascript
{
  id: 7,                    // número único
  title: "Nome do Ebook",
  category: "negocios",     // veja os IDs em CATEGORIES
  description: "Descrição chamativa...",
  price: 29.90,
  originalPrice: 59.90,     // preço riscado (opcional)
  badge: "Novo",            // opcional
  badgeType: "new",         // gold | new | sale
  rating: 4.9,
  reviews: 0,
  pages: 150,
  format: "PDF + EPUB",
  image: "URL da imagem",
  buyLink: "https://kiwify.app/seu-link",
  features: ["Benefício 1", "Benefício 2", "Benefício 3"],
  active: true
}
```

### 2. Adicionar categoria
Em `js/data.js`, adicione ao array `CATEGORIES`:
```javascript
{ id: "marketing", name: "Marketing Digital", icon: "📣", color: "#2563eb" }
```

### 3. Alterar cores
Em `css/style.css`, edite as variáveis no início:
```css
--color-gold: #c9a84c;      /* cor dourada principal */
--color-bg: #0a0a0f;        /* fundo escuro */
```

### 4. Configurar pixels
Em `index.html`, no `<head>`, localize a seção `<!-- PIXELS -->` e substitua:
- `META_PIXEL_ID = 'SEU_PIXEL_ID'` → seu ID do Facebook
- `GTM_ID = 'GTM-XXXXXXX'` → seu ID do Google Tag Manager
- `TIKTOK_ID = 'SEU_TIKTOK_ID'` → seu ID do TikTok

---

## 🔐 Painel Administrativo

Acesse: `admin/index.html`
Senha padrão: **medina2024**

Para alterar a senha: entre no admin → Configurações → Alterar senha

### Funcionalidades do Painel:
- ✅ Dashboard com resumo
- ✅ Adicionar/Editar/Excluir ebooks
- ✅ Ativar/Pausar ebooks
- ✅ Ver categorias
- ✅ Guia de pixels (Meta, Google, TikTok)
- ✅ Guia de SEO
- ✅ Configurações da loja

---

## 🚀 Como Publicar Online

### Opção 1 — Hospedagem gratuita (GitHub Pages)
1. Crie conta em github.com
2. Crie repositório público
3. Faça upload de todos os arquivos
4. Ative GitHub Pages nas configurações

### Opção 2 — Netlify (recomendado, gratuito)
1. Crie conta em netlify.com
2. Arraste a pasta `medina-digital` para o site
3. Pronto! URL gerada automaticamente
4. Configure domínio personalizado nas configurações

### Opção 3 — Hospedagem paga
Faça upload via FTP para qualquer hospedagem (Hostinger, Locaweb, etc.)

---

## 🎯 Configurar Kiwify

1. Crie conta em kiwify.app
2. Cadastre cada ebook como produto
3. Copie o link de vendas de cada produto
4. Cole no campo `buyLink` de cada ebook em `js/data.js`

---

## 📧 Configurar Formulário de Contato

Para receber os e-mails do formulário de contato, integre com:
- **Formspree** (gratuito): formspree.io
- **EmailJS**: emailjs.com
- **Web3Forms**: web3forms.com

---

## ✅ Checklist de Lançamento

- [ ] Editar dados em `js/data.js` (nome, e-mail, WhatsApp)
- [ ] Adicionar seus ebooks com links do Kiwify
- [ ] Configurar pixels do Meta, Google e TikTok
- [ ] Atualizar `sitemap.xml` com seu domínio
- [ ] Personalizar página "Quem Somos" com sua foto e história
- [ ] Configurar formulário de contato
- [ ] Publicar online (Netlify recomendado)
- [ ] Registrar domínio medinadigital.com.br
- [ ] Alterar senha do painel admin

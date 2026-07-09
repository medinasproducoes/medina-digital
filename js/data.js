/* =============================================
   MEDINA DIGITAL — DADOS DA LOJA
   Atualizado: julho 2026
   ============================================= */

const STORE_CONFIG = {
  name: "Medina Digital",
  author: "Medina'S Produções",
  slogan: "Conhecimento que transforma vidas",
  email: "curriculopro.site@gmail.com",
  whatsapp: "5545991359764",
  instagram: "medinasproducoes81",
  facebook: "medinasproducoes",
  stats: {
    ebooks: 3,
    clientes: 0,
    avaliacao: "Novo"
  }
};

// =============================================
// CATEGORIAS
// =============================================
const CATEGORIES = [
  { id: "saude-mental",   name: "Saúde Mental",    icon: "", color: "#1B3A4B" },
  { id: "negocios",       name: "Negócios",         icon: "", color: "#2563eb" },
  { id: "carreira",       name: "Carreira",         icon: "", color: "#4f46e5" },
];

// =============================================
// PRODUTOS — os 3 publicados até agora
// =============================================
const PRODUCTS = [
  {
    id: 1,
    title: "Burnout em Silêncio",
    category: "saude-mental",
    description: "O guia prático para reconhecer, desacelerar e se recuperar do esgotamento — sem abandonar seus clientes, sua renda ou tudo o que você construiu. Para autônomos, MEIs e empreendedores solo.",
    price: 57.00,
    originalPrice: 97.00,
    badge: "Mais vendido",
    badgeType: "gold",
    rating: 5.0,
    reviews: 0,
    format: "PDF",
    image: "https://medinasproducoes-site.netlify.app/IMGs/hero.jpeg",
    buyLink: "https://medinasproducoes-site.netlify.app",
    features: [
      "Do diagnóstico ao protocolo de recuperação",
      "Protocolo de emergência para crises",
      "5 scripts prontos para limites com clientes",
      "Diário de Recuperação — 30 dias guiados",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 2,
    title: "WhatsApp que Vende Todo Dia",
    category: "negocios",
    description: "8 scripts prontos para transformar conversas em vendas. Para lojistas, autônomos e profissionais que vendem pelo WhatsApp e querem parar de perder cliente na hora H.",
    price: 37.90,
    originalPrice: 67.90,
    badge: "Lançamento",
    badgeType: "new",
    rating: 5.0,
    reviews: 0,
    format: "PDF",
    image: "https://whasapp-que-vende-todo-dia.netlify.app/img/hero-lojista-web.jpg",
    buyLink: "https://whasapp-que-vende-todo-dia.netlify.app",
    features: [
      "8 situações reais de venda com script pronto",
      "Recuperar carrinho abandonado",
      "Responder 'vou pensar' sem perder a venda",
      "Guia de tom de voz profissional",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 3,
    title: "CurrículoPro",
    category: "carreira",
    description: "Crie um currículo profissional em 10 minutos — formatado para passar pela triagem automática (ATS) dos sistemas de recrutamento. 5 modelos, exportação em PDF e Word, acesso vitalício.",
    price: 9.90,
    originalPrice: 29.90,
    badge: "Lançamento",
    badgeType: "new",
    rating: 5.0,
    reviews: 0,
    format: "App online",
    image: "https://curriculopro-site.netlify.app/img/hero-curriculo-web.jpg",
    buyLink: "https://curriculopro-site.netlify.app",
    features: [
      "5 modelos formatados para sistemas ATS",
      "Exportação ilimitada em PDF e Word",
      "Seus dados ficam só no seu dispositivo",
      "Sem mensalidade — pagamento único",
      "Acesso imediato via Pix"
    ],
    active: true
  }
];

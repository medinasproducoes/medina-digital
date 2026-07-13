/* =============================================
   MEDINA DIGITAL â€” DADOS DA LOJA
   Atualizado: julho 2026
   ============================================= */

const STORE_CONFIG = {
  name: "Medina Digital",
  author: "Medina'S ProduÃ§Ãµes",
  slogan: "Conhecimento que transforma vidas",
  email: "curriculopro.site@gmail.com",
  whatsapp: "5545991359764",
  instagram: "medinasproducoes81",
  facebook: "medinasproducoes",
  stats: {
    ebooks: 10,
    clientes: 0,
    avaliacao: "Novo"
  }
};

// =============================================
// CATEGORIAS
// =============================================
const CATEGORIES = [
  { id: "saude-mental",     name: "SaÃºde Mental",       icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 21C7 21 3 17.5 3 13c0-3 2-5 4-5 .5-2 2.5-4 5-4s4.5 2 5 4c2 0 4 2 4 5 0 4.5-4 8-9 8z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12h1.5l1-2 1.5 4 1-2H16'/></svg>", color: "#1B3A4B" },
  { id: "saude-bem-estar",  name: "SaÃºde e Bem-Estar",  icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 21s-7-4.4-9.3-9C1.3 8 3 4.8 6.3 4.2 8.6 3.8 10.6 5 12 7c1.4-2 3.4-3.2 5.7-2.8 3.3.6 5 3.8 3.6 7.8C19 16.6 12 21 12 21Z'/></svg>", color: "#16a34a" },
  { id: "relacionamentos",  name: "Relacionamentos",    icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z'/></svg>", color: "#be185d" },
  { id: "financas",         name: "FinanÃ§as",           icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'/></svg>", color: "#b45309" },
  { id: "negocios",         name: "NegÃ³cios e Vendas",  icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3 8a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 6V5a2 2 0 012-2h4a2 2 0 012 2v1M3 12h18'/></svg>", color: "#2563eb" },
  { id: "carreira",         name: "Carreira",           icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12h6m-6 4h6M9 8h1M7 21h10a2 2 0 002-2V7.5L14.5 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'/></svg>", color: "#4f46e5" },
  { id: "produtividade-ia", name: "Produtividade e IA", icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z'/></svg>", color: "#7c3aed" },
];

// =============================================
// PRODUTOS â€” os 10 publicados atÃ© agora
// =============================================
const PRODUCTS = [
  {
    id: 1,
    title: "Burnout em SilÃªncio",
    category: "saude-mental",
    description: "O guia prÃ¡tico para reconhecer, desacelerar e se recuperar do esgotamento â€” sem abandonar seus clientes, sua renda ou tudo o que vocÃª construiu. Para autÃ´nomos, MEIs e empreendedores solo.",
    price: 57.00,
    badge: "Mais vendido",
    badgeType: "gold",
    format: "PDF",
    image: "https://burnout.medinadigital.com.br/IMGs/exaustao.jpeg",
    buyLink: "https://burnout.medinadigital.com.br",
    features: [
      "Do diagnÃ³stico ao protocolo de recuperaÃ§Ã£o",
      "Protocolo de emergÃªncia para crises",
      "5 scripts prontos para limites com clientes",
      "DiÃ¡rio de RecuperaÃ§Ã£o â€” 30 dias guiados",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 2,
    title: "WhatsApp que Vende Todo Dia",
    category: "negocios",
    description: "8 scripts prontos para transformar conversas em vendas. Para lojistas, autÃ´nomos e profissionais que vendem pelo WhatsApp e querem parar de perder cliente na hora H.",
    price: 37.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://whatsapp.medinadigital.com.br/img/hero-lojista-web.jpg",
    buyLink: "https://whatsapp.medinadigital.com.br",
    features: [
      "8 situaÃ§Ãµes reais de venda com script pronto",
      "Recuperar carrinho abandonado",
      "Responder 'vou pensar' sem perder a venda",
      "Guia de tom de voz profissional",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 3,
    title: "CurrÃ­culoPro",
    category: "carreira",
    description: "Crie um currÃ­culo profissional em 10 minutos â€” formatado para passar pela triagem automÃ¡tica (ATS) dos sistemas de recrutamento. 5 modelos, exportaÃ§Ã£o em PDF e Word, acesso vitalÃ­cio.",
    price: 9.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "App online",
    image: "https://curriculo.medinadigital.com.br/img/hero-curriculo-web.jpg",
    buyLink: "https://curriculo.medinadigital.com.br",
    features: [
      "5 modelos formatados para sistemas ATS",
      "ExportaÃ§Ã£o ilimitada em PDF e Word",
      "Seus dados ficam sÃ³ no seu dispositivo",
      "Sem mensalidade â€” pagamento Ãºnico",
      "Acesso imediato via Pix"
    ],
    active: true
  },
  {
    id: 4,
    title: "Saia das DÃ­vidas de Uma Vez por Todas",
    category: "financas",
    description: "O mÃ©todo definitivo para renegociar dÃ­vidas, reorganizar o orÃ§amento e sair do vermelho de vez â€” sem fÃ³rmulas mÃ¡gicas, com passo a passo prÃ¡tico para quem quer respirar aliviado de novo.",
    price: 34.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop&q=80",
    buyLink: "https://dividas.medinadigital.com.br",
    features: [
      "Passo a passo de renegociaÃ§Ã£o com credores",
      "MÃ©todo de orÃ§amento por categoria",
      "Como identificar e evitar golpes financeiros",
      "Planilha de controle de dÃ­vidas",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 5,
    title: "Vendeu, Mas NÃ£o Sobrou",
    category: "negocios",
    description: "Por que seu negÃ³cio fatura bem e o dinheiro nunca sobra? O guia de gestÃ£o de fluxo de caixa para donos de negÃ³cio que vendem, mas nÃ£o conseguem entender pra onde vai o lucro.",
    price: 47.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=800&fit=crop&q=80",
    buyLink: "https://fluxo.medinadigital.com.br",
    features: [
      "DiagnÃ³stico de onde o lucro estÃ¡ vazando",
      "SeparaÃ§Ã£o clara entre PJ e pessoa fÃ­sica",
      "PrecificaÃ§Ã£o que realmente cobre os custos",
      "Planilha de fluxo de caixa simplificada",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 6,
    title: "IA no Trabalho, Sem Medo (Nem Exagero)",
    category: "produtividade-ia",
    description: "87% dos brasileiros querem aprender a usar IA no trabalho. SÃ³ 24% realmente jÃ¡ usam. Este guia Ã© a ponte entre esses dois nÃºmeros â€” sem prometer que ela vai te substituir, nem que vai resolver sua vida sozinha.",
    price: 27.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&h=800&fit=crop&q=80",
    buyLink: "https://prompts.medinadigital.com.br",
    features: [
      "20 prompts prontos por Ã¡rea de trabalho",
      "O que a IA nÃ£o deve fazer no seu dia a dia",
      "Checklist de bom uso de IA no trabalho",
      "Sem jargÃ£o tÃ©cnico â€” linguagem simples",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 7,
    title: "EmagreÃ§a Sem Passar Fome",
    category: "saude-bem-estar",
    description: "VocÃª nÃ£o falhou nas dietas. As dietas falharam com vocÃª. O mÃ©todo definitivo para perder peso sem contar calorias, sem passar fome e sem academia cara â€” com ciÃªncia, hÃ¡bito e prazer Ã  mesa.",
    price: 42.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop&q=80",
    buyLink: "https://emagreca.medinadigital.com.br",
    features: [
      "A Regra do Prato â€” sem contar calorias",
      "Movimento sem academia (conceito de NEAT)",
      "CardÃ¡pio Semanal Completo",
      "20 Receitas RÃ¡pidas e Saborosas",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 8,
    title: "Relacionamentos que Funcionam",
    category: "relacionamentos",
    description: "Relacionamentos nÃ£o acontecem com vocÃª. Eles sÃ£o construÃ­dos por vocÃª. O guia completo para construir conexÃµes genuÃ­nas, comunicar-se com clareza e cultivar relaÃ§Ãµes que duram â€” baseado em dÃ©cadas de pesquisa cientÃ­fica.",
    price: 39.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop&q=80",
    buyLink: "https://relacionamentos.medinadigital.com.br",
    features: [
      "Baseado em Harvard, Gottman e Bowlby",
      "Quiz do Estilo de Apego",
      "Scripts de ComunicaÃ§Ã£o para situaÃ§Ãµes difÃ­ceis",
      "Guia PrÃ¡tico de Limites SaudÃ¡veis",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 9,
    title: "Investindo com Pouco",
    category: "financas",
    description: "VocÃª nÃ£o precisa ser rico pra comeÃ§ar a investir. O guia completo para comeÃ§ar a investir a partir de R$ 1, entender renda fixa, FIIs, aÃ§Ãµes e ETFs em linguagem simples â€” sem promessas milagrosas.",
    price: 32.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=800&fit=crop&q=80",
    buyLink: "https://investindo.medinadigital.com.br",
    features: [
      "Renda fixa, FIIs, aÃ§Ãµes e ETFs explicados",
      "Simulador de Metas de Investimento",
      "Tabela de Aportes: o impacto da consistÃªncia",
      "GlossÃ¡rio Completo de Investimentos",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  },
  {
    id: 10,
    title: "MÃ¡quina de ConteÃºdo com IA",
    category: "produtividade-ia",
    description: "Bloqueio criativo nÃ£o Ã© preguiÃ§a. Ã‰ falta de sistema. O sistema completo para nunca mais travar na hora de criar conteÃºdo â€” prompts prontos, engenharia de comando e um workflow de 60 minutos para 30 dias de posts.",
    price: 44.90,
    badge: "LanÃ§amento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&q=80",
    buyLink: "https://conteudo-ia.medinadigital.com.br",
    features: [
      "Prompt Mestre de ConfiguraÃ§Ã£o de Persona",
      "5 estruturas de tÃ­tulo campeÃ£s de engajamento",
      "Roteiros prontos de Reels e TikTok",
      "O Workflow dos 60 Minutos",
      "Acesso imediato via Pix ou cartÃ£o"
    ],
    active: true
  }
];

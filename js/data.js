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
    ebooks: 10,
    clientes: 0,
    avaliacao: "Novo"
  }
};

// =============================================
// CATEGORIAS
// =============================================
const CATEGORIES = [
  { id: "saude-mental",     name: "Saúde Mental",       icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 21C7 21 3 17.5 3 13c0-3 2-5 4-5 .5-2 2.5-4 5-4s4.5 2 5 4c2 0 4 2 4 5 0 4.5-4 8-9 8z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12h1.5l1-2 1.5 4 1-2H16'/></svg>", color: "#1B3A4B" },
  { id: "saude-bem-estar",  name: "Saúde e Bem-Estar",  icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 21s-7-4.4-9.3-9C1.3 8 3 4.8 6.3 4.2 8.6 3.8 10.6 5 12 7c1.4-2 3.4-3.2 5.7-2.8 3.3.6 5 3.8 3.6 7.8C19 16.6 12 21 12 21Z'/></svg>", color: "#16a34a" },
  { id: "relacionamentos",  name: "Relacionamentos",    icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8z'/></svg>", color: "#be185d" },
  { id: "financas",         name: "Finanças",           icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'/></svg>", color: "#b45309" },
  { id: "negocios",         name: "Negócios e Vendas",  icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M3 8a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M8 6V5a2 2 0 012-2h4a2 2 0 012 2v1M3 12h18'/></svg>", color: "#2563eb" },
  { id: "carreira",         name: "Carreira",           icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M9 12h6m-6 4h6M9 8h1M7 21h10a2 2 0 002-2V7.5L14.5 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'/></svg>", color: "#4f46e5" },
  { id: "produtividade-ia", name: "Produtividade e IA", icon: "<svg width='32' height='32' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M13 2 4 14h7l-1 8 9-12h-7l1-8Z'/></svg>", color: "#7c3aed" },
];

// =============================================
// PRODUTOS — os 10 publicados até agora
// =============================================
const PRODUCTS = [
  {
    id: 1,
    title: "Burnout em Silêncio",
    category: "saude-mental",
    description: "O guia prático para reconhecer, desacelerar e se recuperar do esgotamento — sem abandonar seus clientes, sua renda ou tudo o que você construiu. Para autônomos, MEIs e empreendedores solo.",
    price: 57.00,
    badge: "Mais vendido",
    badgeType: "gold",
    format: "PDF",
    image: "https://burnout.medinadigital.com.br/IMGs/exaustao.jpeg",
    buyLink: "https://burnout.medinadigital.com.br",
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
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://whatsapp.medinadigital.com.br/img/hero-lojista-web.jpg",
    buyLink: "https://whatsapp.medinadigital.com.br",
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
    badge: "Lançamento",
    badgeType: "new",
    format: "App online",
    image: "https://curriculo.medinadigital.com.br/img/hero-curriculo-web.jpg",
    buyLink: "https://curriculo.medinadigital.com.br",
    features: [
      "5 modelos formatados para sistemas ATS",
      "Exportação ilimitada em PDF e Word",
      "Seus dados ficam só no seu dispositivo",
      "Sem mensalidade — pagamento único",
      "Acesso imediato via Pix"
    ],
    active: true
  },
  {
    id: 4,
    title: "Saia das Dívidas de Uma Vez por Todas",
    category: "financas",
    description: "O método definitivo para renegociar dívidas, reorganizar o orçamento e sair do vermelho de vez — sem fórmulas mágicas, com passo a passo prático para quem quer respirar aliviado de novo.",
    price: 34.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop&q=80",
    buyLink: "https://dividas.medinadigital.com.br",
    features: [
      "Passo a passo de renegociação com credores",
      "Método de orçamento por categoria",
      "Como identificar e evitar golpes financeiros",
      "Planilha de controle de dívidas",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 5,
    title: "Vendeu, Mas Não Sobrou",
    category: "negocios",
    description: "Por que seu negócio fatura bem e o dinheiro nunca sobra? O guia de gestão de fluxo de caixa para donos de negócio que vendem, mas não conseguem entender pra onde vai o lucro.",
    price: 47.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=800&fit=crop&q=80",
    buyLink: "https://fluxo.medinadigital.com.br",
    features: [
      "Diagnóstico de onde o lucro está vazando",
      "Separação clara entre PJ e pessoa física",
      "Precificação que realmente cobre os custos",
      "Planilha de fluxo de caixa simplificada",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 6,
    title: "IA no Trabalho, Sem Medo (Nem Exagero)",
    category: "produtividade-ia",
    description: "87% dos brasileiros querem aprender a usar IA no trabalho. Só 24% realmente já usam. Este guia é a ponte entre esses dois números — sem prometer que ela vai te substituir, nem que vai resolver sua vida sozinha.",
    price: 27.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=800&h=800&fit=crop&q=80",
    buyLink: "https://prompts.medinadigital.com.br",
    features: [
      "20 prompts prontos por área de trabalho",
      "O que a IA não deve fazer no seu dia a dia",
      "Checklist de bom uso de IA no trabalho",
      "Sem jargão técnico — linguagem simples",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 7,
    title: "Emagreça Sem Passar Fome",
    category: "saude-bem-estar",
    description: "Você não falhou nas dietas. As dietas falharam com você. O método definitivo para perder peso sem contar calorias, sem passar fome e sem academia cara — com ciência, hábito e prazer à mesa.",
    price: 42.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop&q=80",
    buyLink: "https://emagreca.medinadigital.com.br",
    features: [
      "A Regra do Prato — sem contar calorias",
      "Movimento sem academia (conceito de NEAT)",
      "Cardápio Semanal Completo",
      "20 Receitas Rápidas e Saborosas",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 8,
    title: "Relacionamentos que Funcionam",
    category: "relacionamentos",
    description: "Relacionamentos não acontecem com você. Eles são construídos por você. O guia completo para construir conexões genuínas, comunicar-se com clareza e cultivar relações que duram — baseado em décadas de pesquisa científica.",
    price: 39.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop&q=80",
    buyLink: "https://relacionamentos.medinadigital.com.br",
    features: [
      "Baseado em Harvard, Gottman e Bowlby",
      "Quiz do Estilo de Apego",
      "Scripts de Comunicação para situações difíceis",
      "Guia Prático de Limites Saudáveis",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 9,
    title: "Investindo com Pouco",
    category: "financas",
    description: "Você não precisa ser rico pra começar a investir. O guia completo para começar a investir a partir de R$ 1, entender renda fixa, FIIs, ações e ETFs em linguagem simples — sem promessas milagrosas.",
    price: 32.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=800&fit=crop&q=80",
    buyLink: "https://investindo.medinadigital.com.br",
    features: [
      "Renda fixa, FIIs, ações e ETFs explicados",
      "Simulador de Metas de Investimento",
      "Tabela de Aportes: o impacto da consistência",
      "Glossário Completo de Investimentos",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  },
  {
    id: 10,
    title: "Máquina de Conteúdo com IA",
    category: "produtividade-ia",
    description: "Bloqueio criativo não é preguiça. É falta de sistema. O sistema completo para nunca mais travar na hora de criar conteúdo — prompts prontos, engenharia de comando e um workflow de 60 minutos para 30 dias de posts.",
    price: 44.90,
    badge: "Lançamento",
    badgeType: "new",
    format: "PDF",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop&q=80",
    buyLink: "https://conteudo-ia.medinadigital.com.br",
    features: [
      "Prompt Mestre de Configuração de Persona",
      "5 estruturas de título campeãs de engajamento",
      "Roteiros prontos de Reels e TikTok",
      "O Workflow dos 60 Minutos",
      "Acesso imediato via Pix ou cartão"
    ],
    active: true
  }
];

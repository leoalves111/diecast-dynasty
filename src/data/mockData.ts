export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  participationFee: number;
  minParticipants: number;
  currentParticipants: number;
  status: 'active' | 'closing' | 'completed' | 'new';
  endDate: string;
  category: string;
  brand: string;
  tags: string[];
  item: {
    name: string;
    collection: string;
    edition: string;
    condition: string;
    rarity: string;
    details: string;
  };
  gallery: string[];
}

export interface Ad {
  id: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  condition: string;
  city: string;
  state: string;
  images: string[];
  status: 'active' | 'sold' | 'paused';
  featured: boolean;
  createdAt: string;
  views: number;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  avatar: string;
  bio: string;
  memberSince: string;
  activeAds: number;
}

export const mockEvents: Event[] = [
  {
    id: "evt-001",
    title: "Nissan Skyline GT-R R34 — Super Treasure Hunt",
    description: "Um dos modelos mais cobiçados entre colecionadores de Hot Wheels. O Skyline GT-R R34 em versão Super Treasure Hunt é considerado uma peça rara e altamente valorizada, com pintura spectraflame e rodas Real Riders.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop",
    participationFee: 29.90,
    minParticipants: 50,
    currentParticipants: 38,
    status: "active",
    endDate: "2026-04-15",
    category: "Super Treasure Hunt",
    brand: "Hot Wheels",
    tags: ["Raro", "Premium"],
    item: {
      name: "Nissan Skyline GT-R R34 — Super Treasure Hunt 2024",
      collection: "Super Treasure Hunt Series",
      edition: "2024 Main Line",
      condition: "Lacrado na blister — Mint Condition",
      rarity: "Ultra Raro",
      details: "Pintura spectraflame azul, rodas Real Riders, chassi metálico. Card em perfeito estado."
    },
    gallery: [
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "evt-002",
    title: "Lote Premium — 5 Miniaturas JDM Legends",
    description: "Lote exclusivo com 5 miniaturas da linha JDM Legends, incluindo Supra, RX-7, Silvia S15, Civic Type R e Impreza WRX STI. Todas lacradas.",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=400&fit=crop",
    participationFee: 49.90,
    minParticipants: 30,
    currentParticipants: 27,
    status: "closing",
    endDate: "2026-03-20",
    category: "Lote Premium",
    brand: "Hot Wheels",
    tags: ["Premium", "Encerrando"],
    item: {
      name: "Lote JDM Legends — 5 Miniaturas",
      collection: "Car Culture — JDM Legends",
      edition: "2024",
      condition: "Lacradas — Mint Condition",
      rarity: "Raro",
      details: "Inclui Toyota Supra A80, Mazda RX-7 FD, Nissan Silvia S15, Honda Civic Type R EK9 e Subaru Impreza WRX STI."
    },
    gallery: [
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "evt-003",
    title: "Porsche 911 GT3 RS — Matchbox Collectors",
    description: "Edição especial Matchbox Collectors do Porsche 911 GT3 RS com detalhamento premium e caixa exclusiva para colecionadores.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    participationFee: 19.90,
    minParticipants: 80,
    currentParticipants: 22,
    status: "new",
    endDate: "2026-05-01",
    category: "Matchbox Collectors",
    brand: "Matchbox",
    tags: ["Novo"],
    item: {
      name: "Porsche 911 GT3 RS — Matchbox Collectors Edition",
      collection: "Matchbox Collectors",
      edition: "2024",
      condition: "Lacrado",
      rarity: "Especial",
      details: "Detalhamento premium, rodas de borracha, pintura metálica e caixa exclusiva."
    },
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "evt-004",
    title: "Toyota AE86 Trueno — Hot Wheels Premium",
    description: "O lendário AE86 na versão Hot Wheels Premium com rodas Real Riders e detalhamento excepcional.",
    image: "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=600&h=400&fit=crop",
    participationFee: 34.90,
    minParticipants: 40,
    currentParticipants: 40,
    status: "completed",
    endDate: "2026-02-28",
    category: "Hot Wheels Premium",
    brand: "Hot Wheels",
    tags: ["Concluído"],
    item: {
      name: "Toyota AE86 Trueno — Hot Wheels Premium",
      collection: "Boulevard",
      edition: "2023",
      condition: "Lacrado",
      rarity: "Raro",
      details: "Pintura detalhada, rodas Real Riders, chassi metálico."
    },
    gallery: [
      "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "evt-005",
    title: "Mercedes-Benz 300 SL — Tomica Limited Vintage",
    description: "Clássico Mercedes-Benz 300 SL Gullwing na linha Tomica Limited Vintage Neo. Peça de coleção altamente detalhada.",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=400&fit=crop",
    participationFee: 59.90,
    minParticipants: 25,
    currentParticipants: 12,
    status: "active",
    endDate: "2026-04-30",
    category: "Tomica Limited",
    brand: "Tomica",
    tags: ["Premium", "Raro"],
    item: {
      name: "Mercedes-Benz 300 SL Gullwing — Tomica LV Neo",
      collection: "Tomica Limited Vintage Neo",
      edition: "2024",
      condition: "Lacrado na caixa",
      rarity: "Ultra Raro",
      details: "Escala 1/64, pintura metálica silver, interior detalhado, portas articuladas."
    },
    gallery: [
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&h=600&fit=crop"
    ]
  },
  {
    id: "evt-006",
    title: "Ford GT40 — Hot Wheels RLC Exclusive",
    description: "Edição exclusiva Red Line Club do Ford GT40, uma das peças mais disputadas entre membros do RLC.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop",
    participationFee: 79.90,
    minParticipants: 20,
    currentParticipants: 18,
    status: "closing",
    endDate: "2026-03-15",
    category: "RLC Exclusive",
    brand: "Hot Wheels",
    tags: ["Premium", "Encerrando", "Raro"],
    item: {
      name: "Ford GT40 — RLC Exclusive",
      collection: "Red Line Club",
      edition: "2024",
      condition: "Lacrado",
      rarity: "Ultra Raro",
      details: "Pintura spectraflame, rodas Real Riders premium, numerado individualmente."
    },
    gallery: [
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&h=600&fit=crop"
    ]
  }
];

export const mockAds: Ad[] = [
  {
    id: "ad-001",
    userId: "usr-001",
    title: "Hot Wheels '67 Camaro — Super Treasure Hunt",
    description: "Camaro 67 em versão Super Treasure Hunt, lacrado na blister original. Card em excelente estado, sem amassados. Pintura spectraflame verde com rodas Real Riders.",
    price: 350.00,
    category: "Super Treasure Hunt",
    brand: "Hot Wheels",
    condition: "Lacrado",
    city: "São Paulo",
    state: "SP",
    images: ["https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop"],
    status: "active",
    featured: true,
    createdAt: "2026-03-01",
    views: 234
  },
  {
    id: "ad-002",
    userId: "usr-002",
    title: "Lote 10 Miniaturas Hot Wheels Mainline 2024",
    description: "Lote com 10 carrinhos mainline da série 2024, todos lacrados. Inclui modelos variados.",
    price: 89.90,
    category: "Lote",
    brand: "Hot Wheels",
    condition: "Lacrado",
    city: "Rio de Janeiro",
    state: "RJ",
    images: ["https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=400&fit=crop"],
    status: "active",
    featured: false,
    createdAt: "2026-03-05",
    views: 87
  },
  {
    id: "ad-003",
    userId: "usr-003",
    title: "Matchbox Porsche 911 Turbo — Collectors Edition",
    description: "Porsche 911 Turbo da linha Matchbox Collectors com caixa exclusiva e detalhamento premium. Peça impecável.",
    price: 180.00,
    category: "Matchbox Collectors",
    brand: "Matchbox",
    condition: "Lacrado",
    city: "Curitiba",
    state: "PR",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop"],
    status: "active",
    featured: true,
    createdAt: "2026-03-02",
    views: 156
  },
  {
    id: "ad-004",
    userId: "usr-004",
    title: "Toyota Supra A80 — Hot Wheels Premium Car Culture",
    description: "Toyota Supra MK4 da linha Car Culture, série Japan Historics. Lacrado, card perfeito.",
    price: 120.00,
    category: "Hot Wheels Premium",
    brand: "Hot Wheels",
    condition: "Lacrado",
    city: "Belo Horizonte",
    state: "MG",
    images: ["https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=600&h=400&fit=crop"],
    status: "active",
    featured: false,
    createdAt: "2026-03-04",
    views: 102
  },
  {
    id: "ad-005",
    userId: "usr-001",
    title: "Tomica Limited Vintage — Nissan Fairlady Z432",
    description: "Edição limitada Tomica LV do clássico Fairlady Z432. Escala 1/64, detalhamento impressionante.",
    price: 250.00,
    category: "Tomica Limited",
    brand: "Tomica",
    condition: "Aberto",
    city: "São Paulo",
    state: "SP",
    images: ["https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=400&fit=crop"],
    status: "active",
    featured: false,
    createdAt: "2026-03-06",
    views: 64
  },
  {
    id: "ad-006",
    userId: "usr-002",
    title: "Hot Wheels Convention — Volkswagen T1 Drag Bus",
    description: "Raro VW Drag Bus de convenção Hot Wheels. Edição numerada, acompanha certificado.",
    price: 890.00,
    category: "Convention",
    brand: "Hot Wheels",
    condition: "Lacrado",
    city: "Porto Alegre",
    state: "RS",
    images: ["https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=400&fit=crop"],
    status: "active",
    featured: true,
    createdAt: "2026-02-28",
    views: 312
  }
];

export const mockPosts: Post[] = [
  {
    id: "post-001",
    title: "Hot Wheels anuncia nova linha Super Treasure Hunt 2026",
    excerpt: "A Mattel revelou os primeiros modelos da série Super Treasure Hunt para 2026, incluindo clássicos JDM e muscle cars americanos.",
    content: "A Mattel surpreendeu os colecionadores ao revelar os primeiros modelos da tão aguardada série Super Treasure Hunt 2026. Entre os destaques estão o Nissan Skyline GT-R R32, o Chevrolet Chevelle SS 396 e o Honda NSX Type R. Cada modelo contará com pintura spectraflame exclusiva e rodas Real Riders premium. A previsão é que os primeiros lotes cheguem ao mercado brasileiro no segundo semestre de 2026.",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&h=400&fit=crop",
    category: "Lançamentos",
    date: "2026-03-08",
    author: "Equipe CollectorsHub"
  },
  {
    id: "post-002",
    title: "Guia completo: como identificar um Super Treasure Hunt",
    excerpt: "Aprenda a diferenciar um STH de um modelo regular. Dicas essenciais para não perder a chance de encontrar raridades.",
    content: "Identificar um Super Treasure Hunt (STH) nas prateleiras pode ser desafiador para quem está começando no hobby. Neste guia, reunimos as principais dicas: verifique a pintura spectraflame, observe as rodas Real Riders com pneus de borracha, procure o símbolo TH escondido no modelo e confira o código no card. Com prática, você vai conseguir spottar STHs rapidamente.",
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&h=400&fit=crop",
    category: "Dicas",
    date: "2026-03-05",
    author: "Equipe CollectorsHub"
  },
  {
    id: "post-003",
    title: "Matchbox Collectors 2026: novos modelos revelados",
    excerpt: "A linha Matchbox Collectors continua surpreendendo com modelos detalhados e embalagens exclusivas.",
    content: "A Matchbox revelou sua nova coleção Collectors para 2026, trazendo modelos como o Porsche 356A Speedster, Land Rover Defender 110 e o icônico Volkswagen Beetle. Todos os modelos apresentam rodas de borracha, detalhamento em metal e embalagem especial para colecionadores.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=400&fit=crop",
    category: "Novidades",
    date: "2026-03-02",
    author: "Equipe CollectorsHub"
  },
  {
    id: "post-004",
    title: "Os 10 Hot Wheels mais valiosos de todos os tempos",
    excerpt: "Conheça as miniaturas que valem milhares de dólares e são o sonho de qualquer colecionador.",
    content: "O mundo do colecionismo de Hot Wheels tem peças que alcançam valores impressionantes. No topo da lista está o Pink Beach Bomb Rear-Loading de 1969, avaliado em mais de $150.000. Outros modelos icônicos incluem o Custom Volkswagen em rosa eosin, o Purple Olds 442 e o White Enamel Camaro. Descubra a história por trás de cada um desses tesouros.",
    image: "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=800&h=400&fit=crop",
    category: "Artigos",
    date: "2026-02-25",
    author: "Equipe CollectorsHub"
  }
];

export const mockUsers: User[] = [
  {
    id: "usr-001",
    name: "Carlos Mendes",
    email: "carlos@email.com",
    phone: "(11) 99999-0001",
    city: "São Paulo",
    state: "SP",
    avatar: "",
    bio: "Colecionador há 15 anos. Especialista em Super Treasure Hunts e modelos JDM.",
    memberSince: "2024-01-15",
    activeAds: 3
  },
  {
    id: "usr-002",
    name: "Ana Rodrigues",
    email: "ana@email.com",
    phone: "(21) 99999-0002",
    city: "Rio de Janeiro",
    state: "RJ",
    avatar: "",
    bio: "Apaixonada por miniaturas desde criança. Coleciono Hot Wheels e Matchbox.",
    memberSince: "2024-03-22",
    activeAds: 2
  },
  {
    id: "usr-003",
    name: "Ricardo Souza",
    email: "ricardo@email.com",
    phone: "(41) 99999-0003",
    city: "Curitiba",
    state: "PR",
    avatar: "",
    bio: "Focado em modelos europeus e edições de convenção.",
    memberSince: "2024-06-10",
    activeAds: 1
  },
  {
    id: "usr-004",
    name: "Fernanda Lima",
    email: "fernanda@email.com",
    phone: "(31) 99999-0004",
    city: "Belo Horizonte",
    state: "MG",
    avatar: "",
    bio: "Colecionadora de Hot Wheels Premium e Car Culture.",
    memberSince: "2025-01-05",
    activeAds: 1
  }
];

export const stats = {
  totalEvents: 127,
  completedEvents: 98,
  activeUsers: 3420,
  publishedAds: 1856,
  categories: 24,
  weeklyNews: 12
};

// ============================================
// FC AMANTES DA PAZ - DADOS DO CLUBE
// Edite este ficheiro para atualizar o conteúdo do site
// ============================================

// INFORMAÇÕES DO CLUBE
export const clubInfo = {
  name: "FC Amantes da Paz",
  shortName: "FC-AP",
  motto: "Unidos pelo futebol, unidos pela paz",
  foundedYear: 2022,
  founders: ["Hamilton Figueira", "João Terêncio", "Sr. Segunda"],
  colors: {
    primary: "Preto",
    secondary: "Dourado"
  },
  mission: "Promover a prática desportiva saudável, fortalecer laços comunitários e desenvolver valores de fair-play, respeito e camaradagem através do futebol.",
  history: `O FC Amantes da Paz nasceu em 2022 da vontade de um grupo de amigos apaixonados pelo futebol. O que começou como encontros semanais informais, rapidamente se transformou num projeto sólido que hoje reúne dezenas de jogadores.

Ao longo dos anos, o clube tem participado em diversos jogos amiistosos, conquistando não apenas troféus, mas também o respeito da comunidade futebolista comunitária pela sua postura exemplar dentro e fora de campo.

Mais do que vitórias, o FC Amantes da Paz valoriza a amizade, o espírito de equipa e a alegria de jogar. O nosso campo é um espaço de encontro, onde gerações se cruzam e memórias são criadas.`,
  values: [
    { title: "Respeito", description: "Tratamos todos com dignidade, dentro e fora de campo" },
    { title: "União", description: "Somos uma família unida pelo amor ao futebol" },
    { title: "Fair-Play", description: "Jogamos com honestidade e desportivismo" },
    { title: "Comunidade", description: "Fortalecemos os laços da nossa comunidade" }
  ]
};

// JOGADORES
export interface Player {
  id: number;
  name: string;
  nickname?: string;
  number: number;
  position: string;
  photo: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
    attendance: number;
    totalPoints: number;
  };
}

export const players: Player[] = [
  {
    id: 1,
    name: "Hamilton Figueira",
    nickname: "Kiki",
    number: 5,
    position: "Defesa Central",
    photo: "/placeholder.svg",
    stats: { games: 14, goals: 2, assists: 1, attendance: 95, totalPoints: 156 }
  },
  {
    id: 2,
    name: "Zassala Mário",
    nickname: "Manucho",
    number: 20,
    position: "Médio Distribuidor",
    photo: "/placeholder.svg",
    stats: { games: 14, goals: 0, assists: 9, attendance: 88, totalPoints: 170 }
  },
  {
    id: 3,
    name: "Josefe Hernani",
    nickname: "Josefe",
    number: 17,
    position: "Extremo",
    photo: "/placeholder.svg",
    stats: { games: 15, goals: 0, assists: 4, attendance: 98, totalPoints: 145 }
  },
  {
    id: 4,
    name: "João Terêncio",
    nickname: "Terêncio",
    number: 7,
    position: "Defesa",
    photo: "/placeholder.svg",
    stats: { games: 12, goals: 0, assists: 2, attendance: 60, totalPoints: 108 }
  },
  {
    id: 5,
    name: "Josemar Segunda",
    nickname: "Zemura",
    number: 11,
    position: "Ponta Fixo",
    photo: "/placeholder.svg",
    stats: { games: 14, goals: 1, assists: 2, attendance: 96, totalPoints: 140 }
  },
  {
    id: 6,
    name: "Albano",
    nickname: "Dacamassita",
    number: 10,
    position: "Médio Centro",
    photo: "/placeholder.svg",
    stats: { games: 12, goals: 10, assists: 4, attendance: 78, totalPoints: 190 }
  },
  {
    id: 7,
    name: "Pedro Barros",
    nickname: "Doch",
    number: 8,
    position: "Defesa/Médio",
    photo: "/placeholder.svg",
    stats: { games: 14, goals: 3, assists: 7, attendance: 90, totalPoints: 150 }
  },
  {
    id: 8,
    name: "Denilson Silva",
    nickname: "Denny",
    number: 2,
    position: "Defesa",
    photo: "/placeholder.svg",
    stats: { games: 15, goals: 0, assists: 0, attendance: 72, totalPoints: 94 }
  },
    {
    id: 9,
    name: "Alfredo Matross",
    nickname: "Afelay",
    number: 30,
    position: "Ponta de Lança",
    photo: "/placeholder.svg",
    stats: { games: 15, goals: 8, assists: 4, attendance: 92, totalPoints: 174 }
  }
];

// PRÓXIMO JOGO
export const nextMatch = {
  date: "2026-01-11",
  time: "08:00",
  location: "Quntalão da Tura",
  opponent: "VG - Sagrada Esperança",
  competition: "Jogo Amistoso"
};

// ÚLTIMO RESULTADO
export const lastResult = {
  date: "2025-12-21",
  homeTeam: "FC Amantes da Paz",
  awayTeam: "Massanga FC",
  homeScore: 0,
  awayScore: 2,
  scorers: [""],
  assists: [""],
  mvp: "Kiki"
};

// JOGADOR DA SEMANA
export const playerOfTheWeek = players[0];

// AGENDA DE JOGOS
export interface Match {
  id: number;
  date: string;
  time: string;
  location: string;
  opponent: string;
  competition: string;
  isHome: boolean;
}

export const upcomingMatches: Match[] = [
  { id: 1, date: "2026-01-11", time: "08:00", location: "Quintalão da Tura - Capolo 2", opponent: "VG - Sagrada Esperança", competition: "Jogo Amistoso", isHome: true },
];

// RESULTADOS
export interface Result {
  id: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  scorers: string[];
  assists: string[];
  mvp: string;
  competition: string;
}

export const results: Result[] = [
  { id: 1, date: "2025-12-21", homeTeam: "FC Amantes da Paz", awayTeam: "Massanga FC", homeScore: 0, awayScore: 2, scorers: [""], assists: [""], mvp: "Dacamassita", competition: "Jogo Amistoso" },
  { id: 2, date: "2025-12-14", homeTeam: "Bipola FC", awayTeam: "FC Amantes da Paz", homeScore: 5, awayScore: 0, scorers: [""], assists: [""], mvp: "Leo Branco", competition: "Jogo Amistoso" },
  { id: 3, date: "2025-12-7", homeTeam: "FC Amantes da Paz", awayTeam: "SC Vitória", homeScore: 2, awayScore: 1, scorers: ["Dacamassita (2)"], assists: ["Zemura (2)"], mvp: "Dacamassita", competition: "Jogo Amistoso" },
  { id: 4, date: "2025-11-30", homeTeam: "Real Bairro", awayTeam: "FC Amantes da Paz", homeScore: 1, awayScore: 1, scorers: ["André"], assists: ["Adriano"], mvp: "Manucho", competition: "Jogo Amistoso" },
  { id: 5, date: "2025-11-23", homeTeam: "Arsenal", awayTeam: "FC Amantes da Paz", homeScore: 2, awayScore: 3, scorers: ["Dacamassita", "Matross", "Adriano"], assists: ["Matross", "Madruga", "Manucho"], mvp: "Adriano", competition: "Jogo Amistoso" }
];

// PRÉMIOS E DESTAQUES
export interface Award {
  id: number;
  title: string;
  playerId: number;
  date: string;
  description: string;
}

export const awards: Award[] = [
  { id: 1, title: "Jogador do Mês - Dezembro 2025", playerId: 6, date: "Dezembro 2025", description: "Melhor jogador do mês com 3 golos" },
  { id: 2, title: "Jogador do Ano 2025", playerId: 1, date: "Dezembro 2025", description: "Eleito pelos colegas como o melhor jogador da temporada" },
  { id: 3, title: "Melhor Marcador 2025", playerId: 6, date: "Dezembro 2025", description: "10 golos marcados na temporada" },
  { id: 4, title: "Melhor Assistente 2025", playerId: 2, date: "Dezembro 2025", description: "9 assistências durante o ano" },
  { id: 5, title: "Jogador Mais Assíduo 2025", playerId: 5, date: "Dezembro 2025", description: "100% de presenças nos jogos" }
];

// ESTATÍSTICAS DO CLUBE
export const clubStats = {
  totalGames: 16,
  wins: 7,
  draws: 4,
  losses: 5,
  goalsScored: 28,
  goalsConceded: 16,
  cleanSheets: 4
};

// RANKINGS
export const topScorers = [...players].sort((a, b) => b.stats.goals - a.stats.goals).slice(0, 5);
export const topAssisters = [...players].sort((a, b) => b.stats.assists - a.stats.assists).slice(0, 5);
export const topAttendance = [...players].sort((a, b) => b.stats.attendance - a.stats.attendance).slice(0, 5);
export const topPoints = [...players].sort((a, b) => b.stats.totalPoints - a.stats.totalPoints).slice(0, 5);

// GALERIA
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "jogos" | "confraternizações";
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/placeholder.svg", alt: "Jogo contra CF Esperança", category: "jogos" },
  { id: 2, src: "/placeholder.svg", alt: "Treino tático", category: "jogos" },
  { id: 3, src: "/placeholder.svg", alt: "Confraternização de Natal", category: "confraternizações" },
  { id: 4, src: "/placeholder.svg", alt: "Final da Taça Amizade", category: "jogos" },
  { id: 5, src: "/placeholder.svg", alt: "Aquecimento pré-jogo", category: "jogos" },
  { id: 6, src: "/placeholder.svg", alt: "Churrasco de fim de época", category: "confraternizações" },
  { id: 7, src: "/placeholder.svg", alt: "Celebração de golo", category: "jogos" },
  { id: 8, src: "/placeholder.svg", alt: "Exercícios de passe", category: "jogos" },
  { id: 9, src: "/placeholder.svg", alt: "Aniversário do clube", category: "confraternizações" }
];

// CONTACTOS
export const contacts = {
  email: "geral@fcamantesdapaz.ao",
  phone: "+244 930 379 846",
  whatsapp: "+244930379846",
  address: "Quintalão da Tura, Capolo 2, Luanda",
  socialMedia: {
    facebook: "https://facebook.com/fcamantesdapaz",
    instagram: "https://instagram.com/fcamantesdapaz"
  }
};

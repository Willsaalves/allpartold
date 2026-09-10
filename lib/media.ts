/**
 * Registro central das fotos do IPDCON.
 *
 * Os arquivos ficam em `public/images/ipdcon/`. Para adicionar novas fotos,
 * basta soltar o arquivo nessa pasta, declarar a constante aqui e incluí-la em
 * `FOTOS_2026` — as seções (faixa da home, carrossel da retrospectiva) leem
 * direto desta lista.
 */

export type Foto = {
  src: string;
  alt: string;
  /** Legenda exibida sobre a foto no carrossel da retrospectiva. */
  legenda?: string;
};

const base = "/images/ipdcon";

/** Retrato vertical do Caio Basílio, exibido ao lado da matéria dele. */
export const FOTO_CAIO: Foto = {
  src: `${base}/caio-retrato.jpg`,
  alt: "Caio Basílio, CEO e Diretor Comercial do Grupo All Party, no IPDCON 2026",
};

/* --- Fotos horizontais da 4ª edição, na ordem da noite --- */

const BOAS_VINDAS: Foto = {
  src: `${base}/boas-vindas.jpg`,
  alt: "Recepção do IPDCON 2026 em frente ao painel do Grupo All Party",
  legenda: "A chegada dos convidados no painel de boas-vindas",
};

const CONVIDADOS_PAINEL: Foto = {
  src: `${base}/convidados-painel.jpg`,
  alt: "Convidados do IPDCON 2026 reunidos no painel de boas-vindas do Grupo All Party",
  legenda: "Encontros no painel: o maior ecossistema de eventos do Brasil",
};

const SALAO_SHOW_01: Foto = {
  src: `${base}/salao-show-01.jpg`,
  alt: "Salão do IPDCON 2026 com o palco e o painel de LED ao fundo",
  legenda: "O salão em operação: palco, LED e ambientação integrados",
};

const SALAO_SHOW_02: Foto = {
  src: `${base}/salao-show-02.jpg`,
  alt: "Convidados do IPDCON 2026 reunidos durante a apresentação no palco principal",
  legenda: "Showroom ao vivo do ecossistema, do som à iluminação",
};

const PLATEIA_EXPERIENCIA: Foto = {
  src: `${base}/plateia-experiencia.jpg`,
  alt: "Convidados do IPDCON 2026 participando da experiência interativa",
  legenda: "A plateia na experiência interativa da noite",
};

const CAIO_PALCO: Foto = {
  src: `${base}/caio-basilio-palco.jpg`,
  alt: "Caio Basílio no palco do IPDCON 2026, com o painel de LED anunciando seu nome",
  legenda: "Caio Basílio, CEO e Diretor Comercial do Grupo All Party, no palco",
};

const FRANCHISING: Foto = {
  src: `${base}/franchising-2027.jpg`,
  alt: "Apresentação do Franchising 2027 no palco do IPDCON 2026",
  legenda: "O anúncio do Franchising 2027, para formaturas e corporativo",
};

const PREMIACAO: Foto = {
  src: `${base}/premiacao-destaques.jpg`,
  alt: "Homenageados do Destaque 2026 reunidos no palco do IPDCON 2026",
  legenda: "Os homenageados do Destaque 2026 no palco",
};

const SORTEIO: Foto = {
  src: `${base}/sorteio-premios.jpg`,
  alt: "Sorteio de prêmios no palco do IPDCON 2026",
  legenda: "O sorteio de prêmios para os presentes",
};

/**
 * Fotos horizontais da 4ª edição (IPDCON 2026), na ordem em que a noite
 * aconteceu. Alimentam a faixa animada da home e o carrossel da retrospectiva.
 */
export const FOTOS_2026: Foto[] = [
  BOAS_VINDAS,
  CONVIDADOS_PAINEL,
  SALAO_SHOW_01,
  SALAO_SHOW_02,
  PLATEIA_EXPERIENCIA,
  CAIO_PALCO,
  FRANCHISING,
  PREMIACAO,
  SORTEIO,
];

/** Foto de fundo do hero da home. */
export const FOTO_HERO_HOME: Foto = SALAO_SHOW_02;

/** Foto do bloco showcase da home. */
export const FOTO_SHOWCASE: Foto = SALAO_SHOW_01;

/** Foto de fundo do card da 4ª edição na home. */
export const FOTO_CASE: Foto = PLATEIA_EXPERIENCIA;

/** Foto de fundo do hero da retrospectiva. */
export const FOTO_HERO_2026: Foto = BOAS_VINDAS;

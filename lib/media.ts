/**
 * Registro central das fotos do IPDCON.
 *
 * Os arquivos ficam em `public/images/ipdcon/`. Para adicionar novas fotos,
 * basta soltar o arquivo nessa pasta e incluir uma entrada aqui — as seções
 * (faixa da home, carrossel da retrospectiva) leem direto desta lista.
 */

export type Foto = {
  src: string;
  alt: string;
  /** Legenda opcional exibida no carrossel da retrospectiva. */
  legenda?: string;
};

const base = "/images/ipdcon";

/** Retrato do Caio, usado ao lado da matéria dele na página da 4ª edição. */
export const FOTO_CAIO: Foto = {
  src: `${base}/caio-retrato.jpg`,
  alt: "Caio, do Grupo All Party, durante o IPDCON 2026",
};

/**
 * Fotos horizontais da 4ª edição (IPDCON 2026).
 * Alimentam a faixa animada da home e o carrossel da retrospectiva.
 */
export const FOTOS_2026: Foto[] = [
  {
    src: `${base}/boas-vindas.jpg`,
    alt: "Recepção do IPDCON 2026 em frente ao painel do Grupo All Party",
    legenda: "A chegada dos convidados no painel de boas-vindas",
  },
  {
    src: `${base}/salao-show-01.jpg`,
    alt: "Salão do IPDCON 2026 com o palco e o painel de LED ao fundo",
    legenda: "O salão em operação: palco, LED e ambientação integrados",
  },
  {
    src: `${base}/salao-show-02.jpg`,
    alt: "Convidados do IPDCON 2026 reunidos durante a apresentação no palco principal",
    legenda: "Showroom ao vivo do ecossistema, do som à iluminação",
  },
  {
    src: `${base}/plateia-experiencia.jpg`,
    alt: "Convidados do IPDCON 2026 participando da experiência interativa",
    legenda: "A plateia na experiência interativa da noite",
  },
];

/** Foto de fundo do hero da home. */
export const FOTO_HERO_HOME: Foto = FOTOS_2026[2];

/** Foto do bloco showcase da home. */
export const FOTO_SHOWCASE: Foto = FOTOS_2026[1];

/** Foto de fundo do card da 4ª edição na home. */
export const FOTO_CASE: Foto = FOTOS_2026[3];

/** Foto de fundo do hero da retrospectiva. */
export const FOTO_HERO_2026: Foto = FOTOS_2026[0];

export type Video = {
  id: string;
  titulo: string;
};

/** Vitrine de vídeos exibida na home. */
export const VIDEOS: Video[] = [
  { id: "5OMOmApOSX4", titulo: "Aftermovie / edição recente" },
  { id: "q9co2iNlA_c", titulo: "Bastidores / experiência" },
];

export function thumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

export function embed(id: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

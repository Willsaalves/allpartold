import { CardGrid, type CardItem } from "./Cards";

const PILARES: CardItem[] = [
  {
    num: "01",
    titulo: "Comunidade executiva",
    texto: "Encontro de líderes e tomadores de decisão.",
  },
  {
    num: "02",
    titulo: "Showroom imersivo",
    texto: "Demonstração real de soluções e entregas.",
  },
  {
    num: "03",
    titulo: "Operação integrada",
    texto: "Ecossistema funcionando em conjunto.",
  },
  {
    num: "04",
    titulo: "Conteúdo e relacionamento",
    texto: "Conexões construídas em contexto de negócio.",
  },
  {
    num: "05",
    titulo: "Experiência de marca",
    texto: "Ambientes pensados para gerar percepção e valor.",
  },
  {
    num: "06",
    titulo: "Continuidade",
    texto: "Uma trajetória anual que fortalece o ecossistema.",
  },
];

export function Diferenciais() {
  return (
    <section className="section band-light">
      <div className="container">
        <div className="eyebrow">Por que o IPDCON</div>
        <h2 className="h2">Seis pilares da experiência.</h2>
        <CardGrid items={PILARES} className="services-grid" />
      </div>
    </section>
  );
}

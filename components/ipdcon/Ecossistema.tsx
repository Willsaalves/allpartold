import { CardGrid, type CardItem } from "./Cards";

const MARCAS: CardItem[] = [
  {
    num: "01",
    titulo: "All Party Formatura",
    texto: "Projetos autorais e experiências para formaturas de ensino médio.",
  },
  {
    num: "02",
    titulo: "All Party Corporate",
    texto: "Eventos corporativos e soluções B2B sob medida.",
  },
  {
    num: "03",
    titulo: "Treme Terra Audiovisual",
    texto: "Sonorização, iluminação, painéis de LED e engenharia técnica.",
  },
  {
    num: "04",
    titulo: "AP7 Photo",
    texto: "Fotografia, cobertura de eventos e ativações interativas.",
  },
  {
    num: "05",
    titulo: "Modelo 360°",
    texto: "Da concepção estratégica à entrega final, com controle integrado de qualidade.",
  },
  {
    num: "06",
    titulo: "Experiência",
    texto: "Criatividade, tecnologia e operação conectadas em uma única jornada.",
  },
];

export function Ecossistema() {
  return (
    <section className="section band-light" id="ecossistema">
      <div className="container">
        <div className="eyebrow">Operação verticalizada</div>
        <h2 className="h2">O ecossistema em um só palco.</h2>
        <p className="lead">
          O IPDCON apresenta o ecossistema completo do Grupo All Party em uma única operação
          integrada.
        </p>
        <CardGrid items={MARCAS} className="ecosystem-grid" />
      </div>
    </section>
  );
}

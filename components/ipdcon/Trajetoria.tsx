const EDICOES = [
  {
    index: "01 · 2023",
    titulo: "1ª edição",
    texto: "O IPDCON nasce como evento anual do Grupo All Party.",
  },
  {
    index: "02 · 2024",
    titulo: "2ª edição",
    texto: "Consolidação como vitrine das soluções do grupo.",
  },
  {
    index: "03 · 2025",
    titulo: "3ª edição",
    texto: "Mais de 200 profissionais da área educacional reunidos em São Paulo.",
  },
  {
    index: "04 · 2026",
    titulo: "4ª edição",
    texto: "Mais de 320 lideranças reunidas em São Paulo.",
  },
];

export function Trajetoria() {
  return (
    <section className="section band-tint" id="trajetoria">
      <div className="container">
        <div className="eyebrow">Retrospectiva histórica</div>
        <h2 className="h2">Quatro edições. Uma trajetória em construção.</h2>
        <div className="process-grid">
          {EDICOES.map(({ index, titulo, texto }) => (
            <article className="step" key={index}>
              <div className="step-index">{index}</div>
              <h3 className="h3">{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

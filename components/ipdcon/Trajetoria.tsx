const EDICOES = [
  {
    ano: "2023",
    titulo: "1ª edição",
    texto:
      "O IPDCON nasce como evento anual do Grupo All Party, criado para valorizar e celebrar os parceiros da empresa.",
  },
  {
    ano: "2024",
    titulo: "2ª edição",
    texto:
      "O evento se consolida como vitrine das soluções do grupo e marco no calendário de relacionamento com parceiros.",
  },
  {
    ano: "2025",
    titulo: "3ª edição",
    texto:
      "Realizada em 2 de agosto, em São Paulo, reuniu mais de 200 profissionais da área educacional — diretores, gestores e professores do Ensino Fundamental II e Médio — e celebrou os 14 anos de atuação do Grupo All Party. Tornou-se um marco na valorização da profissão docente.",
  },
  {
    ano: "2026",
    titulo: "4ª edição",
    texto:
      "Realizada em 15 de agosto, em São Paulo, reuniu mais de 320 lideranças — executivos, gestores de Marketing, Recursos Humanos, Comunicação, Eventos e Procurement. Apresentou o ecossistema completo em um só palco: All Party Formatura, All Party Corporate, Treme Terra Audiovisual e AP7 Photo.",
  },
];

export function Trajetoria() {
  return (
    <section className="section band-light" id="trajetoria">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Retrospectiva histórica</div>
          <h2 className="h2">Conheça a trajetória</h2>
          <p className="lead">
            O coração do IPDCON: a história das quatro edições que consolidaram o evento como marco
            do ecossistema.
          </p>
        </div>

        <div className="timeline">
          {EDICOES.map(({ ano, titulo, texto }) => (
            <article className="timeline-item" key={ano}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <span className="timeline-year">{ano}</span>
                <h3 className="h3">{titulo}</h3>
                <p>{texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

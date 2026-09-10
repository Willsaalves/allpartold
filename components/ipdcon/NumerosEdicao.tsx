const NUMEROS = [
  { valor: "320+", rotulo: "lideranças reunidas" },
  { valor: "4", rotulo: "marcas apresentadas no ecossistema" },
  { valor: "2026", rotulo: "quarta edição do IPDCON" },
];

export function NumerosEdicao() {
  return (
    <section className="section band-dark" id="numeros">
      <div className="container">
        <div className="eyebrow">Os números da noite</div>
        <h2 className="h2">A 4ª edição em três medidas.</h2>
        <div className="stats-grid">
          {NUMEROS.map(({ valor, rotulo }) => (
            <div className="stat" key={rotulo}>
              <div className="stat__value">{valor}</div>
              <span>{rotulo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LINHAS = [
  {
    objetivo: "Apresentar o ecossistema",
    como: "Demonstração prática das soluções do grupo",
    resultado: "Visão completa da operação",
  },
  {
    objetivo: "Aproximar clientes",
    como: "Contato direto com experiências e equipes",
    resultado: "Confiança e relacionamento",
  },
  {
    objetivo: "Gerar oportunidades",
    como: "Networking de alto nível",
    resultado: "Novas conexões e negócios",
  },
];

export function Objetivos() {
  return (
    <section className="section band-dark">
      <div className="container">
        <div className="eyebrow">Objetivos estratégicos</div>
        <h2 className="h2">Para que serve o IPDCON.</h2>
        <div className="format-table-wrap">
          <table>
            <caption>Objetivos e entregas do evento</caption>
            <thead>
              <tr>
                <th scope="col">Objetivo</th>
                <th scope="col">Como acontece</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map(({ objetivo, como, resultado }) => (
                <tr key={objetivo}>
                  <th scope="row">{objetivo}</th>
                  <td>{como}</td>
                  <td>{resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

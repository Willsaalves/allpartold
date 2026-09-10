const OBJETIVOS = [
  {
    titulo: "Vitrine do ecossistema",
    texto:
      "Apresentar, ao vivo, toda a capacidade do grupo (produção executiva, audiovisual, fotografia, ativações, cenografia, tecnologia e entretenimento).",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    titulo: "Aproximar clientes da operação",
    texto:
      "O formato elimina barreiras comerciais e permite que gestores visualizem como as soluções se aplicam a convenções de vendas, encontros de liderança, kick-offs, premiações, confraternizações, feiras de negócios, ativações promocionais, roadshows, lançamentos de produtos e eventos proprietários.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    titulo: "Construir relacionamentos",
    texto:
      "Networking de alto nível e parcerias duradouras com quem decide experiências corporativas, estabelecendo vínculos de confiança e valor compartilhado.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
];

export function Objetivos() {
  return (
    <section className="section band-light" id="objetivos">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Objetivos estratégicos</div>
          <h2 className="h2">Para que serve</h2>
          <p className="lead">
            Mais do que uma celebração, o IPDCON cumpre papéis claros no fortalecimento do
            ecossistema e na geração de novas oportunidades corporativas.
          </p>
        </div>

        <div className="highlights-grid">
          {OBJETIVOS.map(({ titulo, texto, icon }) => (
            <article className="card" key={titulo}>
              <div className="card-icon">{icon}</div>
              <h3 className="h3">{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

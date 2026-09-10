import Link from "next/link";

const DESTAQUES = [
  {
    titulo: "320+ lideranças reunidas",
    texto:
      "Mais de 320 executivos e gestores de Marketing, Recursos Humanos, Comunicação, Eventos e Procurement reunidos em uma noite memorável de celebração e networking de alto nível.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    titulo: "Ecossistema em um só palco",
    texto:
      "Apresentação unificada de All Party Formatura, All Party Corporate, Treme Terra Audiovisual e AP7 Photo, demonstrando na prática a sinergia e força da operação verticalizada.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

const LANCAMENTOS = [
  { nome: "Formatura SMART", detalhe: "nova linha de produtos para escolas e formandos" },
  { nome: "Trip da All Party", detalhe: "rebranding e novidades" },
  { nome: "Franquias All Party", detalhe: "lançamento oficial para 2027" },
  { nome: "AP7Face", detalhe: "nova plataforma de fotos online da AP7 Photo" },
];

export function CaseEdicao() {
  return (
    <section className="section band-tint" id="edicao">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Edição recente em detalhes</div>
          <h2 className="h2">O que aconteceu na 4ª edição</h2>
          <p className="lead">
            Destaques da 4ª edição do IPDCON (2026), que reuniu o mercado em uma noite emblemática na
            capital paulista.
          </p>
        </div>

        <div className="highlights-grid">
          {DESTAQUES.map(({ titulo, texto, icon }) => (
            <article className="card" key={titulo}>
              <div className="card-icon">{icon}</div>
              <h3 className="h3">{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}

          <article className="card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 className="h3">Lançamentos anunciados</h3>
            <p>Grandes novidades estratégicas reveladas durante a noite:</p>
            <ul className="highlight-list">
              {LANCAMENTOS.map(({ nome, detalhe }) => (
                <li key={nome}>
                  <strong>{nome}</strong>: {detalhe}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="actions" style={{ justifyContent: "center", marginTop: "2.4rem" }}>
          <Link className="btn" href="/ipdcon-2026">
            Ver a retrospectiva completa
          </Link>
        </div>
      </div>
    </section>
  );
}

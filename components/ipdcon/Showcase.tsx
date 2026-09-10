const PILARES = [
  {
    titulo: "Comunidade executiva",
    texto: "Encontro estratégico de tomadores de decisão, líderes de RH, Marketing e Comunicação.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    titulo: "Showroom imersivo",
    texto: "Cenografia, tecnologia e entretenimento integrados em tempo real na prática.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    titulo: "Experiência contínua",
    texto: "Uma trajetória autoral anual que constrói pontes e parcerias duradouras.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
];

export function Showcase() {
  return (
    <section className="section band-light" id="conceito">
      <div className="container what-grid">
        <div>
          <div className="eyebrow">Conceito e essência</div>
          <h2 className="h2">O que é o IPDCON</h2>
          <p>
            O IPDCON é o evento exclusivo e autoral do Grupo All Party — uma noite de networking e
            celebração que reúne executivos, gestores e tomadores de decisão em um formato inovador.
          </p>
          <p>
            Mais do que uma confraternização, é um showroom imersivo: em vez de apresentações
            tradicionais, cada ambiente vira uma demonstração real da capacidade operacional,
            criativa e tecnológica do grupo, para que os convidados vivenciem, na prática, o que a
            empresa entrega em convenções, lançamentos, feiras e grandes ativações corporativas.
          </p>
          <p>
            Idealizado por Caio Vinicius Basílio, CEO do Grupo All Party, o evento traduz a essência
            de conectar líderes e inspirar soluções para o mercado corporativo contemporâneo.
          </p>
        </div>

        <div className="what-card">
          {PILARES.map(({ titulo, texto, icon }) => (
            <div className="feature-point" key={titulo}>
              <div className="feature-icon">{icon}</div>
              <div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

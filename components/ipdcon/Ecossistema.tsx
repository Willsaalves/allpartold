const MARCAS = [
  {
    titulo: "All Party Formatura",
    texto:
      "Formaturas de ensino médio com projetos autorais e celebrações memoráveis para jovens e famílias.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    titulo: "All Party Corporate",
    texto:
      "Eventos corporativos e soluções B2B sob medida para encontros de liderança, convenções e ativações de marca.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    titulo: "Treme Terra Audiovisual",
    texto:
      "Soluções audiovisuais completas, com sonorização, painéis de LED, iluminação cênica e engenharia técnica.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    titulo: "AP7 Photo",
    texto:
      "Agência de fotografia especializada em cobertura de eventos, ativações interativas e captura de momentos únicos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

export function Ecossistema() {
  return (
    <section className="section band-tint" id="ecossistema">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Operação verticalizada</div>
          <h2 className="h2">O ecossistema em um só palco</h2>
          <p className="lead">
            O IPDCON apresenta o ecossistema completo do Grupo All Party em uma única operação
            verticalizada, integrando soluções complementares com excelência.
          </p>
        </div>

        <div className="eco-grid">
          {MARCAS.map(({ titulo, texto, icon }) => (
            <article className="card eco-item" key={titulo}>
              <div className="card-icon">{icon}</div>
              <h3 className="h3">{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>

        <div className="eco-summary">
          <div className="eco-badge">Modelo 360°</div>
          <p>
            Da concepção estratégica à entrega final, o Grupo All Party opera com controle total de
            qualidade, otimização de custos e extrema agilidade operacional — garantindo consistência
            em cada detalhe da experiência.
          </p>
        </div>
      </div>
    </section>
  );
}

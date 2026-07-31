import { IconCalendarStar, IconSoundWave, IconCamera, IconInstagram } from "./icons";
import { SectionLabel, MonoLabel } from "./MonoLabel";

const COMPANIES = [
  {
    icon: IconCalendarStar,
    name: "All Party Eventos",
    slug: "all_party",
    tagline: "Produtora 360°",
    desc: "Especializada em formaturas, eventos corporativos e sociais. Mais de 15 anos transformando momentos em memórias inesquecíveis.",
    accent: "pink" as const,
    instagram: "allpartyformaturas",
  },
  {
    icon: IconSoundWave,
    name: "Treme Terra Audiovisual",
    slug: "treme_terra",
    tagline: "Som · Luz · LED · Palco",
    desc: "Soluções completas de som, iluminação, LED e palco para eventos de até 10.000 pessoas com excelência técnica.",
    accent: "gold" as const,
    instagram: "agenciatremeterra",
  },
  {
    icon: IconCamera,
    name: "AP7 Fotos",
    slug: "ap7_fotos",
    tagline: "Fotografia Profissional",
    desc: "Fotografia de alto padrão para registrar cada detalhe e emoção dos momentos mais importantes da sua vida.",
    accent: "purple" as const,
    instagram: "ap7photo",
  },
];

const ACCENT_STYLES = {
  pink: {
    border: "border-pink-border",
    iconBg: "bg-pink-dim",
    iconText: "text-pink",
    top: "from-pink",
    hoverShadow: "hover:shadow-[0_24px_60px_rgba(147,65,236,0.18)]",
    divider: "bg-pink",
  },
  gold: {
    border: "border-gold-border",
    iconBg: "bg-gold-dim",
    iconText: "text-gold",
    top: "from-gold",
    hoverShadow: "hover:shadow-[0_24px_60px_rgba(212,175,55,0.12)]",
    divider: "bg-gold",
  },
  purple: {
    border: "border-[rgba(109,4,215,0.35)]",
    iconBg: "bg-purple-dim",
    iconText: "text-purple",
    top: "from-purple",
    hoverShadow: "hover:shadow-[0_24px_60px_rgba(109,4,215,0.15)]",
    divider: "bg-purple",
  },
};

export function GrupoAllParty() {
  return (
    <section className="relative overflow-hidden bg-bg section-container py-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(147,65,236,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-content mx-auto">
        <div className="text-center mb-[4.5rem]">
          <SectionLabel>ecossistema_grupo</SectionLabel>
          <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,3rem)] text-white mb-3 leading-[1.05]">
            Conheça o{" "}
            <span className="bg-gradient-to-br from-pink to-purple bg-clip-text text-transparent">
              Grupo All Party
            </span>
          </h2>
          <p className="font-inter text-base text-muted m-0 font-light">
            O maior ecossistema de eventos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANIES.map(({ icon: Icon, name, slug, tagline, desc, accent, instagram }) => {
            const s = ACCENT_STYLES[accent];
            return (
              <div
                key={name}
                className={`relative overflow-hidden bg-card border ${s.border} rounded-2xl px-9 py-11 transition-all duration-300 hover:-translate-y-[6px] ${s.hoverShadow}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.top} to-transparent`} />
                <div
                  className={`absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none ${s.iconBg}`}
                  style={{ filter: "blur(0px)" }}
                />

                <div className="mb-6">
                  <MonoLabel className={s.iconText}>{slug}</MonoLabel>
                </div>

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${s.border} ${s.iconBg} ${s.iconText}`}
                >
                  <Icon />
                </div>

                <h3 className="font-montserrat font-extrabold text-[1.1rem] text-white mb-1">{name}</h3>
                <div className={`font-inter text-[0.78rem] font-semibold mb-4 tracking-[0.03em] ${s.iconText}`}>
                  {tagline}
                </div>

                <div className={`w-7 h-px mb-4 opacity-60 ${s.divider}`} />

                <p className="text-muted text-[0.85rem] leading-[1.8] mb-5">{desc}</p>

                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-flex items-center gap-2 text-[0.8rem] font-medium transition-opacity hover:opacity-75 max-w-full ${s.iconText}`}
                >
                  <IconInstagram className="shrink-0" />
                  <span className="break-all">@{instagram}</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14 px-4">
          <MonoLabel className="text-muted break-words">
            realizando_o_ipdcon_2026_com_excelência_e_propósito
          </MonoLabel>
        </div>
      </div>
    </section>
  );
}

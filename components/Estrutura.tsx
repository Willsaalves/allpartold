import { IconMic, IconNetwork } from "./icons";
import { SectionLabel } from "./MonoLabel";
import { MonoLabel } from "./MonoLabel";

const FLOORS = [
  {
    icon: IconMic,
    floor: "01 / térreo",
    title: "Conteúdo & Palestras",
    desc: "Painéis e keynotes para todos os públicos — líderes educacionais, assessorias, gestores corporativos e parceiros estratégicos.",
    accent: "pink" as const,
  },
  {
    icon: IconNetwork,
    floor: "02 / mezanino",
    title: "Networking & Parceiros",
    desc: "Espaço exclusivo de conexões e demonstração ao vivo dos produtos e serviços dos parceiros comerciais do grupo.",
    accent: "gold" as const,
  },
];

export function Estrutura() {
  return (
    <section id="programacao" className="bg-bg section-container py-28">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>estrutura_do_evento</SectionLabel>
          <h2 className="font-montserrat font-black text-[clamp(1.6rem,3.5vw,2.5rem)] text-white m-0">
            Dois ambientes, uma experiência completa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLOORS.map(({ icon: Icon, floor, title, desc, accent }) => (
            <div
              key={floor}
              className={`bg-card rounded-[4px] p-12 transition-all duration-300 hover:-translate-y-[5px] ${
                accent === "pink"
                  ? "border border-pink-border border-t-2 border-t-pink hover:shadow-[0_20px_60px_rgba(203,22,150,0.15)]"
                  : "border border-gold-border border-t-2 border-t-gold hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
              }`}
            >
              <div className={`mb-6 ${accent === "pink" ? "text-pink" : "text-gold"}`}>
                <Icon />
              </div>
              <MonoLabel className={accent === "pink" ? "text-pink" : "text-gold"}>{floor}</MonoLabel>
              <h3 className="font-montserrat font-extrabold text-[1.35rem] text-white mt-2 mb-4">
                {title}
              </h3>
              <p className="text-gray text-[0.92rem] leading-[1.8] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

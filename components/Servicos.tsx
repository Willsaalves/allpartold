import { IconDinner, IconUsers, IconParking } from "./icons";
import { SectionLabel } from "./MonoLabel";

const ITEMS = [
  {
    icon: IconDinner,
    title: "Coquetel Finger Food",
    desc: "Experiência gastronômica e open bar incluído na inscrição",
  },
  {
    icon: IconUsers,
    title: "+500 Participantes",
    desc: "Líderes, diretores e profissionais do setor em um único lugar",
  },
  {
    icon: IconParking,
    title: "Estacionamento Próprio",
    desc: "500 vagas cobertas disponíveis por R$ 50 para todos os participantes",
  },
];

export function Servicos() {
  return (
    <section className="bg-bg section-container py-24">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>incluso_na_inscrição</SectionLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(203,22,150,0.35)] border border-[rgba(203,22,150,0.35)] rounded-2xl overflow-hidden">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card px-9 py-11 text-center transition-colors hover:bg-[#141425]"
            >
              <div className="text-[#cb1696] mb-5 flex justify-center">
                <Icon />
              </div>
              <h4 className="font-montserrat font-bold text-base text-white mb-2">{title}</h4>
              <p className="text-muted text-[0.85rem] leading-[1.75] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

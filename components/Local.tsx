import Image from "next/image";
import { IconPin } from "./icons";
import { MonoLabel } from "./MonoLabel";

const DETAILS = [
  ["data", "15 de agosto de 2026, 19h"],
  ["capacidade", "500+ convidados"],
  ["estacionamento", "500 vagas próprias"],
  ["formato", "Presencial / 1 dia"],
];

export function Local() {
  return (
    <section id="local" className="bg-surface section-container py-28 scroll-mt-[88px]">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-pink" />
            <MonoLabel>local_do_evento</MonoLabel>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(2rem,4vw,3rem)] text-white mb-2 leading-none">
            Espaço Hakka
          </h2>
          <div className="flex items-center gap-2 mb-10 text-pink">
            <IconPin />
            <span className="text-muted text-[0.88rem]">
              Rua São Joaquim, 460 — Liberdade, São Paulo/SP
            </span>
          </div>

          <div className="flex flex-col gap-[0.9rem]">
            {DETAILS.map(([k, v]) => (
              <div
                key={k}
                className="flex gap-4 items-center px-4 py-[0.8rem] bg-card border border-card-border rounded-lg"
              >
                <MonoLabel className="text-pink">{k}</MonoLabel>
                <div className="flex-1 h-px bg-card-border" />
                <span className="text-white text-[0.88rem] font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 bottom-4 left-4 border border-pink-border rounded-2xl z-0" />
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?w=700&h=525&fit=crop&auto=format"
              alt="Espaço Hakka — local do IPDCON 2026 em São Paulo"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(147,65,236,0.25) 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

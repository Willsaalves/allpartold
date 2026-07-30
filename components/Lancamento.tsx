import { IconRocket } from "./icons";
import { MonoLabel } from "./MonoLabel";

const CORNERS = [
  "top-8 left-8 rotate-0",
  "top-8 right-8 rotate-90",
  "bottom-8 left-8 -rotate-90",
  "bottom-8 right-8 rotate-180",
];

const STATS = [
  { label: "modelo_de_negócio", value: "Franquia" },
  { label: "lançamento_oficial", value: "2028" },
  { label: "segmentos_ativos", value: "2+" },
];

export function Lancamento() {
  return (
    <section className="relative overflow-hidden bg-surface section-container py-36">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,22,150,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(203,22,150,0.18) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,4,215,0.18) 0%, transparent 70%)",
        }}
      />

      {CORNERS.map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-6 h-6 border-t-2 border-r-2 border-pink opacity-50`}
        />
      ))}

      <div className="relative max-w-content mx-auto text-center">
        <div className="inline-flex items-center gap-[0.6rem] bg-pink-dim border border-pink-border px-5 py-[0.45rem] rounded-sm mb-10">
          <span className="text-pink">
            <IconRocket />
          </span>
          <MonoLabel>lançamento_em_primeira_mão</MonoLabel>
        </div>

        <h2 className="font-montserrat font-black text-[clamp(2rem,5vw,4rem)] leading-[1.02] mb-3 text-white">
          Franquias All Party
        </h2>

        <h3 className="font-mono font-medium text-[clamp(1rem,2.5vw,1.5rem)] mb-10 text-gold tracking-[0.08em]">
          — Modelo SMART —
        </h3>

        <p className="text-gray text-[clamp(0.95rem,1.6vw,1.1rem)] leading-[1.9] max-w-[660px] mx-auto mb-16 font-light">
          A partir de <strong className="text-gold font-semibold">2028</strong>, qualquer pessoa poderá
          se tornar produtora de eventos — seja para{" "}
          <strong className="text-white font-medium">formaturas</strong> ou para o{" "}
          <strong className="text-white font-medium">segmento corporativo</strong>. O futuro do
          mercado começa aqui.
        </p>

        <div className="flex justify-center flex-wrap border border-card-border rounded-[4px] overflow-hidden bg-card">
          {STATS.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex-1 min-w-[160px] px-10 py-8 text-center ${
                i > 0 ? "border-l border-card-border" : ""
              }`}
            >
              <div className="font-montserrat font-extrabold text-[2rem] text-pink mb-1">{value}</div>
              <MonoLabel className="text-muted">{label}</MonoLabel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

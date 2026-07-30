import { MonoLabel } from "./MonoLabel";

export function SobreEvento() {
  return (
    <section id="sobre" className="bg-surface section-container py-28">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-pink" />
            <MonoLabel>sobre_o_evento</MonoLabel>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.05] mb-6 text-white">
            Uma experiência
            <br />
            <span className="bg-gradient-to-br from-pink to-purple bg-clip-text text-transparent">
              única e transformadora
            </span>
          </h2>
          <p className="text-gray text-[0.97rem] leading-[1.9] mb-5 font-light">
            O <strong className="text-white font-semibold">Grupo All Party</strong> realiza a 4ª edição
            do IPDCON — o maior encontro de líderes do mercado de eventos educacionais e corporativos
            do Brasil.
          </p>
          <p className="text-muted text-[0.93rem] leading-[1.9] font-light">
            Em um único dia reunimos diretores de colégio, líderes de ensino e profissionais de
            marketing para debater o futuro do setor, trocar experiências e fechar parcerias
            estratégicas.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden bg-card border border-pink-border border-l-[3px] border-l-pink rounded-[4px] px-10 py-8">
            <div
              className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(203,22,150,0.18), transparent)" }}
            />
            <div className="font-montserrat font-black text-[3.8rem] leading-none bg-gradient-to-br from-pink to-[#e030b0] bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray text-[0.93rem] leading-[1.6] m-0">
              participantes entre líderes de ensino, diretores de colégio e profissionais do mercado
              corporativo
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "4ª", l: "edição" },
              { n: "1 dia", l: "imersão" },
            ].map(({ n, l }) => (
              <div key={l} className="bg-card border border-card-border rounded-[4px] p-6 text-center">
                <div className="font-montserrat font-extrabold text-[1.9rem] text-gold mb-1">{n}</div>
                <MonoLabel className="text-muted">{l}</MonoLabel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

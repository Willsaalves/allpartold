import { IconInstagram, IconLinkedin, IconYoutube } from "./icons";
import { MonoLabel } from "./MonoLabel";

const BRANDS = ["All Party", "Treme Terra", "AP7"];
const SOCIALS = [
  { Icon: IconInstagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: IconLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: IconYoutube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-card-border section-container pt-16 pb-8">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/[0.04]">
          <div>
            <div className="font-montserrat font-black text-[1.4rem] mb-3 tracking-[0.04em]">
              <span className="text-white">IPD</span>
              <span className="text-pink">CON</span>
              <span className="font-mono text-muted text-[0.65rem] ml-2 font-normal">_2026</span>
            </div>
            <p className="text-muted text-[0.83rem] leading-[1.75] m-0">
              O maior encontro de líderes do mercado de eventos educacionais e corporativos do
              Brasil.
            </p>
          </div>

          <div>
            <div className="mb-5">
              <MonoLabel>realização</MonoLabel>
            </div>
            <p className="text-white text-[0.9rem] font-semibold mb-4 font-montserrat">
              Grupo All Party
            </p>
            {BRANDS.map((m) => (
              <div
                key={m}
                className="text-muted text-[0.83rem] border-l-2 border-pink-border pl-3 mb-2"
              >
                {m}
              </div>
            ))}
          </div>

          <div>
            <div className="mb-5">
              <MonoLabel>redes_sociais</MonoLabel>
            </div>
            <div className="flex gap-[0.6rem] mb-6">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] border border-white/10 rounded-[3px] flex items-center justify-center text-muted transition-colors hover:border-pink hover:text-pink"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <a
              href="#inscricao"
              className="inline-block border border-pink-border text-pink px-5 py-[0.55rem] rounded-[3px] font-montserrat font-bold text-[0.7rem] tracking-[0.12em] uppercase transition-colors hover:bg-pink-dim"
            >
              Inscrever-se
            </a>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-4">
          <MonoLabel className="text-[#2a2a3a]">© 2026 IPDCON — Grupo All Party</MonoLabel>
          <MonoLabel className="text-[#2a2a3a]">15.08.2026 · Espaço Hakka · São Paulo/SP</MonoLabel>
        </div>
      </div>
    </footer>
  );
}

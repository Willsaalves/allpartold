import { SectionLabel } from "./MonoLabel";

export function VideoDestaque() {
  return (
    <section className="bg-bg section-container py-28">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>bastidores_all_party</SectionLabel>
          <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,3rem)] text-white mb-3 leading-[1.05]">
            A experiência que só quem já viveu entende
          </h2>
          <p className="font-inter text-base text-muted font-light max-w-[600px] mx-auto">
            Um vislumbre dos eventos que o Grupo All Party já realizou
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-pink-border bg-card">
          <video
            className="w-full aspect-video"
            controls
            preload="metadata"
            poster="/video/ipdcon-highlight-poster.jpg"
          >
            <source src="/video/ipdcon-highlight.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

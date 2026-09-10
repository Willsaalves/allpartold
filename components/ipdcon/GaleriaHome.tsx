import { GaleriaFotos } from "./GaleriaFotos";
import { FOTOS_2026 } from "@/lib/media";

export function GaleriaHome() {
  return (
    <section className="section band-light" id="galeria">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Registros do evento</div>
          <h2 className="h2">Galeria de fotos</h2>
          <p className="lead">Momentos das edições do IPDCON.</p>
        </div>
        <GaleriaFotos fotos={FOTOS_2026} />
      </div>
    </section>
  );
}

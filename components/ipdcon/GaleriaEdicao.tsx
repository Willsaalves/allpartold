import { Carrossel } from "./Carrossel";
import { FOTOS_2026 } from "@/lib/media";

export function GaleriaEdicao() {
  return (
    <section className="section band-light" id="galeria">
      <div className="container">
        <div className="eyebrow">Registros da noite</div>
        <h2 className="h2">Como foi o IPDCON 2026.</h2>
        <p className="lead">
          Da recepção ao palco principal: os momentos que traduzem a experiência da quarta edição.
        </p>
        <Carrossel fotos={FOTOS_2026} titulo="Galeria do IPDCON 2026" />
      </div>
    </section>
  );
}

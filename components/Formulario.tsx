"use client";

import { FormEvent, useState } from "react";
import { IconChevron, IconCheck, IconRocket } from "./icons";
import { MonoLabel } from "./MonoLabel";

const SEGMENTOS = [
  "Educação (Colégio / Universidade)",
  "Marketing e Assessoria de Imprensa",
  "Agência de Eventos",
  "Mercado Corporativo",
  "Formatura e Colação de Grau",
  "Outro",
];

const BENEFITS = [
  "Ingresso para todos os painéis",
  "Jantar e open bar incluso",
  "Certificado de participação",
  "Acesso ao networking exclusivo",
];

const inputClass =
  "w-full bg-surface border border-white/[0.08] rounded-[3px] px-[1.1rem] py-[0.875rem] text-white font-inter text-[0.88rem] transition-colors box-border";

type Status = "idle" | "submitting" | "success" | "error";

export function Formulario() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    cargo: "",
    segmento: "",
    autorizo: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.whatsapp,
          empresa: form.empresa || undefined,
          cargo: form.cargo || undefined,
          segmento: form.segmento || undefined,
          autorizo: form.autorizo,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Não foi possível concluir sua inscrição.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <section id="inscricao" className="bg-surface section-container py-28">
        <div className="max-w-[520px] mx-auto text-center">
          <div className="w-[60px] h-[60px] rounded-full bg-pink-dim border border-pink flex items-center justify-center mx-auto mb-8 text-pink">
            <IconRocket />
          </div>
          <h2 className="font-montserrat font-extrabold text-[2rem] text-white mb-4">
            Inscrição recebida!
          </h2>
          <p className="text-muted leading-[1.75]">
            Entraremos em contato em breve. Nos vemos no IPDCON 2026!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="bg-surface section-container py-28">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-pink" />
            <MonoLabel>inscrição</MonoLabel>
          </div>
          <h2 className="font-montserrat font-black text-[clamp(1.8rem,4vw,3rem)] text-white mb-6 leading-[1.05]">
            Garanta
            <br />
            sua vaga
          </h2>
          <p className="text-muted text-[0.92rem] leading-[1.85] mb-10">
            As vagas são limitadas. Preencha o formulário e nossa equipe confirmará sua
            participação.
          </p>

          {BENEFITS.map((item) => (
            <div
              key={item}
              className="flex gap-3 items-center mb-3 px-4 py-[0.7rem] bg-card border border-card-border rounded-[3px]"
            >
              <div className="w-[6px] h-[6px] rounded-full bg-pink shrink-0" />
              <span className="text-gray text-[0.87rem]">{item}</span>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-pink-border border-t-2 border-t-pink rounded-[4px] p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="sm:col-span-2">
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">nome_completo</MonoLabel>
              </label>
              <input
                required
                type="text"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">e_mail</MonoLabel>
              </label>
              <input
                required
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">whatsapp</MonoLabel>
              </label>
              <input
                required
                type="tel"
                placeholder="(11) 99999-9999"
                value={form.whatsapp}
                onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">empresa_instituição</MonoLabel>
              </label>
              <input
                type="text"
                placeholder="Nome da instituição"
                value={form.empresa}
                onChange={(e) => setForm((f) => ({ ...f, empresa: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">cargo</MonoLabel>
              </label>
              <input
                type="text"
                placeholder="Seu cargo atual"
                value={form.cargo}
                onChange={(e) => setForm((f) => ({ ...f, cargo: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block mb-[0.4rem]">
                <MonoLabel className="text-muted">segmento</MonoLabel>
              </label>
              <div className="relative">
                <select
                  required
                  value={form.segmento}
                  onChange={(e) => setForm((f) => ({ ...f, segmento: e.target.value }))}
                  className={`${inputClass} appearance-none cursor-pointer pr-10`}
                >
                  <option value="" disabled>
                    Selecione seu segmento
                  </option>
                  {SEGMENTOS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-pink pointer-events-none">
                  <IconChevron />
                </div>
              </div>
            </div>
          </div>

          <label
            className="flex items-start gap-3 mb-8 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setForm((f) => ({ ...f, autorizo: !f.autorizo }));
            }}
          >
            <div
              className={`w-[17px] h-[17px] min-w-[17px] rounded-sm border flex items-center justify-center mt-[2px] transition-all ${
                form.autorizo ? "bg-pink border-pink" : "bg-transparent border-white/15"
              }`}
            >
              {form.autorizo && <IconCheck />}
            </div>
            <span className="text-muted text-[0.8rem] leading-[1.6]">
              Autorizo receber comunicações do <strong className="text-gray">Grupo All Party</strong>{" "}
              sobre o IPDCON 2026 e demais eventos.
            </span>
          </label>

          {status === "error" && (
            <div className="mb-6 px-4 py-3 rounded-[3px] border border-pink-border bg-pink-dim text-pink text-[0.85rem]">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[linear-gradient(135deg,#cb1696_0%,#e030b0_50%,#cb1696_100%)] text-white border-none px-4 py-[1.1rem] rounded-[3px] font-montserrat font-extrabold text-[0.82rem] tracking-[0.15em] uppercase cursor-pointer transition-all shadow-[0_4px_24px_rgba(203,22,150,0.4)] hover:opacity-90 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === "submitting" ? "Enviando..." : "Inscrever-se agora"}
          </button>
        </form>
      </div>
    </section>
  );
}

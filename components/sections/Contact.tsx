"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { socialLinks } from "@/data/site";
import { socialIcons } from "@/components/ui/IconMap";
import { isValidEmail } from "@/utils/helpers";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? ""); // honeypot

    if (company) return; // bot detected, silently ignore

    if (!name || !isValidEmail(email) || message.length < 10) {
      setStatus("error");
      setErrorMessage("Preencha nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Não consegui enviar agora. Tente novamente em instantes ou use o e-mail direto abaixo.");
    }
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="06"
          title="Vamos conversar?"
          description="Aberto a oportunidades em dados, IA e backend. Me chama por aqui ou por um dos canais diretos."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-paper/10 px-4 py-3.5 text-[14px] text-paper/90 transition-colors hover:border-signal/50 hover:text-signal"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassPanel className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-haze">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-paper/15 bg-transparent px-3.5 py-2.5 text-[14px] text-paper outline-none transition-colors focus:border-signal"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-haze">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-paper/15 bg-transparent px-3.5 py-2.5 text-[14px] text-paper outline-none transition-colors focus:border-signal"
                      placeholder="voce@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-haze">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-paper/15 bg-transparent px-3.5 py-2.5 text-[14px] text-paper outline-none transition-colors focus:border-signal"
                    placeholder="Conte um pouco sobre a oportunidade ou o projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-paper py-3 font-mono text-[13px] font-medium text-ink transition-colors hover:bg-signal hover:text-paper disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Enviar mensagem
                </button>

                {status === "success" ? (
                  <p className="flex items-center gap-2 text-[13px] text-signal">
                    <CheckCircle2 size={15} /> Mensagem enviada — retorno em breve.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="flex items-center gap-2 text-[13px] text-red-400">
                    <XCircle size={15} /> {errorMessage}
                  </p>
                ) : null}
              </form>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

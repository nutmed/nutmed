"use client";

import { useState } from "react";
import { pushDataLayer } from "@/lib/datalayer";
import Icon from "./Icon";

type Props = {
  formId: string;
  courseSlug: string;
  courseName: string;
  conversionId: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  /** Campanha no ar (ex.: black-nutmed-2026); vai para o RD e para o dataLayer. */
  campaign?: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function LeadForm({ formId, courseSlug, courseName, conversionId, title, subtitle, dark, campaign }: Props) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Informe um WhatsApp com DDD.");
      return;
    }
    setError("");
    setStatus("sending");

    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) utms[k] = v;
    });

    const body = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: digits,
      profile: String(data.get("profile") || ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") || ""), // honeypot
      conversionId,
      course: courseSlug,
      formId,
      campaign,
      pageUrl: window.location.href,
      referrer: document.referrer,
      ...utms,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Falha no envio");

      pushDataLayer({
        event: "generate_lead",
        form_id: formId,
        lead_source: "landing_page",
        course_slug: courseSlug,
        course_name: courseName,
        lead_profile: body.profile,
        conversion_identifier: conversionId,
        ...(campaign ? { campaign } : {}),
        ...utms,
      });
      setStatus("done");
      form.reset();
      setPhone("");
    } catch {
      setStatus("error");
      setError("Não conseguimos enviar agora. Tente de novo em instantes ou fale com a gente no WhatsApp (21) 99543-2570.");
    }
  }

  if (status === "done") {
    return (
      <div className={`lead-card ${dark ? "lead-card--dark" : ""}`} role="status">
        <div className="lead-success">
          <Icon name="check" size={44} />
          <h3>Recebemos seus dados!</h3>
          <p>Nossa equipe vai falar com você pelo WhatsApp para tirar dúvidas e garantir sua vaga na Turma 2027.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`lead-card ${dark ? "lead-card--dark" : ""}`}>
      {title && <h3 className="lead-title">{title}</h3>}
      {subtitle && <p className="lead-sub">{subtitle}</p>}
      <form id={formId} onSubmit={onSubmit} noValidate={false} data-course={courseSlug}>
        <label className="field">
          <span>Nome completo</span>
          <input name="name" type="text" autoComplete="name" required minLength={3} placeholder="Seu nome" />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" required placeholder="voce@email.com" />
        </label>
        <label className="field">
          <span>WhatsApp</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required
            placeholder="(21) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
          />
        </label>
        <label className="field">
          <span>Você é</span>
          <select name="profile" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option value="nutricionista">Nutricionista formada(o)</option>
            <option value="formando">Formando(a) em Nutrição</option>
            <option value="estudante">Estudante de Nutrição</option>
          </select>
        </label>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
        <label className="consent">
          <input type="checkbox" name="consent" required />
          <span>
            Aceito receber contato da NutMed sobre cursos e concordo com a{" "}
            <a href="https://nutmed.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>
            .
          </span>
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="btn-nm btn-nm--accent w-100" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Quero saber mais"}
          <Icon name="arrow" size={18} />
        </button>
      </form>
    </div>
  );
}

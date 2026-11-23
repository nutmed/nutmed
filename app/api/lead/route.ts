import { NextResponse } from "next/server";
import { sendConversion, type LeadInput } from "@/lib/rdstation";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PROFILES = new Set(["nutricionista", "formando", "estudante"]);

function str(v: unknown, max = 300) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // Honeypot: robôs preenchem o campo escondido "website".
  if (str(body.website)) return NextResponse.json({ ok: true });

  const lead: LeadInput = {
    name: str(body.name, 120),
    email: str(body.email, 160).toLowerCase(),
    phone: str(body.phone, 20).replace(/\D/g, ""),
    profile: str(body.profile, 30),
    consent: body.consent === true,
    conversionId: str(body.conversionId, 120),
    course: str(body.course, 80),
    formId: str(body.formId, 60),
    campaign: str(body.campaign, 60).toLowerCase().replace(/[^a-z0-9-]/g, "") || undefined,
    pageUrl: str(body.pageUrl, 500),
    utm_source: str(body.utm_source, 120),
    utm_medium: str(body.utm_medium, 120),
    utm_campaign: str(body.utm_campaign, 120),
    utm_term: str(body.utm_term, 120),
    utm_content: str(body.utm_content, 120),
  };

  const invalid =
    lead.name.length < 3 ||
    !EMAIL_RE.test(lead.email) ||
    lead.phone.length < 10 ||
    lead.phone.length > 11 ||
    !PROFILES.has(lead.profile) ||
    !lead.consent ||
    !lead.conversionId;
  if (invalid) {
    return NextResponse.json({ ok: false, error: "Confira os campos do formulário." }, { status: 422 });
  }

  const apiKey = process.env.RD_STATION_API_KEY;
  if (!apiKey) {
    // Sem chave configurada (ambiente local ou prévia): aceita sem enviar.
    console.warn("[lead] RD_STATION_API_KEY não configurada; lead não enviado ao RD.", lead.conversionId);
    return NextResponse.json({ ok: true, sent: false });
  }

  try {
    await sendConversion(lead, apiKey);
    return NextResponse.json({ ok: true, sent: true });
  } catch (err) {
    console.error("[lead] erro ao enviar ao RD Station", err);
    return NextResponse.json({ ok: false, error: "Falha ao registrar o contato." }, { status: 502 });
  }
}

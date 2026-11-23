// Integração com o RD Station Marketing (API de conversões).
// Docs: https://developers.rdstation.com/reference/conversao
// Autenticação pela chave de API pública (RD Station > Integrações > Chaves de API),
// guardada só no servidor na variável RD_STATION_API_KEY.

export type LeadInput = {
  name: string;
  email: string;
  phone: string; // só dígitos, com DDD
  profile: string;
  consent: boolean;
  conversionId: string;
  course: string;
  formId: string;
  campaign?: string;
  pageUrl?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

const RD_ENDPOINT = "https://api.rd.services/platform/conversions";

export function buildConversionPayload(lead: LeadInput) {
  const tags = ["lp", lead.course, `perfil-${lead.profile}`, lead.campaign].filter(Boolean);
  const payload: Record<string, unknown> = {
    conversion_identifier: lead.conversionId,
    name: lead.name,
    email: lead.email,
    mobile_phone: `+55${lead.phone}`,
    tags,
    available_for_mailing: lead.consent,
    legal_bases: [
      {
        category: "communications",
        type: "consent",
        status: lead.consent ? "granted" : "declined",
      },
    ],
  };
  if (lead.utm_source) payload.traffic_source = lead.utm_source;
  if (lead.utm_medium) payload.traffic_medium = lead.utm_medium;
  if (lead.utm_campaign) payload.traffic_campaign = lead.utm_campaign;
  if (lead.utm_term) payload.traffic_value = lead.utm_term;
  return { event_type: "CONVERSION", event_family: "CDP", payload };
}

export async function sendConversion(lead: LeadInput, apiKey: string) {
  const res = await fetch(`${RD_ENDPOINT}?api_key=${encodeURIComponent(apiKey)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildConversionPayload(lead)),
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`RD Station respondeu ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json().catch(() => ({}));
}

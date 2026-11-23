import type { Campaign, Course } from "@/content/types";

// Campanha no ar? Respeita a data de fim do conteúdo.
// CAMPAIGN_FORCE=on|off força o estado (útil para conferir as duas versões na Vercel).
export function activeCampaign(course: Course, now = new Date()): Campaign | null {
  const c = course.campaign;
  if (!c) return null;
  const force = process.env.CAMPAIGN_FORCE;
  if (force === "off") return null;
  if (force === "on") return c;
  return now.getTime() <= new Date(c.endsAt).getTime() ? c : null;
}

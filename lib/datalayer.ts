declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Envia um evento para o dataLayer do Google Tag Manager. */
export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

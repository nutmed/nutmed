import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";

import { SITE_URL } from "@/lib/site";
import "./bootstrap.min.css";
import "./globals.css";

// Fontes hospedadas no próprio projeto (app/fonts, licença OFL). Antes vinham de
// next/font/google, que baixa do Google a cada build e quebrava o deploy na Vercel.
// Arquivos variáveis (eixo wght), subset latin: cobre todo o português.
const montserrat = localFont({
  src: "./fonts/montserrat-latin-wght.woff2",
  weight: "300 800",
  style: "normal",
  variable: "--font-title",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const openSans = localFont({
  src: "./fonts/open-sans-latin-wght.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-body",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NutMed | Cursos de Nutrição",
  description: "Pós-graduação, atualização e preparatórios para nutricionistas.",
  applicationName: "NutMed",
  robots: { index: true, follow: true },
  // Evita que o iOS transforme números (CNPJ, datas) em links de telefone.
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#4a2f9a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}

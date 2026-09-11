import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgressProvider } from "@/components/providers/ScrollProgressProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { CustomCursor } from "@/components/layout/CustomCursor";

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "Desenvolvedor de Software",
    "Analista de Dados",
    "Backend Developer",
    "Full Stack",
    "Python",
    "SQL",
    "Power BI",
    "Node.js",
    "React",
    "Next.js",
    "Porto Alegre",
    site.name,
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.tagline,
  url: site.url,
  email: site.email,
  sameAs: [site.github, site.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Senac RS",
  },
  knowsAbout: [
    "Python",
    "SQL",
    "Power BI",
    "Next.js",
    "React",
    "Análise de Dados",
    "Desenvolvimento Backend",
  ],
};

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.add("light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink font-sans text-paper antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <ScrollProgressProvider>
            <a
              href="#top"
              className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-full bg-paper px-4 py-2 font-mono text-[12px] text-ink transition-transform focus:translate-y-0"
            >
              Pular para o conteúdo
            </a>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </ScrollProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

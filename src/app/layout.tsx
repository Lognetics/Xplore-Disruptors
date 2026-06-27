import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  applicationName: SITE.name,
  title: {
    default: `${SITE.name} — Africa Is Building The Future`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: SITE.shortName },
  formatDetection: { telephone: false },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#03040a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${inter.variable} ${display.variable}`}>
      <body className="min-h-dvh antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

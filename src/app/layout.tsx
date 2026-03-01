import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import { CustomCursor } from "@/components/CustomCursor";
import {
  siteDescription,
  siteLocale,
  siteLogo,
  siteName,
  siteOgImage,
  siteUrl,
} from "@/utils/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — дизайн и производство мебели`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  category: "Design",
  keywords: [
    "дизайн мебели",
    "производство мебели",
    "мебель на заказ",
    "HoReCa",
    "офисная мебель",
    "дизайн интерьера",
    "проектирование мебели",
    "мебель для бизнеса",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — дизайн и производство мебели`,
    description: siteDescription,
    locale: siteLocale,
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — дизайн и производство мебели`,
    description: siteDescription,
    images: [siteOgImage],
  },
  icons: {
    icon: siteLogo,
    apple: siteLogo,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: new URL(siteLogo, siteUrl).toString(),
    description: siteDescription,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased font-unbounded`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buro dsgn",
  description: "Мебельная мастерская где можно воплотить нестандартные решения. Проектирование и изготовление мебели для HoReCa, офиса и дома.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}


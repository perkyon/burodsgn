import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buro Design",
  description: "Мая начальника меня заствлять за пачку доширак делать сайт",
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


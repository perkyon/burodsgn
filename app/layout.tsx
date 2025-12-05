import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buro dsgn",
  description: "Buro dsgn - дизайн-бюро",
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


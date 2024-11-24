import type { Metadata } from "next";
import "./globals.css";
import { Inter } from  'next/font/google'


const fonte = Inter({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Seu evento começa aqui",
  description: "Aplicação para gerenciar eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pf-BR" dir="ltr">
      <body
        className={fonte.className}>
        {children}
      </body>
    </html>
  );
}

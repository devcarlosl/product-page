import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/commons/Header";
import Footer from "@/commons/Footer";

import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Página de produto Intelbras",
  description: "Essa é uma página de um produto da Intelbras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

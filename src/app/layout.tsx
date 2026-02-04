import type { Metadata } from "next";
import { Caveat, Quicksand } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AssinaZero — controle suas assinaturas",
  description:
    "AssinaZero encontra cobranças esquecidas, avisa antes de renovar e ajuda a cancelar. R$19/mês.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

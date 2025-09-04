import { Roboto_Mono, Inter } from "next/font/google";
import BackToTop from "./components/BackToTop";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ivan Vidal de Almeida",
  description: "Desenvolvedor Full-Stack | React | Next.js | Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}
        className={`${robotoMono.variable} ${inter.variable} antialiased`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

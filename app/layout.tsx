import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat, Bebas_Neue, Roboto_Condensed, Imperial_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const monsieurLaDoulaise = Imperial_Script({
  variable: "--font-monsieur-la-doulaise",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Erica Fabian | Portfólio",
  description: "Portfólio de Arquitetura e Urbanismo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${poppins.variable} 
          ${montserrat.variable} 
          ${bebasNeue.variable} 
          ${robotoCondensed.variable} 
          ${monsieurLaDoulaise.variable} 
          min-h-screen
          flex flex-col
          antialiased
          bg-portfolio
        `}
      >
        <Header />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import NavBar from "./Components/NavBar";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Usar array de pesos
});

// Importar Inter con un array de pesos válidos
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Usar array de pesos
});

export const metadata: Metadata = {
  title: "Wall to Wall",
  description: "Wall to Wall, deja tu huella en su muro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased container mx-auto min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

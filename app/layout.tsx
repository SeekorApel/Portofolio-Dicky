import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dicky Muzakki | Full Stack Developer & Software Engineer",
  description:
    "Portofolio profesional Dicky Muzakki, Full Stack Developer & Software Engineer spesialis dalam arsitektur backend enterprise (.NET Core, Java Spring Boot), Angular, Next.js, dan database berlatensi rendah.",
  keywords: [
    "Dicky Muzakki",
    "Full Stack Developer",
    "Software Engineer",
    ".NET Core",
    "C#",
    "Java Spring Boot",
    "Angular",
    "Next.js",
    "Oracle Database",
    "Redis",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Dicky Muzakki" }],
  creator: "Dicky Muzakki",
  openGraph: {
    title: "Dicky Muzakki | Full Stack Developer & Software Engineer",
    description:
      "Portofolio profesional Dicky Muzakki, Software Engineer dengan pengalaman pada sistem mission-critical BPJS Kesehatan & PT Pamapersada Nusantara.",
    url: "https://dickymuzakki.dev",
    siteName: "Dicky Muzakki Portfolio",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-zinc-900 antialiased selection:bg-orange-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

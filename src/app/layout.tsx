import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { MeshGradient } from "@/components/global/GradientMesh";
import { Navbar } from "@/components/global/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'transparent',
};

export const metadata: Metadata = {
  title: "pretend",
  description: "An all in one bot dedicated to providing the best experience to the best servers on Discord. ",
  twitter: {
    site: 'https://pretend.bot',
    card: 'player'
  },
  openGraph: {
    url: 'https://pretend.bot',
    type: 'website',
    title: 'pretend',
    siteName: 'pretend.bot',
    description: 'An all in one bot dedicated to providing the best experience to the best servers on Discord. ',
    images: [
      {
        url: 'https://r2.pretend.bot/pretend.png',
        width: 500,
        height: 500,
        alt: 'Loti'
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-loti-100`}>
        <MeshGradient />
        <Navbar /> 
        {children}
        </body>
    </html>
  );
}

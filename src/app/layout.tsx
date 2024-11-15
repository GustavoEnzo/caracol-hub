import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";

const inter = Inter({subsets : ["latin"],
  weight: ['200', '400', '800'],
  
}); 


export const metadata: Metadata = {
  title: "Caracol Hub",
  description: "Caracol Hub is a digital agency that helps businesses grow.",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
    className={inter.className}>
      <Header />
      <Main />
      {children}
      <Footer/>
      </body>
    </html>
  );
}

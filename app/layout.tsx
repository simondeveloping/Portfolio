import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import { Lora } from "next/font/google";
import { AuthProvider } from "./AuthContext";
export const metadata: Metadata = {
  title: "simonp",
  description: "WoOoohoOoo",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-mont",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>simonp.one</title>
      <body className={`${montserrat.variable} ${lora.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

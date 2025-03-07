import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "./AuthContext";
export const metadata: Metadata = {
  title: "simonp",
  description: "WoOoohoOoo",
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <title>simonp.one</title>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

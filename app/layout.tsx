import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import React from "react";
import { Montserrat } from "next/font/google";
import Overlay from "./components/overlay";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableColorScheme={true}
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

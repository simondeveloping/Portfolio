import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import React from "react";

export const metadata: Metadata = {
  title: "simonp",
  description: "WoOoohoOoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

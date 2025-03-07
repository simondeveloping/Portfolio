import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-provider";
import React from "react";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableColorScheme={true}
        enableSystem={true}
        disableTransitionOnChange
      >
        <Navbar />

        {children}
        <Toaster />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from '@/components/Header';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer"; // <-- CHANGE 1: Import the Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "RentHub",
  description: "Cyprus Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* CHANGE 2: Added flexbox classes to make the layout fill the screen */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <Header />
          {/* Added flex-grow to make the main content expand and push the footer down */}
          <main className="flex-grow">{children}</main>
          <Footer /> {/* <-- CHANGE 3: Add the Footer component here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
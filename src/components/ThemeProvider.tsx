// src/components/ThemeProvider.tsx

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// CORRECTED: Import ThemeProviderProps directly from 'next-themes'
// This is the standard way, or it's inferred by TypeScript
import { ThemeProviderProps } from "next-themes"; // This line is the fix

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
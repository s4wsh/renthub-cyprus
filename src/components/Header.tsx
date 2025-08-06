// src/components/Header.tsx
"use client";

// ... (keep all your existing imports)
import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // --- CHANGES ARE ON THIS LINE ---
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 shadow-lg backdrop-blur-lg">
      <div className="container flex h-14 items-center justify-between">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">RentHub</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden items-center justify-end space-x-2 md:flex">
          <Button asChild><Link href="/login">Login</Link></Button>
          <ThemeToggle />
        </div>


        {/* --- MOBILE VIEW --- */}
        <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">RentHub</span>
            </Link>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>RentHub</SheetTitle>
                </SheetHeader>
                
                <div className="flex h-full flex-col px-6 py-8"> 
                  <nav className="flex flex-col gap-6 text-lg font-medium">
                    <Link href="/about" onClick={closeMenu}>About</Link>
                    <Link href="/contact" onClick={closeMenu}>Contact</Link>
                  </nav>
                  
                  <div className="mt-auto"> 
                    <div className="pt-6 border-t">
                      <Button asChild className="w-full">
                        <Link href="/login" onClick={closeMenu}>Login</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
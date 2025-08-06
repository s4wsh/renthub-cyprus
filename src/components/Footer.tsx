// src/components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} RentHub. All rights reserved.
        </p>
        <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
             <Link href="/privacy" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Privacy Policy
            </Link>
        </nav>
      </div>
    </footer>
  );
}
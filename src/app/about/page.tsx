// src/app/about/page.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="container py-8 md:py-12">
      {/* Section 1: Our Vision (Hero) */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Our Vision: A Simpler Way Home
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          RentHub was founded on a simple belief: finding a rental property shouldn't be a chore. It should be an exciting first step toward a new chapter in your life. We're here to make that step easy, transparent, and trustworthy.
        </p>
      </section>

      {/* Section 2: The Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-muted-foreground">A straightforward process designed for you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
            <p className="text-muted-foreground">
              Use our powerful filters to narrow down properties by price, location, bedrooms, and amenities to find exactly what you're looking for.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore & Compare</h3>
            <p className="text-muted-foreground">
              Dive into detailed property pages with high-resolution galleries, full descriptions, and virtual tours to explore your options from anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect & Secure</h3>
            <p className="text-muted-foreground">
              Directly contact agents via phone or WhatsApp to ask questions, schedule viewings, and secure your new home with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: About the Company & Our Commitment */}
      <section className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">About RentHub</h2>
            <p className="text-muted-foreground leading-relaxed">
              Based in the heart of Cyprus, RentHub is a modern real estate platform built with cutting-edge technology. We partner with the most reputable agencies and landlords to provide a curated, high-quality list of properties. Our team is passionate about combining great design with practical functionality to serve our community of renters and agents.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Verified Listings</h4>
                  <p className="text-muted-foreground">Every property is checked to ensure accuracy and quality.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Secure Communication</h4>
                  <p className="text-muted-foreground">Connect with agents through trusted channels without worry.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Heart className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">User-Focused Design</h4>
                  <p className="text-muted-foreground">An experience designed to be intuitive, fast, and enjoyable.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Section 4: Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-2">Ready to Find Your Home?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          The perfect property is just a few clicks away. Browse our listings and discover a better way to rent in Cyprus.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            Browse Properties <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </main>
  );
}
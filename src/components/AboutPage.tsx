"use client"; // <--- Add this line here

import React from 'react';
import { Header } from './Header';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, Users, MapPin, Award, Shield, Clock } from 'lucide-react';

type ViewType = 'home' | 'property' | 'about' | 'contact';

interface AboutPageProps {
  onNavigate: (view: ViewType) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header currentView="about" onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About RentHub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to making rental property search simple, transparent, and efficient for everyone.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[2/1] mb-16 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
            alt="Modern office building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2020, RentHub emerged from a simple idea: finding the perfect rental property shouldn't be complicated or overwhelming. Our founders experienced firsthand the challenges of navigating fragmented rental markets, unreliable listings, and poor communication between tenants and property owners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we've built a comprehensive platform that connects thousands of renters with quality properties across multiple cities. We believe that everyone deserves access to safe, affordable, and comfortable housing, and we're committed to making that process as smooth as possible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform serves both renters and property owners, providing tools and resources that create transparency, build trust, and facilitate successful rental relationships.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize the rental market by creating a trusted, user-friendly platform that brings together quality properties and reliable tenants. We strive to eliminate the stress and uncertainty from the rental process through innovative technology, comprehensive verification, and exceptional customer service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Trust & Transparency</h4>
                      <p className="text-sm text-muted-foreground">We verify all properties and maintain honest, clear communication.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Customer First</h4>
                      <p className="text-sm text-muted-foreground">Every decision we make prioritizes our users' needs and experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Efficiency</h4>
                      <p className="text-sm text-muted-foreground">We streamline processes to save time for both renters and property owners.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Properties Listed</span>
                    <Badge variant="secondary">10,000+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Happy Tenants</span>
                    <Badge variant="secondary">25,000+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cities Served</span>
                    <Badge variant="secondary">50+</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Property Partners</span>
                    <Badge variant="secondary">2,500+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose RentHub</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Verified Properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Detailed Location Info</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">Quality Guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about our platform or services?
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm text-primary hover:underline"
                >
                  Contact our team →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
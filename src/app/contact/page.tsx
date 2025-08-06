// src/app/contact/page.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Info, Phone, Clock, Calendar, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const officePhoneNumber = '+5338408051';
  // IMPORTANT: Replace this with your actual booking link from a service like Calendly
  const bookingLink = 'https://calendly.com/your-renthub-link'; 

  return (
    <main className="container py-8 md:py-12">
      {/* Section 1: Hero and Primary Contact Path */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help you on your journey to finding the perfect rental property in Cyprus.
        </p>
      </section>

      {/* Section 2: Important Info Box */}
      <section className="mb-12">
        <div className="bg-secondary border border-border rounded-lg p-6 max-w-4xl mx-auto">
          <div className="flex items-start">
            <Info className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-2">The Fastest Way to Get Answers</h2>
              <p className="text-muted-foreground mb-4">
                For questions about a specific property, the quickest method is to use the **"Contact Agent"** button directly on the property listing. This connects you straight to the agent responsible for that property.
              </p>
              <Button asChild>
                <Link href="/">Browse Properties</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-start mt-6 pt-6 border-t">
             <Sparkles className="h-6 w-6 mr-4 text-primary flex-shrink-0 mt-1" />
             <div>
                <h3 className="font-semibold">Coming Soon: AI-Powered Assistance!</h3>
                <p className="text-sm text-muted-foreground">We're developing an AI agent to provide you with instant answers 24/7. Stay tuned!</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact Details & Map */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Direct Contact & Hours</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 mr-4 mt-1 text-primary"/>
              <div>
                <h3 className="font-semibold text-lg">Our Phone Number</h3>
                <a href={`tel:${officePhoneNumber}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {officePhoneNumber}
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 mr-4 mt-1 text-primary"/>
              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM – 2:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="h-6 w-6 mr-4 mt-1 text-primary"/>
              <div>
                <h3 className="font-semibold text-lg">Book a Consultation</h3>
                <p className="text-muted-foreground mb-2">
                  Outside our working hours? Book a call with one of our specialists at your convenience.
                </p>
                <Button asChild>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Embedded Map */}
        <div>
           <h2 className="text-3xl font-bold mb-6">Our Location</h2>
           <div className="overflow-hidden rounded-lg shadow-lg w-full h-full min-h-[450px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52895.84285994528!2d33.32187532130329!3d35.19253412580791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1a42b159359d%3A0x4ea77833333333!2sNicosia!5e0!3m2!1sen!2s!4v1625844888888"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           </div>
        </div>
      </section>
    </main>
  );
}
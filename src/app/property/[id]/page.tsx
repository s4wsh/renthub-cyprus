// src/app/property/[id]/page.tsx

import { notFound } from 'next/navigation';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Phone, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'; // Assuming this component exists

// This page receives 'params' which contains the dynamic parts of the URL.
export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Find the property from our data source that matches the ID from the URL.
  const property = properties.find(p => p.id === params.id);

  // If no property is found with that ID, show a 404 Not Found page.
  if (!property) {
    notFound();
  }
  
  const whatsappLink = `https://wa.me/${property.phoneNumber.replace(/\D/g, '')}`;

  return (
    <main className="container py-8">
      {/* Property Gallery Section */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
           <ImageWithFallback
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* In the future, you can add more images here to create a gallery */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start">
            <Badge variant={property.status === 'Available' ? 'default' : 'secondary'}>
              {property.status}
            </Badge>
            <span className="text-3xl font-bold text-primary">£{property.price.toLocaleString()}/mo</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight my-4">{property.title}</h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.address}</span>
          </div>
          <p className="text-lg leading-relaxed mb-6">{property.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Property Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center"><Bed className="h-5 w-5 mr-2 text-primary" /> {property.beds} Bedrooms</div>
            <div className="flex items-center"><Bath className="h-5 w-5 mr-2 text-primary" /> {property.baths} Bathrooms</div>
            <div className="flex items-center font-semibold">{property.sqft} sqft</div>
            <div className="font-semibold">{property.type}</div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">Amenities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-inside">
            {property.amenities.map(amenity => (
              <li key={amenity} className="flex items-center">
                <span className="text-primary mr-2">✔</span>{amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Contact */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-center mb-4">Contact Agent</h3>
             <div className="flex flex-col space-y-3 pt-4">
                <Button asChild size="lg"><a href={`tel:${property.phoneNumber}`}><Phone className="mr-2 h-4 w-4" /> Call Now</a></Button>
                <Button asChild size="lg" variant="secondary"><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</a></Button>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
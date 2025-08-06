// src/components/PropertyCard.tsx
"use client";

// ... (keep all your existing imports)
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Bed, Bath, Car, Shirt, Phone, MessageSquare } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from './ui/dialog';
import type { Property } from '@/types';


interface PropertyCardProps {
  property: Property;
  onPropertyClick: (id: string) => void;
}

export function PropertyCard({ property, onPropertyClick }: PropertyCardProps) {
  const isAvailable = property.status === 'Available';
  const whatsappLink = `https://wa.me/${property.phoneNumber.replace(/\D/g, '')}`;

  const isFurnished = property.amenities.includes('Furnished');
  const hasParking = property.amenities.includes('Parking');
  const hasLaundry = property.amenities.includes('Laundry');

  return (
    // --- CHANGES ARE ON THIS LINE ---
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 group flex flex-col h-full">
      <div onClick={() => onPropertyClick(property.id)} className="flex-1 flex flex-col cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={property.imageUrl} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3"><Badge variant={isAvailable ? 'default' : 'secondary'} className="bg-background/90 backdrop-blur-sm">{property.status}</Badge></div>
          {isFurnished && (<div className="absolute top-3 left-3"><Badge variant="outline" className="bg-background/90 backdrop-blur-sm">Furnished</Badge></div>)}
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="space-y-3 flex-1">
            <div>
              <h3 className="font-semibold text-lg leading-tight line-clamp-2 transition-colors group-hover:text-primary">{property.title}</h3>
              <div className="flex items-center text-muted-foreground text-sm mt-2"><MapPin className="h-4 w-4 mr-1 flex-shrink-0" /><span className="truncate">{property.address}</span></div>
            </div>
            <div className="text-2xl font-bold text-primary">£{property.price.toLocaleString()}/mo</div>
            <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{property.description}</p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="flex items-center text-sm text-muted-foreground"><Bed className="h-4 w-4 mr-1.5" />{property.beds} bed{property.beds !== 1 ? 's' : ''}</div>
              <div className="flex items-center text-sm text-muted-foreground"><Bath className="h-4 w-4 mr-1.5" />{property.baths} bath{property.baths !== 1 ? 's' : ''}</div>
              {hasParking && <div className="flex items-center text-sm"><Car className="h-4 w-4 mr-1.5" />Parking</div>}
              {hasLaundry && <div className="flex items-center text-sm"><Shirt className="h-4 w-4 mr-1.5" />Laundry</div>}
            </div>
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0">
        {isAvailable ? (
          <Dialog>
            <DialogTrigger asChild><Button className="w-full" onClick={(e) => e.stopPropagation()}>Contact Agent</Button></DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
              <DialogHeader>
                <DialogTitle>Contact Agent</DialogTitle>
                <DialogDescription>Choose your preferred method for "{property.title}".</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col space-y-3 pt-4">
                <Button asChild><a href={`tel:${property.phoneNumber}`}><Phone className="mr-2 h-4 w-4" /> Call Agent</a></Button>
                <Button asChild variant="secondary"><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><MessageSquare className="mr-2 h-4 w-4" /> Send on WhatsApp</a></Button>
              </div>
            </DialogContent>
          </Dialog>
        ) : (<Button className="w-full" disabled>Occupied</Button>)}
      </CardFooter>
    </Card>
  );
}
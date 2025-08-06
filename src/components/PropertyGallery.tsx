import React from 'react';
import { PropertyCard } from './PropertyCard';

interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  image: string;
  status: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  laundry: boolean;
  furnished: boolean;
}

interface PropertyGalleryProps {
  properties: Property[];
  onPropertyClick: (id: number) => void;
}

export function PropertyGallery({ properties, onPropertyClick }: PropertyGalleryProps) {
  if (properties.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">No properties found</h2>
          <p className="text-muted-foreground">
            Try adjusting your filters to see more results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Available Properties</h2>
        <p className="text-muted-foreground">
          {properties.length} propert{properties.length !== 1 ? 'ies' : 'y'} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onPropertyClick={onPropertyClick}
          />
        ))}
      </div>
    </section>
  );
}
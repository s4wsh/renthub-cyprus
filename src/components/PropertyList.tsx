// src/components/PropertyList.tsx
"use client";

import { PropertyCard } from './PropertyCard';
import type { Property } from '@/types';
import { useRouter } from 'next/navigation'; // <-- Import the router

type PropertyListProps = {
  properties: Property[];
};

export function PropertyList({ properties }: PropertyListProps) {
  const router = useRouter(); // <-- Get the router instance

  // THIS IS THE FIX:
  // This function now uses the router to navigate to the new page.
  const handlePropertyClick = (id: string) => {
    router.push(`/property/${id}`);
  };

  if (!properties || properties.length === 0) {
    return <p className="text-center text-muted-foreground">No properties found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard 
          key={property.id} 
          property={property}
          onPropertyClick={handlePropertyClick}
        />
      ))}
    </div>
  );
}
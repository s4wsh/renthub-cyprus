// src/components/HomePageClient.tsx
"use client";

import { useState } from "react";
import { FilterBar } from "@/components/FilterBar";
import { PropertyList } from "@/components/PropertyList";
import type { Property } from "@/types";

interface HomePageClientProps {
  initialProperties: Property[];
}

export function HomePageClient({ initialProperties }: HomePageClientProps) {
  const [properties, setProperties] = useState(initialProperties);

  const handleFilterChange = (newFilters: any) => {
    console.log("Filters updated:", newFilters);
  };

  return (
    <section className="container py-6">
      <div className="mb-6">
        <FilterBar onFilterChange={handleFilterChange} />
      </div>
      <PropertyList properties={properties} />
    </section>
  );
}
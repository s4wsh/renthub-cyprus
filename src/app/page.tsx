// src/app/page.tsx
"use client"; // <-- THIS IS THE CRITICAL FIX

import { useState } from "react";
import { FilterBar } from "@/components/FilterBar";
import { PropertyList } from "@/components/PropertyList";
import { properties } from "@/data/properties";

export default function HomePage() {
  const [currentFilters, setCurrentFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    console.log("Filters updated:", newFilters);
    setCurrentFilters(newFilters);
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
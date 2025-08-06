"use client";

import React, { useState } from 'react';
import { Header } from './Header';
import { FilterBar } from './FilterBar';
import { PropertyGallery } from './PropertyGallery';
import { PropertyDetails } from './PropertyDetails';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';

// Define the ViewType to match what Header expects
type ViewType = 'home' | 'about' | 'contact' | 'property';

// Property interface
interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  image: string;
  images: string[];
  status: string;
  description: string;
  fullDescription: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  laundry: boolean;
  furnished: boolean;
}

// Dummy data for demonstration
const DUMMY_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Luxury Modern Villa",
    address: "Paphos, Cyprus",
    price: 3500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-de10e837510d?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598288152504-263d9171e549?q=80&w=2940&auto=format&fit=crop"
    ],
    status: "Available",
    description: "Stunning villa with breathtaking sea views.",
    fullDescription: "An exquisite blend of luxury and comfort, this modern villa offers spacious living areas, a private infinity pool, and smart home technology. Located in a prime area of Paphos, it provides easy access to local amenities and a serene lifestyle.",
    bedrooms: 4,
    bathrooms: 3,
    parking: true,
    laundry: true,
    furnished: true
  },
  {
    id: 2,
    title: "Cozy City Apartment",
    address: "Limassol, Cyprus",
    price: 1500,
    image: "https://images.unsplash.com/photo-1600585152225-83e7425164f9?q=80&w=2940&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585152225-83e7425164f9?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598914681656-b088e5b41049?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616428741364-5b432a905a8f?q=80&w=2940&auto=format&fit=crop"
    ],
    status: "Occupied",
    description: "Modern apartment in the heart of the city.",
    fullDescription: "A fully furnished, stylish apartment perfect for city living. It features an open-plan kitchen, a spacious living room, and a balcony with panoramic city views. Close to shopping centers, restaurants, and public transport.",
    bedrooms: 2,
    bathrooms: 2,
    parking: false,
    laundry: true,
    furnished: true
  },
];

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Handle property click to show details - expects property ID
  const handlePropertyClick = (id: number) => {
    const property = DUMMY_PROPERTIES.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
    }
  };

  // Handle back to gallery
  const handleBackToGallery = () => {
    setSelectedProperty(null);
  };

  // Handle filter changes
  const handleFilterChange = (filters: any) => {
    // You can implement filtering logic here
    console.log('Filters changed:', filters);
  };

  // Handle navigation - expects ViewType parameter
  const handleNavigate = (view: ViewType) => {
    if (view === 'property') {
      // If navigating to property, don't change currentView, just clear selectedProperty
      setSelectedProperty(null);
    } else {
      setCurrentView(view);
      setSelectedProperty(null); // Clear any selected property when navigating
    }
  };

  const renderView = () => {
    // If a property is selected, show property details
    if (selectedProperty) {
      return <PropertyDetails property={selectedProperty} onBack={handleBackToGallery} />;
    }

    switch (currentView) {
      case 'home':
        return (
          <>
            <FilterBar onFilterChange={handleFilterChange} />
            <PropertyGallery 
              properties={DUMMY_PROPERTIES} 
              onPropertyClick={handlePropertyClick}
            />
          </>
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderView()}
      </main>
    </div>
  );
}
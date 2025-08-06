// src/components/FilterBar.tsx

"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Search, Filter, X } from 'lucide-react';

export interface PropertyFilters {
  location: string;
  bedrooms: string;
  priceRange: [number, number];
  amenities: {
    parking: boolean;
    laundry: boolean;
    furnished: boolean;
  };
}

interface FilterBarProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

const initialFilters: PropertyFilters = {
  location: '',
  bedrooms: 'any',
  priceRange: [0, 5000],
  amenities: {
    parking: false,
    laundry: false,
    furnished: false,
  },
};

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);
  const [priceRange, setPriceRange] = useState<[number, number]>(initialFilters.priceRange);

  const handleInputChange = (field: 'location' | 'bedrooms', value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenity: keyof PropertyFilters['amenities']) => {
    setFilters(prev => ({
      ...prev,
      amenities: { ...prev.amenities, [amenity]: !prev.amenities[amenity] },
    }));
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value as [number, number]);
  };

  const handleApplyFilters = () => {
    onFilterChange({ ...filters, priceRange });
  };
  
  const handleResetFilters = () => {
    setFilters(initialFilters);
    setPriceRange(initialFilters.priceRange);
    onFilterChange(initialFilters);
  };

  return (
    <div className="p-6 bg-card border rounded-lg shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">Location</label>
          <Input 
            id="location"
            placeholder="e.g., Nicosia, city center..."
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium mb-2">Bedrooms</label>
          <Select value={filters.bedrooms} onValueChange={(val) => handleInputChange('bedrooms', val)}>
            <SelectTrigger id="bedrooms"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium mb-2">Price (£{priceRange[0]} - £{priceRange[1]})</label>
          <Slider
            min={0}
            max={5000}
            step={100}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="pt-2"
          />
        </div>

        <div>
           <label className="block text-sm font-medium mb-2 opacity-0 md:hidden lg:block">Actions</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start"><Filter className="mr-2 h-4 w-4" /> More Filters</Button>
              </PopoverTrigger>
              {/* THIS IS THE CORRECTED LINE */}
              <PopoverContent className="w-64" align="start" sideOffset={4}>
                <div className="space-y-4">
                  <h4 className="font-medium leading-none">Amenities</h4>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="parking" checked={filters.amenities.parking} onCheckedChange={() => handleAmenityChange('parking')} />
                    <label htmlFor="parking" className="text-sm font-medium leading-none">Parking</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="laundry" checked={filters.amenities.laundry} onCheckedChange={() => handleAmenityChange('laundry')} />
                    <label htmlFor="laundry" className="text-sm font-medium leading-none">In-Unit Laundry</label>
                  </div>
                   <div className="flex items-center space-x-2">
                    <Checkbox id="furnished" checked={filters.amenities.furnished} onCheckedChange={() => handleAmenityChange('furnished')} />
                    <label htmlFor="furnished" className="text-sm font-medium leading-none">Furnished</label>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-center justify-end gap-4">
          <Button variant="link" size="sm" onClick={handleResetFilters} className="order-last sm:order-first">
            <X className="mr-1 h-4 w-4"/> Reset Filters
          </Button>
          <Button onClick={handleApplyFilters} className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" />Search Properties
          </Button>
      </div>
    </div>
  );
}
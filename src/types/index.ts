// src/types/index.ts
export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'Available' | 'Sold' | 'Pending';
  type: 'Apartment' | 'Villa' | 'House';
  amenities: string[];
  imageUrl: string;
  phoneNumber: string;
};
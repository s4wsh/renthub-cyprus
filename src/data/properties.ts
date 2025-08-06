// src/data/properties.ts
import type { Property } from '@/types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in City Center',
    description: 'A beautifully renovated apartment with stunning city views, perfect for young professionals.',
    price: 350000,
    location: 'Nicosia, Cyprus',
    address: '123 Ledra Street, Nicosia, 1011',
    beds: 2,
    baths: 2,
    sqft: 120,
    status: 'Available',
    type: 'Apartment',
    amenities: ['Air Conditioning', 'Parking', 'Elevator', 'Furnished'],
    // CORRECTED URL:
    imageUrl: 'https://placeholder.com/400x300/A9A9A9/FFFFFF?text=RentHub+Property+1',
    phoneNumber: '+35799123456',
  },
  {
    id: '2',
    title: 'Luxury Villa with Sea View',
    description: 'An expansive villa with a private pool and unobstructed views of the Mediterranean Sea.',
    price: 1200000,
    location: 'Limassol, Cyprus',
    address: '456 Ocean View Drive, Limassol, 4533',
    beds: 4,
    baths: 3,
    sqft: 350,
    status: 'Sold',
    type: 'Villa',
    amenities: ['Private Pool', 'Sea View', 'Garden', 'Security'],
    // CORRECTED URL:
    imageUrl: 'https://placeholder.com/400x300/A9A9A9/FFFFFF?text=RentHub+Property+2',
    phoneNumber: '+35799234567',
  },
  {
    id: '3',
    title: 'Cozy Stone House in Village',
    description: 'A charming and traditional stone house located in a quiet village, full of character.',
    price: 275000,
    location: 'Paphos, Cyprus',
    address: '789 Village Lane, Paphos, 8046',
    beds: 3,
    baths: 2,
    sqft: 180,
    status: 'Available',
    type: 'House',
    amenities: ['Fireplace', 'Garden', 'Quiet Location', 'Parking', 'Laundry'],
    // CORRECTED URL:
    imageUrl: 'https://placeholder.com/400x300/A9A9A9/FFFFFF?text=RentHub+Property+3',
    phoneNumber: '+35799345678',
  },
];
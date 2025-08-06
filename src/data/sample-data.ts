// src/data/sample-data.ts

export interface Property {
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
  phoneNumber: string; // Added for the contact button
}

export const sampleProperties: Property[] = [
    {
        id: 1,
        title: 'Modern 2-Bedroom Apartment in City Center',
        address: '123 Main St, Nicosia',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
        status: 'Available',
        description: 'A stunning and spacious apartment with great views, perfect for professionals. This property boasts an open-plan living area, state-of-the-art kitchen, and a balcony overlooking the city.',
        bedrooms: 2,
        bathrooms: 2,
        parking: true,
        laundry: true,
        furnished: true,
        phoneNumber: '+35799123456',
    },
    {
        id: 2,
        title: 'Cozy Family Villa with Private Pool',
        address: '456 Seaside Rd, Limassol',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
        status: 'Available',
        description: 'Beautiful villa with a large garden and swimming pool, ideal for families.',
        bedrooms: 4,
        bathrooms: 3,
        parking: true,
        laundry: false,
        furnished: true,
        phoneNumber: '+35799789012',
    },
    {
        id: 3,
        title: 'Stylish Studio near the University',
        address: '789 University Ave, Paphos',
        price: 850,
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
        status: 'Occupied',
        description: 'A compact and modern studio, fully furnished and ready to move in.',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        laundry: true,
        furnished: true,
        phoneNumber: '+35799345678',
    },
];
// src/components/PropertyDetails.tsx
import React from 'react';

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

interface PropertyDetailsProps {
  property: Property;
  onBack: () => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <button 
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        ← Back to Gallery
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="grid grid-cols-3 gap-2">
              {property.images.slice(1).map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-20 object-cover rounded"
                />
              ))}
            </div>
          </div>
          
          {/* Property Info */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                property.status === 'Available' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {property.status}
              </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-2">{property.address}</p>
            <p className="text-3xl font-bold text-blue-600 mb-6">${property.price}/month</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <span className="font-semibold">Bedrooms:</span>
                <span className="ml-2">{property.bedrooms}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Bathrooms:</span>
                <span className="ml-2">{property.bathrooms}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Parking:</span>
                <span className="ml-2">{property.parking ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Laundry:</span>
                <span className="ml-2">{property.laundry ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex items-center col-span-2">
                <span className="font-semibold">Furnished:</span>
                <span className="ml-2">{property.furnished ? 'Yes' : 'No'}</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.fullDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
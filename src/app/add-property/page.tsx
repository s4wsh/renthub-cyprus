// src/app/add-property/page.tsx

// THE FIX IS HERE: We import the form component AND its value type.
import { PropertyForm, PropertyFormValues } from "@/components/PropertyForm";
import { addProperty } from "@/actions/propertyActions";
import type { Property } from "@/types";

export default function AddPropertyPage() {

  // We use the imported type to ensure the function signature is a perfect match.
  async function handleFormSubmit(values: PropertyFormValues) {
    "use server";
    
    // This part remains the same.
    const fullPropertyData: Omit<Property, 'id'> = {
      ...values,
      status: 'Available',
      type: 'Apartment',
      amenities: ['Air Conditioning', 'Parking'],
    };
    
    await addProperty(fullPropertyData);
  }

  return (
    <main className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Add a New Property</h1>
        <p className="text-muted-foreground">Fill out the details below to list a new property.</p>
      </div>
      <PropertyForm onSubmit={handleFormSubmit} />
    </main>
  );
}
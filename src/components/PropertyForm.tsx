// src/components/PropertyForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(10, "Description is too short."),
  price: z.coerce.number().min(1, "Price is required."),
  location: z.string().min(3, "Location is required."),
  address: z.string().min(5, "Address is required."),
  beds: z.coerce.number().min(1, "Bedrooms are required."),
  baths: z.coerce.number().min(1, "Bathrooms are required."),
  sqft: z.coerce.number().min(1, "Square footage is required."),
  imageUrl: z.string().url("Please enter a valid image URL."),
  phoneNumber: z.string().min(5, "Phone number is required."),
});

// THE FIX IS HERE: We create and EXPORT this type so other files can use it.
export type PropertyFormValues = z.infer<typeof formSchema>;

interface PropertyFormProps {
  onSubmit: (values: PropertyFormValues) => void;
}

export function PropertyForm({ onSubmit }: PropertyFormProps) {
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      location: "",
      address: "",
      beds: 1,
      baths: 1,
      sqft: 100,
      imageUrl: "",
      phoneNumber: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* The form fields below are correct and do not need to be changed. */}
        <FormField control={form.control} name="title" render={({ field }) => ( <FormItem><FormLabel>Property Title</FormLabel><FormControl><Input placeholder="e.g., Modern Apartment in City Center" {...field} /></FormControl><FormMessage /></FormItem> )} />
        <FormField control={form.control} name="description" render={({ field }) => ( <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="A detailed description of the property..." {...field} /></FormControl><FormMessage /></FormItem> )} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField control={form.control} name="price" render={({ field }) => (<FormItem><FormLabel>Price (£)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="location" render={({ field }) => (<FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g., Nicosia, Cyprus" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="address" render={({ field }) => (<FormItem><FormLabel>Full Address</FormLabel><FormControl><Input placeholder="e.g., 123 Ledra Street, Nicosia, 1011" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="beds" render={({ field }) => (<FormItem><FormLabel>Bedrooms</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="baths" render={({ field }) => (<FormItem><FormLabel>Bathrooms</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="sqft" render={({ field }) => (<FormItem><FormLabel>Square Feet</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="imageUrl" render={({ field }) => (<FormItem><FormLabel>Image URL</FormLabel><FormControl><Input placeholder="https://example.com/image.jpg" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="phoneNumber" render={({ field }) => (<FormItem><FormLabel>Contact Phone</FormLabel><FormControl><Input placeholder="+357..." {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <Button type="submit" size="lg">Add Property</Button>
      </form>
    </Form>
  )
}
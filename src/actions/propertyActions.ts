// src/actions/propertyActions.ts
"use server";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import type { Property } from "@/types";

export async function getProperties(): Promise<Property[]> {
  try {
    // Get a reference to the 'properties' collection in Firestore
    const propertiesCollection = collection(db, "properties");
    
    // Fetch all documents from the collection
    const querySnapshot = await getDocs(propertiesCollection);

    // Map over the documents, format them, and return as an array
    const properties = querySnapshot.docs.map(doc => {
      // Combine the document data and its unique ID
      return {
        id: doc.id,
        ...doc.data(),
      } as Property;
    });

    return properties;

  } catch (error) {
    console.error("Error fetching properties from Firestore:", error);
    return []; // Return an empty array in case of an error
  }
}
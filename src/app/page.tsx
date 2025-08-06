// src/app/page.tsx

import { getProperties } from "@/actions/propertyActions";
import { HomePageClient } from "@/components/HomePageClient";

export default async function HomePage() {
  const properties = await getProperties();
  return <HomePageClient initialProperties={properties} />;
}
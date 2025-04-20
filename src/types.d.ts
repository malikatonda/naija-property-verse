
import 'react';

declare module 'react' {
  // Add types for JSX if needed
}

// Define PropertyType for PropertyGrid and PropertyCard
interface PropertyType {
  id: string;
  title: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  price: number;
  images?: string[];
  imageUrl?: string;
  bedrooms: number;
  bathrooms: number;
  size: number | string;
  featured?: boolean;
  type?: 'For Sale' | 'For Rent';
  rentOrSale?: "rent" | "sale";
  hasVerifiedTitle?: boolean;
  powerBackup?: {
    hasGenerator: boolean;
    hasSolar: boolean;
  };
  security?: {
    hasGuard: boolean;
    hasCctv: boolean;
    hasAlarm: boolean;
  };
  floodRisk?: "low" | "medium" | "high";
}

// Define PropertyCardProps for PropertyCard component
interface PropertyCardProps {
  property: PropertyType;
}

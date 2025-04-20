
import 'react';

declare module 'react' {
  // Add types for JSX if needed
}

// Define PropertyType for PropertyGrid and PropertyCard
interface PropertyType {
  id: string;
  title: string;
  location: string;
  price: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  size: string;
  featured?: boolean;
  type: 'For Sale' | 'For Rent';
}

// Define PropertyCardProps for PropertyCard component
interface PropertyCardProps {
  property: PropertyType;
}

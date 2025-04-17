
import { Link } from "react-router-dom";
import { BadgeCheck, Bed, Bath, Square, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface PropertyType {
  id: string;
  title: string;
  price: number;
  rentOrSale: "rent" | "sale";
  location: {
    address: string;
    city: string;
    state: string;
  };
  bedrooms: number;
  bathrooms: number;
  size: number;
  imageUrl: string;
  hasVerifiedTitle: boolean;
  powerBackup: {
    hasGenerator: boolean;
    hasSolar: boolean;
  };
  security: {
    hasGuard: boolean;
    hasCctv: boolean;
    hasAlarm: boolean;
  };
  floodRisk: "low" | "medium" | "high";
}

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    id,
    title,
    price,
    rentOrSale,
    location,
    bedrooms,
    bathrooms,
    size,
    imageUrl,
    hasVerifiedTitle,
    powerBackup,
    security,
    floodRisk
  } = property;

  const floodRiskColor = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-2 right-2">
          <Badge className={rentOrSale === "rent" ? "bg-blue-500" : "bg-naija-green"}>
            {rentOrSale === "rent" ? "For Rent" : "For Sale"}
          </Badge>
        </div>
        {hasVerifiedTitle && (
          <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-md flex items-center text-xs font-medium text-naija-green">
            <BadgeCheck className="w-3 h-3 mr-1" />
            Verified Title
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-2">{location.address}, {location.city}, {location.state}</p>
          <p className="text-xl font-bold text-naija-green">
            ₦{price.toLocaleString()}
            {rentOrSale === "rent" && <span className="text-sm font-normal text-gray-500">/month</span>}
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms} {bedrooms === 1 ? "bed" : "beds"}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms} {bathrooms === 1 ? "bath" : "baths"}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{size}m²</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {(powerBackup.hasGenerator || powerBackup.hasSolar) && (
            <div className="flex items-center text-xs">
              <Zap className="w-3 h-3 mr-1 text-naija-gold" />
              <span>{powerBackup.hasSolar ? "Solar" : "Generator"}</span>
            </div>
          )}
          {(security.hasGuard || security.hasCctv || security.hasAlarm) && (
            <div className="flex items-center text-xs">
              <Shield className="w-3 h-3 mr-1 text-naija-green" />
              <span>Security</span>
            </div>
          )}
          <div className={`flex items-center text-xs rounded px-1 ${floodRiskColor[floodRisk]}`}>
            Flood Risk: {floodRisk.charAt(0).toUpperCase() + floodRisk.slice(1)}
          </div>
        </div>
        
        <div className="mt-auto">
          <Link to={`/property/${id}`}>
            <Button className="w-full bg-naija-green hover:bg-naija-green/90">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

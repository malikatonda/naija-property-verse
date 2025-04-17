
import { useState } from "react";
import { Filter, Search, ChevronDown, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import PropertyCard, { PropertyType } from "./PropertyCard";

// Mock property data
const mockProperties: PropertyType[] = [
  {
    id: "p1",
    title: "3 Bedroom Apartment with Pool",
    price: 75000000,
    rentOrSale: "sale",
    location: {
      address: "Victoria Island",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 3,
    bathrooms: 3,
    size: 180,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: true,
    },
    floodRisk: "low",
  },
  {
    id: "p2",
    title: "2 Bedroom Apartment for Rent",
    price: 1500000,
    rentOrSale: "rent",
    location: {
      address: "Ikeja GRA",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 2,
    bathrooms: 2,
    size: 120,
    imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: false,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: false,
    },
    floodRisk: "low",
  },
  {
    id: "p3",
    title: "4 Bedroom Detached Duplex",
    price: 150000000,
    rentOrSale: "sale",
    location: {
      address: "Banana Island",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 4,
    bathrooms: 5,
    size: 350,
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: true,
    },
    floodRisk: "low",
  },
  {
    id: "p4",
    title: "3 Bedroom Bungalow",
    price: 45000000,
    rentOrSale: "sale",
    location: {
      address: "Magodo",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 3,
    bathrooms: 2,
    size: 200,
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: false,
    powerBackup: {
      hasGenerator: true,
      hasSolar: false,
    },
    security: {
      hasGuard: false,
      hasCctv: true,
      hasAlarm: false,
    },
    floodRisk: "medium",
  },
  {
    id: "p5",
    title: "1 Bedroom Studio Apartment",
    price: 800000,
    rentOrSale: "rent",
    location: {
      address: "Yaba",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 1,
    bathrooms: 1,
    size: 60,
    imageUrl: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: false,
    powerBackup: {
      hasGenerator: true,
      hasSolar: false,
    },
    security: {
      hasGuard: true,
      hasCctv: false,
      hasAlarm: false,
    },
    floodRisk: "medium",
  },
  {
    id: "p6",
    title: "Luxury 5 Bedroom Villa",
    price: 250000000,
    rentOrSale: "sale",
    location: {
      address: "Ikoyi",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 5,
    bathrooms: 6,
    size: 450,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: true,
    },
    floodRisk: "low",
  },
  {
    id: "p7",
    title: "Office Space for Rent",
    price: 2500000,
    rentOrSale: "rent",
    location: {
      address: "Victoria Island",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 0,
    bathrooms: 2,
    size: 200,
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: true,
    },
    floodRisk: "low",
  },
  {
    id: "p8",
    title: "3 Bedroom Serviced Apartment",
    price: 3500000,
    rentOrSale: "rent",
    location: {
      address: "Lekki Phase 1",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 3,
    bathrooms: 3,
    size: 150,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: false,
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: false,
    },
    floodRisk: "low",
  },
];

interface PropertyGridProps {
  title?: string;
  defaultPropertyType?: "buy" | "rent" | "all";
}

const PropertyGrid = ({ title = "Featured Properties", defaultPropertyType = "all" }: PropertyGridProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [propertyType, setPropertyType] = useState<"buy" | "rent" | "all">(defaultPropertyType);
  const [sortOption, setSortOption] = useState("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000000]);
  const [bedroomFilter, setBedroomFilter] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<{
    verifiedTitle: boolean;
    solar: boolean;
    generator: boolean;
    security: boolean;
    lowFloodRisk: boolean;
  }>({
    verifiedTitle: false,
    solar: false,
    generator: false,
    security: false,
    lowFloodRisk: false,
  });

  const filteredProperties = mockProperties.filter((property) => {
    // Filter by property type (buy/rent/all)
    if (propertyType !== "all") {
      if (propertyType === "buy" && property.rentOrSale !== "sale") return false;
      if (propertyType === "rent" && property.rentOrSale !== "rent") return false;
    }

    // Filter by search value
    if (searchValue) {
      const searchLower = searchValue.toLowerCase();
      const matchesSearch =
        property.title.toLowerCase().includes(searchLower) ||
        property.location.address.toLowerCase().includes(searchLower) ||
        property.location.city.toLowerCase().includes(searchLower) ||
        property.location.state.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;
    }

    // Filter by price
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false;

    // Filter by bedrooms
    if (bedroomFilter !== null && property.bedrooms !== bedroomFilter) return false;

    // Apply active filters
    if (activeFilters.verifiedTitle && !property.hasVerifiedTitle) return false;
    if (activeFilters.solar && !property.powerBackup.hasSolar) return false;
    if (activeFilters.generator && !property.powerBackup.hasGenerator) return false;
    if (activeFilters.security && !(property.security.hasGuard || property.security.hasCctv)) return false;
    if (activeFilters.lowFloodRisk && property.floodRisk !== "low") return false;

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
      default:
        // In a real app, we would use a date field
        return 0;
    }
  });

  const toggleFilter = (filterName: keyof typeof activeFilters) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const clearFilters = () => {
    setPriceRange([0, 300000000]);
    setBedroomFilter(null);
    setActiveFilters({
      verifiedTitle: false,
      solar: false,
      generator: false,
      security: false,
      lowFloodRisk: false,
    });
  };

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500">
            {sortedProperties.length} properties available
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Property Type Filter */}
          <div className="flex rounded-md overflow-hidden border">
            <button
              className={`px-4 py-2 text-sm ${
                propertyType === "all"
                  ? "bg-naija-green text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setPropertyType("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                propertyType === "buy"
                  ? "bg-naija-green text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setPropertyType("buy")}
            >
              Buy
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                propertyType === "rent"
                  ? "bg-naija-green text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setPropertyType("rent")}
            >
              Rent
            </button>
          </div>

          {/* Sort Options */}
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
                <SheetDescription>
                  Refine your search with these filters
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-2">Price Range (₦)</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span>₦{priceRange[0].toLocaleString()}</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
                  </div>
                  <Slider
                    defaultValue={[0, 300000000]}
                    max={300000000}
                    step={1000000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mb-6"
                  />
                </div>

                {/* Bedrooms */}
                <div>
                  <h3 className="font-medium mb-3">Bedrooms</h3>
                  <div className="flex flex-wrap gap-2">
                    {[null, 1, 2, 3, 4, 5].map((num) => (
                      <Button
                        key={num === null ? "any" : num}
                        variant={bedroomFilter === num ? "default" : "outline"}
                        className={bedroomFilter === num ? "bg-naija-green" : ""}
                        size="sm"
                        onClick={() => setBedroomFilter(num)}
                      >
                        {num === null ? "Any" : num === 5 ? "5+" : num}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Nigerian-specific Filters */}
                <div className="space-y-4">
                  <h3 className="font-medium">Property Features</h3>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="verified-title" className="cursor-pointer">
                      Verified Title
                    </Label>
                    <Switch
                      id="verified-title"
                      checked={activeFilters.verifiedTitle}
                      onCheckedChange={() => toggleFilter("verifiedTitle")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="solar" className="cursor-pointer">
                      Solar Power
                    </Label>
                    <Switch
                      id="solar"
                      checked={activeFilters.solar}
                      onCheckedChange={() => toggleFilter("solar")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="generator" className="cursor-pointer">
                      Generator
                    </Label>
                    <Switch
                      id="generator"
                      checked={activeFilters.generator}
                      onCheckedChange={() => toggleFilter("generator")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="security" className="cursor-pointer">
                      Security Features
                    </Label>
                    <Switch
                      id="security"
                      checked={activeFilters.security}
                      onCheckedChange={() => toggleFilter("security")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="low-flood" className="cursor-pointer">
                      Low Flood Risk
                    </Label>
                    <Switch
                      id="low-flood"
                      checked={activeFilters.lowFloodRisk}
                      onCheckedChange={() => toggleFilter("lowFloodRisk")}
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <SheetClose asChild>
                    <Button className="flex-1 bg-naija-green hover:bg-naija-green/90">Apply Filters</Button>
                  </SheetClose>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={clearFilters}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by location, property name..."
              className="pl-9 w-full md:w-[250px]"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchValue("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(activeFilters.verifiedTitle ||
        activeFilters.solar ||
        activeFilters.generator ||
        activeFilters.security ||
        activeFilters.lowFloodRisk ||
        bedroomFilter !== null) && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500">Active filters:</span>
          {bedroomFilter !== null && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              {bedroomFilter} Bedroom
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => setBedroomFilter(null)}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.verifiedTitle && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Verified Title
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => toggleFilter("verifiedTitle")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.solar && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Solar Power
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => toggleFilter("solar")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.generator && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Generator
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => toggleFilter("generator")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.security && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Security Features
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => toggleFilter("security")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {activeFilters.lowFloodRisk && (
            <Badge variant="outline" className="pl-2 pr-1 py-1 flex items-center gap-1">
              Low Flood Risk
              <button
                className="ml-1 hover:bg-gray-100 rounded-full p-1"
                onClick={() => toggleFilter("lowFloodRisk")}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={clearFilters}
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Properties Grid */}
      {sortedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-medium mb-2">No properties found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your filters or search criteria
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;

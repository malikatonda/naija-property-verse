
import { ArrowRight, Search, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [propertyType, setPropertyType] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("");

  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1623298063683-76c776c439a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Nigerian real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-naija-dark/80 to-naija-dark/40" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Home in Nigeria
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Discover properties for sale and rent across Nigeria with advanced technology 
            and secure blockchain transactions. Perfect for local buyers and diaspora investors.
          </p>

          {/* Search Box */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex mb-4 border-b">
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  propertyType === "buy"
                    ? "text-naija-green border-b-2 border-naija-green"
                    : "text-gray-500"
                }`}
                onClick={() => setPropertyType("buy")}
              >
                Buy
              </button>
              <button
                className={`px-4 py-2 font-medium text-sm ${
                  propertyType === "rent"
                    ? "text-naija-green border-b-2 border-naija-green"
                    : "text-gray-500"
                }`}
                onClick={() => setPropertyType("rent")}
              >
                Rent
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Lagos, Abuja, Port Harcourt..."
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-naija-green"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button className="bg-naija-green hover:bg-naija-green/90 text-white px-6">
                <Search className="w-5 h-5 mr-2" />
                Find Properties
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/map" className="flex items-center text-white hover:text-naija-gold transition">
              <span>Explore Lagos</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="/map" className="flex items-center text-white hover:text-naija-gold transition">
              <span>Explore Abuja</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a href="/map" className="flex items-center text-white hover:text-naija-gold transition">
              <span>Explore Port Harcourt</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

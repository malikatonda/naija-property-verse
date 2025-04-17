
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Zap, 
  Shield, 
  BadgeCheck, 
  Calendar,
  Phone,
  Mail,
  Share2,
  Heart,
  AlertTriangle
} from "lucide-react";
import MapComponent from "../components/MapComponent";
import BlockchainComponent from "../components/BlockchainComponent";
import AIRecommendations from "../components/AIRecommendations";

// Mock property details (in a real app, this would come from an API)
const propertyDetails = {
  id: "p1",
  title: "3 Bedroom Luxury Apartment with Pool",
  price: 75000000,
  rentOrSale: "sale",
  location: {
    address: "35B Adeola Hopewell Street",
    area: "Victoria Island",
    city: "Lagos",
    state: "Lagos",
    coordinates: [3.4245, 6.4281], // [longitude, latitude]
  },
  description: "This luxurious 3-bedroom apartment is located in the heart of Victoria Island, Lagos. The property features high-end finishes throughout, including marble flooring, custom cabinetry, and state-of-the-art appliances. The master bedroom includes an en-suite bathroom with a jacuzzi tub and separate shower. The apartment complex offers amenities including a swimming pool, fitness center, 24/7 security, and backup power.",
  features: [
    "Swimming pool",
    "Fitness center",
    "Elevator",
    "Balcony",
    "Air conditioning",
    "Marble flooring",
    "Custom cabinetry",
    "High ceilings",
    "Open floor plan",
    "Walk-in closets"
  ],
  bedrooms: 3,
  bathrooms: 3,
  size: 180, // square meters
  images: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  ],
  hasVerifiedTitle: true,
  powerBackup: {
    hasGenerator: true,
    hasSolar: true,
    details: "24/7 backup power with 100KVA generator and solar inverter system."
  },
  security: {
    hasGuard: true,
    hasCctv: true,
    hasAlarm: true,
    details: "24-hour security personnel, CCTV surveillance, and modern alarm system."
  },
  floodRisk: "low",
  yearBuilt: 2020,
  agent: {
    name: "James Okafor",
    company: "Lagos Luxury Realty",
    phone: "+234 801 234 5678",
    email: "james@lagosluxuryrealty.com",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  }
};

const PropertyDetails = () => {
  // In a real app, we would fetch property details based on the ID
  const { id } = useParams();
  
  // Main image state (we'll use the first image as default)
  const [mainImage, setMainImage] = useState(propertyDetails.images[0]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Property Header */}
        <div className="bg-white py-6 border-b">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="h-4 w-4 text-naija-green" />
                  <span>{propertyDetails.location.area}, {propertyDetails.location.city}, {propertyDetails.location.state}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">{propertyDetails.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={propertyDetails.rentOrSale === "rent" ? "bg-blue-500" : "bg-naija-green"}>
                    {propertyDetails.rentOrSale === "rent" ? "For Rent" : "For Sale"}
                  </Badge>
                  {propertyDetails.hasVerifiedTitle && (
                    <Badge variant="outline" className="flex items-center gap-1 text-naija-green border-naija-green">
                      <BadgeCheck className="h-3 w-3" />
                      Verified Title
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-3xl font-bold text-naija-green">
                  ₦{propertyDetails.price.toLocaleString()}
                  {propertyDetails.rentOrSale === "rent" && <span className="text-sm font-normal text-gray-500">/month</span>}
                </p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="container px-4 mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <img 
                  src={mainImage} 
                  alt={propertyDetails.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {propertyDetails.images.slice(1, 5).map((image, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden h-[190px] cursor-pointer ${index === 3 ? 'relative' : ''}`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Property view ${index + 2}`}
                    className="w-full h-full object-cover hover:opacity-90 transition"
                  />
                  {index === 3 && propertyDetails.images.length > 5 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        +{propertyDetails.images.length - 5} more
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container px-4 mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-500" />
                  <span>
                    <strong>{propertyDetails.bedrooms}</strong> {propertyDetails.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                  </span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-500" />
                  <span>
                    <strong>{propertyDetails.bathrooms}</strong> {propertyDetails.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}
                  </span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-gray-500" />
                  <span>
                    <strong>{propertyDetails.size}</strong> m²
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>
                    Built in <strong>{propertyDetails.yearBuilt}</strong>
                  </span>
                </div>
              </div>
              
              {/* Nigeria-specific Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className={`p-4 rounded-lg border ${propertyDetails.powerBackup.hasSolar ? 'bg-green-50 border-green-100' : 'bg-gray-50'}`}>
                  <div className="flex items-start">
                    <Zap className={`w-5 h-5 mr-2 ${propertyDetails.powerBackup.hasSolar ? 'text-green-500' : 'text-gray-400'}`} />
                    <div>
                      <h3 className="font-medium">Power Backup</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {propertyDetails.powerBackup.hasSolar && propertyDetails.powerBackup.hasGenerator
                          ? 'Solar + Generator'
                          : propertyDetails.powerBackup.hasSolar
                          ? 'Solar Available'
                          : propertyDetails.powerBackup.hasGenerator
                          ? 'Generator Only'
                          : 'No backup power'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`p-4 rounded-lg border ${
                  propertyDetails.security.hasGuard && propertyDetails.security.hasCctv
                    ? 'bg-blue-50 border-blue-100'
                    : 'bg-gray-50'
                }`}>
                  <div className="flex items-start">
                    <Shield className={`w-5 h-5 mr-2 ${
                      propertyDetails.security.hasGuard && propertyDetails.security.hasCctv
                        ? 'text-blue-500'
                        : 'text-gray-400'
                    }`} />
                    <div>
                      <h3 className="font-medium">Security</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {(propertyDetails.security.hasGuard && propertyDetails.security.hasCctv && propertyDetails.security.hasAlarm)
                          ? 'Premium Security'
                          : (propertyDetails.security.hasGuard && propertyDetails.security.hasCctv)
                          ? 'Guard + CCTV'
                          : propertyDetails.security.hasGuard
                          ? 'Security Guard'
                          : 'Basic Security'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`p-4 rounded-lg border ${
                  propertyDetails.floodRisk === 'low'
                    ? 'bg-green-50 border-green-100'
                    : propertyDetails.floodRisk === 'medium'
                    ? 'bg-yellow-50 border-yellow-100'
                    : 'bg-red-50 border-red-100'
                }`}>
                  <div className="flex items-start">
                    <AlertTriangle className={`w-5 h-5 mr-2 ${
                      propertyDetails.floodRisk === 'low'
                        ? 'text-green-500'
                        : propertyDetails.floodRisk === 'medium'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`} />
                    <div>
                      <h3 className="font-medium">Flood Risk</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {propertyDetails.floodRisk.charAt(0).toUpperCase() + propertyDetails.floodRisk.slice(1)} Risk Area
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tabs for Details */}
              <Tabs defaultValue="overview" className="mt-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="map">Location</TabsTrigger>
                  <TabsTrigger value="blockchain">Transaction</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {propertyDetails.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Power Details</h4>
                      <p className="text-sm text-gray-600">
                        {propertyDetails.powerBackup.details}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Security Details</h4>
                      <p className="text-sm text-gray-600">
                        {propertyDetails.security.details}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-naija-green rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="map" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Property Location</h3>
                  <div className="mb-4">
                    <p className="text-gray-700">
                      {propertyDetails.location.address}, {propertyDetails.location.area}, {propertyDetails.location.city}, {propertyDetails.location.state}
                    </p>
                  </div>
                  <MapComponent />
                </TabsContent>
                
                <TabsContent value="blockchain" className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Blockchain Transactions</h3>
                  <p className="text-gray-700 mb-6">
                    Secure your property transaction using blockchain technology. Our smart contracts provide escrow functionality and title verification.
                  </p>
                  <BlockchainComponent />
                </TabsContent>
              </Tabs>
              
              {/* AI Recommendations */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Similar Properties & AI Assistant</h3>
                <AIRecommendations />
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Agent Information */}
              <div className="bg-white p-6 rounded-lg border mb-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={propertyDetails.agent.photo} 
                    alt={propertyDetails.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-medium">{propertyDetails.agent.name}</h3>
                    <p className="text-sm text-gray-500">{propertyDetails.agent.company}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-naija-green hover:bg-naija-green/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Message Agent
                  </Button>
                </div>
              </div>
              
              {/* Schedule a Visit */}
              <div className="bg-white p-6 rounded-lg border mb-6">
                <h3 className="font-medium mb-4">Schedule a Visit</h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border rounded-md"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Preferred Time</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">Schedule Viewing</Button>
              </div>
              
              {/* Additional Information */}
              <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                <h3 className="font-medium mb-3">Property Details</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Property ID:</span>
                    <span className="font-medium">NPV-{propertyDetails.id}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">Apartment</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium">{propertyDetails.rentOrSale === "rent" ? "For Rent" : "For Sale"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Year Built:</span>
                    <span className="font-medium">{propertyDetails.yearBuilt}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Title:</span>
                    <span className="font-medium">{propertyDetails.hasVerifiedTitle ? "Verified" : "Not Verified"}</span>
                  </li>
                </ul>
              </div>
              
              {/* Mortgage Calculator */}
              {propertyDetails.rentOrSale === "sale" && (
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="font-medium mb-4">Mortgage Calculator</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Down Payment (%)</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border rounded-md"
                        defaultValue={20}
                        min={0}
                        max={100}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Interest Rate (%)</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border rounded-md"
                        defaultValue={5.5}
                        step={0.1}
                        min={0}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Loan Term (years)</label>
                      <input 
                        type="number" 
                        className="w-full p-2 border rounded-md"
                        defaultValue={25}
                        min={1}
                      />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Calculate Payment</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;

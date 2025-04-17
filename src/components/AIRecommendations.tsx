
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Sparkles, MessageSquare, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react';
import PropertyCard, { PropertyType } from './PropertyCard';

// Mock AI property recommendations
const mockRecommendations: PropertyType[] = [
  {
    id: "prop1",
    title: "Modern 3 Bedroom Apartment with Pool",
    price: 65000000,
    rentOrSale: "sale",
    location: {
      address: "Lekki Phase 1",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 3,
    bathrooms: 2,
    size: 120,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: false
    },
    floodRisk: "low"
  },
  {
    id: "prop2",
    title: "Luxury 4 Bedroom Villa with Garden",
    price: 120000000,
    rentOrSale: "sale",
    location: {
      address: "Banana Island",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 4,
    bathrooms: 4,
    size: 250,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: true,
    powerBackup: {
      hasGenerator: true,
      hasSolar: true
    },
    security: {
      hasGuard: true,
      hasCctv: true,
      hasAlarm: true
    },
    floodRisk: "low"
  },
  {
    id: "prop3",
    title: "Affordable 2 Bedroom Flat",
    price: 400000,
    rentOrSale: "rent",
    location: {
      address: "Yaba",
      city: "Lagos",
      state: "Lagos",
    },
    bedrooms: 2,
    bathrooms: 1,
    size: 80,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    hasVerifiedTitle: false,
    powerBackup: {
      hasGenerator: true,
      hasSolar: false
    },
    security: {
      hasGuard: true,
      hasCctv: false,
      hasAlarm: false
    },
    floodRisk: "medium"
  }
];

// Mock AI-generated property description
const generatePropertyDescription = (property: PropertyType) => {
  const descriptions = [
    `This ${property.bedrooms}-bedroom ${property.rentOrSale === "rent" ? "rental" : ""} property in ${property.location.address}, ${property.location.city} offers modern living with ${property.bathrooms} bathrooms and ${property.size}m² of space. ${property.powerBackup.hasSolar ? "Equipped with solar power" : "Featuring generator backup"} and ${property.security.hasCctv ? "CCTV security" : "security guard service"}.`,
    
    `Stunning ${property.bedrooms}-bedroom home located in the heart of ${property.location.address}. This ${property.rentOrSale === "rent" ? "rental" : "for-sale"} property spans ${property.size}m² and includes ${property.bathrooms} bathrooms. ${property.hasVerifiedTitle ? "Comes with verified property title" : "Title verification in process"}.`,
    
    `Discover this beautiful ${property.bedrooms}-bedroom ${property.rentOrSale === "rent" ? "apartment for rent" : "property for sale"} in ${property.location.address}, perfect for families looking for comfort and security. Features include ${property.powerBackup.hasSolar ? "eco-friendly solar power" : "reliable generator backup"} and ${property.security.hasGuard ? "24/7 security personnel" : "modern security systems"}.`
  ];
  
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

// Mock chatbot questions and responses
const mockChatbot = [
  {
    question: "I'm looking for a property in Lagos under ₦50 million",
    answer: "I've found several options in Lagos under ₦50 million. Would you prefer to be in Mainland areas like Yaba and Surulere where prices are more affordable, or Island areas like Lekki where you might get smaller properties within that budget?"
  },
  {
    question: "What areas in Abuja have the best security?",
    answer: "In Abuja, Maitama, Asokoro, and Wuse II are known for excellent security. These areas feature gated communities, regular security patrols, and modern security infrastructure. Many properties there include 24/7 guards and CCTV systems."
  },
  {
    question: "I need constant electricity for my work from home setup",
    answer: "For reliable electricity, I recommend looking at properties with dual power backup systems (both generator and solar). Areas like Lekki Phase 1, Victoria Island, and parts of Ikoyi in Lagos have better power infrastructure. In Abuja, consider Maitama or Asokoro properties with inverter systems."
  },
  {
    question: "Which areas have low flood risk in Lagos?",
    answer: "For minimal flood risk in Lagos, consider elevated areas like parts of Ikeja GRA, Maryland, Magodo, and higher elevations in Lekki Phase 1. Victoria Island and Ikoyi also have some well-drained sections, but always check the specific property's flood history."
  }
];

const AIRecommendations = () => {
  const [activeTab, setActiveTab] = useState("recommendations");
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(null);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{type: 'user' | 'bot', message: string}[]>([
    {type: 'bot', message: "Hello! I'm your NaijaPropertyVerse assistant. How can I help you find your perfect property in Nigeria?"}
  ]);

  useEffect(() => {
    if (selectedProperty) {
      setLoading(true);
      // Simulate AI generating a description
      setTimeout(() => {
        setGeneratedDescription(generatePropertyDescription(selectedProperty));
        setLoading(false);
        setShowFeedback(true);
      }, 1500);
    }
  }, [selectedProperty]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    // Add user message to chat
    const newMessage = chatMessage;
    setChatHistory([...chatHistory, {type: 'user', message: newMessage}]);
    setChatMessage("");
    
    // Simulate bot thinking
    setLoading(true);
    
    // Find a relevant response or use default
    setTimeout(() => {
      const matchedResponse = mockChatbot.find(item => 
        item.question.toLowerCase().includes(newMessage.toLowerCase()) ||
        newMessage.toLowerCase().includes(item.question.toLowerCase())
      );
      
      const botResponse = matchedResponse ? 
        matchedResponse.answer : 
        "I understand you're interested in Nigerian real estate. Could you tell me more about your budget, preferred location, and must-have amenities?";
      
      setChatHistory(prev => [...prev, {type: 'bot', message: botResponse}]);
      setLoading(false);
    }, 1000);
  };

  const regenerateDescription = () => {
    if (selectedProperty) {
      setLoading(true);
      setShowFeedback(false);
      
      // Simulate regenerating content
      setTimeout(() => {
        setGeneratedDescription(generatePropertyDescription(selectedProperty));
        setLoading(false);
        setShowFeedback(true);
      }, 1500);
    }
  };

  const handleFeedback = (positive: boolean) => {
    // In a real implementation, this would send feedback to improve the AI model
    setShowFeedback(false);
    setTimeout(() => {
      setShowFeedback(true);
    }, 300);
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="recommendations">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Recommendations
        </TabsTrigger>
        <TabsTrigger value="chatbot">
          <MessageSquare className="w-4 h-4 mr-2" />
          Property Assistant
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="recommendations" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-4">Personalized Property Recommendations</h3>
            <div className="grid gap-4">
              {mockRecommendations.map((property) => (
                <Card 
                  key={property.id}
                  className={`cursor-pointer transition-all ${selectedProperty?.id === property.id ? 'ring-2 ring-naija-green' : 'hover:shadow-md'}`}
                  onClick={() => setSelectedProperty(property)}
                >
                  <CardContent className="p-3">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                        <img 
                          src={property.imageUrl} 
                          alt={property.title}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">{property.title}</h4>
                        <p className="text-xs text-gray-500">{property.location.address}, {property.location.city}</p>
                        <p className="text-sm font-semibold text-naija-green mt-1">
                          ₦{property.price.toLocaleString()}
                          {property.rentOrSale === "rent" && <span className="text-xs font-normal text-gray-500">/month</span>}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">AI-Generated Property Description</h3>
            <Card>
              <CardContent className="p-4">
                {selectedProperty ? (
                  <>
                    <div className="mb-3">
                      <h4 className="font-medium">{selectedProperty.title}</h4>
                      <p className="text-sm text-gray-500">{selectedProperty.location.address}, {selectedProperty.location.city}</p>
                    </div>
                    
                    {loading ? (
                      <div className="py-8 flex flex-col items-center">
                        <RefreshCw className="w-8 h-8 text-naija-green animate-spin mb-2" />
                        <p className="text-sm text-gray-500">Generating intelligent description...</p>
                      </div>
                    ) : (
                      <>
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <p className="text-sm">{generatedDescription}</p>
                        </div>
                        
                        <div className="flex justify-between">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={regenerateDescription}
                            className="flex items-center gap-1"
                          >
                            <RefreshCw className="w-4 h-4" /> 
                            Regenerate
                          </Button>
                          
                          {showFeedback && (
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => handleFeedback(true)}
                                className="text-naija-green hover:text-naija-green/90 hover:bg-naija-green/10"
                              >
                                <ThumbsUp className="w-4 h-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => handleFeedback(false)}
                                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                              >
                                <ThumbsDown className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-500">Select a property to generate an AI description</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="chatbot" className="mt-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-[400px] flex flex-col">
              {/* Chat messages */}
              <div className="flex-grow overflow-y-auto p-4">
                {chatHistory.map((chat, index) => (
                  <div 
                    key={index}
                    className={`mb-4 flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        chat.type === 'user' 
                          ? 'bg-naija-green text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Chat input */}
              <div className="border-t p-3 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask about properties, areas, or features..."
                    className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-naija-green"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendMessage();
                    }}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={loading || !chatMessage.trim()}
                    className="bg-naija-green hover:bg-naija-green/90"
                  >
                    Send
                  </Button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Our AI assistant can answer questions in English and Pidgin
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AIRecommendations;

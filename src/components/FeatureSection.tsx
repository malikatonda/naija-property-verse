
import { MapPin, LockKeyhole, Sparkles } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Technology for Nigerian Real Estate</h2>
          <p className="text-lg text-gray-600">
            NaijaPropertyVerse combines cutting-edge technology with local market knowledge
            to provide a superior property experience for buyers, sellers, renters, and landlords.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Interactive Maps Feature */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-naija-green/10 flex items-center justify-center">
              <MapPin className="w-20 h-20 text-naija-green" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3">Interactive Neighborhood Maps</h3>
              <p className="text-gray-600 mb-4">
                Explore property prices, rental demand, and amenities across Nigerian cities with our
                interactive heatmaps. Make informed decisions based on location data.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-green mr-2"></span>
                  Visualize property prices across neighborhoods
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-green mr-2"></span>
                  Find amenities like schools, markets, and hospitals
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-green mr-2"></span>
                  Filter by criteria like safety and transit access
                </li>
              </ul>
            </div>
          </div>
          
          {/* Blockchain Feature */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-naija-gold/10 flex items-center justify-center">
              <LockKeyhole className="w-20 h-20 text-naija-gold" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3">Blockchain Transactions</h3>
              <p className="text-gray-600 mb-4">
                Secure property transactions using smart contracts on the blockchain. Ensure
                transparency and trust with escrow functionality and title verification.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-gold mr-2"></span>
                  Smart contracts for sales and leases
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-gold mr-2"></span>
                  Escrow until title verification
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-gold mr-2"></span>
                  Verified Title badges for properties
                </li>
              </ul>
            </div>
          </div>
          
          {/* AI Feature */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-naija-terracotta/10 flex items-center justify-center">
              <Sparkles className="w-20 h-20 text-naija-terracotta" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3">AI Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Get personalized property matches based on your preferences and behavior. Our AI
                assistant helps you find the perfect property and answers your questions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-terracotta mr-2"></span>
                  Personalized property recommendations
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-terracotta mr-2"></span>
                  AI-generated property descriptions
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-naija-terracotta mr-2"></span>
                  Multilingual chatbot assistant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

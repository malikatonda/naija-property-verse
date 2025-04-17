
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PropertyGrid from "../components/PropertyGrid";
import FeatureSection from "../components/FeatureSection";
import AIRecommendations from "../components/AIRecommendations";
import BlockchainComponent from "../components/BlockchainComponent";
import { Button } from "../components/ui/button";
import { MapPin, Building, Home, User, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* User Categories */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Who is NaijaPropertyVerse For?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Buyers */}
              <div className="bg-naija-green/5 p-6 rounded-lg text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-naija-green/10 mb-4">
                  <Home className="h-8 w-8 text-naija-green" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Buyers</h3>
                <p className="text-gray-600 text-sm">
                  Find your dream home with verified titles and secure blockchain transactions.
                </p>
              </div>
              
              {/* Renters */}
              <div className="bg-naija-gold/5 p-6 rounded-lg text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-naija-gold/10 mb-4">
                  <User className="h-8 w-8 text-naija-gold" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Renters</h3>
                <p className="text-gray-600 text-sm">
                  Find rental properties with reliable power and security features.
                </p>
              </div>
              
              {/* Sellers */}
              <div className="bg-naija-terracotta/5 p-6 rounded-lg text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-naija-terracotta/10 mb-4">
                  <Building className="h-8 w-8 text-naija-terracotta" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sellers</h3>
                <p className="text-gray-600 text-sm">
                  List your property with AI-generated descriptions and secure transactions.
                </p>
              </div>
              
              {/* Diaspora Investors */}
              <div className="bg-blue-500/5 p-6 rounded-lg text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Diaspora Investors</h3>
                <p className="text-gray-600 text-sm">
                  Invest in Nigerian real estate with confidence through transparent, secure processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Properties */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <PropertyGrid title="Featured Properties" />
          </div>
        </section>
        
        {/* Feature Section */}
        <FeatureSection />
        
        {/* Map Preview Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold mb-4">Interactive Neighborhood Maps</h2>
              <p className="text-lg text-gray-600">
                Explore property prices, rental demand, amenities, and more across major Nigerian cities.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1604014056465-b158caa9a751?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Lagos aerial view"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Explore Lagos Real Estate</h3>
                  <p className="text-white/90 mb-4 max-w-2xl">
                    Discover property hotspots, pricing trends, and neighborhood amenities in Lagos.
                  </p>
                  <Button className="bg-naija-green hover:bg-naija-green/90">
                    <MapPin className="mr-2 h-4 w-4" />
                    Open Interactive Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blockchain Preview */}
        <section className="py-12 bg-naija-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Secure Blockchain Transactions</h2>
              <p className="text-lg text-gray-300">
                Experience secure, transparent property transactions with smart contracts and escrow functionality.
              </p>
            </div>
            
            <BlockchainComponent />
          </div>
        </section>
        
        {/* AI Recommendations */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">AI-Powered Property Matching</h2>
              <p className="text-lg text-gray-600">
                Get personalized recommendations and chat with our assistant in English and Nigerian languages.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <AIRecommendations />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-naija-green to-naija-green/80 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join NaijaPropertyVerse today and experience the future of real estate in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-naija-green hover:bg-gray-100">
                Start Browsing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                List Your Property
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

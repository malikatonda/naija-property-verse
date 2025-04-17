
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlockchainComponent from "../components/BlockchainComponent";
import { Button } from "../components/ui/button";
import { 
  Shield, 
  FileCheck, 
  Users, 
  LockKeyhole, 
  ArrowRight,
  Clock,
  Check,
  AlertTriangle
} from "lucide-react";

const BlockchainView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Blockchain Header */}
        <div className="bg-white py-8 border-b">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Secure Property Transactions</h1>
              <p className="text-lg text-gray-600">
                Using blockchain technology to ensure transparent, secure, and trustworthy real estate transactions
              </p>
            </div>
          </div>
        </div>
        
        {/* Blockchain Demo Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-12">
              <BlockchainComponent />
            </div>
            
            <div className="max-w-4xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
              
              <div className="relative">
                {/* Step connector */}
                <div className="absolute left-[1.25rem] top-10 bottom-10 w-0.5 bg-gray-200 hidden md:block"></div>
                
                {/* Steps */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-naija-green flex items-center justify-center text-white">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                      <p className="text-gray-600 mb-4">
                        Connect your cryptocurrency wallet (like MetaMask) to get started. This allows you to sign blockchain transactions securely.
                      </p>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Security Note:</span> Your private keys never leave your device. We only request transaction signatures.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-naija-gold flex items-center justify-center text-white">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold mb-2">Verify Property Title</h3>
                      <p className="text-gray-600 mb-4">
                        We integrate with Nigeria's digital land registries (e.g., Lagos e-GIS) to verify property titles and ownership records.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-1">Verified Title</h4>
                            <p className="text-xs text-gray-600">Property with clean ownership records receives a "Verified" badge</p>
                          </div>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg flex items-start">
                          <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-1">Unverified Title</h4>
                            <p className="text-xs text-gray-600">Property with incomplete records requires additional verification</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-naija-terracotta flex items-center justify-center text-white">
                      <LockKeyhole className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold mb-2">Execute Smart Contract</h3>
                      <p className="text-gray-600 mb-4">
                        Our smart contracts handle the transaction process, including escrow functionality and conditional releases based on verification.
                      </p>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-3 font-medium border-b">Smart Contract Features</div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-naija-green" />
                            <span className="text-sm">Escrow holds funds until title verification</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-naija-green" />
                            <span className="text-sm">Multi-signature approval for transactions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-naija-green" />
                            <span className="text-sm">Automated document verification process</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold mb-2">Complete Transaction</h3>
                      <p className="text-gray-600 mb-4">
                        Once all conditions are met, the transaction completes automatically, transferring ownership and releasing funds.
                      </p>
                      <Button className="bg-naija-green hover:bg-naija-green/90">
                        Try a Demo Transaction
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Benefits of Blockchain Real Estate</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-naija-green/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-naija-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-gray-600">
                  Blockchain's immutable ledger prevents fraud and ensures that all transaction details are securely recorded and cannot be altered.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-naija-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-naija-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Transactions</h3>
                <p className="text-gray-600">
                  Traditional real estate transactions can take months. Blockchain smart contracts automate processes, reducing closing time to days.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-naija-terracotta/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-naija-terracotta" />
                </div>
                <h3 className="text-xl font-bold mb-2">Increased Trust</h3>
                <p className="text-gray-600">
                  Perfect for diaspora investors and local buyers alike, blockchain provides transparency and reduces the need for intermediaries.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-naija-dark text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Secure Property Transactions?</h2>
              <p className="text-lg mb-8">
                Join thousands of property buyers and sellers using blockchain technology on NaijaPropertyVerse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-naija-dark hover:bg-gray-100">
                  Browse Properties
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockchainView;

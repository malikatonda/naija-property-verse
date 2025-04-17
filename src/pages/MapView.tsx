
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";
import { Button } from "../components/ui/button";
import { BookOpen, Info } from "lucide-react";

const MapView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Map Header */}
        <div className="bg-white py-6 border-b">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Interactive Property Map</h1>
                <p className="text-gray-600">
                  Explore properties, prices, and neighborhood data across Nigeria
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Guide</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  <span>Help</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map with expanded height */}
        <div className="container px-4 mx-auto py-8">
          <MapComponent />
          
          <div className="mt-8 bg-naija-green/5 border border-naija-green/20 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Understanding the Map</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Map Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-naija-green/20 flex-shrink-0 flex items-center justify-center text-naija-green">1</span>
                    <span>Use filters to refine properties by type, price range, and amenities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-naija-green/20 flex-shrink-0 flex items-center justify-center text-naija-green">2</span>
                    <span>Toggle heatmaps to view property prices, rental demand, and safety data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-naija-green/20 flex-shrink-0 flex items-center justify-center text-naija-green">3</span>
                    <span>Click on markers to view property details and photos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Heatmap Colors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span>Low price areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span>Medium price areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span>High price areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span>Premium price areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapView;

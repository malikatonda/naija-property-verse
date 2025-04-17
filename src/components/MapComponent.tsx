
import { useRef, useState, useEffect } from 'react';
import { MapPin, Home, Loader } from 'lucide-react';
import { Button } from './ui/button';

// Mock data for the map (in a real app, this would use real Mapbox integration)
const MOCK_PROPERTY_DATA = [
  {
    id: '1',
    title: '3 Bedroom Apartment in Lekki',
    price: 250000,
    coordinates: [3.4519, 6.4432], // Lagos
    type: 'sale',
    priceRange: 'high'
  },
  {
    id: '2',
    title: '2 Bedroom Flat in Ikeja',
    price: 120000,
    coordinates: [3.3392, 6.6018], // Ikeja
    type: 'rent',
    priceRange: 'medium'
  },
  {
    id: '3',
    title: 'Luxury Villa in Banana Island',
    price: 500000,
    coordinates: [3.4242, 6.4273], // Banana Island
    type: 'sale',
    priceRange: 'premium'
  },
  {
    id: '4',
    title: 'Office Space in Victoria Island',
    price: 300000,
    coordinates: [3.4242, 6.4301], // Victoria Island
    type: 'rent',
    priceRange: 'high'
  },
  {
    id: '5',
    title: 'Studio Apartment in Yaba',
    price: 80000,
    coordinates: [3.3837, 6.5075], // Yaba
    type: 'rent',
    priceRange: 'low'
  }
];

// This component simulates the interactive map with heatmaps
const MapComponent = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [mapFilter, setMapFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  // Filter properties based on selected filter
  const filteredProperties = MOCK_PROPERTY_DATA.filter(property => {
    if (mapFilter === 'all') return true;
    if (mapFilter === 'sale' && property.type === 'sale') return true;
    if (mapFilter === 'rent' && property.type === 'rent') return true;
    if (mapFilter === 'premium' && property.priceRange === 'premium') return true;
    if (mapFilter === 'high' && property.priceRange === 'high') return true;
    if (mapFilter === 'medium' && property.priceRange === 'medium') return true;
    if (mapFilter === 'low' && property.priceRange === 'low') return true;
    return false;
  });

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      {/* Map Loading Indicator */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center">
            <Loader className="w-10 h-10 text-naija-green animate-spin mb-2" />
            <p className="text-sm text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md">
        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-sm">Filters</h4>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={mapFilter === 'all' ? 'default' : 'outline'} 
              size="sm"
              className={mapFilter === 'all' ? 'bg-naija-green' : ''}
              onClick={() => setMapFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={mapFilter === 'sale' ? 'default' : 'outline'} 
              size="sm"
              className={mapFilter === 'sale' ? 'bg-naija-green' : ''}
              onClick={() => setMapFilter('sale')}
            >
              For Sale
            </Button>
            <Button 
              variant={mapFilter === 'rent' ? 'default' : 'outline'} 
              size="sm"
              className={mapFilter === 'rent' ? 'bg-naija-green' : ''}
              onClick={() => setMapFilter('rent')}
            >
              For Rent
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={mapFilter === 'premium' ? 'default' : 'outline'} 
              size="sm"
              className={mapFilter === 'premium' ? 'bg-naija-terracotta' : ''}
              onClick={() => setMapFilter('premium')}
            >
              Premium
            </Button>
            <Button 
              variant={mapFilter === 'high' ? 'default' : 'outline'} 
              size="sm"
              className={mapFilter === 'high' ? 'bg-naija-gold' : ''}
              onClick={() => setMapFilter('high')}
            >
              High
            </Button>
            <Button 
              variant={mapFilter === 'medium' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setMapFilter('medium')}
            >
              Medium
            </Button>
            <Button 
              variant={mapFilter === 'low' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setMapFilter('low')}
            >
              Low
            </Button>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowHeatmap(!showHeatmap)}
            className="w-full flex justify-between"
          >
            <span>{showHeatmap ? 'Hide' : 'Show'} Heatmap</span>
            <span className={`w-3 h-3 rounded-full ${showHeatmap ? 'bg-naija-green' : 'bg-gray-300'}`}></span>
          </Button>
        </div>
      </div>

      {/* Map Placeholder (since we can't use actual Mapbox) */}
      {mapLoaded && (
        <div className="absolute inset-0 bg-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-naija-green mx-auto mb-2" />
              <h3 className="text-xl font-bold">Interactive Map Demo</h3>
              <p className="text-gray-600 mb-4">In the actual app, this would be a Mapbox map with property markers and heatmaps.</p>
              <p className="text-sm text-gray-500">This is a placeholder for demonstration purposes.</p>
            </div>
          </div>
          
          {/* Property Markers (simulated) */}
          {filteredProperties.map((property) => (
            <div 
              key={property.id}
              className="absolute w-8 h-8 cursor-pointer"
              style={{ 
                left: `${(property.coordinates[0] - 3.3) * 300 + 100}px`, 
                top: `${(6.7 - property.coordinates[1]) * 300 + 100}px`,
              }}
              onClick={() => setSelectedProperty(property)}
            >
              <div className="relative group">
                <MapPin className={`w-8 h-8 ${property.type === 'sale' ? 'text-naija-green' : 'text-blue-500'}`} />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap z-20">
                  ₦{property.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
          
          {/* Selected Property Popup */}
          {selectedProperty && (
            <div 
              className="absolute bg-white rounded-lg shadow-lg p-3 w-48 z-30"
              style={{ 
                left: `${(selectedProperty.coordinates[0] - 3.3) * 300 + 100}px`, 
                top: `${(6.7 - selectedProperty.coordinates[1]) * 300 + 50}px`,
              }}
            >
              <button 
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
                onClick={() => setSelectedProperty(null)}
              >
                &times;
              </button>
              <div className="p-2">
                <h3 className="text-sm font-medium">{selectedProperty.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{selectedProperty.type === 'sale' ? 'For Sale' : 'For Rent'}</p>
                <p className="text-sm font-semibold text-naija-green mt-1">₦{selectedProperty.price.toLocaleString()}</p>
                <Button size="sm" className="w-full mt-2 bg-naija-green hover:bg-naija-green/90">
                  View Details
                </Button>
              </div>
            </div>
          )}
          
          {/* Heatmap Visualization (simulated) */}
          {showHeatmap && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-green-500/20 to-red-500/20"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapComponent;

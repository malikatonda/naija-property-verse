
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search, Menu, X, User, Home } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-naija-green" />
          <span className="text-xl font-bold text-naija-green">NaijaPropertyVerse</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/buy" className="text-sm font-medium hover:text-naija-green">Buy</Link>
          <Link to="/rent" className="text-sm font-medium hover:text-naija-green">Rent</Link>
          <Link to="/sell" className="text-sm font-medium hover:text-naija-green">Sell</Link>
          <Link to="/map" className="text-sm font-medium hover:text-naija-green">Map</Link>
          <Link to="/blockchain" className="text-sm font-medium hover:text-naija-green">Blockchain</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="default" size="sm" className="bg-naija-green hover:bg-naija-green/90">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </div>
        
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col pt-16 bg-white md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/buy" className="p-2 text-lg font-medium hover:bg-gray-100 rounded-md">Buy</Link>
            <Link to="/rent" className="p-2 text-lg font-medium hover:bg-gray-100 rounded-md">Rent</Link>
            <Link to="/sell" className="p-2 text-lg font-medium hover:bg-gray-100 rounded-md">Sell</Link>
            <Link to="/map" className="p-2 text-lg font-medium hover:bg-gray-100 rounded-md">Map</Link>
            <Link to="/blockchain" className="p-2 text-lg font-medium hover:bg-gray-100 rounded-md">Blockchain</Link>
            <div className="pt-4 mt-4 border-t">
              <Button className="w-full bg-naija-green hover:bg-naija-green/90">Sign In</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

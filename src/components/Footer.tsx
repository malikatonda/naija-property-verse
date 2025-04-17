
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-naija-dark text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NaijaPropertyVerse</h3>
            <p className="text-sm text-gray-300 mb-4">
              The future of real estate in Nigeria. Find your perfect home with advanced
              technology and secure transactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-naija-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-naija-gold transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-naija-gold transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-naija-gold transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/buy" className="hover:text-naija-gold transition">Buy Property</Link></li>
              <li><Link to="/rent" className="hover:text-naija-gold transition">Rent Property</Link></li>
              <li><Link to="/sell" className="hover:text-naija-gold transition">Sell Property</Link></li>
              <li><Link to="/map" className="hover:text-naija-gold transition">Property Map</Link></li>
              <li><Link to="/blockchain" className="hover:text-naija-gold transition">Blockchain Transactions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Popular Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-naija-gold transition">Lagos</a></li>
              <li><a href="#" className="hover:text-naija-gold transition">Abuja</a></li>
              <li><a href="#" className="hover:text-naija-gold transition">Port Harcourt</a></li>
              <li><a href="#" className="hover:text-naija-gold transition">Ibadan</a></li>
              <li><a href="#" className="hover:text-naija-gold transition">Kano</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@naijapropertyverse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+234 800 123 4567</span>
              </li>
              <li>
                <address className="not-italic">
                  Victoria Island, Lagos<br />
                  Nigeria
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NaijaPropertyVerse. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-naija-gold transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-naija-gold transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

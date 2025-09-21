import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import penguinLogo from "@/assets/penguin-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo con tamaño dinámico */}
          <div className="flex items-center">
            <img                
              src={penguinLogo}                
              alt="Penguin Debt - Debt Relief Solutions"                
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-16" : "h-24"
              }`}
            />
          </div>

          {/* Phone CTA */}
          <a 
            href="tel:+18553750026"
            className={`flex items-center gap-2 font-semibold transition-all duration-300 ${
              isScrolled 
                ? "bg-blue-600 text-white px-4 py-2.5 rounded-full hover:bg-blue-700 text-sm" 
                : "bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label="Call Penguin Debt for free consultation"
          >
            <Phone className={`transition-all duration-300 ${
              isScrolled ? "w-4 h-4" : "w-5 h-5"
            }`} />
            <span className="font-bold">(855) 375-0026</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
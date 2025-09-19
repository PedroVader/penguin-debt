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
        isScrolled ? "header-sticky py-3" : "bg-background/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={penguinLogo} 
              alt="Penguin Debt Logo" 
              className="h-20 object-contain"
            />
          </div>

          {/* Phone CTA */}
          <a 
            href="tel:+18553750026"
            className="phone-cta flex items-center gap-2 text-base"
          >
            <Phone className="w-5 h-5" />
            (855) 375-0026
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
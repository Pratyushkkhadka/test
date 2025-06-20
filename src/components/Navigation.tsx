
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Believe IT Solution
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          <Link 
            to="/pricing"
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <button 
            onClick={() => scrollToSection("team")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button onClick={() => scrollToSection("contact")}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <Link 
              to="/pricing"
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <button 
              onClick={() => scrollToSection("")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

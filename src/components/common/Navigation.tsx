import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoWhite from "@/assets/logo_civil_blue-removebg-preview.png";
import LogoBlue from "@/assets/logo_civil_white_bgblue-removebg-preview.png";
// import Logo from '@/assets/logo_civil_blue.png';
// import Logo from '@/assets/logo_civil_white_bgblue.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={
                location.pathname !== "/"
                  ? LogoWhite
                  : isScrolled
                  ? LogoWhite
                  : LogoBlue
              }
              alt="Civil Tech Logo"
              className="h-10 w-auto md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActivePath(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }
                ${location.pathname !== "/"
                  ? "text-foreground"
                  : isScrolled
                  ? "text-foreground"
                  : "text-primary-foreground"}
                `}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" className="btn-primary">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t shadow-lg">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary hover:bg-secondary/50 ${
                    isActivePath(item.path)
                      ? "text-primary bg-secondary/30"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="default" className="btn-primary w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

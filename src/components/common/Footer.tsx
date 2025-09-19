import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services1 = [
    "Storm Water Drainage DPRs",
    "Lakes & Tank Rejuvenation",
    "Drinking Water Supply DPRs",
    "Underground Drainage Works",
    "Building Construction DPRs",
  ];

  const services = [
    "Waterbody Rejuvenation Works",
    "Water Supply & Sanitation Works",
    "Storm-water Design & Flood Studies",
    "Building Design & Renovation Works",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  CT
                </span>
              </div>
              <div>
                <span className="text-xl font-bold">CivilTech</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Environmental & Civil-Engineering Consultants
              Specialized in DPR preparation, project execution, and
              PMC services for sustainable water and infrastructure projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  # 141, Ramaiah garden, Kadugodi
                  <br />
                  Bengaluru–560067
                  <br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center space-x-3" >
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <p className="text-primary-foreground/80 hover:underline hover:text-primary-foreground/100 transition-colors cursor-pointer">
                 <a href="tel:+918792440658">+91 87924 40658</a>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                {/* on hover underline and highlight cursor pointer */}
                <p className="text-primary-foreground/80 hover:underline hover:text-primary-foreground/100 transition-colors cursor-pointer">
                  <a href="mailto:civiltech.research@gmail.com">
                    civiltech.research@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 CivilTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

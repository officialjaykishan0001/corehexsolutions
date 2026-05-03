import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Hardware Support", href: "/services#hardware" },
    { name: "Cybersecurity", href: "/services#security" },
    { name: "Network Monitoring", href: "/services#network" },
    { name: "Data Management", href: "/services#data" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-shadow mr-1">
               <img src="/corehex(2).png" className="" alt="logo" />
            </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-background">
                  Corehex
                </span>
                <span className="text-xs font-medium -mt-1 text-background/70">
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Reliable IT Solutions for Modern Businesses. We provide comprehensive IT support to help your business thrive in the digital age.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:corehexsolutions@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                corehexsolutions@gmail.com
              </a>
              <a
                href="tel:+919879300929"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 9879300929
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>30 Vijay Nagar, Near Ganga Sagar, New Sama Road, Vadodara, Gujarat – 390024</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold text-background mb-6">Get In Touch</h4>
            <p className="text-background/70 text-sm mb-4">
              Ready to transform your IT infrastructure? Contact us for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Corehex Solutions. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Reliable IT Solutions for Modern Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}

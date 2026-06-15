import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

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
const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/company/corehex-solutions",
  },
  {
    icon: <SiInstagram size={20} />,
    url: "https://www.instagram.com/corehex2026",
  },
  // {
  //   icon: <Twitter size={20} />,
  //   url: "https://twitter.com/corehex2026",
  // },
];
export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#030712] border-t border-white/10 overflow-hidden">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 pt-20 pb-10">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-3xl font-bold text-white mb-5">
              Corehex
              <span className="text-primary"> Solutions</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering modern IT infrastructure, cybersecurity,
              cloud solutions, and software development services
              for businesses across industries.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              {
                socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))
              }
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/services/it-infrastructure"
                  className="hover:text-primary transition-colors duration-300"
                >
                  IT Infrastructure
                </Link>
              </li>

              <li>
                <Link
                  to="/services/cybersecurity"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Cybersecurity
                </Link>
              </li>

              <li>
                <Link
                  to="/services/data-solutions"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Data Management
                </Link>
              </li>

              <li>
                <Link
                  to="/services/software-development"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Software Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/it-consulting"
                  className="hover:text-primary transition-colors duration-300"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-gray-400">

              <div>
                <p className="text-white mb-1 font-medium">
                  Phone
                </p>
                <p>+91 9879300929</p>
              </div>

              <div>
                <p className="text-white mb-1 font-medium">
                  Email
                </p>
                <p>contact@corehexsolutions.com</p>
              </div>

              <div>
                <p className="text-white mb-1 font-medium">
                  Availability
                </p>
                <p>24/7 Technical Support</p>
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Corehex Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}

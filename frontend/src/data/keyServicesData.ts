// src/data/keyServicesData.ts

import type { LucideIcon } from "lucide-react";
import {
  Server,
  Shield,
  Database,
  Network,
  Code,
  Briefcase,
  Headphones,
} from "lucide-react";

export interface KeyService {
  id: number;
  icon: LucideIcon;
  title: string;
  slug: string;
  desc: string;
  src: string;
}

export const keyServicesData: KeyService[] = [
  {
    id: 1,
    icon: Server,
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    desc: "Complete hardware support and infrastructure management tailored to your business needs.",
    src: "/services/server.png",
  },
  {
    id: 2,
    icon: Shield,
    title: "Cybersecurity",
    slug: "cybersecurity",
    desc: "Comprehensive security solutions to protect your business from digital threats.",
    src: "/services/cybersecurity.png",
  },
  {
    id: 3,
    icon: Database,
    title: "Data Management",
    slug: "data-solutions",
    desc: "Secure backup, recovery, and analytics solutions for your critical business data.",
    src: "/services/database-management.png",
  },
  {
    id: 4,
    icon: Network,
    title: "Network Solutions",
    slug: "network-management",
    desc: "Reliable network monitoring, security, and managed services for optimal performance.",
    src: "/services/network-solutions.png",
  },
  {
    id: 5,
    icon: Code,
    title: "Software Development",
    slug: "software-development",
    desc: "Custom web and mobile application development tailored to your business goals using modern technologies.",
    src: "/services/software-development.png",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "IT Consulting",
    slug: "it-consulting",
    desc: "Strategic technology consulting to drive your digital transformation journey.",
    src: "/services/it-consulting.png",
  },
  {
    id: 7,
    icon: Headphones,
    title: "Help Desk Support",
    slug: "it-support",
    desc: "24/7 technical support to keep your operations running smoothly.",
    src: "/services/helpdesk-support.png",
  },
];
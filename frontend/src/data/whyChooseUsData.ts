// src/data/whyChooseUsData.ts

import {
  CheckCircle,
  Shield,
  Award,
  Clock,
  LucideIcon,
} from "lucide-react";

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    icon: CheckCircle,
    title: "Proven Reliability",
    description:
      "Years of trusted service delivering consistent, dependable IT solutions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Advanced security protocols protecting your valuable business assets.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Certified professionals with deep expertise across all IT domains.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance ensuring your systems never skip a beat.",
  },
];
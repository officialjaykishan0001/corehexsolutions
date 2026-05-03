import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-300",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Consistent, dependable IT solutions you can count on 24/7.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every service.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technology to keep you ahead.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your success is our priority. We go the extra mile.",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to simplify IT for businesses." },
  { year: "2016", title: "100+ Clients", description: "Expanded services and crossed our first major milestone." },
  { year: "2019", title: "Cybersecurity Division", description: "Launched dedicated security solutions." },
  { year: "2022", title: "Regional Expansion", description: "Extended services across Gujarat and beyond." },
  { year: "2024", title: "500+ Clients", description: "Trusted partner to hundreds of businesses." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              Powering Your Business with{" "}
              <span className="gradient-text">Reliable IT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: '200ms' }}>
              Corehex Solutions is your trusted IT partner, delivering comprehensive technology solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="Our Story"
                title="Who We Are"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Corehex Solutions is a leading IT services and digital solutions company based in Vadodara, Gujarat. We specialize in providing complete IT support for businesses of all sizes, from small startups to large enterprises.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a team of certified professionals and years of industry experience, we deliver end-to-end technology solutions including hardware support, managed IT services, cybersecurity, networking, data management, and strategic consulting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred IT partner for hundreds of businesses across the region.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">IT Experts</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground text-sm">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative, reliable, and cost-effective IT solutions that drive growth and efficiency. We strive to be the technology backbone that enables our clients to focus on what they do best – running their business.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted IT services partner for businesses across India, recognized for our commitment to excellence, innovation, and customer success. We envision a future where every business has access to world-class IT infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Our core values guide every decision we make and every solution we deliver."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border text-center hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-success group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-success group-hover:text-success-foreground transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Journey"
            title="Milestones Along the Way"
            description="From humble beginnings to becoming a trusted IT partner for hundreds of businesses."
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 md:gap-12 mb-8 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-card rounded-2xl p-6 border border-border hover-lift inline-block max-w-sm">
                      <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                      <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10 shrink-0 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  
                  <div className="md:hidden flex-1">
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                      <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
            Ready to Partner with Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how Corehex Solutions can help transform your IT infrastructure and drive your business forward.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

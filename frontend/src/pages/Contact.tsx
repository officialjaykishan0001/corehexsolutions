import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(formData)

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "corehexsolutions@gmail.com",
      href: "mailto:corehexsolutions@gmail.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9879300929",
      href: "tel:+919879300929",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "30 Vijay Nagar, Near Ganga Sagar, New Sama Road, Vadodara, Gujarat – 390024",
      href: "https://maps.google.com/?q=30+Vijay+Nagar+Near+Ganga+Sagar+New+Sama+Road+Vadodara+Gujarat+390024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: '200ms' }}>
              Have a question or need IT support? We're here to help. Reach out and let's discuss how we can solve your technology challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeader
                title="Get in Touch"
                description="We'd love to hear from you. Reach out through any of these channels."
                centered={false}
                className="mb-8"
              />
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground text-sm leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Why Contact Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    24/7 emergency support available
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    Quick response within 2 hours
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    Customized solutions for your needs
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your IT requirements..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-cta-foreground/30 border-t-cta-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6685036455685!2d73.2044!3d22.3205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf5a4b5c5b8b%3A0x1234567890abcdef!2sVijay%20Nagar%2C%20Vadodara%2C%20Gujarat%20390024!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Corehex Solutions Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

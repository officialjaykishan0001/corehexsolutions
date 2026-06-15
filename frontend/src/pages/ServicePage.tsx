import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getServiceData, ServiceProject } from "@/data/serviceData";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

// ─── Hero Icons ───────────────────────────────────────────────────────────────

const HeroIcons: Record<string, () => JSX.Element> = {
  "shield-lock": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 4v5c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V7l8-4z" />
      <rect x="9" y="11" width="6" height="5" rx="1" /><path d="M12 11V9a2 2 0 114 0" />
    </svg>
  ),
  "network": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
      <path d="M12 7v4M10 18H6.5l-1.5-2M14 18h3.5l1.5-2M12 11l-5 5M12 11l5 5" />
    </svg>
  ),
  "building-skyscraper": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2m2 0h2M9 13h2m2 0h2M9 17h2m2 0h2" />
    </svg>
  ),
  "chart-dots": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <circle cx="7" cy="15" r="1.5" /><circle cx="12" cy="10" r="1.5" /><circle cx="17" cy="6" r="1.5" />
      <path d="M7 15l5-5 5-4" strokeDasharray="2 2" />
    </svg>
  ),
  "headset": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14v-4a8 8 0 1116 0v4" />
      <path d="M4 14a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2zM15 14a2 2 0 002 2h1a2 2 0 002-2v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2v2z" />
    </svg>
  ),
  "presentation-analytics": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h18v12H3zM12 17v4M8 21h8" /><path d="M8 13l2-3 2 2 3-4" />
    </svg>
  ),
  "code": () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

const FeatureIconMap: Record<string, () => JSX.Element> = {
  default: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  ),
};

const FeatureIcon = ({ name }: { name: string }) => {
  const Icon = FeatureIconMap[name] ?? FeatureIconMap["default"];
  return <Icon />;
};

// ─── Status badge ─────────────────────────────────────────────────────────────

const statusConfig = {
  live:          { label: "Live",        bg: "bg-emerald-500/15", text: "text-emerald-400", dot: "bg-emerald-400" },
  "in-progress": { label: "In progress", bg: "bg-amber-500/15",   text: "text-amber-400",   dot: "bg-amber-400"   },
  archived:      { label: "Archived",    bg: "bg-zinc-500/15",    text: "text-zinc-400",    dot: "bg-zinc-400"    },
};

function StatusBadge({ status }: { status: ServiceProject["status"] }) {
  const cfg = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, accentColor }: { project: ServiceProject; accentColor: string }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      {/* Top row: year + status */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarIcon />
          {project.year}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md text-xs font-medium"
            style={{ background: `${accentColor}18`, color: accentColor }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <GithubIcon />
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium ml-auto"
            style={{ color: accentColor }}
          >
            Live demo
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicePage() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const navigate = useNavigate();
  const service = serviceName ? getServiceData(serviceName) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceName]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <div
          className="text-7xl font-bold"
          style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          404
        </div>
        <h1 className="text-2xl font-semibold text-foreground">Service not found</h1>
        <p className="text-muted-foreground max-w-sm">
          The service you're looking for doesn't exist. Browse all our services below.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90"
          style={{ background: "var(--gradient-primary)", color: "#fff" }}
        >
          <ArrowLeft />
          Back to Services
        </Link>
      </div>
    );
  }

  const HeroIcon = HeroIcons[service.heroIcon] ?? HeroIcons["shield-lock"];

  return (
    <div className="min-h-screen bg-background">

      {/* ── Back Nav ─────────────────────────────────────────────────────────── */}
      <div className="container-custom pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            <ArrowLeft />
          </span>
          Back
        </button>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(ellipse, ${service.accentColor} 0%, transparent 70%)` }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 animate-fade-in"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}22 0%, ${service.accentColor}44 100%)`,
                border: `1.5px solid ${service.accentColor}55`,
                color: service.accentColor,
              }}
            >
              <HeroIcon />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 animate-fade-in" style={{ color: service.accentColor, animationDelay: "0.05s" }}>
              Corehex Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {service.title}
            </h1>
            <p
              className="text-xl sm:text-2xl font-medium mb-6 animate-fade-up"
              style={{ animationDelay: "0.15s", background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {service.tagline}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-primary)", color: "#fff" }}
              >
                Get a Free Consultation
                <ArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-secondary"
                style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: service.accentColor }}>
              What's included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything you need, nothing you don't
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 hover-lift group animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200"
                  style={{ background: `${service.accentColor}18`, color: service.accentColor, border: `1px solid ${service.accentColor}30` }}
                >
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Showcase (software-development only) ──────────────────────── */}
      {false && service.projects && service.projects.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: service.accentColor }}>
                  Our work
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Projects we've shipped
                </h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  Real software delivered for real businesses — from internal tools to customer-facing platforms.
                </p>
              </div>
              <a
                href="https://github.com/corehexsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 hover:bg-secondary"
                style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
              >
                <GithubIcon />
                GitHub profile
                <ExternalLinkIcon />
              </a>
            </div>

            {/* Project cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.projects.map((project, idx) => (
                <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 0.06}s` }}>
                  <ProjectCard project={project} accentColor={service.accentColor} />
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-sm text-muted-foreground mt-10">
              Some projects are under NDA and not publicly listed.{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
                Ask us about our full portfolio.
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ── Process ───────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: service.accentColor }}>
                How we work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our process</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 flex gap-5 animate-fade-up"
                  style={{ animationDelay: `${idx * 0.07}s` }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${service.accentColor}33, ${service.accentColor}66)`,
                      color: service.accentColor,
                      border: `1.5px solid ${service.accentColor}55`,
                    }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-3xl p-8 sm:p-12"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}0d 0%, ${service.accentColor}1a 100%)`,
                border: `1px solid ${service.accentColor}30`,
              }}
            >
              <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: service.accentColor }}>
                  Why it matters
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What you gain</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 animate-fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: service.accentColor, color: "#fff" }}
                    >
                      <CheckIcon />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
              style={{ background: "var(--gradient-card)", border: "1px solid hsl(var(--border))" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${service.accentColor}44 0%, transparent 60%)` }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{service.cta.heading}</h2>
                <p className="text-base text-muted-foreground mb-8 max-w-lg mx-auto">{service.cta.subtext}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-primary)", color: "#fff" }}
                  >
                    Let's Talk
                    <ArrowRight />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-secondary"
                    style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
                  >
                    Explore Other Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Section {
  id: string;
  title: string;
  content: ReactNode;
}

const Label = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-foreground">{children}</span>
);

const Body = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-muted-foreground leading-7 mb-3 last:mb-0">{children}</p>
);

const List = ({ children }: { children: ReactNode }) => (
  <ul className="my-3 flex flex-col gap-2.5 list-none p-0">{children}</ul>
);

const Item = ({ children }: { children: ReactNode }) => (
  <li className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:opacity-40">
    {children}
  </li>
);

const sections: Section[] = [
  {
    id: "01",
    title: "Information We Collect",
    content: (
      <>
        <Body>
          When you interact with our website or reach out to us for services, we may collect
          the following types of information to better serve you:
        </Body>
        <List>
          <Item><Label>Identity & Contact</Label> — Your name, email address, and phone number so we can respond to you directly.</Item>
          <Item><Label>Business Context</Label> — Company name, industry, and project requirements to scope and deliver relevant services.</Item>
          <Item><Label>Form Submissions</Label> — Any information you voluntarily provide through our contact or inquiry forms.</Item>
          <Item><Label>Technical Data</Label> — IP address, browser type, device information, and pages visited, collected automatically to maintain site performance and security.</Item>
        </List>
        <Body>
          We collect only what is necessary. We do not collect sensitive personal data such as
          financial details, government IDs, or health information.
        </Body>
      </>
    ),
  },
  {
    id: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <Body>
          Every piece of information we collect serves a specific and legitimate purpose. Here
          is how we use it:
        </Body>
        <List>
          <Item><Label>Service Delivery</Label> — To understand your requirements, provide consultations, and deliver our software and design services effectively.</Item>
          <Item><Label>Communication</Label> — To respond to inquiries, follow up on project discussions, and send relevant updates you have requested.</Item>
          <Item><Label>Website Improvement</Label> — To analyze usage patterns, fix issues, and continuously improve the experience on our site.</Item>
          <Item><Label>Security</Label> — To detect, prevent, and address technical issues, fraudulent activity, or unauthorized access.</Item>
        </List>
        <Body>
          We do not use your information for automated decision-making, profiling, or
          unsolicited marketing communications.
        </Body>
      </>
    ),
  },
  {
    id: "03",
    title: "Cookies & Tracking Technologies",
    content: (
      <>
        <Body>
          Our website uses cookies — small text files stored in your browser — to remember
          your preferences and understand how visitors use our site. We use the following types:
        </Body>
        <List>
          <Item><Label>Essential Cookies</Label> — Required for the website to function properly. These cannot be disabled without affecting site functionality.</Item>
          <Item><Label>Analytics Cookies</Label> — Help us understand traffic patterns and which pages are most useful, using aggregated and anonymized data.</Item>
          <Item><Label>Preference Cookies</Label> — Remember choices you make (such as language or layout) to personalize your experience on return visits.</Item>
        </List>
        <Body>
          You can disable or delete cookies at any time through your browser settings. Note
          that disabling certain cookies may affect how parts of our website function.
        </Body>
      </>
    ),
  },
  {
    id: "04",
    title: "Information Sharing",
    content: (
      <>
        <Body>
          We take your trust seriously. We do not sell, rent, trade, or broker your personal
          information to any third parties for commercial purposes — ever.
        </Body>
        <Body>In limited cases, we may share information with:</Body>
        <List>
          <Item><Label>Trusted Service Providers</Label> — Such as hosting platforms, email tools, or analytics services that help us operate our business. These partners are contractually bound to protect your data and may not use it for their own purposes.</Item>
          <Item><Label>Legal Obligations</Label> — When required by law, court order, or government authority, we may disclose information to comply with applicable legal requirements.</Item>
          <Item><Label>Business Transfers</Label> — In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. You will be notified in advance of any such change.</Item>
        </List>
      </>
    ),
  },
  {
    id: "05",
    title: "Data Security",
    content: (
      <>
        <Body>
          We implement industry-standard security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction. These measures include:
        </Body>
        <List>
          <Item>Encrypted data transmission using HTTPS/TLS protocols.</Item>
          <Item>Access controls that limit who within our team can view personal data.</Item>
          <Item>Regular review of our data collection, storage, and processing practices.</Item>
        </List>
        <Body>
          While we strive to use commercially acceptable means to protect your data, no method
          of electronic transmission or storage is 100% secure. If you have concerns about
          the security of your information, please contact us directly.
        </Body>
      </>
    ),
  },
  {
    id: "06",
    title: "Data Retention",
    content: (
      <Body>
        We retain your personal information only for as long as necessary to fulfill the
        purposes outlined in this policy, or as required by applicable law. When information
        is no longer needed, we securely delete or anonymize it. If you would like your data
        removed sooner, you may contact us at any time with a deletion request and we will
        process it promptly.
      </Body>
    ),
  },
  {
    id: "07",
    title: "Third-Party Links",
    content: (
      <Body>
        Our website may contain links to external websites, tools, or resources that are not
        operated by Corehex Solutions. These links are provided for your convenience and
        informational purposes only. We have no control over the content, privacy practices,
        or policies of those third-party sites and assume no responsibility for them. We
        encourage you to review the privacy policy of any external site you visit.
      </Body>
    ),
  },
  {
    id: "08",
    title: "Your Rights",
    content: (
      <>
        <Body>
          Depending on your location, you may have certain rights regarding your personal
          data. These may include the right to:
        </Body>
        <List>
          <Item>Access the personal information we hold about you.</Item>
          <Item>Request correction of inaccurate or incomplete data.</Item>
          <Item>Request deletion of your data, subject to certain legal exceptions.</Item>
          <Item>Withdraw consent for data processing where consent was the basis for collection.</Item>
        </List>
        <Body>
          To exercise any of these rights, please contact us using the details at the bottom
          of this page. We will respond to all requests within a reasonable timeframe.
        </Body>
      </>
    ),
  },
  {
    id: "09",
    title: "Changes to This Policy",
    content: (
      <Body>
        We may update this Privacy Policy periodically to reflect changes in our practices,
        technology, or legal requirements. When we make material changes, we will update the
        "Last Updated" date at the top of this page. We encourage you to review this policy
        from time to time. Continued use of our website after any changes constitutes your
        acceptance of the updated policy.
      </Body>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Header */}
      <div className="border-b border-border pb-12 pt-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="block w-5 h-0.5 rounded bg-primary" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-primary">
              Legal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl mb-6">
            How Corehex Solutions collects, uses, and protects the information
            you share with us written in plain language.
          </p>

          <span className="inline-flex items-center gap-1.5 rounded-full py-1 text-[13px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            Last updated: June 14, 2026
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">

        {/* Intro */}
        <div className="py-10 border-b border-border">
          <p className="text-[15px] text-muted-foreground leading-7">
            At{" "}
            <strong className="text-foreground font-semibold">Corehex Solutions</strong>,
            we believe privacy is a right, not a feature. This policy is designed to give you
            a clear and honest picture of what information we collect when you visit our website
            or engage our services, why we collect it, and how we keep it safe. If you ever
            have questions or concerns, our contact details are at the bottom of this page.
          </p>
        </div>

        {/* Sections */}
        <div>
          {sections.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-[48px_1fr] gap-x-7 py-11 border-b border-border last:border-none"
            >
              <span className="text-[11px] font-bold tracking-wider text-primary opacity-70 pt-0.5">
                {s.id}
              </span>
              <div>
                <h2 className="text-base font-semibold text-foreground tracking-tight mb-3.5">
                  {s.title}
                </h2>
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div className="mt-14 px-10 py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-2">
              Get in Touch
            </p>
            <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2.5">
              Questions about this policy?
            </h3>
            <div className="flex flex-col gap-1 text-[13.5px] text-muted-foreground">
              <span><strong className="text-foreground font-semibold">Corehex Solutions</strong></span>
              <span>contact@corehexsolutions.com</span>
              <span>+91 98793 00929</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary-foreground text-[13.5px] font-semibold px-5 py-3 whitespace-nowrap hover:opacity-90 transition-opacity shrink-0"
          >
            Contact Us →
          </Link>
        </div>

        {/* Footer */}
        <p className="text-[13px] text-muted-foreground py-7">
          © {new Date().getFullYear()} Corehex Solutions. All rights reserved.
        </p>

      </div>
    </div>
  );
}
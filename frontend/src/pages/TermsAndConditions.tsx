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
    title: "Services",
    content: (
      <>
        <Body>
          Corehex Solutions offers a comprehensive suite of technology services designed to help
          businesses build, scale, and secure their digital operations. Our service areas include:
        </Body>
        <List>
          <Item><Label>Software Development</Label> — Custom web, mobile, and enterprise application development tailored to your business requirements.</Item>
          <Item><Label>IT Infrastructure</Label> — Planning, deployment, and management of scalable IT infrastructure environments.</Item>
          <Item><Label>Cybersecurity</Label> — Threat assessment, vulnerability management, and implementation of security protocols to protect your systems and data.</Item>
          <Item><Label>Cloud Solutions</Label> — Cloud migration, architecture design, and managed cloud services across major platforms.</Item>
          <Item><Label>IT Consulting</Label> — Strategic advisory services to align technology investments with your business goals.</Item>
          <Item><Label>Data Management & Networking</Label> — Data pipeline design, storage solutions, and enterprise network setup and support.</Item>
        </List>
        <Body>
          All services are delivered under individual project agreements, proposals, or contracts.
          These Terms apply broadly; specific engagements may be governed by additional documentation.
        </Body>
      </>
    ),
  },
  {
    id: "02",
    title: "Use of Website",
    content: (
      <>
        <Body>
          By accessing and using our website, you agree to do so responsibly and within the
          bounds of applicable law. Specifically, you agree that you will not:
        </Body>
        <List>
          <Item>Use the website for any unlawful, harmful, or fraudulent purpose.</Item>
          <Item>Attempt to probe, scan, or test the vulnerability of our systems or breach security measures.</Item>
          <Item>Copy, reproduce, distribute, or exploit any website content without prior written permission from Corehex Solutions.</Item>
          <Item>Use automated tools, bots, or scrapers to extract data from our website.</Item>
          <Item>Take any action that could damage our reputation, disrupt services, or harm other users.</Item>
        </List>
        <Body>
          We reserve the right to restrict or block access to our website at our discretion if
          these conditions are not met.
        </Body>
      </>
    ),
  },
  {
    id: "03",
    title: "Intellectual Property",
    content: (
      <>
        <Body>
          All content published on this website — including but not limited to text, graphics,
          logos, branding, UI designs, code snippets, case studies, and other materials — is the
          exclusive property of Corehex Solutions unless explicitly stated otherwise.
        </Body>
        <Body>
          This content is protected under applicable intellectual property and copyright laws. You
          may not reproduce, redistribute, modify, or create derivative works from any part of
          this website without our express written consent. For licensing inquiries, please
          contact us directly.
        </Body>
      </>
    ),
  },
  {
    id: "04",
    title: "Project Engagements",
    content: (
      <>
        <Body>
          Any formal engagement for software development, consulting, cybersecurity, infrastructure,
          or other professional services will be governed by a separate project-level document,
          which may include:
        </Body>
        <List>
          <Item><Label>Project Proposal</Label> — Outlines the scope, deliverables, and estimated timeline for the engagement.</Item>
          <Item><Label>Service Agreement or MSA</Label> — A master agreement defining the legal relationship, responsibilities, and expectations.</Item>
          <Item><Label>Statement of Work (SOW)</Label> — Detailed specifications of work to be performed for a specific project phase.</Item>
        </List>
        <Body>
          In the event of any conflict between these Terms and a signed project document, the
          project document shall take precedence for matters specific to that engagement.
        </Body>
      </>
    ),
  },
  {
    id: "05",
    title: "Payments",
    content: (
      <>
        <Body>
          Payment terms for all services will be specified in project quotations, invoices, or
          signed agreements prior to commencement of work. Unless agreed otherwise in writing:
        </Body>
        <List>
          <Item>Invoices are due within the timeline stated on the invoice or agreement.</Item>
          <Item>Late payments may result in a pause, delay, or suspension of ongoing work until the outstanding amount is settled.</Item>
          <Item>All fees are non-refundable once work has commenced, unless otherwise specified in the project agreement.</Item>
          <Item>Any applicable taxes are the responsibility of the client unless explicitly included in the quoted price.</Item>
        </List>
        <Body>
          If you have questions about billing or payment terms, please reach out before signing
          any agreement.
        </Body>
      </>
    ),
  },
  {
    id: "06",
    title: "Confidentiality",
    content: (
      <>
        <Body>
          We understand that client engagements often involve access to sensitive business
          information, proprietary data, internal processes, or trade secrets. Corehex Solutions
          commits to:
        </Body>
        <List>
          <Item>Treating all client information shared during a project as strictly confidential.</Item>
          <Item>Limiting access to confidential data to only those team members who require it to deliver the agreed services.</Item>
          <Item>Not disclosing client information to any third party without explicit written consent, except where required by law.</Item>
        </List>
        <Body>
          Where an engagement requires a formal Non-Disclosure Agreement (NDA), we are happy to
          accommodate that as part of the project onboarding process.
        </Body>
      </>
    ),
  },
  {
    id: "07",
    title: "Third-Party Services",
    content: (
      <Body>
        Certain services we deliver may involve the use of third-party platforms, cloud
        infrastructure providers, open-source software, APIs, or SaaS integrations. While we
        take care in selecting and working with reputable providers, Corehex Solutions is not
        responsible for outages, security incidents, data losses, pricing changes, or service
        disruptions originating from third-party systems outside our direct control. We will
        inform you of significant third-party dependencies that are part of your project scope.
      </Body>
    ),
  },
  {
    id: "08",
    title: "Limitation of Liability",
    content: (
      <>
        <Body>
          To the maximum extent permitted by applicable law, Corehex Solutions shall not be
          held liable for any indirect, incidental, special, consequential, or punitive damages
          arising out of or in connection with:
        </Body>
        <List>
          <Item>The use of, or inability to use, our website or services.</Item>
          <Item>Errors, inaccuracies, or omissions in any content or deliverables.</Item>
          <Item>Unauthorized access to or alteration of your data by third parties.</Item>
          <Item>Delays or interruptions in service caused by events beyond our reasonable control.</Item>
        </List>
        <Body>
          Our total liability in connection with any project or service engagement shall not
          exceed the total fees paid by the client for that specific engagement.
        </Body>
      </>
    ),
  },
  {
    id: "09",
    title: "Termination",
    content: (
      <>
        <Body>
          Either party may terminate a service engagement in accordance with the terms of the
          applicable project agreement. In addition, Corehex Solutions reserves the right to:
        </Body>
        <List>
          <Item>Suspend or terminate website access for any user who violates these Terms.</Item>
          <Item>Discontinue or modify any service offering at our discretion, with reasonable notice where possible.</Item>
          <Item>Terminate an engagement immediately in cases of non-payment, breach of contract, or conduct that is harmful to our team or other clients.</Item>
        </List>
        <Body>
          Upon termination, any outstanding payments for work completed remain due and payable.
        </Body>
      </>
    ),
  },
  {
    id: "10",
    title: "Changes to These Terms",
    content: (
      <Body>
        We may revise these Terms & Conditions from time to time to reflect changes in our
        services, business practices, or legal obligations. When changes are made, we will
        update the "Last Updated" date at the top of this page. We encourage you to review
        these Terms periodically. Continued use of our website or services after changes are
        published constitutes your acceptance of the revised Terms.
      </Body>
    ),
  },
];

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
          </h1>

          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-xl mb-6">
            The rules and expectations that govern your use of Corehex Solutions'
            website and professional services written clearly and honestly.
          </p>

          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            Last updated: June 14, 2026
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">

        {/* Intro */}
        <div className="py-10 border-b border-border">
          <p className="text-[15px] text-muted-foreground leading-7">
            Welcome to{" "}
            <strong className="text-foreground font-semibold">Corehex Solutions</strong>.
            By accessing our website or engaging our services, you agree to be bound by these
            Terms &amp; Conditions. Please read them carefully — they define how we work together,
            what you can expect from us, and what we expect in return. If you have any questions
            before proceeding, we're happy to clarify.
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
        <div className="mt-14 mb-0 px-10 py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-primary mb-2">
              Get in Touch
            </p>
            <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2.5">
              Questions about these terms?
            </h3>
            <div className="flex flex-col gap-1 text-[13.5px] text-muted-foreground">
              <span><strong className="text-foreground font-semibold">Corehex Solutions</strong></span>
              <span>contact@corehexsolutions.com</span>
              <span>+91 98793 00929</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary-foreground text-[13.5px] font-semibold px-5 py-3 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity shrink-0"
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
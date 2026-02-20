import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Security & Infrastructure",
  description:
    "Dedicated database per tenant, edge-deployed infrastructure, full data export. Your data, your database, your uptime.",
};

const infrastructureBlocks = [
  {
    title: "Dedicated database per tenant",
    description:
      "Your catalog, your orders, your inventory history \u2014 all in an isolated database with point-in-time recovery. If something goes wrong, we can restore to the exact moment before it happened. Your data is durable, versioned, and yours alone.",
  },
  {
    title: "Fast everywhere your customers are",
    description:
      "Product images, storefront pages, and catalog data are served from over 300 locations worldwide. Your checkout page loads the same in Miami as it does in Portland. No regional bottleneck.",
  },
  {
    title: "Always-on operations",
    description:
      "The platform runs at the edge \u2014 close to your staff and your customers, not in a single data center across the country. Barcode scans, inventory lookups, and order processing respond in milliseconds.",
  },
];

const securityFeatures = [
  {
    title: "Access control",
    description:
      "Granular role-based permissions per user. Your inventory manager sees inventory. Your content editor sees the catalog. Nobody sees what they don\u2019t need.",
  },
  {
    title: "Encrypted credentials",
    description:
      "Staff passwords are protected with industry-standard encryption. Sessions are cryptographically signed. No plaintext, ever.",
  },
  {
    title: "Audit trails",
    description:
      "Every inventory movement, product change, and administrative action is logged with who did it and when. When something changes, you know exactly who changed it.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Hero
        headline="Your data. Your database. Your uptime."
        subheadline="RetailSpec is built on isolated, enterprise-grade infrastructure — not a shared database with your name on a row."
        actions={[{ label: "Request a Demo", href: "/contact" }]}
      />

      {/* Tenant Isolation */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Dedicated infrastructure per tenant.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Every RetailSpec tenant operates on its own database. Your inventory data, customer
              records, and order history are completely separated from every other tenant on the
              platform.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              This isn&apos;t a row in someone else&apos;s system. It&apos;s a separate database
              with its own performance, its own capacity, and its own recovery timeline. Another
              tenant&apos;s end-of-day rush doesn&apos;t touch your response times.
            </p>
          </div>
        </Container>
      </Section>

      {/* Infrastructure */}
      <Section>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Infrastructure that stays out of your way
          </h2>
          <FeatureGrid features={infrastructureBlocks} columns={3} />
        </Container>
      </Section>

      {/* Data Ownership */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Full export. Any time. No negotiation.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Your complete dataset — products, orders, customers, inventory history — is exportable
              as structured data at any point. If you leave, your data leaves with you. No
              extraction fees. No waiting period. No leverage.
            </p>
          </div>
        </Container>
      </Section>

      {/* Operational Security */}
      <Section>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Operational security
          </h2>
          <FeatureGrid features={securityFeatures} columns={3} />
        </Container>
      </Section>

      <CtaSection headline="Infrastructure that earns your confidence." />
    </>
  );
}

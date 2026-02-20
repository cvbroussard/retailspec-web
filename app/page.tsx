import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";
import { MetricCard } from "@/components/marketing/metric-card";

const platformPillars = [
  {
    title: "Inventory Intelligence",
    description:
      "Real-time stock visibility across every location and channel. Cycle counts, allocation, shrink tracking, and automated reorder points — not guesswork.",
    href: "/platform/inventory",
  },
  {
    title: "Unified Commerce",
    description:
      "One catalog. One order pipeline. POS, web, and wholesale channels share a single source of truth. No reconciliation. No drift.",
    href: "/platform/commerce",
  },
  {
    title: "Operational Control",
    description:
      "Purchase orders, receiving, transfers, vendor management, and cost tracking in one system. See the full lifecycle from supplier to shelf to sale.",
    href: "/platform/operations",
  },
];

const detailHooks = [
  { title: "Bulk catalog import", description: "10,000 SKUs onboarded in minutes, not months." },
  { title: "AI image management", description: "Auto-optimization, background removal, gallery generation." },
  { title: "SEO suite", description: "Structured data, core web vitals, content scoring per product." },
  { title: "B2B portal", description: "Wholesale pricing, company accounts, net terms." },
  { title: "Label & receipt printing", description: "Direct to thermal printers, no middleware." },
  { title: "Barcode everything", description: "Scan to receive, scan to count, scan to sell." },
  { title: "Promotions engine", description: "Stackable rules, scheduled campaigns, coupon tracking." },
  { title: "Customer intelligence", description: "Segments, purchase history, lifetime value, consent management." },
];

const trustCards = [
  { title: "Dedicated per tenant", description: "Isolated database, isolated performance." },
  { title: "Edge-deployed", description: "Fast everywhere, not just near the data center." },
  { title: "Your data, exportable", description: "Full data export at any time. No lock-in." },
];

const metrics = [
  { metric: "40,000+", description: "SKU catalogs managed across multiple locations with real-time sync." },
  { metric: "Multi-channel", description: "POS, web, and warehouse operating from one stock pool." },
  { metric: "Sub-second", description: "Barcode scan to inventory update, no waiting." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Your retail operation deserves real infrastructure."
        subheadline="RetailSpec unifies inventory, orders, and operations across every location and channel — without the six-month implementation."
        actions={[
          { label: "Request a Demo", href: "/contact" },
          { label: "See the Platform", href: "/platform/inventory", variant: "secondary" },
        ]}
      />

      {/* Social Proof Placeholder */}
      <div className="border-y border-gray-100 py-8">
        <Container>
          <p className="text-center text-sm text-gray-400 tracking-wide">
            Trusted by retailers operating at scale
          </p>
        </Container>
      </div>

      {/* Problem */}
      <Section variant="sage">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Five locations. Three systems. One spreadsheet holding it all together.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Your POS handles transactions. Your e-commerce platform handles online. Your warehouse
              runs on instinct. And somewhere between them, inventory counts diverge, transfers get
              lost, and shrink goes unnoticed until the quarterly review.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              You&apos;ve outgrown tools that were built for a single register.
            </p>
          </div>
        </Container>
      </Section>

      {/* Platform Pillars */}
      <Section>
        <Container>
          <FeatureGrid features={platformPillars} columns={3} />
        </Container>
      </Section>

      {/* Details That Compound */}
      <Section variant="sage">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            The details that compound
          </h2>
          <FeatureGrid features={detailHooks} columns={4} />
        </Container>
      </Section>

      {/* Differentiator */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              You shouldn&apos;t have to choose between simple and capable.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Small-business tools break when you add your fifth location. Enterprise platforms take
              six months to implement and a consultant on retainer to maintain.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              RetailSpec was built for the retailers in between — the ones operating at scale but
              moving at speed. Enterprise-grade infrastructure. Operational in days.
            </p>
          </div>
        </Container>
      </Section>

      {/* Infrastructure Trust */}
      <Section variant="sage">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Built for isolation. Built for scale.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Every tenant operates on dedicated database infrastructure. Your data isn&apos;t
              co-mingled with anyone else&apos;s. Your performance isn&apos;t affected by another
              tenant&apos;s traffic spike.
            </p>
          </div>
          <FeatureGrid features={trustCards} columns={3} />
        </Container>
      </Section>

      {/* Scale Proof */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {metrics.map((m) => (
                <MetricCard key={m.metric} metric={m.metric} description={m.description} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CtaSection headline="See what your operation looks like with real infrastructure." />
    </>
  );
}

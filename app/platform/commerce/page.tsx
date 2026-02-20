import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Unified Commerce",
  description:
    "One catalog, one order pipeline, one inventory pool. POS, web, and wholesale channels share a single source of truth.",
};

const sourceOfTruth = [
  {
    title: "Products",
    description:
      "One product record with rich attributes, variations, images, and pricing. Publish to web, POS, and B2B channels from one place. Change it once, it\u2019s changed everywhere.",
  },
  {
    title: "Orders",
    description:
      "Every order \u2014 regardless of origin \u2014 enters the same pipeline. In-store POS, web checkout, and wholesale portal all feed into a unified order management system. Fulfillment, allocation, and tracking in one view.",
  },
  {
    title: "Customers",
    description:
      "In-store purchasers and online shoppers merge into a single customer profile. Purchase history, preferences, and lifetime value span every touchpoint.",
  },
];

const channelCapabilities = [
  {
    title: "Web Storefront",
    description:
      "Fully integrated storefront with your branding. Product pages, collections, search, cart, and checkout \u2014 all powered by the same catalog and inventory your staff sees.",
  },
  {
    title: "POS Integration",
    description:
      "Clover and compatible POS terminals sync transactions, inventory, and product data bidirectionally. Sell in-store, see it online instantly.",
  },
  {
    title: "B2B / Wholesale Portal",
    description:
      "Company accounts, tiered pricing, net terms, and bulk ordering. Your wholesale buyers get a self-service portal without you building a second system.",
  },
];

export default function CommercePage() {
  return (
    <>
      <Hero
        headline="One catalog. Every channel. No reconciliation."
        subheadline="Your in-store, online, and wholesale operations share a single product catalog, a single order pipeline, and a single inventory pool."
        actions={[{ label: "Request a Demo", href: "/contact" }]}
      />

      {/* Fragmentation Problem */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Channel fragmentation is a compounding cost.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A product gets updated on the website but not in the POS. A price change goes live
              in-store but the wholesale portal still shows last quarter&apos;s rate. A customer
              orders online for pickup but the store doesn&apos;t have it — because the inventory
              systems don&apos;t agree.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Channel fragmentation isn&apos;t a minor inconvenience. It&apos;s a compounding
              operational cost.
            </p>
          </div>
        </Container>
      </Section>

      {/* Single Source of Truth */}
      <Section>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Single source of truth
          </h2>
          <FeatureGrid features={sourceOfTruth} columns={3} />
        </Container>
      </Section>

      {/* Channel Capabilities */}
      <Section alternate>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Channel capabilities
          </h2>
          <FeatureGrid features={channelCapabilities} columns={3} />
        </Container>
      </Section>

      <CtaSection headline="One operation. Not three pretending to be one." />
    </>
  );
}

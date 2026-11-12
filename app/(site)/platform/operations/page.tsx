import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Operational Control",
  description:
    "Manage the full retail supply chain in one system — purchasing, receiving, vendor relationships, cost tracking, and fulfillment.",
};

const purchasingFeatures = [
  {
    title: "Purchase Orders",
    description:
      "Create POs against vendors with line-item detail. Track status from draft to sent to partially received to complete. Cost and quantity variances surface automatically.",
  },
  {
    title: "Receiving Sessions",
    description:
      "Scan-based receiving against open POs. Partial receives, overages, and damages are handled in-flow. Inventory updates the moment you confirm — no batch processing.",
  },
];

const vendorFeatures = [
  {
    title: "Vendor Profiles",
    description:
      "Track every supplier with contact details, lead times, payment terms, and product assignments. See purchase history and cost trends per vendor.",
  },
  {
    title: "Cost Tracking",
    description:
      "Unit costs, landed costs, and margin calculations at the SKU level. Know your true fully-burdened cost of goods — not an approximation.",
  },
];

const fulfillmentFeatures = [
  {
    title: "Order Allocation",
    description:
      "The system selects the optimal fulfillment location based on stock availability and proximity. Split shipments when needed. Manual override when you know better.",
  },
  {
    title: "Ship & Pickup",
    description:
      "Fulfill for shipping or in-store pickup from the same interface. Print packing slips, update tracking, and notify customers automatically.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <Hero
        headline="From purchase order to shelf to register to doorstep."
        subheadline="Manage the full retail supply chain in one system — purchasing, receiving, vendor relationships, cost tracking, and fulfillment."
        actions={[{ label: "Request a Demo", href: "/contact" }]}
      />

      {/* Visibility Gap */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              The visibility gap
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              You issued a purchase order three weeks ago. Did it arrive? Was it received correctly?
              Did the costs match? Are those units on the shelf or still in the back room?
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Most retailers piece this together across email, spreadsheets, and memory. RetailSpec
              makes it one continuous workflow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Purchasing & Receiving */}
      <Section>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Purchasing & Receiving
          </h2>
          <FeatureGrid features={purchasingFeatures} columns={2} />
        </Container>
      </Section>

      {/* Vendor Management */}
      <Section alternate>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Vendor Management
          </h2>
          <FeatureGrid features={vendorFeatures} columns={2} />
        </Container>
      </Section>

      {/* Fulfillment */}
      <Section>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Fulfillment
          </h2>
          <FeatureGrid features={fulfillmentFeatures} columns={2} />
        </Container>
      </Section>

      <CtaSection headline="See the full picture. Not fragments of it." />
    </>
  );
}

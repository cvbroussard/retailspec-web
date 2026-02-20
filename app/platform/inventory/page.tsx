import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = {
  title: "Inventory Intelligence",
  description:
    "Real-time stock visibility across every location and channel. Cycle counts, allocation, shrink tracking, and automated reorder points.",
};

const precisionTools = [
  {
    title: "Cycle Counts",
    description:
      "Schedule rolling counts by location, category, or value tier. Staff counts on mobile, variances flag automatically. No more shutting down for a full physical inventory.",
  },
  {
    title: "Allocation & Transfers",
    description:
      "Allocate incoming stock before it arrives. Transfer between locations with full audit trails. The system suggests transfers based on sell-through velocity — you approve or override.",
  },
  {
    title: "Shrink Tracking",
    description:
      "Every variance is logged with reason codes. Track shrink by location, category, and time period. Spot patterns before they become write-offs.",
  },
  {
    title: "Automated Reorder Points",
    description:
      "Set min/max thresholds per SKU per location. The system generates purchase order suggestions when stock drops below threshold. Review and send — no manual counting.",
  },
];

export default function InventoryPage() {
  return (
    <>
      <Hero
        headline="Know what's on every shelf. In every location. Right now."
        subheadline="RetailSpec gives multi-location retailers a single, real-time view of inventory across stores, warehouses, and online channels — with the precision tools to keep it accurate."
        actions={[{ label: "Request a Demo", href: "/contact" }]}
      />

      {/* Core Problem */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              The silent margin killer
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Inventory inaccuracy is the silent margin killer. A stockout at Location 3 while
              Location 1 is overstocked. A transfer that happened on paper but never in the system.
              Shrink that nobody noticed until the annual count.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              These aren&apos;t software problems. They&apos;re operational problems that software
              should have solved by now.
            </p>
          </div>
        </Container>
      </Section>

      {/* Real-Time Visibility */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              One stock pool. Every channel.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Web orders, POS transactions, warehouse movements, and manual adjustments all write to
              the same ledger. There&apos;s no sync delay. No overnight batch job. When a unit sells
              in-store, your website reflects it immediately.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Every location, every channel, one number.
            </p>
          </div>
        </Container>
      </Section>

      {/* Precision Tools */}
      <Section alternate>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            Precision tools
          </h2>
          <FeatureGrid features={precisionTools} columns={2} />
        </Container>
      </Section>

      {/* The Ledger */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Every movement. Every reason. Every timestamp.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RetailSpec maintains a complete inventory ledger — not just current quantities, but the
              full history of every unit movement. Sales, returns, transfers, adjustments, receiving,
              and shrink events are all recorded with user attribution and timestamps.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              When the number is wrong, you can trace exactly when and why it diverged.
            </p>
          </div>
        </Container>
      </Section>

      {/* Integration Points */}
      <Section alternate>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Works with your existing hardware.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Barcode scanners, thermal label printers, and POS terminals connect directly. No
              proprietary hardware required. Print shelf labels, receiving labels, and transfer
              manifests from any station.
            </p>
          </div>
        </Container>
      </Section>

      <CtaSection headline="Stop guessing. Start knowing." />
    </>
  );
}

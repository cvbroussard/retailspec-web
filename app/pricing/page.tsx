import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/marketing/faq-accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing. No per-seat extraction. Every plan includes the full platform — you pay for scale and support, not feature unlocks.",
};

const tiers = [
  {
    name: "Growth",
    description: "For retailers establishing multi-location operations.",
    features: [
      "Up to 5 locations",
      "Up to 10,000 SKUs",
      "Dedicated database",
      "Email support",
    ],
    cta: "Request a Demo",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "For retailers operating at scale.",
    features: [
      "Up to 20 locations",
      "Up to 50,000 SKUs",
      "Dedicated database",
      "Priority support",
      "B2B portal",
      "API access",
    ],
    cta: "Request a Demo",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For retailers with complex operational requirements.",
    features: [
      "Unlimited locations",
      "Unlimited SKUs",
      "Dedicated infrastructure with SLA",
      "Dedicated account manager",
      "Custom integrations",
      "Data residency options",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

const faqItems = [
  {
    question: "Is there a free trial?",
    answer:
      "We offer guided demos and sandbox environments. RetailSpec is operational infrastructure \u2014 we\u2019d rather set you up properly than hand you a login and hope for the best.",
  },
  {
    question: "Are there per-seat fees?",
    answer:
      "No. Add as many staff users as your operation requires. You\u2019re paying for the platform, not for headcount.",
  },
  {
    question: "What happens if I outgrow my tier?",
    answer:
      "You upgrade. Your data, configuration, and workflows carry over seamlessly. No migration, no downtime.",
  },
  {
    question: "Can I export my data?",
    answer:
      "At any time. Full structured export of your entire dataset. No fees, no waiting period.",
  },
  {
    question: "What\u2019s the contract term?",
    answer:
      "Month-to-month available on all plans. Annual contracts available at a discount.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        headline="Transparent pricing. No per-seat extraction."
        subheadline="Every plan includes the full platform. You\u2019re paying for scale and support — not for unlocking features."
      />

      {/* Philosophy */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              We don&apos;t gate features behind tiers. Every RetailSpec tenant gets dedicated
              infrastructure, the full product catalog system, inventory management, and unified
              commerce capabilities from day one.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              What scales with your plan is volume, locations, and the level of support behind you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Tier Comparison */}
      <Section alternate>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border bg-white p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-sage ring-1 ring-sage"
                    : "border-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                <p className="mt-6 text-3xl font-semibold text-gray-900">Contact us</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg
                        className="h-5 w-5 text-sage flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={tier.href}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-8">
              Frequently asked questions
            </h2>
            <FaqAccordion items={faqItems} />
          </div>
        </Container>
      </Section>
    </>
  );
}

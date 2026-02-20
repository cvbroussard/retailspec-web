import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/marketing/feature-grid";

export const metadata: Metadata = {
  title: "About",
  description:
    "RetailSpec was born from real retail operations — not a lab. Every feature exists because an operator needed it.",
};

const principles = [
  {
    title: "Operators deserve real tools.",
    description:
      "Not consumer software with a \u201Cbusiness\u201D label. Infrastructure that matches the complexity of what you actually do.",
  },
  {
    title: "Your data is yours.",
    description:
      "Isolated. Exportable. Never leveraged against you. Vendor lock-in is a business model. It\u2019s not ours.",
  },
  {
    title: "Complexity should be the platform\u2019s problem.",
    description:
      "Multi-location inventory, channel unification, and operational reporting are hard. The software should absorb that complexity \u2014 not pass it to your staff.",
  },
  {
    title: "Immediate support, built in.",
    description:
      "Every user has a built-in assistant they can ask anything \u2014 about their data, their operations, or how to do something in the platform. No ticket queues. No knowledge base scavenger hunts. Just ask.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Built from the floor up."
        subheadline="RetailSpec was born from real retail operations — not a lab. Every feature exists because an operator needed it."
      />

      {/* Origin Story */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              Retail software is typically built by people who&apos;ve never counted inventory at 6
              AM, reconciled a POS discrepancy at close, or explained to a vendor why their shipment
              was short.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              RetailSpec was different from the start. It was built inside a retail operation, under
              the same pressures it now solves for — margin targets, inventory accuracy,
              multi-location coordination, and the daily reality of keeping a retail business
              running.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              That operational DNA is in every feature. Nothing was built on speculation. Everything
              was built on need.
            </p>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section alternate>
        <Container>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
            What we believe
          </h2>
          <FeatureGrid features={principles} columns={2} />
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
              Interested in joining us?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We&apos;re building retail operations infrastructure for the next generation of
              retailers. If that sounds like your kind of problem, get in touch.
            </p>
            <p className="mt-6">
              <a
                href="mailto:careers@retailspec.com"
                className="text-sage hover:text-sage-hover font-medium transition-colors"
              >
                careers@retailspec.com
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

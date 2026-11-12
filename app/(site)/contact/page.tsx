import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and we\u2019ll schedule a walkthrough tailored to your setup.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 gradient-hero">
        <Container>
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-gray-900">
              Let&apos;s talk about your operation.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed animate-fade-in-up-delay-1">
              Tell us a bit about your business and we&apos;ll schedule a walkthrough tailored to
              your setup.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32 bg-sage-50">
        <Container>
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl bg-white p-8 sm:p-10 shadow-md">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

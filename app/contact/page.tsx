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
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Let&apos;s talk about your operation.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Tell us a bit about your business and we&apos;ll schedule a walkthrough tailored to
              your setup.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

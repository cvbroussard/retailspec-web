import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  headline: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CtaSection({
  headline,
  buttonLabel = "Request a Demo",
  buttonHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            {headline}
          </h2>
          <div className="mt-8">
            <Button href={buttonHref}>{buttonLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

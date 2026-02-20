import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface HeroProps {
  headline: string;
  subheadline: string;
  actions?: HeroAction[];
}

export function Hero({ headline, subheadline, actions }: HeroProps) {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            {subheadline}
          </p>
          {actions && actions.length > 0 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {actions.map((action) => (
                <Button key={action.label} href={action.href} variant={action.variant || "primary"}>
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

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
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 gradient-hero">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-gray-900 animate-fade-in-up">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed animate-fade-in-up-delay-1">
            {subheadline}
          </p>
          {actions && actions.length > 0 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
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

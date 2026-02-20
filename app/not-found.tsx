import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-sage">404</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Back to home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

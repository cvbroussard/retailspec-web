import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to access detailed RetailSpec platform documentation and resources.",
  robots: { index: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const params = await searchParams;

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <div className="mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Sign in to RetailSpec
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Access platform documentation and resources
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <LoginForm callbackUrl={params.callbackUrl || "/"} />
          </div>
        </div>
      </Container>
    </section>
  );
}

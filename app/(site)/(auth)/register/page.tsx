import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create a free RetailSpec account to access platform documentation and resources.",
  robots: { index: false },
};

export default function RegisterPage() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <div className="mx-auto max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Create your free account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Unlock detailed platform documentation, feature comparisons, and
              integration guides
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-1">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <RegisterForm />
            </div>

            {/* Value proposition */}
            <div className="rounded-xl border border-sage/20 bg-sage-50 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                What you&apos;ll unlock
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 text-sage mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Detailed feature comparisons and integration guides
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 text-sage mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ROI calculator and implementation timelines
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 text-sage mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Technical architecture overviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

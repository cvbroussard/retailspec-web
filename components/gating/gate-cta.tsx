import { Button } from "@/components/ui/button";

interface GateCtaProps {
  level: "guest" | "prospect";
  isAuthenticated: boolean;
}

export function GateCta({ level, isAuthenticated }: GateCtaProps) {
  // Anonymous user → encourage registration
  if (!isAuthenticated) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage-light">
          <svg
            className="h-6 w-6 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Create a free account to continue
        </h3>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
          Access detailed platform documentation, feature comparisons, and
          integration guides.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/register" variant="primary">
            Create Free Account
          </Button>
          <Button href="/login" variant="ghost">
            Already have an account? Sign in
          </Button>
        </div>
      </div>
    );
  }

  // Authenticated guest → prospect-level content gate
  if (level === "prospect") {
    return (
      <div className="rounded-xl border border-sage/20 bg-sage-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
          <svg
            className="h-6 w-6 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Enterprise content
        </h3>
        <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
          This content is available to vetted partners and enterprise prospects.
          Request access to unlock architecture documentation, security
          whitepapers, and deep-dive technical guides.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="primary">
            Request Access
          </Button>
        </div>
      </div>
    );
  }

  return null;
}

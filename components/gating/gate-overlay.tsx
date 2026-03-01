import { Button } from "@/components/ui/button";

interface GateOverlayProps {
  preview: React.ReactNode;
  level: "guest" | "prospect";
  isAuthenticated: boolean;
}

export function GateOverlay({
  preview,
  level,
  isAuthenticated,
}: GateOverlayProps) {
  return (
    <div className="relative">
      {/* Preview content with fade */}
      <div className="relative overflow-hidden max-h-48">
        <div className="text-gray-600 text-sm leading-relaxed">{preview}</div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Gate CTA overlay */}
      <div className="relative -mt-8 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-sm p-6 text-center shadow-sm">
        {!isAuthenticated ? (
          <>
            <p className="text-sm font-medium text-gray-900">
              Create a free account to read more
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Unlock detailed documentation and technical guides
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Button href="/register" variant="primary">
                Register Free
              </Button>
              <Button href="/login" variant="ghost">
                Sign in
              </Button>
            </div>
          </>
        ) : level === "prospect" ? (
          <>
            <p className="text-sm font-medium text-gray-900">
              Enterprise content — request access
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Available to vetted partners and enterprise prospects
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="primary">
                Request Access
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

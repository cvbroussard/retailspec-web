import { auth } from "@/lib/auth";
import { canAccess, type GateLevel } from "@/lib/auth/roles";
import { GateCta } from "./gate-cta";
import { GateOverlay } from "./gate-overlay";

interface GatedContentProps {
  children: React.ReactNode;
  level: GateLevel;
  contentKey: string;
  preview?: React.ReactNode;
  variant?: "cta" | "overlay";
}

async function logContentAccess(
  prospectId: number,
  contentKey: string,
  gateLevel: string
) {
  try {
    const sql = (await import("@/lib/db")).default;
    await sql`
      INSERT INTO content_access_log (prospect_id, content_key, gate_level)
      VALUES (${prospectId}, ${contentKey}, ${gateLevel})
    `;
  } catch {
    // Non-critical — don't block rendering
  }
}

export async function GatedContent({
  children,
  level,
  contentKey,
  preview,
  variant = "cta",
}: GatedContentProps) {
  if (level === "public") return <>{children}</>;

  const session = await auth();
  const userRole = session?.user?.role || null;

  if (canAccess(userRole, level)) {
    // Log access (fire and forget)
    if (session?.user?.id) {
      logContentAccess(parseInt(session.user.id), contentKey, level);
    }
    return <>{children}</>;
  }

  // User lacks access — show gate
  const isAuthenticated = !!session?.user;

  if (variant === "overlay" && preview) {
    return (
      <GateOverlay
        preview={preview}
        level={level as "guest" | "prospect"}
        isAuthenticated={isAuthenticated}
      />
    );
  }

  return (
    <GateCta
      level={level as "guest" | "prospect"}
      isAuthenticated={isAuthenticated}
    />
  );
}

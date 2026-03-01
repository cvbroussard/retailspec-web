export const ROLES = {
  GUEST: "guest",
  PROSPECT: "prospect",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export type GateLevel = "public" | "guest" | "prospect";

const ROLE_LEVEL: Record<string, number> = {
  guest: 1,
  prospect: 2,
};

export function getRoleLevel(role: string | null | undefined): number {
  if (!role) return 0; // anonymous
  return ROLE_LEVEL[role] ?? 0;
}

export function hasMinimumRole(
  userRole: string | null | undefined,
  requiredRole: string
): boolean {
  return getRoleLevel(userRole) >= getRoleLevel(requiredRole);
}

export function canAccess(
  userRole: string | null | undefined,
  gateLevel: GateLevel
): boolean {
  if (gateLevel === "public") return true;
  if (!userRole) return false;
  return hasMinimumRole(userRole, gateLevel);
}

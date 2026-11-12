/**
 * THE PUBLIC SECTION (operator 11-12, RULED permanent): these folders are always open — whatever the pre-launch
 * password says — for reviewers (Clover, Twilio / carriers) and anyone else. URLs here never break: a page that moves
 * keeps a permanent redirect. Legal text comes from Control → Agreements (platform), one source with version history.
 */
export const PUBLIC_SECTIONS = ["/legal", "/help", "/sms"] as const;

export const isPublicPath = (pathname: string) => PUBLIC_SECTIONS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

export const PLATFORM_ORIGIN = process.env.PLATFORM_ORIGIN || "https://platform.retailspec.com";

export const LEGAL_DOCS: { key: string; name: string }[] = [
  { key: "terms", name: "Terms of Service" },
  { key: "privacy", name: "Privacy Policy" },
  { key: "dpa", name: "Data Processing Agreement" },
  { key: "acceptable_use", name: "Acceptable Use Policy" },
];

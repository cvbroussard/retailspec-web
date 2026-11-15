import { NextResponse } from "next/server";
import { PLATFORM_ORIGIN } from "@/lib/public-pages";

/** /demo's form → the platform's demo requests (Control → Sales → Demo bookings; lib/control/prospects on the platform). */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const r = await fetch(`${PLATFORM_ORIGIN}/api/public/demo`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": req.headers.get("x-forwarded-for") || "" },
    body: JSON.stringify(b ?? {}),
  }).catch(() => null);
  const j = await r?.json().catch(() => null);
  return NextResponse.json(j || { error: "We couldn't reach our booking service. Please try again." }, { status: r?.status || 502 });
}

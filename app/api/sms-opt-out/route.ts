import { NextResponse } from "next/server";
import { PLATFORM_ORIGIN } from "@/lib/public-pages";

/** /sms/opt-out's form → the platform's opt-out list (the platform keeps it; every text checks it before sending). */
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const r = await fetch(`${PLATFORM_ORIGIN}/api/public/sms/opt-out`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": req.headers.get("x-forwarded-for") || "" },
    body: JSON.stringify({ phone: String(b?.phone || ""), source: "web:retailspec.com/sms/opt-out" }),
  }).catch(() => null);
  const j = await r?.json().catch(() => null);
  return NextResponse.json(j || { error: "Couldn't reach the opt-out service." }, { status: r?.status || 502 });
}

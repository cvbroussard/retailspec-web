import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * Refresh /hardware from the platform's hardware catalogue now, instead of within the hour (operator 11-15). Called by
 * the platform whenever Control → Platform → Hardware catalogue changes, and by its "Refresh the marketing site" button.
 * No secret: all it does is re-read a public feed, so the worst a stranger can do is make us re-read it sooner.
 */
export async function POST() {
  revalidateTag("hardware", { expire: 0 });
  return NextResponse.json({ ok: true, refreshed: "hardware" });
}

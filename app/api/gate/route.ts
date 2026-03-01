import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "site_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const body = await request.formData();
  const submitted = body.get("password") as string;
  const redirect = (body.get("redirect") as string) || "/";

  if (submitted === password) {
    const response = NextResponse.redirect(new URL(redirect, request.url));
    response.cookies.set(COOKIE_NAME, password, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });
    return response;
  }

  // Wrong password — redirect back with error flag
  return NextResponse.redirect(new URL("/?error=1", request.url));
}

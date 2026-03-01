import { NextRequest, NextResponse } from "next/server";

/**
 * Pre-launch password gate.
 *
 * Protects marketing pages while leaving select pages accessible.
 * Remove this file entirely when ready to go public.
 *
 * Set SITE_PASSWORD in Vercel env vars (or .env.local).
 */

const PUBLIC_PATHS = [
  "/robots.txt",
  "/sitemap.xml",
  "/api/",
];

const COOKIE_NAME = "site_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let public paths through
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // No password set = no gate
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  // Check for valid access cookie
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === password) {
    return NextResponse.next();
  }

  // Handle password submission
  if (request.method === "POST" && pathname === "/gate") {
    return handleGateSubmit(request, password);
  }

  // Show password form
  return new NextResponse(gateHtml(pathname), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

async function handleGateSubmit(request: NextRequest, password: string) {
  const body = await request.formData();
  const submitted = body.get("password") as string;

  if (submitted === password) {
    const redirect = (body.get("redirect") as string) || "/";
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

  return new NextResponse(gateHtml("/", true), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function gateHtml(redirect: string, error = false): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RetailSpec</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #fff; color: #111; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .gate { max-width: 360px; width: 100%; padding: 2rem; }
    h1 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
    p { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    input[type="password"] { width: 100%; padding: 0.625rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; outline: none; }
    input[type="password"]:focus { border-color: #8FA888; box-shadow: 0 0 0 2px rgba(143,168,136,0.2); }
    button { width: 100%; margin-top: 0.75rem; padding: 0.625rem; background: #8FA888; color: #fff; border: none; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    button:hover { background: #7a9477; }
    .error { color: #dc2626; font-size: 0.8rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="gate">
    <h1>RetailSpec</h1>
    <p>This site is not yet public. Enter the password to continue.</p>
    <form method="POST" action="/gate">
      <input type="hidden" name="redirect" value="${redirect}" />
      <input type="password" name="password" placeholder="Password" autofocus required />
      <button type="submit">Enter</button>
      ${error ? '<p class="error">Incorrect password.</p>' : ""}
    </form>
  </div>
</body>
</html>`;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GATE_PUBLIC_PATHS = [
  "/robots.txt",
  "/sitemap.xml",
  "/api/",
];

const COOKIE_NAME = "site_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // --- Pre-launch password gate ---
  const sitePassword = process.env.SITE_PASSWORD;
  if (sitePassword) {
    const isPublic = GATE_PUBLIC_PATHS.some((p) => pathname.startsWith(p));
    const hasCookie = request.cookies.get(COOKIE_NAME)?.value === sitePassword;

    if (!isPublic && !hasCookie) {
      // Check for password submission via GET query param
      const submitted = searchParams.get("_pw");
      if (submitted === sitePassword) {
        const clean = new URL(pathname, request.url);
        const response = NextResponse.redirect(clean);
        response.cookies.set(COOKIE_NAME, sitePassword, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: COOKIE_MAX_AGE,
          path: "/",
        });
        return response;
      }

      // Show password form
      const error = submitted !== null && submitted !== sitePassword;
      return new NextResponse(gateHtml(pathname, error), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }

  // --- Auth context ---
  const session = await auth();

  const response = NextResponse.next();

  // Pass auth context to server components via headers
  if (session?.user) {
    response.headers.set("x-user-id", session.user.id || "");
    response.headers.set("x-user-role", session.user.role || "guest");
  } else {
    response.headers.set("x-user-role", "anonymous");
  }

  return response;
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
    <form method="GET" action="${redirect}">
      <input type="hidden" name="_pw" id="pw-hidden" />
      <input type="password" id="pw-input" placeholder="Password" autofocus required />
      <button type="submit">Enter</button>
      ${error ? '<p class="error">Incorrect password.</p>' : ""}
    </form>
    <script>
      document.querySelector('form').addEventListener('submit', function(e) {
        document.getElementById('pw-hidden').value = document.getElementById('pw-input').value;
      });
    </script>
  </div>
</body>
</html>`;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo).*)",
  ],
};

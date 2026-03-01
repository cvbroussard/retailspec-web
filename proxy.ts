import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
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

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo|robots.txt|sitemap.xml).*)",
  ],
};

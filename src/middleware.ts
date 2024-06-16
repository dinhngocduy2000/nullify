import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("accessToken");
  const response = NextResponse.next();
  if (!cookies && !request.nextUrl.pathname.startsWith("/login")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }
  return response;
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

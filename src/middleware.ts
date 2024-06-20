import { NextRequest, NextResponse } from "next/server";
import { COOKIE_KEYS } from "./library/enum/cookie-keys";
import { URL_ENUM } from "./library/enum/url-enum";

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
  const response = NextResponse.next();
  if (!cookies && !request.nextUrl.pathname.startsWith(URL_ENUM.LOGIN)) {
    const url = request.nextUrl.clone();
    url.pathname = URL_ENUM.LOGIN;
    return NextResponse.rewrite(url);
  } else if (request.nextUrl.pathname.startsWith(URL_ENUM.LOGIN) && cookies) {
    response.cookies.delete(COOKIE_KEYS.ACCESS_TOKEN);
    response.cookies.delete(COOKIE_KEYS.NEXT_AUTH_SESSION);
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
    "/((?!api|_next/static|_next/image|icon.ico).*)",
  ],
};

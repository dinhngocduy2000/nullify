import { NextRequest, NextResponse } from "next/server";
import { COOKIE_KEYS } from "./library/enum/cookie-keys";
import { URL_ENUM } from "./library/enum/url-enum";
import { REFRESH_TOKEN_INTERFACE } from "./library/interface/auth/refresh-token";

const getRefreshToken = async (request: NextRequest) => {
  const refreshToken = request.cookies.get(COOKIE_KEYS.REFRESH_TOKEN)?.value;
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken ?? "",
      client_id: process.env.CLIENT_ID ?? "",
      client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    }),
  };

  const body = await fetch(url, payload);
  const refresh_token: REFRESH_TOKEN_INTERFACE = await body.json();
  console.log("====================================");
  console.log("GETTING REFRESHED IN MIDDLEWARE: ", refresh_token.access_token);
  console.log("====================================");
  return refresh_token;
};
export async function middleware(request: NextRequest) {
  const cookies = request.cookies.get(COOKIE_KEYS.ACCESS_TOKEN);
  const expires_at = Number(request.cookies.get(COOKIE_KEYS.EXPIRES_AT)?.value);
  const response = NextResponse.next();

  if (
    (!cookies || Date.now() > expires_at || !expires_at) &&
    !request.nextUrl.pathname.startsWith(URL_ENUM.LOGIN)
  ) {
    const refreshToken = request.cookies.get(COOKIE_KEYS.REFRESH_TOKEN)?.value;

    if (!refreshToken) {
      const url = request.nextUrl.clone();
      url.pathname = URL_ENUM.LOGIN;
      return NextResponse.rewrite(url);
    } else if (refreshToken && expires_at && Date.now() < expires_at) {
      console.log("====================================");
      console.log("First time Login after Logout?");
      console.log("====================================");
      if (!cookies) {
        // if somehow cookies is gone after logging in
        const url = request.nextUrl.clone();
        url.pathname = URL_ENUM.LOGIN;
        return NextResponse.rewrite(url);
      }
      return response;
    } else {
      const refreshed_token = await getRefreshToken(request);
      response.cookies.set(
        COOKIE_KEYS.EXPIRES_AT,
        (Date.now() + refreshed_token.expires_in * 1000).toString(),
      );
      response.cookies.set(
        COOKIE_KEYS.ACCESS_TOKEN,
        refreshed_token.access_token,
      );
      return response;
    }
  } else if (request.nextUrl.pathname.startsWith(URL_ENUM.LOGIN) && cookies) {
    response.cookies.delete(COOKIE_KEYS.ACCESS_TOKEN);
    response.cookies.delete(COOKIE_KEYS.NEXT_AUTH_SESSION);
    response.cookies.delete(COOKIE_KEYS.REFRESH_TOKEN);
    response.cookies.delete(COOKIE_KEYS.EXPIRES_AT);
    return response;
  }
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

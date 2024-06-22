// lib/authOptions.js
import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { cookies } from "next/headers";
import { COOKIE_KEYS } from "../enum/cookie-keys";
import moment from "moment";
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-top-read",
  "user-follow-read",
  "user-follow-modify",
];
export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes.join(
        ","
      )}`,
      clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    }),
    // Add more providers here
  ],
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log("====================================");
        console.log("token: ", token, " account: ", account);
        console.log("====================================");
        token.expires_at = account.expires_at;
        token.access_token = account.access_token;

        cookies().set(COOKIE_KEYS.ACCESS_TOKEN, account.access_token ?? "");

        cookies().set(COOKIE_KEYS.REFRESH_TOKEN, account.refresh_token ?? "");
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      };
    },
  },

  // Configure other options as needed
};

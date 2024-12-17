import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../Providers/authProvider";
import Providers from "../Providers/provider";
import { CookiesProvider } from "next-client-cookies/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuliplayer | Music Player Powered by Spotify",
  description:
    "Nuliplayer is a modern music player that integrates seamlessly with Spotify. Enjoy your favorite tracks, discover new music, and create personalized playlists with an intuitive and responsive interface.",
  keywords: [
    "Nuliplayer",
    "Spotify music player",
    "modern music player",
    "Spotify integration",
    "online music streaming",
    "create playlists",
    "discover new music",
    "responsive music player",
  ],
  openGraph: {
    title: "Nuliplayer | Music Player Powered by Spotify",
    description:
      "Stream your favorite Spotify tracks effortlessly with Nuliplayer. Explore new music, manage playlists, and enjoy a seamless audio experience.",
    url: "https://nullify-eight.vercel.app/", // Replace with your actual URL
    siteName: "Nuliplayer",
    images: [
      {
        url: "/images/nuliplayer-thumbnail.png", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Nuliplayer Music Player Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuliplayer | Music Player Powered by Spotify",
    description:
      "Discover and stream your favorite tracks with Nuliplayer, the ultimate music player built on Spotify's platform.",
    images: ["/images/nuliplayer-thumbnail.png"], // Replace with your image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mR4qYmtt6qpoWPEbihH5MBmLrmkuuUpYfsSH7gcXKE0"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <CookiesProvider>{children}</CookiesProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

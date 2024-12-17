import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SidebarComponent from "@/components/Sidebar";
import FooterComponent from "@/components/FooterComponent";
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

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <main className="box-border flex h-screen w-screen justify-center">
          <section className="my-auto box-border flex h-[calc(100vh_-_16px)] w-[calc(100vw_-_16px)] gap-2">
            <SidebarComponent />
            <main className="flex h-full flex-1 flex-col overflow-auto rounded-lg bg-default">
              <div className="block">{children}</div>
              <FooterComponent />
            </main>
          </section>
        </main>
      </body>
    </html>
  );
}

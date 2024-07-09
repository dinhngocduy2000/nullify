import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { CookiesProvider } from "next-client-cookies/server";
import SidebarComponent from "@/components/Sidebar";
import AuthProvider from "@/Providers/authProvider";
import Providers from "@/Providers/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nullify",
  description: "A music player based on Spotify!",
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="box-border flex h-screen w-screen justify-center">
          <div className="my-auto box-border flex h-[calc(100vh_-_16px)] w-[calc(100vw_-_16px)] gap-2">
            <SidebarComponent />
            <div className="flex h-full flex-1 overflow-auto rounded-lg bg-default">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

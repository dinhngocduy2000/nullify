import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../Providers/authProvider";
import Providers from "../Providers/provider";
import { CookiesProvider } from "next-client-cookies/server";
import SidebarComponent from "@/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nullify",
  description: "A music player based on Spotify!",
  icons: {
    icon: "./icon.ico",
    shortcut: "./icon.ico",
    apple: "./apple-icon.png",
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

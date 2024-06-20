import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./authProvider";
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
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

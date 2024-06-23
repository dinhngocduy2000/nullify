import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nullify - Login",
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
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-green-400 to-slate-900">
      {children}
    </div>
  );
}

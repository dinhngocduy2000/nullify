import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nullifier - Login",
  description: "Login to boost you high!",
  icons: {
    icon: "./icon.ico",
    shortcut: "./icon.ico",
    apple: "./apple-icon.png",
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-indigo-500 via-indigo-900 to-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}

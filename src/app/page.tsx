import TestingIndex from "@/components/TestingLogout";
import HomePage from "./(home)/HomePage";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Suspense fallback="Loading...">
        <HomePage />
      </Suspense>
      <TestingIndex />
    </main>
  );
}

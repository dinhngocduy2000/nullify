import TestingIndex from "@/components/TestingLogout";
import HomePage from "./(home)/HomePage";
import { Suspense } from "react";
import { fetchCurrentUser } from "@/networking/usersAPI";

export default async function Home() {
  const userProfile = await fetchCurrentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Suspense fallback="Loading...">
        <HomePage />
      </Suspense>
      <TestingIndex />
    </main>
  );
}

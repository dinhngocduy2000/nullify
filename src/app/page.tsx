import TestingIndex from "@/components/TestingLogout";
import { Suspense } from "react";
import { fetchCurrentUser } from "@/networking/usersAPI";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "@/library/enum/query-keys";
import TestHomePage from "./home/(components)/HomePage";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => fetchCurrentUser(),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback="Loading...">
          <TestHomePage />
        </Suspense>
      </HydrationBoundary>

      <TestingIndex />
    </main>
  );
}

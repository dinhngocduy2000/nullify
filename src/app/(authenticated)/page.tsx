import TestingIndex from "@/components/TestingLogout";
import { Suspense } from "react";
import NewReleasesComponent from "./home/(components)/NewReleases";
import NewReleasesLoading from "./home/(components)/NewReleases/loading";

export default async function Home() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: [QUERY_KEYS.PROFILE],
  //   queryFn: () => fetchCurrentUser(),
  // });

  return (
    <main className="flex h-full flex-col p-4">
      <>
        <p className="mb-2 text-xl font-semibold">New Releases Albums</p>
        <Suspense fallback={<NewReleasesLoading />}>
          <NewReleasesComponent />
        </Suspense>
      </>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback="Loading...">
          <TestHomePage />
        </Suspense>
      </HydrationBoundary> */}

      <TestingIndex />
    </main>
  );
}

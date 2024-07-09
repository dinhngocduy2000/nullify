import TestingIndex from "@/components/TestingLogout";
import { Suspense } from "react";
import NewReleasesComponent from "./home/(components)/NewReleases";
import NewReleasesLoading from "./home/(components)/NewReleases/loading";
import Link from "next/link";

export default async function Home() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: [QUERY_KEYS.PROFILE],
  //   queryFn: () => fetchCurrentUser(),
  // });

  return (
    <div className="flex h-full w-full flex-1 flex-col p-4">
      <Suspense fallback={<NewReleasesLoading />}>
        <NewReleasesComponent />
      </Suspense>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback="Loading...">
          <TestHomePage />
        </Suspense>
      </HydrationBoundary> */}

      <TestingIndex />
    </div>
  );
}

import { Suspense } from "react";
import NewReleasesComponent from "./home/(components)/(new-releases)";
import ListSpotifyItemsLoading from "@/components/ListSpotifyItems/loading";
import FeaturedPlaylistsComponent from "./home/(components)/(featured-playlists)";
import CategoriesPlaylist from "./home/(components)/(category-playlists)";

export default async function Home() {
  // await queryClient.prefetchQuery({
  //   queryKey: [QUERY_KEYS.PROFILE],
  //   queryFn: () => fetchCurrentUser(),
  // });
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-2 p-4">
      <Suspense fallback={<ListSpotifyItemsLoading />}>
        <NewReleasesComponent />
      </Suspense>
      <Suspense fallback={<ListSpotifyItemsLoading />}>
        <FeaturedPlaylistsComponent />
      </Suspense>
      <Suspense fallback={<ListSpotifyItemsLoading />}>
        <CategoriesPlaylist />
      </Suspense>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback="Loading...">
          <TestHomePage />
        </Suspense>
      </HydrationBoundary> */}

      {/* <TestingIndex /> */}
    </div>
  );
}

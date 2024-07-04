import { fetchFollowedArtist, fetchUserTopItems } from "@/networking/usersAPI";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "@/library/enum/query-keys";
import ListLibraryItems from "./ListLibraryItems";

type Props = {};
const queryClient = new QueryClient();
const prefetchFollowedArtists = async () => {
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.FOLLOWED_ARTIST],
    queryFn: fetchFollowedArtist,
  });
};

const prefetchTopAlbums = async () => {
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TOP_ALBUMS],
    queryFn: () => fetchUserTopItems("tracks"),
  });
};
const LibraryListComponent = async (props: Props) => {
  const [] = await Promise.all([
    prefetchFollowedArtists(),
    prefetchTopAlbums(),
  ]);

  return (
    <div className="relative w-full flex-1 overflow-hidden rounded-lg bg-default pb-4 hover:overflow-auto">
      <div className="sticky top-0 z-10 flex w-full items-center justify-between bg-default p-4 pr-2">
        <div className="flex items-center gap-4">
          <Square3Stack3DIcon width={20} height={20} className="text-default" />
          <p className="text-sm font-semibold text-default">Your Library</p>
        </div>
        <PlusIcon className="box-border h-[30px] min-h-[30px] w-[30px] min-w-[30px] rounded-full bg-opacity-10 p-1 text-default hover:cursor-pointer hover:bg-[#2b2b2b] hover:text-white" />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListLibraryItems />
      </HydrationBoundary>
    </div>
  );
};

export default LibraryListComponent;

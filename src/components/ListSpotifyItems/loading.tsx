import React from "react";
import SpotifyItemSkeletonComponent from "../SpotifyItem/loading";

type Props = {};

const ListSpotifyItemsLoading = (props: Props) => {
  return (
    <div className="h-[300px] w-full">
      <div className="flex w-full gap-4 overflow-x-auto">
        <SpotifyItemSkeletonComponent />
        <SpotifyItemSkeletonComponent />
        <SpotifyItemSkeletonComponent />
        <SpotifyItemSkeletonComponent />
      </div>
    </div>
  );
};

export default ListSpotifyItemsLoading;

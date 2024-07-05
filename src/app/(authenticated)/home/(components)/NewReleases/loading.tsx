import SpotifyItemSkeletonComponent from "@/components/SpotifyItem/loading";
import React from "react";

type Props = {};

const NewReleasesLoading = (props: Props) => {
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

export default NewReleasesLoading;

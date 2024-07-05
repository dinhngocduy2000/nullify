import React from "react";

type Props = {};

const SpotifyItemSkeletonComponent = (props: Props) => {
  return (
    <div>
      <div className="h-[150px] w-[150px] animate-pulse rounded-lg bg-slate-800"></div>
      <div className="my-2 h-[20px] w-[100px] animate-pulse rounded-lg bg-slate-800"></div>
      <div className="my-2 h-[20px] w-[150px] animate-pulse rounded-lg bg-slate-800"></div>
    </div>
  );
};

export default SpotifyItemSkeletonComponent;

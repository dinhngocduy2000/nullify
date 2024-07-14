import Image from "next/image";
import React from "react";
import NullifyIcon from "../../library/assets/svgs/nullify-icon.svg";
import ListSpotifyItems from "../ListSpotifyItems";
import ListSpotifyItemsLoading from "../ListSpotifyItems/loading";
type Props = {};

const LoadingSuspenseComponent = (props: Props) => {
  return (
    <div className="flex flex-col overflow-hidden p-4">
      <ListSpotifyItemsLoading></ListSpotifyItemsLoading>
      <ListSpotifyItemsLoading></ListSpotifyItemsLoading>
      <ListSpotifyItemsLoading></ListSpotifyItemsLoading>
    </div>
  );
};

export default LoadingSuspenseComponent;

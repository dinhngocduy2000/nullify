import { fetchFollowedArtist } from "@/networking/usersAPI";
import { PlusIcon } from "@heroicons/react/20/solid";
import {
  InboxStackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const LibraryListComponent = async (props: Props) => {
  const followedArtists = await fetchFollowedArtist();
  console.log("====================================");
  console.log(followedArtists);
  console.log("====================================");
  return (
    <div className="w-full flex-1 rounded-lg bg-default p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Square3Stack3DIcon width={20} height={20} className="text-default" />
          <p className="text-default text-sm font-semibold">Your Library</p>
        </div>
        <PlusIcon className="text-default box-border h-[30px] min-h-[30px] w-[30px] min-w-[30px] rounded-full bg-opacity-10 p-1 hover:cursor-pointer hover:bg-[#2b2b2b] hover:text-white" />
      </div>
      {followedArtists.artists.items.map((artist) => (
        <p>{artist.name}</p>
      ))}
    </div>
  );
};

export default LibraryListComponent;

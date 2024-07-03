import { URL_ENUM } from "@/library/enum/url-enum";
import { fetchFollowedArtist, fetchUserTopItems } from "@/networking/usersAPI";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import React from "react";
import LinkItem from "./LinkItem";

type Props = {};
async function getFollowedArtists() {
  return await fetchFollowedArtist();
}

async function getTopAlbums() {
  return await fetchUserTopItems("tracks");
}

const LibraryListComponent = async (props: Props) => {
  const [followedArtists, topAlbums] = await Promise.all([
    getFollowedArtists(),
    getTopAlbums(),
  ]);
  console.log("====================================");
  console.log(topAlbums);
  console.log("====================================");
  return (
    <div className="relative w-full flex-1 overflow-hidden rounded-lg bg-default pb-4 hover:overflow-auto">
      <div className="sticky top-0 z-10 flex w-full items-center justify-between bg-default p-4 pr-2">
        <div className="flex items-center gap-4">
          <Square3Stack3DIcon width={20} height={20} className="text-default" />
          <p className="text-sm font-semibold text-default">Your Library</p>
        </div>
        <PlusIcon className="box-border h-[30px] min-h-[30px] w-[30px] min-w-[30px] rounded-full bg-opacity-10 p-1 text-default hover:cursor-pointer hover:bg-[#2b2b2b] hover:text-white" />
      </div>
      <div className="flex-1 overflow-auto px-2">
        {followedArtists.artists.items.map((artist) => (
          <LinkItem
            key={artist.id}
            id={artist.id}
            href={URL_ENUM.ARTIST + `/${artist.id}`}
            src={artist.images[artist.images.length - 1].url}
            name={artist.name}
            type={artist.type}
          />
        ))}
        {topAlbums.items.map((album) => (
          <LinkItem
            key={album.id}
            id={album.id}
            href={URL_ENUM.ALBUMS + `/${album.id}`}
            src={album.album.images[album.album.images.length - 1].url}
            name={album.name}
            type={album.album.type}
            artist={album.artists[0].name}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryListComponent;

import { URL_ENUM } from "@/library/enum/url-enum";
import { fetchFollowedArtist, fetchUserTopItems } from "@/networking/usersAPI";
import { PlusIcon } from "@heroicons/react/20/solid";
import {
  InboxStackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          <Link
            href={URL_ENUM.ARTIST + `/${artist.id}`}
            key={artist.id}
            className="flex w-full cursor-pointer items-center gap-4 truncate rounded-lg p-2 hover:bg-[#282828]"
          >
            <Image
              src={artist.images[artist.images.length - 1].url}
              height={50}
              width={50}
              alt="Artist image"
              className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] rounded-full"
            />
            <div className="w-full truncate">
              <p className="truncate text-sm opacity-90">{artist.name}</p>
              <span className="text-xs capitalize text-default">
                {artist.type}
              </span>
            </div>
          </Link>
        ))}
        {topAlbums.items.map((album) => (
          <Link
            href={URL_ENUM.ALBUMS + `/${album.id}`}
            key={album.id}
            className="flex w-full cursor-pointer items-center gap-4 truncate rounded-lg p-2 hover:bg-[#282828]"
          >
            <Image
              src={album.album.images[album.album.images.length - 1].url}
              height={50}
              width={50}
              alt="Artist image"
              className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] rounded-full"
            />
            <div className="w-full truncate">
              <p className="truncate text-sm opacity-90">{album.name}</p>
              <span className="text-xs capitalize text-default">
                {album.album.type} <span>*</span>
                <span>{album.artists[0].name}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LibraryListComponent;

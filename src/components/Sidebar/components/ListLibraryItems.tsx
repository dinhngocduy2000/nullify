"use client";
import { QUERY_KEYS } from "@/library/enum/query-keys";
import { URL_ENUM } from "@/library/enum/url-enum";
import { fetchFollowedArtist, fetchUserTopItems } from "@/networking/usersAPI";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LinkItem from "./LinkItem";

type Props = {};
type FilteredAlbum = {
  id: string;
  name: string;
  type: string;
  artist: string;
  src: string;
};
const ListLibraryItems = (props: Props) => {
  const { data: followedArtists } = useQuery({
    queryKey: [QUERY_KEYS.FOLLOWED_ARTIST],
    queryFn: fetchFollowedArtist,
  });
  const { data: topAlbums } = useQuery({
    queryKey: [QUERY_KEYS.TOP_ALBUMS],
    queryFn: () => fetchUserTopItems("tracks"),
  });

  const albumsList: FilteredAlbum[] =
    topAlbums?.items.map((album) => {
      return {
        id: album.album.id,
        name: album.album.name,
        type: album.album.type,
        artist: album.artists[0].name,
        src: album.album.images[album.album.images.length - 1].url,
      };
    }) ?? [];

  const uniquedFilteredAlbum: FilteredAlbum[] = [
    ...new Set(albumsList?.map((item) => JSON.stringify(item))),
  ].map((item) => JSON.parse(item));

  return (
    <div className="flex-1 overflow-auto px-2 pr-0">
      {followedArtists?.artists.items.map((artist) => (
        <LinkItem
          key={artist.id}
          id={artist.id}
          href={URL_ENUM.ARTIST + `/${artist.id}`}
          src={artist.images[artist.images.length - 1].url}
          name={artist.name}
          type={artist.type}
        />
      ))}
      {uniquedFilteredAlbum.map((album) => (
        <LinkItem
          key={album.id}
          id={album.id}
          href={URL_ENUM.ALBUMS + `/${album.id}`}
          src={album.src}
          name={album.name}
          type={album.type}
          artist={album.name}
        />
      ))}
    </div>
  );
};

export default ListLibraryItems;

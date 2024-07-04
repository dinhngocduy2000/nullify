"use client";
import { QUERY_KEYS } from "@/library/enum/query-keys";
import { URL_ENUM } from "@/library/enum/url-enum";
import { fetchFollowedArtist, fetchUserTopItems } from "@/networking/usersAPI";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import LinkItem from "./LinkItem";

type Props = {};

const ListLibraryItems = (props: Props) => {
  const { data: followedArtists } = useQuery({
    queryKey: [QUERY_KEYS.FOLLOWED_ARTIST],
    queryFn: fetchFollowedArtist,
  });
  const { data: topAlbums } = useQuery({
    queryKey: [QUERY_KEYS.TOP_ALBUMS],
    queryFn: () => fetchUserTopItems("tracks"),
  });
  console.log("====================================");
  console.log(topAlbums);
  console.log("====================================");
  return (
    <div className="flex-1 overflow-auto px-2">
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
      {topAlbums?.items.map((album) => (
        <LinkItem
          key={album.id}
          id={album.album.id}
          href={URL_ENUM.ALBUMS + `/${album.album.id}`}
          src={album.album.images[album.album.images.length - 1].url}
          name={album.name}
          type={album.album.type}
          artist={album.artists[0].name}
        />
      ))}
    </div>
  );
};

export default ListLibraryItems;

import ListSpotifyItems from "@/components/ListSpotifyItems";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { URL_ENUM } from "@/library/enum/url-enum";
import { getCategoryPlaylist } from "@/networking/PlaylistApi";
import React from "react";

type Props = {
  params: {
    category_id: string;
  };
};

const CategoryPlaylistsPage = async ({ params }: Props) => {
  const { category_id } = params;
  const categoryPlaylists = await getCategoryPlaylist(category_id, {
    limit: "30",
    offset: "0",
  });
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-2 p-4">
      <ListSpotifyItems
        overflowDirection="VERTICAL"
        title={categoryPlaylists.message}
        showAllUrl={"#"}
      >
        {categoryPlaylists?.playlists?.items?.map((playlist) => (
          <SpotifyItemComponent
            key={playlist.id}
            href={`${URL_ENUM.PLAYLISTS}/${playlist.id}`}
            src={playlist.images[0].url}
            title={playlist.name}
            subTitle={playlist.description}
          />
        ))}
      </ListSpotifyItems>
    </div>
  );
};

export default CategoryPlaylistsPage;

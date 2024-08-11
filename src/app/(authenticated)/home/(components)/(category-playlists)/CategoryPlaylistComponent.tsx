import ListSpotifyItems from "@/components/ListSpotifyItems";
import NoDataComponent from "@/components/NoData";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { URL_ENUM } from "@/library/enum/url-enum";
import { getCategoryPlaylist } from "@/networking/PlaylistApi";
import React from "react";

type Props = {
  category_id: string;
};

const CategoryPlaylistComponent = async ({ category_id }: Props) => {
  const category_playlists = await getCategoryPlaylist(category_id, {
    limit: "5",
    offset: "0",
  });
  if (!category_playlists) {
    return <NoDataComponent />;
  }
  return (
    <div className="w-full">
      <ListSpotifyItems
        title={category_playlists.message}
        showAllUrl={category_id}
        showAll
      >
        {category_playlists?.playlists?.items?.map((playlist) => (
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

export default CategoryPlaylistComponent;

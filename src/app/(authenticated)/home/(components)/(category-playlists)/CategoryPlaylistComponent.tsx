import ListSpotifyItems from "@/components/ListSpotifyItems";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { URL_ENUM } from "@/library/enum/url-enum";
import { getCategoryPlaylist } from "@/networking/PlaylistApi";
import React from "react";

type Props = {
  category_id: string;
};

const CategoryPlaylistComponent = async ({ category_id }: Props) => {
  const category_playlists = await getCategoryPlaylist(category_id);
  console.log(category_playlists);
  return (
    <div className="w-full">
      <ListSpotifyItems title={category_playlists.message} showAllUrl={"#"}>
        {category_playlists.playlists.items.map((playlist) => (
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

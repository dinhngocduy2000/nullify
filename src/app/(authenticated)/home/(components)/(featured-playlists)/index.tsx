import ListSpotifyItems from "@/components/ListSpotifyItems";
import NoDataComponent from "@/components/NoData";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { URL_ENUM } from "@/library/enum/url-enum";
import { getFeaturedPlaylists } from "@/networking/PlaylistApi";
import React from "react";

type Props = {};

const FeaturedPlaylistsComponent = async (props: Props) => {
  const featuredPlaylists = await getFeaturedPlaylists(10, 0);
  console.log("====================================");
  console.log(featuredPlaylists);
  console.log("====================================");
  return (
    <ListSpotifyItems title={featuredPlaylists.message} showAllUrl={"#"}>
      {!featuredPlaylists?.playlists ? (
        <NoDataComponent />
      ) : (
        featuredPlaylists.playlists.items.map((playlist) => (
          <SpotifyItemComponent
            href={URL_ENUM.ALBUMS + `/${playlist.id}`}
            src={playlist.images[0].url}
            title={playlist.name}
            subTitle={playlist.description}
          />
        ))
      )}
    </ListSpotifyItems>
  );
};

export default FeaturedPlaylistsComponent;

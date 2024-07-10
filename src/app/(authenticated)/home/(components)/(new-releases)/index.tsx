import ListSpotifyItems from "@/components/ListSpotifyItems";
import NoDataComponent from "@/components/NoData";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { getNewReleases } from "@/networking/AlbumApi";
import React from "react";

type Props = {};

const NewReleasesComponent = async (props: Props) => {
  const newReleases = await getNewReleases(20, 0);

  return (
    <ListSpotifyItems title={"New Release Albums"} showAllUrl={"#"}>
      {!newReleases.albums ? (
        <NoDataComponent />
      ) : (
        newReleases?.albums?.items?.map((album) => (
          <SpotifyItemComponent
            key={album.id}
            href={`/albums/${album.id}`}
            src={album.images[0].url}
            height={album.images[2].height}
            width={album.images[2].width}
            title={album.name}
            subTitle={album.artists.map((artist) => artist.name).join(", ")}
          />
        ))
      )}
    </ListSpotifyItems>
  );
};

export default NewReleasesComponent;

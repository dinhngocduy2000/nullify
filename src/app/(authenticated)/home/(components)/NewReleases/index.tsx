import NoDataComponent from "@/components/NoData";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { getNewReleases } from "@/networking/AlbumApi";
import React from "react";

type Props = {};

const NewReleasesComponent = async (props: Props) => {
  const newReleases = await getNewReleases(20, 0);
  console.log("====================================");
  console.log(newReleases);
  console.log("====================================");

  return (
    <div className="w-full">
      <div className="flex w-full gap-4 overflow-x-auto">
        {!newReleases.albums ? (
          <NoDataComponent />
        ) : (
          newReleases?.albums?.items?.map((album) => (
            <SpotifyItemComponent
              key={album.id}
              href={album.href}
              src={album.images[0].url}
              title={album.name}
              subTitle={album.artists.join(", ")}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewReleasesComponent;

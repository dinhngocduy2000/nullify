import NoDataComponent from "@/components/NoData";
import SpotifyItemComponent from "@/components/SpotifyItem";
import { getNewReleases } from "@/networking/AlbumApi";
import Link from "next/link";
import React from "react";

type Props = {};

const NewReleasesComponent = async (props: Props) => {
  const newReleases = await getNewReleases(20, 0);
  console.log("====================================");
  console.log(newReleases?.albums?.items);
  console.log("====================================");

  return (
    <div className="max-w-full">
      <div className="mb-2 flex w-full justify-between">
        <p className="mb-2 text-xl font-semibold">New Releases Albums</p>
        <Link
          href={"#"}
          className="text-sm font-semibold text-gray-400 hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex max-w-full gap-4 overflow-x-hidden pb-4 hover:overflow-x-auto">
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
      </div>
    </div>
  );
};

export default NewReleasesComponent;

import { getArtistDetail } from "@/networking/ArtistApi";
import React from "react";

type Props = {
  params: {
    artist_id: string;
  };
};

const ArtistDetailPage = async ({ params }: Props) => {
  const { artist_id } = params;
  const artistDetails = await getArtistDetail(artist_id);
  console.log("====================================");
  console.log(artistDetails);
  console.log("====================================");
  return <div>{artistDetails.name}</div>;
};

export default ArtistDetailPage;

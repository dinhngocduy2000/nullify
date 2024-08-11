import NoDataComponent from "@/components/NoData";
import { getArtistDetail } from "@/networking/ArtistApi";
import { Metadata, ResolvingMetadata } from "next";
import React, { cache } from "react";

type Props = {
  params: {
    artist_id: string;
  };
};
const handleFetchArtistDetails = cache(async (id: string) => {
  return await getArtistDetail(id);
});
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  // fetch data
  const artistDetails = await handleFetchArtistDetails(params.artist_id);

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `Nullify - ${artistDetails?.name}`,
    openGraph: {},
    description: `Details about ${artistDetails?.name}`,
  };
}
const ArtistDetailPage = async ({ params }: Props) => {
  const { artist_id } = params;
  const artistDetails = await handleFetchArtistDetails(artist_id);
  console.log("====================================");
  console.log(artistDetails);
  console.log("====================================");
  if (!artistDetails) {
    return <NoDataComponent />;
  }
  return <div>{artistDetails?.name}</div>;
};

export default ArtistDetailPage;

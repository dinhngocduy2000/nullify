import { getAlbumDetail } from "@/networking/AlbumApi";
import { Metadata, ResolvingMetadata } from "next";
import React, { cache } from "react";

type Props = {
  params: { album_id: string };
};
const handleFetchAlbumDetails = cache(async (id: string) => {
  return await getAlbumDetail(id);
});
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params

  // fetch data
  const albumDetails = await handleFetchAlbumDetails(params.album_id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Nullify - ${albumDetails.name}`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
    description: `Album ${albumDetails.name} by ${albumDetails.artists[0].name}`,
  };
}

const AlbumDetailPage = async ({ params }: Props) => {
  const { album_id } = params;
  const albumDetails = await handleFetchAlbumDetails(album_id);
  console.log("====================================");
  console.log("CHECKING: ", albumDetails);
  console.log("====================================");
  return <div>{albumDetails.name}</div>;
};

export default AlbumDetailPage;

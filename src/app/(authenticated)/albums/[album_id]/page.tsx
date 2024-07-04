import { getAlbumDetail } from "@/networking/AlbumApi";
import React from "react";

type Props = {
  params: { album_id: string };
};

const AlbumDetailPage = async ({ params }: Props) => {
  const { album_id } = params;
  const albumDetails = await getAlbumDetail(album_id);
  console.log("====================================");
  console.log("CHECKING: ", albumDetails);
  console.log("====================================");
  return <div>{albumDetails.name}</div>;
};

export default AlbumDetailPage;

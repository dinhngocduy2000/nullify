import { ArtistDetails } from "@/library/interface/Artists/artists";
import { ARTIST_URL } from "../api-url/Artists";
import { fetchGet } from "..";

export const getArtistDetail = (
  id: string,
): Promise<ArtistDetails | undefined> => {
  return fetchGet(ARTIST_URL.GET_ARTIST.replace("${id}", id));
};

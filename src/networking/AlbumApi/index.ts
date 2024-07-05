import { AlbumDetails } from "@/library/interface/Albums/album";
import { fetchGet } from "..";
import { ALBUM_URL } from "../api-url/Albums";
import { NewReleases } from "@/library/interface/Albums/new-releases";

export const getAlbumDetail = (id: string): Promise<AlbumDetails> => {
  return fetchGet(ALBUM_URL.GET_ALBUM.replace("${id}", id));
};

export const getNewReleases = (
  limit: number,
  offset: number,
): Promise<NewReleases> => {
  return fetchGet(
    ALBUM_URL.NEW_RELEASES +
      "?" +
      new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
      }),
  );
};

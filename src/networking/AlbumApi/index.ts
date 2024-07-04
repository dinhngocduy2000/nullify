import { AlbumDetails } from "@/library/interface/Albums/album";
import { fetchGet } from "..";
import { ALBUM_URL } from "../api-url/Albums";

export const getAlbumDetail = (id: string): Promise<AlbumDetails> => {
  return fetchGet(ALBUM_URL.GET_ALBUM.replace("${id}", id));
};

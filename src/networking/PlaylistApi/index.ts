import { FollowPlaylistParams } from "@/library/interface/Playlists/playlists";
import { fetchPut } from "..";
import { PLAYLIST_URL } from "../api-url/Playlists";

export const followPlaylist = (data: FollowPlaylistParams): Promise<any> => {
  return fetchPut(
    PLAYLIST_URL.FOLLOW_PLAYLIST.replace("${playlist_id}", data.playlist_id),
    { public: data.public }
  );
};

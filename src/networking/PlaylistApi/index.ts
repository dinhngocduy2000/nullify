import { FollowPlaylistParams } from "@/library/interface/Playlists/playlists";
import { fetchDelete, fetchGet, fetchPut } from "..";
import { PLAYLIST_URL } from "../api-url/Playlists";
import { TrendingPlaylistsObject } from "@/library/interface/Playlists/trendings";

export const followPlaylist = (data: FollowPlaylistParams): Promise<any> => {
  return fetchPut(
    PLAYLIST_URL.FOLLOW_PLAYLIST.replace("${playlist_id}", data.playlist_id),
    { public: data.public },
  );
};
export const unfollowPlaylist = (data: FollowPlaylistParams): Promise<any> => {
  return fetchDelete(
    PLAYLIST_URL.FOLLOW_PLAYLIST.replace("${playlist_id}", data.playlist_id),
  );
};

export const getFeaturedPlaylists = (
  limit: number,
  offset: number,
): Promise<TrendingPlaylistsObject> => {
  return fetchGet(
    PLAYLIST_URL.FEATURE_PLAYLISTS +
      "?" +
      new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
      }),
  );
};

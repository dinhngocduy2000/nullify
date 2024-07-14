import { FollowPlaylistParams } from "@/library/interface/Playlists/playlists";
import { fetchDelete, fetchGet, fetchPut } from "..";
import { PLAYLIST_URL } from "../api-url/Playlists";
import { TrendingPlaylistsObject } from "@/library/interface/Playlists/trendings";
import { CategoryPlaylistsRes } from "@/library/interface/Playlists/categories-playlist";
import { PageOffset } from "@/library/interface/Commons";

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

export const getCategoryPlaylist = async (
  id: string,
  data: PageOffset,
): Promise<CategoryPlaylistsRes> => {
  return fetchGet(
    PLAYLIST_URL.CATEGORY_PLAYLIST.replace("${category_id}", id) +
      "?" +
      new URLSearchParams({
        limit: data.limit,
        offset: data.offset,
      }),
  );
};

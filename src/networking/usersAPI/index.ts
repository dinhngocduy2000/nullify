import { fetchDelete, fetchGet, fetchPut } from "..";
import {
  FollowUsersParams,
  UserInterface,
} from "@/library/interface/users/users";
import { USER_URL } from "../api-url/user";
import { ArtistsType } from "@/library/interface/Artists/artists";

export const fetchCurrentUser = (): Promise<UserInterface | undefined> => {
  return fetchGet(USER_URL.CURRENT_USER);
};

export const fetchUserTopItems = (
  type: "tracks" | "artists",
): Promise<UsersTopItems | undefined> => {
  return fetchGet(USER_URL.USER_TOP_ITEMS + `/${type}`);
};

export const fetchUserProfile = (
  user_id: string,
): Promise<UserInterface | undefined> => {
  return fetchGet(USER_URL.GET_A_USER + `/${user_id}`);
};

export const fetchFollowedArtist = (): Promise<ArtistsType | undefined> => {
  return fetchGet(USER_URL.GET_FOLLOWED_ARTIST);
};

export const followUsersArtists = (data: FollowUsersParams): Promise<any> => {
  return fetchPut(
    USER_URL.FOLLOW_USERS_ARTISTS.replace("${type}", data.type).replace(
      "${ids}",
      data.ids.join("%"),
    ),
    { ids: data.ids },
  );
};
export const unfollowUsersArtists = (data: FollowUsersParams): Promise<any> => {
  return fetchDelete(
    USER_URL.FOLLOW_USERS_ARTISTS.replace("${type}", data.type).replace(
      "${ids}",
      data.ids.join("%"),
    ),
    { ids: data.ids },
  );
};

export const checkIfFollowUser = (
  data: FollowUsersParams,
): Promise<boolean[] | undefined> => {
  return fetchGet(
    USER_URL.CHECK_IF_FOLLOW.replace("${ids}", data.ids.join("%")).replace(
      "${type}",
      data.type,
    ),
  );
};

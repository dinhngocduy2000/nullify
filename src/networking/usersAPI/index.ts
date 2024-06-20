import { fetchGet } from "..";
import { UserInterface } from "@/library/interface/users/users";
import { USER_URL } from "../api-url/user";

export const fetchCurrentUser = (): Promise<UserInterface> => {
  return fetchGet(USER_URL.CURRENT_USER);
};

export const fetchUserTopItems = (
  type: "tracks" | "artists"
): Promise<UsersTopItems> => {
  return fetchGet(USER_URL.USER_TOP_ITEMS + `/${type}`);
};

export const fetchUserProfile = (user_id: string): Promise<UserInterface> => {
  return fetchGet(USER_URL.GET_A_USER + `/${user_id}`);
};

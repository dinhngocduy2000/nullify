export enum USER_URL {
  CURRENT_USER = "/me",
  USER_TOP_ITEMS = "/me/top",
  GET_A_USER = "/users",
  GET_FOLLOWED_ARTIST = "/me/following?type=artist",
  FOLLOW_USERS_ARTISTS = "/me/following?type=${type}&ids=${ids}",
}

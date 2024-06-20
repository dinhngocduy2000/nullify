import { Followers } from "../users/users";

export interface ArtistsType {
  artists: Artists;
}

export interface Artists {
  items: Item[];
  next: null;
  total: number;
  cursors: Cursors;
  limit: number;
  href: string;
}

export interface Cursors {
  after: null;
}

export interface Item {
  external_urls: Externalurls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

// export interface Image {
//   height: number;
//   url: string;
//   width: number;
// }

// export interface Followers {
//   href: null;
//   total: number;
// }

// export interface Externalurls {
//   spotify: string;
// }

export interface TrendingPlaylistsObject {
  message: string;
  playlists: TrendingPlaylists;
}

export interface TrendingPlaylists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: TrendingPlaylistsItem[];
}

export interface TrendingPlaylistsItem {
  collaborative: boolean;
  description: string;
  external_urls: Externalurls;
  href: string;
  id: string;
  images: TrendingPlaylistsImage[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: TrendingPlaylistsTracks;
  type: string;
  uri: string;
  primary_color: null | string;
}

interface TrendingPlaylistsTracks {
  href: string;
  total: number;
}

interface Owner {
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

interface TrendingPlaylistsImage {
  url: string;
  height: number | null;
  width: number | null;
}

interface Externalurls {
  spotify: string;
}

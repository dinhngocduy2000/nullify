export interface CategoryPlaylistsRes {
  message: string;
  playlists: CategoryPlaylists;
}

export interface CategoryPlaylists {
  href: string;
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
  items: CategoryPlaylistsItem[];
}

interface CategoryPlaylistsItem {
  collaborative: boolean;
  description: string;
  external_urls: Externalurls;
  href: string;
  id: string;
  images: CategoryPlaylistsImage[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
  primary_color: string;
}

interface Tracks {
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

interface CategoryPlaylistsImage {
  url: string;
  height: null;
  width: null;
}

interface Externalurls {
  spotify: string;
}

export interface AlbumDetails {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
  tracks: Tracks;
  copyrights: Copyright[];
  external_ids: Externalids;
  genres: any[];
  label: string;
  popularity: number;
}

export interface Externalids {
  upc: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface Tracks {
  href: string;
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
  items: AlbumItems[];
}

export interface AlbumItems {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: Externalurls;
  href: string;
  id: string;
  linked_from?: Linkedfrom;
  name: string;
  preview_url: null | string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
  restrictions?: Restrictions;
}

export interface Restrictions {
  reason: string;
}

export interface Linkedfrom {
  external_urls: Externalurls;
  href: string;
  id: null;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Externalurls {
  spotify: string;
}

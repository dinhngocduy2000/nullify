export interface UserInterface {
  display_name: string;
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
  followers: Followers;
  email: string;
}

export interface Followers {
  href: null;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Externalurls {
  spotify: string;
}

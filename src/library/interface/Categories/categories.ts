interface CategoriesApiRes {
  categories: Categories;
}

interface Categories {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: CategoiresItem[];
}

interface CategoiresItem {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

interface Icon {
  url: string;
  height: number;
  width: number;
}

import { fetchGet } from "..";
import { CATEGORIES_URL } from "../api-url/Categories";

export const getListBrowseCategories = async (): Promise<CategoriesApiRes> => {
  return fetchGet(CATEGORIES_URL.GET_BROWSE_CATEGORIES);
};

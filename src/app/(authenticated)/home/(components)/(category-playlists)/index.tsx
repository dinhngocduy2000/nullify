import ListSpotifyItems from "@/components/ListSpotifyItems";
import ListSpotifyItemsLoading from "@/components/ListSpotifyItems/loading";
import { getListBrowseCategories } from "@/networking/CategoriesApi";
import React, { Suspense } from "react";
import CategoryPlaylistComponent from "./CategoryPlaylistComponent";

type Props = {};

const CategoriesPlaylist = async (props: Props) => {
  const categories = await getListBrowseCategories();
  console.log(categories);
  return (
    <div className="w-full">
      {categories.categories.items.map((category) => (
        <Suspense key={category.id} fallback={<ListSpotifyItemsLoading />}>
          <CategoryPlaylistComponent category_id={category.id} />
        </Suspense>
      ))}
    </div>
  );
};

export default CategoriesPlaylist;

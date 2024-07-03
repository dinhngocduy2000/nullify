import React, { Suspense } from "react";
import NavigationComponent from "./components/NavigationComponent";
import LibraryListComponent from "./components/LibraryListComponent";
import LibraryListLoading from "./components/LibraryListLoading";

type Props = {};

const SidebarComponent = (props: Props) => {
  return (
    <div className="flex w-[20%] min-w-[250px] flex-col gap-2 rounded-lg">
      <NavigationComponent />
      <Suspense fallback={<LibraryListLoading />}>
        <LibraryListComponent />
      </Suspense>
    </div>
  );
};

export default SidebarComponent;

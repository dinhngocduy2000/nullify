import React from "react";
import NavigationComponent from "./components/NavigationComponent";
import LibraryListComponent from "./components/LibraryListComponent";

type Props = {};

const SidebarComponent = (props: Props) => {
  return (
    <div className="flex w-[20%] min-w-[250px] flex-col gap-2 rounded-lg">
      <NavigationComponent />
      <LibraryListComponent />
    </div>
  );
};

export default SidebarComponent;

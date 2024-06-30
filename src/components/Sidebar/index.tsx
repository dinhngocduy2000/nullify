import React from "react";
import NavigationComponent from "./components/NavigationComponent";

type Props = {};

const SidebarComponent = (props: Props) => {
  return (
    <>
      <div className="w-[20%] min-w-[250px] rounded-lg">
        <NavigationComponent />
      </div>
    </>
  );
};

export default SidebarComponent;

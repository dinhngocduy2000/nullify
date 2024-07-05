import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const NoDataComponent = (props: Props) => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center gap-2">
      <DocumentMagnifyingGlassIcon width={100} height={100} />
      <p className="text-xl font-semibold">No data</p>
    </div>
  );
};

export default NoDataComponent;

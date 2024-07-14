import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  showAllUrl: string;
  children: ReactNode;
};

const ListSpotifyItems = ({ children, title, showAllUrl }: Props) => {
  return (
    <div className="mb-2 max-w-full py-2">
      <div className="flex w-full justify-between">
        <p className="mb-2 ml-4 text-xl font-semibold">{title}</p>
        <Link
          href={showAllUrl}
          className="text-sm font-semibold text-gray-400 hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex max-w-full gap-4 overflow-x-hidden pb-4 hover:overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default ListSpotifyItems;

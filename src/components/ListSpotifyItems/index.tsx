import { URL_ENUM } from "@/library/enum/url-enum";
import { classNames } from "@/library/utils/className";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  showAllUrl: string;
  children: ReactNode;
  showAll?: boolean;
  overflowDirection?: "VERTICAL" | "HORIZONTAL";
};

const ListSpotifyItems = ({
  children,
  title,
  showAllUrl,
  showAll,
  overflowDirection,
}: Props) => {
  return (
    <div className="mb-2 max-w-full py-2">
      <div className="flex w-full justify-between">
        <p className="mb-2 ml-4 text-xl font-semibold">{title}</p>
        {showAll && (
          <Link
            href={URL_ENUM.SECTIONS + `/${showAllUrl}`}
            className="text-sm font-semibold text-gray-400 hover:underline"
          >
            Show all
          </Link>
        )}
      </div>
      <div
        className={classNames(
          "flex max-w-full gap-4 pb-4",
          overflowDirection === "VERTICAL"
            ? "flex-wrap overflow-y-hidden hover:overflow-y-auto"
            : "overflow-x-hidden hover:overflow-x-auto",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ListSpotifyItems;

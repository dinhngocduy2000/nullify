"use client";
import { URL_ENUM } from "@/library/enum/url-enum";
import { classNames } from "@/library/utils/className";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const NavigationComponent = ({}: Props) => {
  const pathName = usePathname();

  return (
    <div className="bg-default rounded-lg py-4">
      <Link
        href={URL_ENUM.HOMEPAGE}
        className={classNames(
          "mb-4 flex items-center hover:text-white hover:underline",
          pathName === URL_ENUM.HOMEPAGE ? "text-white" : "text-[#b3b3b3]",
        )}
      >
        <HomeIcon width={20} height={20} className="mx-4" />
        <p className={classNames("mt-1 text-sm font-semibold")}>Home</p>
      </Link>
      <Link
        href={URL_ENUM.SEARCH}
        className={classNames(
          "flex items-center hover:text-white hover:underline",
          pathName === URL_ENUM.SEARCH ? "text-white" : "text-[#b3b3b3]",
        )}
      >
        <MagnifyingGlassIcon width={20} height={20} className="mx-4" />
        <p className={classNames("mt-1 text-sm font-semibold")}>Search</p>
      </Link>
    </div>
  );
};

export default NavigationComponent;

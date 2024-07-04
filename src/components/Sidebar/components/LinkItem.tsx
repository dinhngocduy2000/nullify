"use client";
import { URL_ENUM } from "@/library/enum/url-enum";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { classNames } from "@/library/utils/className";

type Props = {
  href: string;
  src: string;
  name: string;
  type: string;
  artist?: string;
  id: string;
};

const LinkItem = ({ href, src, name, type, artist, id }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={classNames(
        "mb-2 flex w-full cursor-pointer items-center gap-4 truncate rounded-lg p-2 hover:bg-[#282828]",
        pathName.includes(id) ? "bg-[#282828]" : "bg-transparent",
      )}
    >
      <Image
        src={src}
        height={50}
        width={50}
        alt="Artist image"
        className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] rounded-full"
      />
      <div className="w-full truncate">
        <p className="truncate text-sm opacity-90">{name}</p>
        <span className="text-xs capitalize text-default">
          {type}
          {artist && (
            <>
              <span className="mx-1">*</span>
              <span>{artist}</span>
            </>
          )}
        </span>
      </div>
    </Link>
  );
};

export default LinkItem;

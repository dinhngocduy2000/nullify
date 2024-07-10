import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  src: string;
  title: string;
  subTitle: string;
  height?: number;
  width?: number;
};

const SpotifyItemComponent = ({
  href,
  src,
  title,
  subTitle,
  height,
  width,
}: Props) => {
  console.log("====================================");
  console.log(href);
  console.log("====================================");
  return (
    <Link
      className="max-w-[182px] rounded-lg p-4 hover:bg-[#2b2b2b]"
      href={href}
    >
      <Image
        src={src}
        width={width ?? 150}
        height={height ?? 150}
        className={`min-h-[150px] min-w-[150px]`}
        alt="Spotify item"
      />
      <p className="my-2 line-clamp-1 text-sm">{title}</p>
      <p className="line-clamp-2 whitespace-pre-wrap text-xs text-gray-400">
        {subTitle}
      </p>
    </Link>
  );
};

export default SpotifyItemComponent;

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
  return (
    <Link
      className="min-h-fit min-w-[20%] max-w-[20%] rounded-lg p-4 hover:bg-[#2b2b2b]"
      href={href}
    >
      <Image
        src={src}
        width={200}
        height={200}
        className={`min-w-full max-w-full rounded-lg`}
        alt="Spotify item"
      />
      <p className="my-2 line-clamp-1 max-w-full text-sm">{title}</p>
      <p className="line-clamp-2 max-w-full whitespace-pre-wrap text-xs text-gray-400">
        {subTitle}
      </p>
    </Link>
  );
};

export default SpotifyItemComponent;

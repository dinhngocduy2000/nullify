import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  src: string;
  title: string;
  subTitle: string;
};

const SpotifyItemComponent = ({ href, src, title, subTitle }: Props) => {
  return (
    <Link href={href}>
      <Image src={src} width={150} height={150} alt="Spotify item" />
      <p>{title}</p>
      <p className="">{subTitle}</p>
    </Link>
  );
};

export default SpotifyItemComponent;

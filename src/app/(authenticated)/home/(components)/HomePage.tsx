"use client";

import { QUERY_KEYS } from "@/library/enum/query-keys";
import { fetchCurrentUser } from "@/networking/usersAPI";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import ChildComponent from "./ChildComponent";
import LoadingSuspenseComponent from "@/components/LoadingSuspenseComponent";

type Props = {};
const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 100}`;
};
export default function TestHomePage({ test }: any) {
  const { data: userProfile } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => fetchCurrentUser(),
  });
  console.log("====================================");
  console.log(userProfile);
  console.log("====================================");
  return (
    <div className="mb-4 flex items-center gap-4 rounded-lg bg-green-200 px-4 py-2">
      <Image
        src={userProfile?.images[0].url ?? ""}
        alt=""
        className="rounded-full"
        placeholder="blur"
        blurDataURL="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/449656277_999274915539092_4883506910595971655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J1mVMFhRKaAQ7kNvgHjmMQG&_nc_ht=scontent.fhan3-3.fna&oh=00_AYDN8c4Sj4gP09EwWAgvunnKiZKxOmvc63Yxk-v3sE39_g&oe=6686E77E"
        height={userProfile?.images[0].height}
        width={userProfile?.images[0].width}
      />
      <p className="font-semibold text-green-700">
        Hello {userProfile?.display_name}
      </p>
      <ChildComponent />
    </div>
  );
}

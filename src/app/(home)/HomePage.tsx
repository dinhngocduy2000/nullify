"use client";

import { QUERY_KEYS } from "@/library/enum/query-keys";
import { fetchCurrentUser } from "@/networking/usersAPI";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import ChildComponent from "./ChildComponent";

type Props = {};
export default function HomePage({ test }: any) {
  const { data: userProfile } = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => fetchCurrentUser(),
  });
  return (
    <div className="mb-4 flex items-center gap-4 rounded-lg bg-green-200 px-4 py-2">
      <Image
        src={userProfile?.images[0].url ?? ""}
        alt=""
        className="rounded-full"
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

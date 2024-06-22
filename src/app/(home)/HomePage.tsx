"use server";

import { fetchCurrentUser } from "@/networking/usersAPI";
import Image from "next/image";
import React from "react";

type Props = {};
export default async function HomePage({ test }: any) {
  const userProfile = await fetchCurrentUser();
  console.log("====================================");
  console.log(userProfile);
  console.log("====================================");
  return (
    <div className="py-2 px-4 flex gap-4 items-center bg-green-200 mb-4 rounded-lg">
      <Image
        src={userProfile.images[0].url}
        alt=""
        className="rounded-full"
        height={userProfile.images[0].height}
        width={userProfile.images[0].width}
      />
      <p className="text-green-700 font-semibold">
        Hello {userProfile.display_name}
      </p>
    </div>
  );
}

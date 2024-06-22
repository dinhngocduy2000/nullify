"use server";
import { getSession } from "@/library/auth/getSessions";
import { checkIfFollowUser } from "@/networking/usersAPI";
import React from "react";

type Props = {};
export default async function HomePage({ test }: any) {
  const followedArtist = await checkIfFollowUser({
    type: "user",
    ids: ["1vCWHaC5f2uS3yhpwWbIA6"],
  });
  console.log("====================================");
  console.log(followedArtist);
  console.log("====================================");
  return (
    <>
      <p>ab</p>
    </>
  );
}

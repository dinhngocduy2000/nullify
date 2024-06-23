import React from "react";
import PrimaryButton from "../PrimaryButton";
import { signOut } from "next-auth/react";
import { fetchCurrentUser } from "@/networking/usersAPI";

type Props = {};

const TestingIndex = (props: Props) => {
  const handleLogout = async () => {
    "use server";
    const res = await fetchCurrentUser();
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  };
  return (
    <form action={handleLogout}>
      <PrimaryButton className="w-[200px] px-4 py-3" type="submit">
        Now please log out
      </PrimaryButton>
    </form>
  );
};

export default TestingIndex;

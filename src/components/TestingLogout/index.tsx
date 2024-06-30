"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { signOut } from "next-auth/react";
import { URL_ENUM } from "@/library/enum/url-enum";

type Props = {};

const TestingIndex = (props: Props) => {
  const handleLogout = () => {
    signOut({ callbackUrl: URL_ENUM.LOGIN });
  };
  return (
    <PrimaryButton
      className="w-[200px] px-4 py-3"
      onClick={() => handleLogout()}
    >
      Now please log out
    </PrimaryButton>
  );
};

export default TestingIndex;

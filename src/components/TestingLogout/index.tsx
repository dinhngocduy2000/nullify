"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { signOut } from "next-auth/react";

type Props = {};

const TestingIndex = (props: Props) => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <PrimaryButton className="w-fit px-12 py-3" onClick={() => handleLogout()}>
      Now please log out
    </PrimaryButton>
  );
};

export default TestingIndex;

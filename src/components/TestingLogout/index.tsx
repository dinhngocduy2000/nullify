"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { signOut } from "next-auth/react";

type Props = {};

const TestingIndex = (props: Props) => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  return <PrimaryButton onClick={() => handleLogout()}>Test</PrimaryButton>;
};

export default TestingIndex;

"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { URL_ENUM } from "@/library/enum/url-enum";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

type Props = {};

const TestingIndex = (props: Props) => {
  const router = useRouter();
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };
  return <PrimaryButton onClick={() => handleLogout()}>Test</PrimaryButton>;
};

export default TestingIndex;

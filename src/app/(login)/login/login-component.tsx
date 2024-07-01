"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import NullifyIcon from "../../../library/assets/svgs/nullify-icon.svg";
import PrimaryButton from "@/components/PrimaryButton";
import { URL_ENUM } from "@/library/enum/url-enum";

type Props = {};

const LoginComponent = (props: Props) => {
  const handleLogin = () => {
    return signIn("", { callbackUrl: URL_ENUM.HOMEPAGE });
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={NullifyIcon} alt="Nullify logo" />
      <p className="text-lg font-semibold">Welcome to Nullify!</p>
      <PrimaryButton className="w-[200px] p-3" onClick={handleLogin}>
        Log in
      </PrimaryButton>
    </div>
  );
};

export default LoginComponent;

"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import NullifyIcon from "../../library/assets/svgs/nullify-icon.svg";
import PrimaryButton from "@/components/PrimaryButton";

type Props = {};

const LoginComponent = (props: Props) => {
  const handleLogin = () => {
    signIn("", { callbackUrl: "/" });
  };
  return (
    <form
      action={() => handleLogin()}
      className="flex h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-slate-600 to-slate-900"
    >
      <Image src={NullifyIcon} alt="Nullify logo" />
      <p className="text-lg font-semibold">Welcome to Nullify!</p>
      <PrimaryButton className="w-[200px] p-3" type="submit">
        Log in
      </PrimaryButton>
    </form>
  );
};

export default LoginComponent;

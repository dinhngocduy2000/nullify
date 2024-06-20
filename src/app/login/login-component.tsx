"use client";
import { signIn } from "next-auth/react";
import React from "react";
import Image from "next/image";
import NullifyIcon from "../../library/assets/svgs/nullify-icon.svg";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";

type Props = {};

const LoginComponent = (props: Props) => {
  const router = useRouter();
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "/" });
  };
  return (
    <form
      action={handleLogin}
      className="h-screen bg-gradient-to-b from-slate-600 to-slate-900 flex flex-col gap-10 justify-center items-center"
    >
      <Image src={NullifyIcon} alt="Nullify logo" />
      <p className="font-semibold text-lg">Welcome to Nullify!</p>
      <PrimaryButton className="max-w-[200px]" type="submit">
        Log in
      </PrimaryButton>
    </form>
  );
};

export default LoginComponent;

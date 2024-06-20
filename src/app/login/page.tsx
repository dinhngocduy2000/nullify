"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import NullifyIcon from "../../library/assets/svgs/nullify-icon.svg";
type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const handleLogin = () => {
    signIn();
  };

  return (
    <form
      action={handleLogin}
      className="h-screen flex flex-col gap-10 justify-center items-center"
    >
      <Image src={NullifyIcon} alt="Nullify logo" />
      <p className="font-semibold text-lg">Welcome to Nullify!</p>
      <PrimaryButton className="max-w-[200px]" type="submit">
        Log in
      </PrimaryButton>
    </form>
  );
};

export default LoginPage;

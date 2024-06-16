"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { getSession } from "@/library/auth/getSessions";
import { signIn } from "next-auth/react";
import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const handleLogin = () => {
    signIn();
    router.push("/");
  };

  return (
    <form action={handleLogin} className="h-screen flex items-center">
      <PrimaryButton
        onClick={handleLogin}
        className="max-w-[200px] m-auto"
        type="submit"
      >
        Log in
      </PrimaryButton>
    </form>
  );
};

export default LoginPage;

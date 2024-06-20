"use client";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { URL_ENUM } from "@/library/enum/url-enum";
import { useRouter } from "next/navigation";

type Props = {};

const TestingIndex = (props: Props) => {
  const router = useRouter();
  return (
    <PrimaryButton onClick={() => router.replace(URL_ENUM.LOGIN)}>
      Test
    </PrimaryButton>
  );
};

export default TestingIndex;

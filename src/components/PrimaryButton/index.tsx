"use client";
import { classNames } from "@/library/utils/className";
import React, { ReactNode } from "react";

type Props = {
  onClick?: any;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};

const PrimaryButton = ({ onClick, children, type, className }: Props) => {
  return (
    <button
      type={type ?? "button"}
      className={classNames(
        "inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        className && className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

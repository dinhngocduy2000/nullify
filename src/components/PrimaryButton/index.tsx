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
        "inline-flex items-center justify-center rounded-md bg-indigo-400 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        className ? className : "w-full px-3 py-2",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { URL_ENUM } from "@/library/enum/url-enum";
import { usePathname, useRouter } from "next/navigation";
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    document.title = "Error - Nullify";
  }, []);

  const handleReload = () => {
    pathname === URL_ENUM.HOMEPAGE && window.location.reload();
  };
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <p>Something went wrong!</p>
      <Link
        onClick={() => handleReload()}
        href={URL_ENUM.HOME}
        className="inline-flex h-[40px] w-[120px] items-center justify-center rounded-md bg-indigo-400 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go to Home!
      </Link>
    </main>
  );
};

export default Error;

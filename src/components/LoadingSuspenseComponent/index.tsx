import Image from "next/image";
import React from "react";
import NullifyIcon from "../../library/assets/svgs/nullify-icon.svg";
type Props = {};

const LoadingSuspenseComponent = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Image src={NullifyIcon} alt="Icon" />
      <p className="font-semibold">Loading... Please wait...</p>
    </div>
  );
};

export default LoadingSuspenseComponent;

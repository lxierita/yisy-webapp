import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

interface LogoProps {
  url?: string;
  size: {
    width: number;
    height: number;
  };
  customStyle?: string;
}

export const initLogo: LogoProps = {
  url: "/static/logo.png",
  size: {
    width: 0,
    height: 0,
  },
};

export default function Logo({ url, size, customStyle }: LogoProps) {
  const router = useRouter();
  const [dimension, updateDimension] = useState(initLogo.size);
  const link = url ? url : initLogo.url;

  useEffect(() => updateDimension(size), [size]);
  return (
    <div className={cn("lg:p-4", customStyle ?? customStyle)}>
      <Image
        src={link}
        onClick={() => router.push("/")}
        alt="Company logo"
        width={dimension.width}
        height={dimension.height}
        className={"object-scale-down"}
      />
    </div>
  );
}

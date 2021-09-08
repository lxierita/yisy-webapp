import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import { useEffect, useMemo, useState } from "react";

export interface Option {
  id: string;
  label: string;
  onClick: () => {};
  //determines if the items is on the left or right side
  primary: boolean;
  //determines the item's membership of the hamburger menu
  sticky: boolean;
}

interface TitleBarProps {
  logoUrl?: string;
  options: Option[];
}

const initTitleBar: TitleBarProps = {
  logoUrl: "/static/logo.png",
  options: [],
};

export default function TitleBar({ logoUrl, options }: TitleBarProps) {
  const router = useRouter();
  const url = useMemo(() => (logoUrl ? logoUrl : initTitleBar.logoUrl), [
    logoUrl,
  ]);
  const [viewportWidth, setViewportWidth] = useState(640);
  useEffect(() => {
    if (typeof window != undefined) {
      setViewportWidth(window.innerWidth);
    }
  }, []);

  return (
    <div
      className={cn("flex flex-row w-100 bg-white border-b-2 rounded-md p-2")}
    >
      <Image
        src={url}
        onClick={() => router.push("/")}
        width="100px"
        height="60px"
      ></Image>
      <div className="flex flex-row space-between">
        {viewportWidth >= 768 ?? (
          <>
            <div className="flex flex-row">
              {options
                .filter((o) => o.primary)
                .map((o) => (
                  <p data-cy-id={`option-${o.id}`} key={o.id}>
                    {o.label}
                  </p>
                ))}
            </div>
            <div className="flex flex-row-reverse">
              {options
                .filter((o) => !o.primary)
                .map((o, i) => (
                  <>
                    <p data-cy-id={`option-${o.id}`} key={o.id}>
                      {o.label}
                    </p>
                    {i < options.length - 1 ?? (
                      <Separator.Root decorative orientation="vertical" />
                    )}
                  </>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

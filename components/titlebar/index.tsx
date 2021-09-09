import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import { ReactNode, useEffect, useMemo, useState } from "react";

export interface Option {
  id: string;
  label: string;
  onClick: () => {};
  order: string | number;
}

interface TitleBarProps {
  logoUrl?: string;
  options: Option[];
}

const initTitleBar: TitleBarProps = {
  logoUrl: "/static/logo.png",
  options: [],
};

interface WebMenuProps {
  options: Option[];
  customStyle: string;
}

function WebMenu({ options: ops, customStyle }: WebMenuProps): JSX.Element {
  return (
    <div className={cn("ml-5 flex flex-row", customStyle ?? customStyle)}>
      {ops.map((o) => (
        <>
          {o.order == "last" ? (
            <>
              <Separator.Root
                decorative
                orientation={"vertical"}
                key={`login-separator`}
                className={`ml-4 mr-0 w-0.5 h-6 bg-yisy-green-200 order-${ops.length} self-center`}
              />
            </>
          ) : (
            <></>
          )}
          <p
            data-cy-id={`option-${o.id}`}
            key={o.id}
            className={cn(
              "text-center m-2 p-2 hover:text-yisy-green-100 hover:underline",
              `order-${o.order}`
            )}
          >
            {o.label}
          </p>
        </>
      ))}
    </div>
  );
}

function useWindowSize(): undefined | number {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
      });
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize.width;
}

export default function TitleBar({ logoUrl, options }: TitleBarProps) {
  const router = useRouter();
  const url = useMemo(() => (logoUrl ? logoUrl : initTitleBar.logoUrl), [
    logoUrl,
  ]);
  const [smallDevice, toggleSmallDevice] = useState(false);

  const vw = useWindowSize();
  useEffect(() => {
    if (vw == undefined) {
      return;
    }
    if (vw <= 900) {
      toggleSmallDevice(true);
    } else {
      toggleSmallDevice(false);
    }
  }, [vw]);

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start w-full p-1 mx-auto my-0 space-round"
      )}
    >
      <div className="p-4">
        <Image
          src={url}
          onClick={() => router.push("/")}
          alt="Company logo"
          width={"140"}
          height={"70"}
          className={"object-scale-down"}
        />
      </div>
      {smallDevice ? (
        <Meatball options={options}></Meatball>
      ) : (
        <WebMenu options={options} className="" />
      )}
    </div>
  );
}

import React from "react";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import * as Separator from "@radix-ui/react-separator";
import { ReactNode, useEffect, useMemo, useState } from "react";
import Meatball from "../meatball";
import Logo from "../logo";

export interface MenuItem {
  [id: string]: {
    id: string;
    label: string;
    onClick: () => void;
    primary: boolean;
  };
}

interface TitleBarProps {
  navItems: MenuItem[];
}

interface WebMenuProps {
  items: MenuItem[];
  customStyle?: string;
}

function WebMenu({ items, customStyle }: WebMenuProps): JSX.Element {
  return (
    <div
      className={
        "flex flex-row justify-start w-full p-1 mx-auto my-0 items-center"
      }
    >
      <Logo size={{ width: 140, height: 70 }} />
      <div className={cn("ml-5 flex flex-row", customStyle ?? customStyle)}>
        {items.map((o) => (
          <>
            {o.id.id == "login" ? (
              <>
                <Separator.Root
                  decorative
                  orientation={"vertical"}
                  key={`login-separator`}
                  className={`ml-4 mr-0 w-0.5 h-6 bg-yisy-green-200 order-${o.length} self-center`}
                />
              </>
            ) : (
              <></>
            )}
            <p
              data-cy-id={`option-${o.id.id}`}
              key={o.id.id}
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

export default function TitleBar({ navItems }: TitleBarProps) {
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
    <div>
      {smallDevice ? (
        <div className={"flex flex-row space-between items-center"}>
          <Logo size={{ width: 100, height: 45 }} customStyle={"flex-1"} />
          <WebMenu items={navItems.filter((o) => o.id.primary)} />
        </div>
      ) : (
        <WebMenu items={navItems} />
      )}
    </div>
  );
}

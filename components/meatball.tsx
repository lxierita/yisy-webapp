import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Option } from "./titlebar";

type MeatballItem = Option;

interface MeatballProps {
  items: MeatballItem[];
}

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = DropdownMenuPrimitive.Content;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;

export default function Meatball({ items }: MeatballProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Menu"
          className="h-10 inline-flex justify-center text-yisy-white text-lg rounded-md bg-yisy-green p-3 shadow-md"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={0}
        className={"min-w-220 h-4/5 bg-yisy-white p-5 shadow-sm animation-ping"}
      >
        {items.map((i) => (
          <DropdownMenuItem
            onSelect={i.onClick}
            id={i.id}
            key={`nav-${i.id}`}
            className={"text-md"}
          >
            {i.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

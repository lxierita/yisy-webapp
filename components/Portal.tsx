import * as PortalPrimitive from "@radix-ui/react-portal";
import { ReactChildren, ReactNode } from "react";

interface PortalProps {
  id: string;
  children: ReactNode;
  customStyle: string;
}

const rightSide = "";

export default function Portal({ id, children }: PortalProps) {
  return <div data-cy-id={`portal-${id}`}> {children}</div>;
}

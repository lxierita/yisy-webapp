import cn from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  id: string;
  onClick: () => void;
  customStyle?: string;
  children: ReactNode;
}

export function PrimaryButton({
  id,
  onClick,
  customStyle,
  children,
}: ButtonProps) {
  return (
    <Button
      id={id}
      onClick={onClick}
      customStyle={cn("bg-yisy-green text-white", customStyle ?? customStyle)}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({
  id,
  onClick,
  customStyle,
  children,
}: ButtonProps) {
  return (
    <Button
      id={id}
      onClick={onClick}
      customStyle={cn(
        "text-yisy-dark border-yisy-dark border",
        customStyle ?? customStyle
      )}
    >
      {children}
    </Button>
  );
}

export function Button({ id, onClick, customStyle, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      data-cy-id={`button-${id}`}
      className={cn("py-1 px-2 rounded-md m-2", customStyle ?? customStyle)}
    >
      {children}
    </button>
  );
}

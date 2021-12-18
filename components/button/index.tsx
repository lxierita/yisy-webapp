import cn from "classnames";
import { ReactNode } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { StyledCardSubtitle, StyledCardTitle } from "../index";

interface ButtonProps {
  id: string;
  onClick: () => void;
  customStyle?: string;
  children?: ReactNode;
}
interface ExpansiveButtonProps {
  label: string;
  altLabel: string;
  title: string;
  content: string;
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
      customStyle={cn("text-yisy-dark shadow-none", customStyle ?? customStyle)}
    >
      {children}
    </Button>
  );
}

export function TertiaryButton({
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
        "text-yisy-dark border border-gray-100",
        customStyle ?? customStyle
      )}
    >
      {children}
    </Button>
  );
}

const StyledButtonWrapper = styled.button`
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  color: inherit;

  & svg {
    position: relative;
    top: 2px;
    transition: top 200ms, rotate 500ms;
    stroke-width: 8px;
  }

  &:hover svg {
    top: 6px;
  }

  // Hide and show according labels based on the button state
  & #alt-label {
    display: none;
  }

  [data-state="open"] & svg {
    transform: rotate(0.5turn);
  }
  [data-state="open"] &:hover svg {
    top: 2px;
  }
  [data-state="open"] & #label {
    display: none;
  }
  [data-state="open"] & #alt-label {
    display: block;
  }
`;

const ExpansiveWrapper = styled(CollapsiblePrimitive.Root)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: inherit;
`;

const ExpandedContent = styled(CollapsiblePrimitive.Content)`
  animation: drop-in 1000ms var(--transition-timing-ease) both;
`;

export function ExpansiveButton({
  label,
  title,
  content,
  altLabel,
}: ExpansiveButtonProps) {
  return (
    <ExpansiveWrapper>
      <CollapsiblePrimitive.Trigger asChild>
        <StyledButtonWrapper>
          <ChevronDownIcon />
          <span id="label">{label}</span>
          <span id="alt-label">{altLabel}</span>
        </StyledButtonWrapper>
      </CollapsiblePrimitive.Trigger>
      <ExpandedContent>
        <StyledCardSubtitle>{title}</StyledCardSubtitle>
        <p>{content}</p>
      </ExpandedContent>
    </ExpansiveWrapper>
  );
}

export function Button({ id, onClick, customStyle, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      data-cy-id={`button-${id}`}
      className={cn(
        "py-1 px-3 rounded-md m-2 shadow-sm",
        customStyle ?? customStyle
      )}
    >
      {children}
    </button>
  );
}

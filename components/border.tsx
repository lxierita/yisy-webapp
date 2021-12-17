import styled from "styled-components";
import { ReactNode } from "react";

const BasicBorder = styled.div`
  border: 0.1px solid var(--color-gray-300);
`;

type BorderStrokeType = "info" | "warning";

export interface BorderProps {
  type: BorderStrokeType;
  children?: ReactNode;
}

const StyledBorder = styled.div`
  min-width: 450px;
  min-height: 300px;
  border: 6px solid
    ${(props) =>
      props.type === "warning"
        ? "var(--color-orange-dark)"
        : "var(--color-green-dark)"};
  border-radius: 8px;
  position: relative;

  & img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: -16px;
    left: -16px;
    z-index: 1;
  }
`;

export function Solid({ type, children }: BorderProps) {
  return (
    <StyledBorder aria-hidden type={type}>
      <img src="/static/info.svg" />
      {children}
    </StyledBorder>
  );
}
export default function Border() {
  return <BasicBorder />;
}

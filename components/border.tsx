import styled from "styled-components";
import { ReactNode } from "react";

const BasicBorder = styled.div`
  border: 0.1px solid var(--color-gray-300);

  &:focus,
  &:hover {
    border: 0.1px solid var(--color-gray-500);
  }
`;

type ContentType = "info" | "warning";

export interface BorderProps {
  type: ContentType;
  children?: ReactNode;
}

const StyledBorder = styled.div`
  min-width: 450px;
  height: fit-content;
  border-left: 3px solid
    ${(props) =>
      props.type === "warning"
        ? "var(--color-pure-black)"
        : "var(--color-green-normal)"};
  border-radius: 6px 6px 6px 3px;
  position: relative;
  padding: 32px;
  background-color: ${(props) =>
    props.type === "warning"
      ? "var(--color-pure-gray-100)"
      : "var(--color-green-xlight)"};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -25px;
  left: -23px;
  padding: 6px;
  width: 45px;
  height: 45px;
  border-radius: ${(props) => (props.type === "info" ? "50%" : "15px")};
  background-color: white;
  z-index: 1;

  & img {
    width: 100%;
  }
`;

export function Solid({ type, children }: BorderProps) {
  return (
    <StyledBorder aria-hidden type={type}>
      <IconWrapper type={type}>
        <img
          src={
            type === "info" ? "/static/info.svg" : "/static/alert-triangle.svg"
          }
        />
      </IconWrapper>
      {children}
    </StyledBorder>
  );
}

export const SectionBorder = styled.div`
  border: 3px dashed var(--color-gray-400);
  border-radius: 8px;
  padding: 48px;
`;

export default function Border(props) {
  const children = props.children;
  return <BasicBorder aria-hidden>{children}</BasicBorder>;
}

import styled, { css } from "styled-components";
import { ReactNode } from "react";

const BasicBorder = styled.div`
  border: 0.1px solid var(--color-gray-300);
  width: 100%;
  height: 100%;

  &:focus,
  &:hover {
    ${(props) =>
      props.clickable ??
      css`
        border: 0.1px solid var(--color-gray-500);
      `}
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

//TODO: control dash strokes distance with svg
// https://stackoverflow.com/questions/2771171/control-the-dashed-border-stroke-length-and-distance-between-strokes
export const SuccessBorder = styled.div`
  border-inline: 8px dashed var(--color-green-light);
  border-block: 3px ridge var(--color-green-light);
  border-radius: 8px;
  padding: 48px;
`;

export interface BasicBorderProps {
  clickable?: boolean;
  children?: ReactNode;
}

export default function Border({ clickable, children }: BasicBorderProps) {
  return (
    <BasicBorder aria-hidden clickable={clickable}>
      {children}
    </BasicBorder>
  );
}

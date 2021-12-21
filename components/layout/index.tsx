import styled, { css } from "styled-components";
import React from "react";
import { colors, ThemeName } from "../index";

const BackgroundMaskWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === "light"
      ? colors.light.bg
      : props.theme === "dark"
      ? colors.dark.bg
      : colors.transparent.bg};
  transform: var(--diagonal-skew);
  overflow-x: hidden;
  position: relative;
  top: 0;
  left: 0;
`;

const TwigWrapper = styled.div`
  width: 100px;
  height: 25px;
  position: absolute;
  isolation: isolate;
  display: ${(props) => (props.theme === "transparent" ? "none" : "initial")};

  &:first-of-type {
    ${(props) =>
      props.alternate
        ? css`
            top: 60px;
            right: -5px;
            transform: rotate(0.5turn) skewY(-5deg);
          `
        : css`
            top: 40px;
            left: -5px;
            transform: skewY(-2deg);
          `}
  }

  &:last-of-type {
    ${(props) =>
      props.alternate
        ? css`
            left: 0;
            bottom: 20px;
            transform: rotate(0.5turn) var(--diagonal-skew);
          `
        : css`
            right: 0;
            bottom: 20px;
          `}
  }

  & img {
    width: 100%;
  }
`;

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
}

const StyledSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function SectionContainer({ id, children }: SectionContainerProps) {
  return <StyledSection id={id}>{children}</StyledSection>;
}

export const StyledSectionContentContainer = styled.div`
  color: ${(props) =>
    props.theme === "light"
      ? colors.light.body
      : props.theme === "dark"
      ? colors.dark.body
      : colors.transparent.body};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin: 0 16px 16px;
  padding: 150px 45px;
  position: relative;
  z-index: 1;

  & h2,
  & h3 {
    color: ${(props) =>
      props.theme === "light"
        ? colors.light.title
        : props.theme === "dark"
        ? colors.dark.title
        : colors.transparent.title};
    font-size: 1.2rem;
  }
`;

export const StyledSectionContentMain = styled.div`
  flex: 1;
  min-width: 200px;

  & h3#section-subtitle {
    color: ${(props) =>
      props.theme === "light"
        ? colors.light.subtitle
        : props.theme === "dark"
        ? colors.dark.subtitle
        : colors.transparent.subtitle};
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const StyledSectionContentAside = styled.aside`
  flex: 1;
`;

export interface BackgroundMaskProps {
  theme: ThemeName;
  alternate: boolean;
}

export function BackgroundMask({ theme, alternate }: BackgroundMaskProps) {
  return (
    <BackgroundMaskWrapper aria-hidden id="mask">
      <Mask theme={theme}>
        <TwigWrapper alternate={alternate} theme={theme}>
          <img src="/static/twig2.png" alt="decorative left twig" />
        </TwigWrapper>
        <TwigWrapper alternate={alternate} theme={theme}>
          <img src="/static/twig1.png" alt="decorative right twig" />
        </TwigWrapper>
      </Mask>
    </BackgroundMaskWrapper>
  );
}

export default function Layout() {
  return <div />;
}

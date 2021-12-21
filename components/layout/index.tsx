import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import { relative } from "jest-haste-map/build/lib/fast_path";
import { number } from "prop-types";

const BackgroundMaskWrapper = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light"
      ? "var(--color-orange-light-bg)"
      : props.theme === "dark"
      ? "var(--color-yisy-green-dark)"
      : "none"};
  transform: var(--diagonal-skew);
  overflow-x: hidden;
  position: absolute;
  padding: 32px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TwigWrapper = styled.div`
  width: 100px;
  height: 25px;
  position: absolute;
  isolation: isolate;

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

type Height = "initial" | number;
const initHeight: Height = "initial";

export function SectionContainer({ id, children }: SectionContainerProps) {
  const [height, updateHeight] = useState(initHeight);
  useEffect(() => {
    //  TODO: get the "correct height"
    const section = document.querySelector(`#${id}`);
    const sectionHeight = Math.round(section.getBoundingClientRect().height);
    const content = document.querySelector(`#${id} #main`);
    const contentComputedHeight = Math.round(
      content.getBoundingClientRect().height
    );
    const mask = document.querySelector(`#${id} #mask`);
    const maskComputedHeight = Math.round(mask.getBoundingClientRect().height);
    const maxHeight = Math.max(maskComputedHeight, contentComputedHeight);
    console.log(
      "mask: ",
      maskComputedHeight,
      "content: ",
      contentComputedHeight,
      "max",
      maxHeight
    );
    if (sectionHeight <= maxHeight) {
      console.log("section.clientHeight <= maxHeight");

      if (contentComputedHeight < maskComputedHeight) {
        updateHeight(maskComputedHeight + 400);
        console.log("contentHeight < maskHeight");

        console.log(section.clientHeight);
      } else {
        updateHeight(contentComputedHeight + 200);
        console.log("contentHeight > maskHeight");
      }
    }
  }, []);
  console.log("height", height);

  return (
    <StyledSection id={id} style={{ height: `${height}` }}>
      {children}
    </StyledSection>
  );
}

export const StyledSectionContentContainer = styled.div`
  color: var(--color-black-text-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  & h2,
  & h3 {
    color: var(--color-yisy-green-text);
    font-size: 1.2rem;
  }
`;

export const StyledSectionContentMain = styled.div`
  flex: 1 1 150px;

  #section-subtitle {
    color: var(--color-pure-black);
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const StyledSectionContentAside = styled.aside`
  flex: 1;
`;

type Theme = "light" | "dark" | "transparent";

export interface BackgroundMaskProps {
  theme: Theme;
  alternate: boolean;
}

export function BackgroundMask({ theme, alternate }: BackgroundMaskProps) {
  return (
    <BackgroundMaskWrapper aria-hidden theme={theme} id="mask">
      <TwigWrapper alternate={alternate} theme={theme}>
        <img src="/static/twig2.png" />
      </TwigWrapper>
      <TwigWrapper alternate={alternate} theme={theme}>
        <img src="/static/twig1.png" />
      </TwigWrapper>
    </BackgroundMaskWrapper>
  );
}

export default function Layout() {
  return <div></div>;
}

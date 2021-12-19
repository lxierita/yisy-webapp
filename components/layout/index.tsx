import styled, { css } from "styled-components";

const BackgroundMaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: ${(props) =>
    props.theme === "light"
      ? "var(--color-orange-light-bg)"
      : props.theme === "dark"
      ? "var(--color-yisy-green-dark)"
      : "none"};
  transform: var(--diagonal-skew);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
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

export const SectionContainer = styled.div`
  position: relative;
`;

export const SectionContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-black-text-light);
  justify-content: center;
  align-items: center;
  padding: 32px;
  position: relative;
  max-height: 80%;
  z-index: 1;

  & #aside {
    flex: 1 999 0px;
  }

  & #main {
    flex: 1 1 150px;
    max-height: 450px;
  }

  & h2,
  & h3 {
    color: var(--color-yisy-green-text);
    font-size: 1.2rem;
  }

  & #main h3 {
    color: var(--color-pure-black);
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

type Theme = "light" | "dark" | "transparent";

export interface BackgroundMaskProps {
  theme: Theme;
  alternate: boolean;
}

export function BackgroundMask({ theme, alternate }: BackgroundMaskProps) {
  return (
    <BackgroundMaskWrapper aria-hidden theme={theme}>
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

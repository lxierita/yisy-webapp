import styled, { css } from "styled-components";

const BackgroundMaskWrapper = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light"
      ? "var(--color-orange-xlight)"
      : props.theme === "dark"
      ? "var(--color-yisy-green-dark)"
      : "none"};
  min-height: 950px;
  transform: var(--diagonal-skew);
  position: relative;
  overflow: hidden;
`;

const TwigWrapper = styled.div`
  width: 100px;
  height: 25px;
  position: absolute;

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

  //
  // TODO: twigs should hug the viewport when transparent
  //   &:first-of-type {
  //     margin-left: -20px;
  //   }
  //

  & img {
    width: 100%;
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

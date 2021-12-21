import styled from "styled-components";

export const StyledCardTitle = styled.h3`
  margin-top: auto;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-gray-800);
`;

export const StyledCardSubtitle = styled.h3`
  margin-top: auto;
  font-size: 1rem;
  font-weight: normal;
  color: var(--color-gray-800);
`;

export const StyledBorderedCardTitle = styled(StyledCardTitle)`
  &::before {
    content: "|";
    color: var(--color-green-normal);
    margin-right: 12px;
  }
`;

export type ThemeName = "light" | "dark" | "transparent";

type Theme = {
  [theme in ThemeName]: {
    title: string;
    subtitle: string;
    body: string;
    bg: string;
  };
};

export const colors: Theme = {
  light: {
    title: "var(--color-yisy-green-text)",
    subtitle: "var(--color-pure-black)",
    body: "var(--color-black-text-light)",
    bg: "var(--color-orange-light-bg)",
  },
  dark: {
    title: "var(--color-orange-vibrant)",
    subtitle: "var(--color-pure-gray-100)",
    body: "var(--color-gray-text)",
    bg: "var(--color-yisy-green-xdark)",
  },
  transparent: {
    title: "var(--color-orange-dark)",
    subtitle: "inherit",
    body: "inherit",
    bg: "var(--color-gray-50)",
  },
};

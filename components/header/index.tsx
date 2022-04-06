import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button";
import { useRouter } from "next/router";
import MobileNav from "./portal";

export interface Item {
  id: string;
  label: string;
  src: string;
}

interface TitleBarProps {
  navItems: Item[];
}

const StyledList = styled.ol`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1100px) {
    gap: 16px;
  }

  @media (min-width: 1300px) {
    gap: 24px;
  }
  @media (min-width: 1400px) {
    gap: 32px;
  }
`;

const StyledNavLink = styled.li`
  & a {
    display: inline-block;
    width: auto;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 1rem;
    transition: filter 200ms;
    color: var(--color-yisy-gray-logo);
    filter: drop-shadow(0.1px 0.1px var(--shadow-color));
  }
  &:hover a {
    color: var(--color-yisy-gray-dark);
    transition: filter 100ms;
    filter: brightness(20%) hue-rotate(100deg);
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 300px) {
    padding: 12px 0px;
    & > a {
      display: none;
    }
  }
  @media (min-width: 700px) {
    padding: 32px 0px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    & > a {
      display: initial;
    }
  }
  @media (min-width: 1400px) {
    padding: 32px 16px;
  }
`;

const StyledIcon = styled.img`
  object-fit: contain;
  @media (min-width: 300px) {
    max-width: 80px;
  }
  @media (min-width: 700px) {
    max-width: 100px;
  }
  @media (min-width: 1200px) {
    margin-left: 0px;
  }
  @media (min-width: 1300px) {
    margin-left: 32px;
  }
`;

const StyledNav = styled.nav`
  @media (min-width: 300px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: initial;
    padding: 0px;
  }
  @media (min-width: 1300px) {
    padding-right: 48px;
  }
`;

export function TitleBar(props) {
  const items = props.items;
  const router = useRouter();
  return (
    <StyledHeader>
      {/*TODO: use Link element for prod*/}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">
        <StyledIcon src={"/static/logo.png"} alt="Return Home" />
      </a>
      <StyledNav>
        <StyledList>
          {items.map((item) => (
            <StyledNavLink key={`link-${item.id}`}>
              <a href={item.src}>{item.label}</a>
            </StyledNavLink>
          ))}
        </StyledList>
      </StyledNav>
      <PrimaryButton
        id="get-started"
        onClick={() => router.push("/get-started")}
      >
        Start Here
      </PrimaryButton>
      <MobileNav items={items} />
    </StyledHeader>
  );
}

export default function Header({ navItems }: TitleBarProps) {
  return <TitleBar items={navItems} />;
}

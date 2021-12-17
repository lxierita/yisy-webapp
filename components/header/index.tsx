import React from "react";
import styled from "styled-components";
import StyledMobileNavPortal from "./portal";

export interface Item {
  id: string;
  label: string;
  src: string;
}

interface TitleBarProps {
  navItems: Item[];
}
const StyledNavLink = styled.li`
  display: inline-block;
  padding: 2px 10px;
  & a {
    display: inline-block;
    width: auto;
    padding: 5px 10px;
    font-weight: normal;
    font-size: 1.1rem;
    transition: transform 200ms;
    color: var(--color-green-text-dark);
  }
  &:hover a {
    transform: translateY(-8px);
    color: var(--color-black-normal);
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const StyledIcon = styled.img`
  object-fit: contain;
  max-width: 100px;
`;

const StyledNav = styled.nav`
  display: initial;
  @media (max-width: 600px) {
    display: none;
  }
`;

export function TitleBar(props) {
  const items = props.items;
  return (
    <>
      <StyledHeader>
        {/*TODO: use Link element for prod*/}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <StyledIcon src={"/static/logo.png"} alt="Return Home" />
        </a>
        <StyledNav>
          <ol>
            {items.map((item) => (
              <StyledNavLink key={`link-${item.id}`}>
                <a href={item.src}>{item.label}</a>
              </StyledNavLink>
            ))}
          </ol>
        </StyledNav>
        <StyledMobileNavPortal items={items} />
      </StyledHeader>
    </>
  );
}

export default function Header({ navItems }: TitleBarProps) {
  return <TitleBar items={navItems} />;
}

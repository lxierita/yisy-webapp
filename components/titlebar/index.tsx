import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export interface Item {
  id: string;
  label: string;
  src: string;
}

interface TitleBarProps {
  navItems: Item[];
}

const StyledLink = styled.li`
  display: inline-block;
  padding: 2px 10px;
  & a {
    width: auto;
    padding: 5px 10px;
    font-weight: normal;
    font-size: 1.1rem;
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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

const StyledButton = styled.button`
  display: none;
  width: 50px;
  height: 50px;
  padding: 5px;
  position: fixed;
  right: 6px;
  top: 6px;
  @media (max-width: 600px) {
    display: initial;
  }
  svg {
    width: 32px;
    height: 32px;
  }
  svg.close {
    transform: rotate(-45deg);
  }
`;

const StyledModal = styled(Dialog.Content)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-right: 2px groove var(--color-black-normal);
  background-color: var(--color-green-bg-xlight);

  & nav ol {
    display: flex;
    flex-direction: column;
  }
`;

function mobileNavPortal(props) {
  const { items } = props;
  return (
    <Dialog.Root modal={true}>
      <Dialog.Trigger asChild={true}>
        <StyledButton>
          <svg xmlns="http://www.w3.org/2000/svg">
            <line
              x1="4.8"
              y1="9.6"
              x2="27.2"
              y2="9.6"
              stroke="var(--color-text)"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <line
              x1="27.2"
              y1="22.0"
              x2="4.8"
              y2="22.0"
              stroke="var(--color-text)"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </svg>
        </StyledButton>
      </Dialog.Trigger>
      <StyledModal>
        <nav>
          <ol>
            {items.map((i) => (
              <StyledLink key={`link-${i.id}`}>
                <a href={i.src}>{i.label}</a>
              </StyledLink>
            ))}
          </ol>
        </nav>
        <Dialog.Close asChild>
          <StyledButton>
            <svg xmlns="http://www.w3.org/2000/svg" className="close">
              <line
                x1="16"
                y1="0"
                x2="16"
                y2="32"
                stroke="var(--color-text)"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="16"
                x2="32"
                y2="16"
                stroke="var(--color-text)"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </svg>
          </StyledButton>
        </Dialog.Close>
      </StyledModal>
    </Dialog.Root>
  );
}

const StyledMobileNavPortal = styled(mobileNavPortal)`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export function TitleBar(props) {
  const items = props.items;
  return (
    <>
      <StyledHeader>
        {/*use Link element for prod*/}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">
          <StyledIcon src={"/static/logo.png"} alt="Return Home" />
        </a>
        <StyledNav>
          <ol>
            {items.map((item) => (
              <StyledLink key={`link-${item.id}`}>
                <a href={item.src}>{item.label}</a>
              </StyledLink>
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

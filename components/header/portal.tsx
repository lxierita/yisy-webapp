import React, { ReactElement } from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { CrossCircledIcon } from "@radix-ui/react-icons";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  padding: 5px;
  svg {
    width: 32px;
    height: 32px;
  }
  svg.close {
    transform: rotate(-45deg);
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const StyledIcon = styled.img`
  display: block;
  width: min-content;
  max-width: 100px;
  margin: 0 auto;
  text-align: center;
  grid-area: logo;
`;

const Toggle = styled.div`
  display: grid;
  place-content: center;
  grid-area: close;
`;

const StyledModal = styled(Dialog.Content)`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: grid;
  padding: 100px 32px 16px 32px;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 50px 1fr 50px;
  grid-template-areas: 
    "logo logo logo"
    "links links links"
    "close close close"
    ;
  background-color: var(--color-gray-200);
  animation: slide-in 300ms var(--transition-timing-ease) both;
  animation-delay: 100ms;
`;

const StyledNav = styled.nav`
  grid-area: links;
  width: 100%;
`;

const StyledNavList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
`;

const StyledNavLink = styled.li`
  width: 100%;
  padding: 8px 16px;
  margin: 8px 16px;
  font-size: 1.2rem;
  color: var(--color-yisy-gray-logo);
  filter: drop-shadow(0.1px 0.1px var(--shadow-color));

  &:hover {
    color: var(--color-yisy-gray-dark);
    text-decoration: underline;
    transition: filter 100ms;
    filter: brightness(20%) hue-rotate(100deg);
  }

  & a {
    display: block;
    width: 100%;
  }
`;

const CloseButton = styled.button`
  all: unset;
  & .icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    color: var(--color-yisy-gray-logo);
    filter: drop-shadow(0.1px 0.1px var(--shadow-color));
    
    &:hover {
      color: var(--color-black-normal);
    }
  }
`;

const Wrapper = styled(Dialog.Root)`
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (min-width: 300px) {
    display: block;
  }
  @media (min-width: 1100px) {
    display: none;
  }
`;

export default function MobileNav(props): ReactElement {
  const items = props.items;
  return (
    <Wrapper modal={true}>
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
          <StyledIcon src={"/static/logo.png"} alt="Yisy Logo" />
        <StyledNav>
          <StyledNavList>
            {items &&
              items.map((item) => (
                <StyledNavLink key={`link-${item.id}`} className="link">
                  <a href={item.src}>{item.label}</a>
                </StyledNavLink>
              ))}
          </StyledNavList>
        </StyledNav>
          <Toggle>
              <Dialog.DialogClose asChild>
                  <CloseButton>
                      <CrossCircledIcon className="icon" />
                  </CloseButton>
              </Dialog.DialogClose>
          </Toggle>
      </StyledModal>
    </Wrapper>
  );
}

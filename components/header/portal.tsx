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

const StyledModal = styled(Dialog.Content)`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: var(--color-gray-200);
  animation: slide-in 300ms var(--transition-timing-ease) both;
  animation-delay: 100ms;
`;

const StyledNavList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledNavLink = styled.li`
  width: 100%;
  padding: 16px 32px;
  margin: 8px 16px;
  font-size: 1.2rem;
  color: var(--color-yisy-gray-logo);
  filter: drop-shadow(0.1px 0.1px var(--shadow-color));

  &:hover {
    color: var(--color-yisy-gray-dark);
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
  margin-block: 200px;
  & .icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    color: var(--color-yisy-gray-logo);
    filter: drop-shadow(0.1px 0.1px var(--shadow-color));
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
        <nav>
          <StyledNavList>
            {items &&
              items.map((item) => (
                <StyledNavLink key={`link-${item.id}`}>
                  <a href={item.src}>{item.label}</a>
                </StyledNavLink>
              ))}
            <Dialog.DialogClose asChild>
              <CloseButton>
                <CrossCircledIcon className="icon" />
              </CloseButton>
            </Dialog.DialogClose>
          </StyledNavList>
        </nav>
      </StyledModal>
    </Wrapper>
  );
}

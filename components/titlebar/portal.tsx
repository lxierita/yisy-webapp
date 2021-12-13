import * as Portal from "@radix-ui/react-portal";
import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const StyledButton = styled.button`
  display: none;
  width: 50px;
  height: 50px;
  padding: 5px;
  position: fixed;
  right: 6px;
  top: 6px;
  svg {
    width: 32px;
    height: 32px;
  }
  svg.close {
    transform: rotate(-45deg);
  }
  @media (max-width: 600px) {
    display: block;
  }
`;
const StyledOverlay = styled(Dialog.Overlay)`
  width: 100vw;
  min-width: calc(100% - 50px);
  height: 100vh;
  opacity: 0.6;
  background-color: var(--color-green-bg-xlight);
`;

const StyledModal = styled(Dialog.Content)`
  width: 70vw;
  max-width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & nav ol {
    display: flex;
    flex-direction: column;
  }
`;

const StyledNavList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledNavLink = styled.li`
  width: 100%;
  padding: 16px 32px;
  margin: 8px 16px;
  font-size: 1.2rem;
  color: var(--color-green-text-dark);
  text-shadow: currentColor 0.1px 0.2px 0.6px;

  &:hover {
    color: var(--color-black-text-light);
  }

  & a {
    display: block;
    width: 100%;
  }
`;

function MobileNav(props) {
  const items = props.items;
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
      <StyledOverlay />
      <StyledModal>
        <nav>
          <StyledNavList>
            {items ? (
              items.map((item) => (
                <StyledNavLink key={`link-${item.id}`}>
                  <a href={item.src}>{item.label}</a>
                </StyledNavLink>
              ))
            ) : (
              <></>
            )}
          </StyledNavList>
        </nav>
      </StyledModal>
    </Dialog.Root>
  );
}

const StyledMobileNav = styled(MobileNav)`
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 600px) {
    display: block;
  }
`;

export default function StyledMobileNavPortal(props) {
  const items = props.items;
  return (
    <Portal.Root>
      <StyledMobileNav items={items} />
    </Portal.Root>
  );
}

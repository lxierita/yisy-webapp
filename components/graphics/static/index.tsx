import styled from "styled-components";
import { BellIcon } from "@radix-ui/react-icons";

const PatreonIconWrapper = styled.div`
  width: 33px;
  height: 32px;
  display: grid;
  grid-template-columns: repeat(1fr, 5);
  grid-template-rows: 2fr 2fr 1fr;
  grid-template-areas:
    "bar circle circle circle"
    "bar circle circle circle"
    "bar blank blank blank";
  gap: 3px;

  & > * {
    background-color: hsl(356.5, 100%, 62.9%);
  }
  & #v-bar {
    grid-area: bar;
  }
  & #circle {
    grid-area: circle;
    border-radius: 50%;
  }
`;

export const PatreonIcon = () => (
  <PatreonIconWrapper
    id="graphics-static-patreon-icon"
    data-cy-id="graphics-static-patreon-icon"
    aria-hidden
  >
    <div id="v-bar" />
    <div id="circle" />
  </PatreonIconWrapper>
);
const PatreonSearchWrapper = styled.div`
  width: 300px;
  height: 48px;
  border-radius: 16px;
  border: 1px solid hsl(40, 13%, 95.5%);
  padding: 10px 16px;
  background-color: hsl(40, 13%, 95.5%);
  color: hsl(45, 4.6%, 65.9%);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
`;

const ProfileWrapper = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;

  & #shapes > * {
    width: 100%;
    min-height: 100%;
    position: absolute;
    opacity: 0.5;
  }

  #red-box {
    background-color: indianred;
  }
  #purple-circle {
    background-color: mediumpurple;
    border-radius: 50%;
  }
  #blue-box {
    background-color: deepskyblue;
  }
`;

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="grey"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
export const ProfileOne = () => {
  return (
    <ProfileWrapper>
      <div id="shapes">
        <div id="red-box" />
        <div id="purple-circle" />
        <div id="blue-box" />
      </div>
    </ProfileWrapper>
  );
};
export const PatreonSearch = () => (
  <PatreonSearchWrapper>
    <SearchIcon />
    <div>Find a creator</div>
  </PatreonSearchWrapper>
);

export default {};

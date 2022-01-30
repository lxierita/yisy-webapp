import styled from "styled-components";

const PatreonIconWrapper = styled.div`
  width: 25px;
  height: 20px;
  display: grid;
  grid-template-columns: repeat(1fr, 5);
  grid-template-rows: 2fr 2fr 1fr;
  grid-template-areas:
    "bar circle circle circle"
    "bar circle circle circle"
    "bar blank blank blank";
  gap: 2px;

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
  width: 200px;
  height: 30px;
  border-radius: 9999px;
  border: 1px solid hsl(40, 13%, 95.5%);
  padding: 0.5rem 0.75rem;
  background-color: hsl(40, 13%, 95.5%);
  color: hsl(45, 4.6%, 65.9%);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
`;

export const ProfileOne = styled.div`
  border-radius: 50%;
  width: ${(props) => (props.isLarge ? "50px" : "25px")};
  height: ${(props) => (props.isLarge ? "50px" : "25px")};
  overflow: hidden;
  border: 1px solid hsl(50, 12.5%, 90.6%);
  align-self: center;
  background: linear-gradient(
    90deg,
    #1f005c,
    #5b0060,
    #870160,
    #ac255e,
    #ca485c,
    #e16b5c,
    #f39060,
    #ffb56b
  );
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

export const PatreonSearch = () => (
  <PatreonSearchWrapper>
    <SearchIcon />
    <div>Find a creator</div>
  </PatreonSearchWrapper>
);

export default {};

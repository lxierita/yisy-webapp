import styled from "styled-components";

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

export default {};

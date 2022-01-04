import { PatreonIcon, PatreonSearch } from "./index";
import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: flex-start;
`;

export const NavBar = () => {
  return (
    <NavBarWrapper id="navbar">
      <PatreonSearch />
    </NavBarWrapper>
  );
};

export default function PatreonEarningStats() {
  return (
    <div id="graphics-patreon-ui-wrapper">
      <div>
        <PatreonIcon />
      </div>
    </div>
  );
}

import { PatreonIcon, PatreonSearch, ProfileOne } from "./index";
import styled from "styled-components";
import {
  BellIcon,
  ChatBubbleIcon,
  Pencil2Icon,
  GearIcon,
  ChevronRightIcon,
  HomeIcon,
  ReaderIcon,
  IdCardIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { VerticalFlexContainer } from "../../../stories/index.stories";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-areas:
    "bar bar bar"
    "sideMenu dashboard dashboard";
  border: 1px solid hsl(50, 12.5%, 90.6%);
  width: 700px;
`;

const StyledTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid hsl(50, 12.5%, 90.6%);
  width: 700px;
  height: auto;
  grid-area: bar;
`;

const FlexBox = styled.div`
  display: flex;
  width: fit-content;
  gap: 10px;
  align-content: center;
  justify-content: space-around;
`;

const StyledBellIcon = styled(BellIcon)`
  margin-top: 4px;
  width: 20px;
  height: 20px;
  color: dimgray;
`;
export const TitleBar = () => {
  return (
    <StyledTitleBar id="navbar">
      <PatreonIcon />
      <FlexBox>
        <PatreonSearch />
        <StyledBellIcon />
        <ProfileOne isLarge={false} />
      </FlexBox>
    </StyledTitleBar>
  );
};

const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sideMenu;
  background-color: hsl(40, 13%, 95.5%);
  align-content: center;
`;

const ProfileMain = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 8px;
  padding: 32px 6px;
  justify-content: center;
  font-size: 10px;
  margin: 0 auto;
  align-content: center;
`;

const InlineElement = styled.span`
  display: inline;
  margin: 2px;
  & * {
    display: inline;
  }
`;

const Note = styled.small`
  display: block;
  font-weight: bold;
  color: hsl(50, 12.5%, 70.6%);
  margin: 0;
  padding: 0;
  font-size: 8px;
`;

const SideMenuIconGroup = styled(FlexBox)`
  width: 100%;
  justify-content: space-around;
`;

const SideMenuItem = styled(FlexBox)`
  width: 100%;
  padding: 8px 8px 8px 32px;
  justify-content: flex-start;
  align-content: center;
  gap: 16px;
  & svg {
    width: 15px;
    height: 15px;
    margin-top: 5px;
  }
`;

const BorderedFlexBox = styled(SideMenuItem)`
  border-block: 1px solid hsl(50, 12.5%, 90.6%);
`;

const NestedMenuItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  align-self: flex-end;
  padding: 8px 16px 8px 0px;
`;

const Text = styled.p`
  width: 90%;
  font-size: 14px;
  color: ${(props) => props.color || "inherit"};
`;

const SecondaryText = styled.p`
  font-size: 14px;
  color: hsl(40, 4.8%, 75.3%);
`;

export const SideMenu = () => {
  return (
    <StyledSideMenu>
      <ProfileMain>
        <ProfileOne isLarge={true} />
        <p>
          Yisy Blogs
          <InlineElement>
            <ChevronRightIcon />
          </InlineElement>
          <Note>Creator account</Note>
        </p>
        <SideMenuIconGroup>
          <ChatBubbleIcon />
          <Pencil2Icon />
          <GearIcon />
        </SideMenuIconGroup>
      </ProfileMain>
      <BorderedFlexBox>
        <HomeIcon />
        <Text>Home</Text>
      </BorderedFlexBox>
      <SideMenuItem>
        <ReaderIcon />
        <Text>Posts</Text>
      </SideMenuItem>
      <SideMenuItem>
        <PatronsSvg />
        <Text>Patrons</Text>
      </SideMenuItem>
      <SideMenuItem>
        <IdCardIcon />
        <Text>Pages</Text>
      </SideMenuItem>
      <SideMenuItem>
        <RocketIcon />
        <Text>Promote</Text>
      </SideMenuItem>
      <SideMenuItem>
        <DollarSvg />
        <Text color={"hsl(207.4, 33.1%, 52%)"}>Income</Text>
      </SideMenuItem>
      <NestedMenuItemList>
        <Text color={"hsl(37.5, 12.1%, 25.9%)"}>Earnings</Text>
        <SecondaryText>Pledge growth</SecondaryText>
        <SecondaryText>Patronage</SecondaryText>
        <SecondaryText>Refunds</SecondaryText>
        <SecondaryText>Payouts</SecondaryText>
        <SecondaryText>Taxes</SecondaryText>
      </NestedMenuItemList>
      <BorderedFlexBox>
        <Text color={"hsl(40, 5.7%, 41.6%)"}>Creator Resources</Text>
      </BorderedFlexBox>
    </StyledSideMenu>
  );
};

const DollarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="hsl(207.4, 33.1%, 52%)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-dollar-sign"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const PatronsSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-users"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const PatreonButton = styled.div`
  width: fit-content;
  height: 30px;
  border-radius: 9999px;
  border: 1px solid hsl(40, 13%, 95.5%);
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  text-align: center;
  background-color: hsl(203.1, 68.4%, 92.5%);
`;

const PatreonPrimaryBtn = styled(PatreonButton)`
  color: hsl(207.9, 54%, 36.7%);
  margin-top: 8px;
`;

const PatreonPill = styled(PatreonButton)`
  color: black;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  background-color: ${(props) => (!props.isActive ? "initial" : "none")};
  border: ${(props) => (!props.isActive ? "initial" : "none")};
  font-size: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const StyledDashboard = styled.div`
  grid-area: dashboard;
`;

const DashboardContent = styled.div`
  width: 100%;
  margin: 32px;
`;

const DashboardText = styled(Text)`
  margin-top: 16px;
  color: hsl(40, 33.3%, 10.6%);
`;
const SmallTitle = styled(Title)`
  font-size: 10px;
`;

const gridCellHeight = 40;

const Graph = styled.div`
  height: 300px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(6, 40px);
  grid-template-columns: 25px repeat(6, 65px);
  place-content: center;
  position: relative;
`;

const GraphContainer = styled(VerticalFlexContainer)`
  margin: 24px 0 0 0;
  width: 460px;
  border: 1px solid hsl(50, 12.5%, 90.6%);
  padding: 16px;
  border-radius: 5px;
`;

const GraphGridItemBorder = "1px solid hsl(50, 12.5%, 90.6%)";
const GraphGridItem = styled.div`
  width: 100%;
  border-top: ${(props) =>
    props.isLastRow
      ? "1px solid hsl(205.7, 9.9%, 58.2%)"
      : "1px solid hsl(50, 12.5%, 90.6%)"};
  border-left: 1px solid hsl(50, 12.5%, 90.6%);
  border-bottom: ${(props) => props.isLastRow && GraphGridItemBorder};
`;

const GraphGridItemWithContent = styled(GraphGridItem)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

const GraphGridItemContent = styled.div`
  width: 75%;
  height: ${(props) => props.span * gridCellHeight - props.offset}px;
  background-color: hsl(150.7, 57.7%, 72.2%);
  position: absolute;
  top: ${(props) => props.offset}px;
  z-index: 1;
  opacity: 0.7;
`;

const GraphFlexBox = styled(FlexBox)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const GraphPoint = styled.span`
  font-size: 8px;
  justify-self: ${(props) => (props.isHorizontal ? "center" : "flex-end")};
  padding-right: ${(props) => (props.isHorizontal ? "0px" : "6px")};
`;

const DashboardGraph = () => {
  return (
    <GraphContainer>
      <GraphFlexBox>
        <SmallTitle>Earnings before tax</SmallTitle>
        <FlexBox>
          <PatreonPill isActive>6 Months</PatreonPill>
          <PatreonPill>1 Year</PatreonPill>
          <PatreonPill>All Time</PatreonPill>
        </FlexBox>
      </GraphFlexBox>
      <Graph>
        <GraphPoint>£2k</GraphPoint>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItemWithContent>
          <GraphGridItemContent span={5} offset={15} />
        </GraphGridItemWithContent>
        <GraphGridItem />
        <GraphGridItem />
        <GraphPoint>£1.5k</GraphPoint>
        <GraphGridItemWithContent>
          <GraphGridItemContent span={4} offset={10} />
        </GraphGridItemWithContent>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphPoint>£1k</GraphPoint>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItemWithContent>
          <GraphGridItemContent span={3} offset={8} />
        </GraphGridItemWithContent>
        <GraphPoint>£800</GraphPoint>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItemWithContent>
          <GraphGridItemContent span={2} offset={0} />
        </GraphGridItemWithContent>
        <GraphGridItem />
        <GraphPoint>£600</GraphPoint>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItemWithContent>
          <GraphGridItemContent span={1} offset={-5} />
        </GraphGridItemWithContent>
        <GraphGridItem />
        <GraphGridItem />
        <GraphGridItem />
        <GraphPoint>£0</GraphPoint>
        <GraphGridItem isLastRow />
        <GraphGridItemWithContent isLastRow>
          <GraphGridItemContent span={1} offset={0} />
        </GraphGridItemWithContent>
        <GraphGridItem isLastRow />
        <GraphGridItem isLastRow />
        <GraphGridItem isLastRow />
        <GraphGridItem isLastRow />
        <GraphPoint>-£20</GraphPoint>
        <GraphPoint isHorizontal>Oct 2020</GraphPoint>
        <GraphPoint isHorizontal>Nov 2020</GraphPoint>
        <GraphPoint isHorizontal>Dec 2020</GraphPoint>
        <GraphPoint isHorizontal>Jan 2021</GraphPoint>
        <GraphPoint isHorizontal>Feb 2021</GraphPoint>
        <GraphPoint isHorizontal>Mar 2021</GraphPoint>
      </Graph>
    </GraphContainer>
  );
};

const StyledDashboardGraph = styled(DashboardGraph)`
  margin-top: 50px;
`;

const DashBoard = () => {
  return (
    <StyledDashboard>
      <DashboardContent>
        <Title>Earnings</Title>
        <FlexBox>
          <PatreonPrimaryBtn>Download Monthly CSV</PatreonPrimaryBtn>
          <PatreonPrimaryBtn>Download Detail CSV</PatreonPrimaryBtn>
        </FlexBox>
        <DashboardText>
          Earnings are the amount of income you take home from the money pledged
          to you as a creator on Patreon.
        </DashboardText>
        <StyledDashboardGraph />
      </DashboardContent>
    </StyledDashboard>
  );
};

export default function PatreonEarningStats() {
  return (
    <Wrapper id="graphics-patreon-ui-wrapper">
      <TitleBar />
      <SideMenu />
      <DashBoard />
    </Wrapper>
  );
}

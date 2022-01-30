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
  margin-top: 8px;
  border: 1px solid hsl(40, 13%, 95.5%);
  padding: 0.5rem 0.75rem;
  background-color: hsl(203.1, 68.4%, 92.5%);
  color: hsl(207.9, 54%, 36.7%);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  text-align: center;
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
const DashBoard = () => {
  return (
    <StyledDashboard>
      <DashboardContent>
        <Title>Earnings</Title>
        <FlexBox>
          <PatreonButton>Download Monthly CSV</PatreonButton>
          <PatreonButton>Download Detail CSV</PatreonButton>
        </FlexBox>
      </DashboardContent>
      <DashboardText>
        Earnings are the amount of income you take home from the money pledged
        to you as a creator on Patreon. Earnings correspond to the time that
        Patreon successfully processed your pledges and refunds, rather than the
        time when you performed the work or published paid posts.
      </DashboardText>
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

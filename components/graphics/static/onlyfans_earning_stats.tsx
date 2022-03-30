import { Fragment, ReactElement } from "react";
import React from "react";
import styled from "styled-components";
import {
  HomeIcon,
  BellIcon,
  PlusIcon,
  ChatBubbleIcon,
  ChevronDownIcon,
  CalendarIcon,
  CrossCircledIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { ProfileOne } from "../../../stories/Graphics/logos.stories";

const HelpSVG: () => ReactElement = () => (
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
    className="feather feather-help-circle"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ArrowLeft = () => (
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
    className="feather feather-arrow-left"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const TopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(240, 4.2%, 9.4%);
  border-bottom: 1px solid hsl(50, 12.5%, 90.6%);
  padding: 16px;
  margin-bottom: 24px;

  & svg {
    width: 23px;
    height: 23px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    p {
      font-size: 20px;
    }
  }
`;

export const TopMenu: () => ReactElement = () => (
  <TopMenuWrapper>
    <div className="left">
      <ArrowLeft />
      <p>STATEMENTS</p>
    </div>
    <HelpSVG />
  </TopMenuWrapper>
);

const BottomMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(220, 4.9%, 36.3%);
  font-weight: bold;
  padding: 16px;
  border-top: 1px solid hsl(50, 12.5%, 90.6%);
`;

const PollWrapper = styled.div`
  padding-block: 0.2px;
  padding-inline: 5px;
  border-radius: 15px;
  border: solid 1px white;
  background-color: hsl(202.1, 49.5%, 42%);
  color: hsl(182.5, 13.6%, 95.5%);
  position: absolute;
  top: -5px;
  right: -10px;
  font-size: 8px;
`;

interface PollsProps {
  num: string;
}

const Polls: (props: PollsProps) => ReactElement = ({ num }) => (
  <PollWrapper>
    <span>{num}</span>
  </PollWrapper>
);

const PolledElement = styled.div`
  position: relative;
`;

export const BottomMenu: () => ReactElement = () => (
  <BottomMenuWrapper>
    <PolledElement>
      <HomeIcon />
      <Polls num="99+" />
    </PolledElement>
    <BellIcon />
    <PlusIcon />
    <PolledElement>
      <ChatBubbleIcon />
      <Polls num="668" />
    </PolledElement>
    <ProfileOne />
  </BottomMenuWrapper>
);

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.padded ? "16px" : "0px")};
  border: ${(props) =>
    props.padded ? "1px solid hsl(50, 12.5%, 90.6%)" : "none"};
  border-radius: 5px;
  margin: 4px;

  & .inactive {
    color: hsl(0, 0%, 62.7%);
  }

  & .collapsed {
    color: hsl(220, 4.9%, 36.3%);
    margin-left: 8px;
    font-weight: bold;
  }

  &.blue-top-border {
    border-radius: 0;
    border-top: 1.5px solid hsl(184.9, 21.2%, 54.7%);
    margin-top: 0;
    padding-block: 4px;
  }

  &.gray-bottom-border {
    border-bottom: 1px solid hsl(50, 12.5%, 90.6%);
    padding: 8px;
    border-radius: 0;
    &.final {
      margin-bottom: 0;
    }
  }

  &.dashed-bottom-border {
    border-bottom: 1px dashed hsl(50, 12.5%, 90.6%);
  }
  &.dashed-top-border {
    border-top: 1px dashed hsl(50, 12.5%, 90.6%);
  }
`;

const Collapsed: () => ReactElement = () => (
  <Flexbox padded>
    <span className="collapsedDate">March, 2022</span>
    <Flexbox>
      <p>£2639.19</p>
      <ChevronDownIcon className="collapsed" />
    </Flexbox>
  </Flexbox>
);

const DashboardWrapper = styled.div`
  width: 500px;
  & svg {
    width: 25px;
    height: 25px;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

const ListWrapper = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
`;

const List: () => ReactElement = () => (
  <ListWrapper>
    <Flexbox className="gray-bottom-border">
      <Flexbox>
        <Dot color="hsl(208.9, 62.6%, 57.1%)" />
        <span>SUBSCRIPTIONS</span>
      </Flexbox>
      <span>£150.00</span>
    </Flexbox>
    <Flexbox className="gray-bottom-border">
      <Flexbox>
        <Dot color="hsl(187.4, 54.9%, 73.9%)" />
        <span className="inactive">TIPS</span>
      </Flexbox>
      <span>£1217.50</span>
    </Flexbox>
    <Flexbox className="gray-bottom-border">
      <Flexbox>
        <Dot color="hsl(339.2, 60%, 76.5%)" />
        <span className="inactive">POSTS</span>
      </Flexbox>
      <span>£141.59</span>
    </Flexbox>
    <Flexbox className="gray-bottom-border">
      <Flexbox>
        <Dot color="hsl(15, 67.9%, 78%)" />
        <span className="inactive">MESSAGES</span>
      </Flexbox>
      <span>£5550.82</span>
    </Flexbox>
    <Flexbox className="gray-bottom-border">
      <Flexbox>
        <Dot color="hsl(257.8, 35.9%, 79.8%)" />
        <span className="inactive">REFERRALS</span>
      </Flexbox>
      <span>£7.25</span>
    </Flexbox>
    <Flexbox className="gray-bottom-border final">
      <Flexbox>
        <Dot color="hsl(41, 80.8%, 75.5%)" />
        <span className="inactive">STREAMS</span>
      </Flexbox>
      <span>£0.00</span>
    </Flexbox>
    <Flexbox className="blue-top-border">
      <Flexbox>
        <span>TOTAL</span>
      </Flexbox>
      <Flexbox>
        <span className="inactive">GROSS</span>
        <span>&ensp;£8896.94</span>
      </Flexbox>
      <Flexbox>
        <span className="inactive">NET</span>
        <span>&ensp;£7067.16</span>
      </Flexbox>
    </Flexbox>
  </ListWrapper>
);

const StyledText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: hsl(0, 0%, 62.7%);
  padding: 16px;
  margin: 8px;
  border: 1px solid hsl(50, 12.5%, 90.6%);
  border-radius: 32px;
  font-weight: bold;
  gap: 8px;

  & .icon {
    color: hsl(204.5, 80.7%, 61.4%);
    &.cross {
      margin-left: 48px;
    }
  }
  & .date {
    color: hsl(220, 2.7%, 22.2%);
  }
`;

const DateSelector: () => ReactElement = () => (
  <StyledText>
    <CalendarIcon className="icon" />
    <span>From</span>
    <span className="date">Feb 1, 2021</span>
    <span>To</span>
    <span className="date">Mar 18, 2022</span>
    <CrossCircledIcon className="icon cross" />
  </StyledText>
);

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 250px;
  justify-content: space-between;
  margin-bottom: 8px;

  & .dates {
    width: 100%;
    font-size: 14px;
  }

  & .inactive {
    margin-inline: 4px;
    font-weight: bold;
  }
`;

const SVGWrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  &.graph {
    width: 480px;
    height: 240px;
  }

  & g {
    stroke-width: 2;
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  & .orange {
    stroke: hsl(10, 34%, 79.2%);
  }
  & .blue {
    stroke: hsl(205.5, 32.3%, 51.4%);
  }
  & .purple {
    stroke: hsl(332.3, 26%, 80.4%);
  }
  & .green {
    stroke: hsl(182.9, 30.8%, 73.9%);
  }
`;

const LineGraph: () => ReactElement = () => (
  <SVGWrapper className="graph">
    <g className="blue">
      <path d="M5,215 L192,215 L283,215 L394,215 L480,215" />
    </g>
    <g className="purple">
      <path d="M5,215 L192,215 L283,215 L391,210 L480,208" />
    </g>
    <g className="green">
      <path d="M5,215 L150,208 L250,190 L300,180 L480,150" />
    </g>
    <g className="orange">
      <path d="M5,215 L120,180 L200,150 L250,120 L300,100 L350,90 L400,80 L480,40" />
    </g>
  </SVGWrapper>
);

const Graph: () => ReactElement = () => (
  <GraphWrapper>
    <Flexbox className="dashed-bottom-border">
      <span>All time</span>
      <Flexbox>
        <p className="inactive">£7067.16</p>
        <ChevronUpIcon className="inactive" />
      </Flexbox>
    </Flexbox>
    <Flexbox className="dashed-bottom-border" />
    <Flexbox className="dashed-bottom-border" />
    <Flexbox className="dashed-top-border">
      <Flexbox className="dates">
        <span>01 Feb 12:00 am</span>
        <span>15 Feb 11:30 pm</span>
        <span>18 Mar 11:59 pm</span>
      </Flexbox>
    </Flexbox>
    <LineGraph />
  </GraphWrapper>
);

const OverviewWrapper = styled.div`
  padding: 16px 8px 0px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid hsl(50, 12.5%, 90.6%);
  border-radius: 5px;
  margin: 16px 4px;
`;

const Overview: () => ReactElement = () => (
  <OverviewWrapper>
    <Graph />
    <DateSelector />
    <List />
  </OverviewWrapper>
);

const TitleWrapper = styled.div`
  width: 100%;
  margin-inline: 4px;
  padding-inline: 4px;
  color: hsl(214.3, 3.5%, 60.6%);
  & .title {
    font-weight: bold;
  }
`;
const Title: () => ReactElement = () => (
  <TitleWrapper>
    <p className="title">Earning Statistics</p>
    <p>Date/Time shown in UTC time zone</p>
  </TitleWrapper>
);

export default function OnlyFansEarningStats(): ReactElement {
  return (
    <DashboardWrapper>
      <TopMenu />
      <Title />
      <Overview />
      <Collapsed />
      <BottomMenu />
    </DashboardWrapper>
  );
}

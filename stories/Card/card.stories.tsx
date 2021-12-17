import Card, {
  BasicWithIcon,
  Clickable,
  Collapsible,
} from "../../components/card";
import React from "react";
import { Meta } from "@storybook/react";
import styled from "styled-components";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const BasicWrapper = styled.div`
  padding: 8px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  margin: 0 auto;

  & div {
    flex: 1;
  }
`;

export const BasicCard: React.VFC<{}> = () => (
  <BasicWrapper>
    <BasicWithIcon
      id="Basic Card"
      title="Card title"
      gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
    />
  </BasicWrapper>
);
export const BasicCardsMultiple: React.VFC<{}> = () => {
  return (
    <FlexContainer>
      <BasicWithIcon
        id="multiple-card"
        title="Card 1"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
      />
      <BasicWithIcon
        id="multiple-card"
        title="Card 2"
        gist=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
      <BasicWithIcon
        id="multiple-card"
        title="Card 3"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </FlexContainer>
  );
};

export const BasicCardWithIcon: React.VFC<{}> = () => (
  <BasicWrapper>
    <BasicWithIcon
      id="single-card"
      title="Card Title"
      imageUrl={"/static/package.svg"}
      gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
    />
  </BasicWrapper>
);

export const BasicCardsWithIconMultiple: React.VFC<{}> = () => {
  return (
    <FlexContainer>
      <BasicWithIcon
        id="multiple-card"
        title="Card 1"
        imageUrl={"/static/log-in.svg"}
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
      />
      <BasicWithIcon
        id="multiple-card"
        title="Card 2"
        imageUrl={"/static/tag.svg"}
        gist=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
      <BasicWithIcon
        id="multiple-card"
        title="Card 3"
        imageUrl={"/static/info.svg"}
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </FlexContainer>
  );
};

export const ClickableCard: React.VFC<{}> = () => (
  <BasicWrapper>
    <Clickable
      id="single-card"
      title="Card Title"
      gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
      url="/Self-Assessment"
    />
  </BasicWrapper>
);

export const ClickableCardsMultiple: React.VFC<{}> = () => {
  return (
    <FlexContainer>
      <Clickable
        id="multiple-card"
        title="Subscription"
        url="/subscription"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
      />
      <Clickable
        id="multiple-card"
        title="Year round"
        url="/year-round"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
      <Clickable
        id="multiple-card"
        title="Not sure"
        url="/guide/service-option"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </FlexContainer>
  );
};

export const CollapsibleCard: React.VFC<{}> = () => (
  <FlexContainer>
    <Collapsible
      id="single-collapsiblecard"
      title="Card Title"
      gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
      subtitle="Card subtitle"
      note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
    />
  </FlexContainer>
);

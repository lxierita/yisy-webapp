import Card, {
  BasicWithIcon,
  Clickable,
  Collapsible,
} from "../../components/card";
import React from "react";
import { Meta } from "@storybook/react";
import styled from "styled-components";
import {
  HorizontalFlexContainer,
  VerticalFlexContainer,
} from "../index.stories";
import { Solid } from "../../components/border";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const BasicWrapper = styled.div`
  padding: 8px;
  margin: 0 auto;
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
    <HorizontalFlexContainer>
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
    </HorizontalFlexContainer>
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
    <HorizontalFlexContainer>
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
    </HorizontalFlexContainer>
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
      theme="light"
    />
  </BasicWrapper>
);

export const ClickableCardsMultiple: React.VFC<{}> = () => {
  return (
    <HorizontalFlexContainer>
      <Clickable
        theme="light"
        id="multiple-card"
        title="Subscription"
        url="/subscription"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
      />
      <Clickable
        theme="light"
        id="multiple-card"
        title="Year round"
        url="/year-round"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
      <Clickable
        theme="light"
        id="multiple-card"
        title="Not sure"
        url="/guide/service-option"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </HorizontalFlexContainer>
  );
};

export const CollapsibleCard: React.VFC<{}> = () => (
  <HorizontalFlexContainer>
    <Collapsible
      id="single-collapsiblecard"
      title="Card Title"
      gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
      subtitle="Card subtitle"
      note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
    />
  </HorizontalFlexContainer>
);

export const AsideInfoCard = () => (
  <VerticalFlexContainer>
    <Solid type="info">
      <Collapsible
        id="single-collapsiblecard"
        title="Some additional information"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
        subtitle="A subtitle"
        note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </Solid>
  </VerticalFlexContainer>
);

export const AsideWarningCard = () => (
  <VerticalFlexContainer>
    <Solid type="warning">
      <Collapsible
        id="single-collapsiblecard"
        title="Some additional information"
        gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt."
        subtitle="A subtitle"
        note="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
      />
    </Solid>
  </VerticalFlexContainer>
);

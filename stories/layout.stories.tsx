import Layout, {
  BackgroundMask,
  StyledSectionContentContainer,
  StyledSectionContentAside,
  StyledSectionContentMain,
  SectionContainer,
} from "../components/layout";
import { Meta } from "@storybook/react";
import styled from "styled-components";
import Border, { Solid } from "../components/border";
import { VerticalFlexContainer } from "./index.stories";
import { Clickable } from "../components/card";
import React from "react";

export default {
  title: "Components/Layout",
  component: Layout,
} as Meta;

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SmallSection = styled.section`
  width: 80vw;
  height: 30vh;
  padding: 32px;
`;

const StyledSectionContent = (props) => {
  const theme = props.theme;
  return (
    <StyledSectionContentContainer theme={theme} id="main">
      <StyledSectionContentMain theme={theme}>
        <VerticalFlexContainer>
          <h2>Title</h2>
          <h3 id="section-subtitle">Section content subtitle</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore m agna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </VerticalFlexContainer>
      </StyledSectionContentMain>
      <StyledSectionContentAside>
        <VerticalFlexContainer>
          <Clickable
            id="single-card"
            title="Card Title"
            gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua."
            url="/Self-Assessment"
            theme={theme}
          />
          <Clickable
            id="multiple-card"
            title="Year round"
            url="/year-round"
            gist="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
            theme={theme}
          />
        </VerticalFlexContainer>
      </StyledSectionContentAside>
    </StyledSectionContentContainer>
  );
};

const Body = styled.div`
  background-color: var(--color-gray-100);
  height: 1200px;
`;

export const DarkDiagonalBackground = () => (
  <div>
    <SmallSection />
    <SectionContainer id="diagonal">
      <StyledSectionContent theme="dark" />
      <BackgroundMask theme="dark" alternate={false} />
    </SectionContainer>
    <SmallSection />
  </div>
);

export const DarkDiagonalBackgroundVariant = () => (
  <div>
    <SmallSection />
    <Section>
      <StyledSectionContent theme="dark" />
      <BackgroundMask theme="dark" alternate />
    </Section>
    <SmallSection />
  </div>
);

export const LightDiagonalBackground = () => (
  <div>
    <SmallSection />
    <SectionContainer id="diagonal">
      <StyledSectionContent theme="light" />
      <BackgroundMask theme="light" alternate={false} />
    </SectionContainer>
    <SmallSection />
  </div>
);

export const LightDiagonalBackgroundVariant = () => (
  <div>
    <SmallSection />
    <Section>
      <StyledSectionContent theme="dark" />
      <BackgroundMask theme="light" alternate />
    </Section>
    <SmallSection />
  </div>
);

export const TransparentDiagonalBackground = () => (
  <Body>
    <Border clickable={false}>
      <SmallSection />
      <Section>
        <StyledSectionContent theme="dark" />
        <BackgroundMask theme="transparent" alternate={false} />
      </Section>
      <SmallSection />
    </Border>
  </Body>
);

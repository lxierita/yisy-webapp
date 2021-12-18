import Layout, { BackgroundMask } from "../components/layout";
import { Meta } from "@storybook/react";
import styled from "styled-components";
import Border, { Solid } from "../components/border";

export default {
  title: "Components/Layout",
  component: Layout,
} as Meta;

const Section = styled.section`
  width: 80vw;
  height: 70vh;
  padding: 32px;
`;

const SmallSection = styled.section`
  width: 80vw;
  height: 30vh;
  padding: 32px;
`;

const Body = styled.div`
  background-color: var(--color-gray-100);
`;

export const DarkDiagonalBackground = () => (
  <div>
    <SmallSection />
    <Section>
      <BackgroundMask theme="dark" alternate={false} />
    </Section>
    <SmallSection />
  </div>
);

export const DarkDiagonalBackgroundVariant = () => (
  <div>
    <SmallSection />
    <Section>
      <BackgroundMask theme="dark" alternate />
    </Section>
    <SmallSection />
  </div>
);

export const LightDiagonalBackground = () => (
  <div>
    <SmallSection />
    <Section>
      <BackgroundMask theme="light" alternate={false} />
    </Section>
    <SmallSection />
  </div>
);

export const LightDiagonalBackgroundVariant = () => (
  <div>
    <SmallSection />
    <Section>
      <BackgroundMask theme="light" alternate />
    </Section>
    <SmallSection />
  </div>
);

export const TransparentDiagonalBackground = () => (
  <Body>
    <Border>
      <SmallSection />
      <Section>
        <BackgroundMask theme="transparent" alternate={false} />
      </Section>
      <SmallSection />
    </Border>
  </Body>
);

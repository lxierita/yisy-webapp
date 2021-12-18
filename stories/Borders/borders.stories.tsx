import Border, { SectionBorder, Solid } from "../../components/border";
import { Meta } from "@storybook/react";
import styled from "styled-components";
import { VerticalFlexContainer, PrimaryButton } from "../index.stories";

export default {
  component: Border,
  title: "Components/Borders",
} as Meta;

const FormWrapper = styled(VerticalFlexContainer)`
  justify-content: space-between;
  position: relative;
`;

function SectionContent() {
  return (
    <FormWrapper>
      <h2>Section title</h2>
      <p>
        This border is most likely to be applied to sections of interactive
        contents, such as forms and informative games.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <PrimaryButton>Start something</PrimaryButton>
    </FormWrapper>
  );
}

export const PrimaryInfo: React.VFC<{}> = () => <Solid type="info" />;

export const Section: React.VFC<{}> = () => (
  <SectionBorder>
    <SectionContent />
  </SectionBorder>
);

import Border, {
  SectionBorder,
  Solid,
  SuccessBorder,
} from "../../components/border";
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

interface BorderContentProps {
  title: string;
  content: string;
}

function BorderContent({ title, content }: BorderContentProps) {
  return (
    <FormWrapper>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <PrimaryButton>Start something</PrimaryButton>
    </FormWrapper>
  );
}

const SolidWrapper = styled(VerticalFlexContainer)`
  height: 300px;
  & div {
    flex: 1;
  }
`;

export const InfoBorder: React.VFC<{}> = () => (
  <SolidWrapper>
    <Solid type="info" />
  </SolidWrapper>
);
export const WarningBorder: React.VFC<{}> = () => (
  <SolidWrapper>
    <Solid type="warning" />
  </SolidWrapper>
);

export const InteractiveBorder: React.VFC<{}> = () => (
  <SectionBorder>
    <BorderContent
      title="Section Title"
      content="This border is most likely to be applied to Borders of interactive
        contents, such as forms and informative games."
    />
  </SectionBorder>
);

export const SuccessMessageBorder = () => {
  return (
    <SuccessBorder>
      <BorderContent
        title="Success!"
        content="You will soon receive an email confirmation of booking from us. Below
        the booking details. If required reschedule or cancellation, please email us at hello@yisy.co.uk"
      />
    </SuccessBorder>
  );
};

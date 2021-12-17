import { Meta } from "@storybook/react";
import {
  Button,
  ExpansiveButton,
  PrimaryButton,
  SecondaryButton,
} from "../../components/button";

export default {
  component: Button,
  title: "Components/Buttons",
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <PrimaryButton id={""} onClick={() => {}}>
    <p>Button</p>
  </PrimaryButton>
);
export const Secondary: React.VFC<{}> = () => (
  <SecondaryButton id={""} onClick={() => {}}>
    <p>Button</p>
  </SecondaryButton>
);

export const Expansive: React.VFC<{}> = () => (
  <ExpansiveButton
    label="Show more"
    altLabel="Show less"
    title="Additional information"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt"
  />
);

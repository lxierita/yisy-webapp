import { Meta } from "@storybook/react";
import {
  Button,
  PrimaryButton,
  SecondaryButton,
} from "../../components/button";

export default {
  component: Button,
  title: "Components/Button/Primary",
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

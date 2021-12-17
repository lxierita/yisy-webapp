import Border, { Solid } from "../../components/border";
import { Meta } from "@storybook/react";

export default {
  component: Border,
  title: "Components/Borders",
} as Meta;

export const PrimaryInfo: React.VFC<{}> = () => <Solid type="info" />;

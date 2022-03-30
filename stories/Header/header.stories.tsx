import Header, { Item } from "../../components/header";
import { Meta } from "@storybook/react";
import { items } from "../../pages";

export default {
  component: Header,
  title: "Components/Title Bar",
} as Meta;

const Template = (args) => <Header {...args} />;
export const Main = Template.bind({});

Main.args = {
  navItems: items,
};

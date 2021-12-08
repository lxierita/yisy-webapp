import TitleBar, { Item } from "../../components/titlebar";
import { Meta } from "@storybook/react";

export default {
  component: TitleBar,
  title: "Components/Title Bar",
} as Meta;

const items: Item[] = [
  {
    id: "pricing",
    label: "Pricing",
    src: "#",
  },
  {
    id: "services",
    label: "Services",
    src: "#",
  },
  {
    id: "contacts",
    label: "Contacts",
    src: "#",
  },
  {
    id: "login",
    label: "Log in",
    src: "#",
  },
];

const Template = (args) => <TitleBar {...args} />;
export const Main = Template.bind({});

Main.args = {
  navItems: items,
};

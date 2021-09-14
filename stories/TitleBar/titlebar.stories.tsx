import TitleBar, { MenuItem } from "../../components/titlebar";
import { Meta } from "@storybook/react";

export default {
  component: TitleBar,
  title: "Components/Title Bar",
} as Meta;

const menuItems: MenuItem[] = [
  {
    phone: {
      id: "phone-number",
      label: "+44 75 2685 7842",
      onClick: () => {},
      primary: true,
    },
  },
  {
    pricing: {
      id: "pricing",
      label: "Pricing",
      onClick: () => {},
      primary: false,
    },
  },
  {
    "question-form": {
      id: "question-form",
      label: "Do I need to pay tax",
      onClick: () => {},
      primary: false,
    },
  },
  {
    "about-us": {
      id: "about-us",
      label: "Why us",
      onClick: () => {},
      primary: false,
    },
  },
  {
    login: {
      id: "login",
      label: "Log In",
      onClick: () => {},
      primary: true,
    },
  },
];

const Template = (args) => <TitleBar {...args} />;
export const Main = Template.bind({});

Main.args = {
  items: menuItems,
};

import TitleBar, { Option } from "../../components/titlebar";
import { Meta } from "@storybook/react";

export default {
  component: TitleBar,
  title: "Components/Title Bar",
} as Meta;

const Template = (args) => <TitleBar {...args} />;
export const Main = Template.bind({});

const options: Option[] = [
  {
    id: "nav-contact-tel",
    label: "075 2685 7842",
    onClick: () => {
      return {};
    },
    primary: false,
    sticky: true,
  },
  {
    id: "nav-login",
    label: "Log In",
    onClick: () => {
      return {};
    },
    primary: false,
    sticky: true,
  },
  {
    id: "nav-pricing",
    label: "Pricing",
    onClick: () => {
      return {};
    },
    primary: true,
    sticky: true,
  },
  {
    id: "nav-do-i-need",
    label: "Do I need to pay tax",
    onClick: () => {
      return {};
    },
    primary: true,
    sticky: false,
  },
  {
    id: "nav-support",
    label: "Support",
    onClick: () => {
      return {};
    },
    primary: false,
    sticky: false,
  },
  {
    id: "nav-about-us",
    label: "Why us",
    onClick: () => {
      return {};
    },
    primary: true,
    sticky: false,
  },
];
Main.args = {
  options: [""],
};

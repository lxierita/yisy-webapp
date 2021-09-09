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
    id: "nav-login",
    label: "Log In",
    onClick: () => {
      return {};
    },
    order: "last",
  },
  {
    id: "nav-contact-tel",
    label: "📞 075 2685 7842",
    onClick: () => {
      return {};
    },
    order: 4,
  },
  {
    id: "nav-pricing",
    label: "Pricing",
    onClick: () => {
      return {};
    },
    order: 2,
  },
  {
    id: "nav-do-i-need",
    label: "Do I need to pay tax",
    onClick: () => {
      return {};
    },
    order: 1,
  },
  {
    id: "nav-about-us",
    label: "Why us",
    onClick: () => {
      return {};
    },
    order: 3,
  },
];
Main.args = {
  options,
};

import { Meta } from "@storybook/react";

import RadioGroup, { RadioGroupItem } from "../components/radio";

export default {
  component: RadioGroup,
  title: "Components/Radio",
} as Meta;

const items: RadioGroupItem[] = [
  {
    label: "Yes",
    value: "yes",
    id: "yes",
    onClick: () => {},
  },
  {
    label: "No",
    value: "no",
    id: "no",
    onClick: () => {},
  },

  { label: "Not sure", value: "notsure", id: "notsure", onClick: () => {} },
];

export const Radio: React.VFC<{}> = () => (
  <RadioGroup aria={"a11y"} items={items} />
);

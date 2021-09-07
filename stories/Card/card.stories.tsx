import Card from "../../components/card";
import React from "react";

import { Meta } from "@storybook/react";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Simple: React.VFC<{}> = () => (
  <Card title="Card Title" desc="Some description" url="" customStyle="w-1/2">
    Card
  </Card>
);

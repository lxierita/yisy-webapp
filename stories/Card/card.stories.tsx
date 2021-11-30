import Card from "../../components/card";
import React from "react";

import { Meta } from "@storybook/react";
import Link from "../../components/link";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const Simple: React.VFC<{}> = () => (
  <Card id="" title="Card Title" customStyle="w-1/5">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Card>
);

export const SimpleWithLink: React.VFC<{}> = () => {
  return (
    <Card id="" title="Card Title"  customStyle="w-1/5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link src="#" label="Go to" customStyle={"mt-4"} />
    </Card>
  );
};

export const Multiple: React.VFC<{}> = () => {
  return (
    <div className="flex flex-row">
      <Card id="" title="Card 1"  customStyle="w-1/5 m-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
      <Card id="" title="Card 2"  customStyle="w-1/5 m-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
      <Card id="" title="Card 3"  customStyle="w-1/5 m-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Card>
    </div>
  );
};

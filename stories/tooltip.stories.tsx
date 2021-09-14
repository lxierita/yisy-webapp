import { Meta } from "@storybook/react";
import Tooltip from "../components/tooltip";
import { ReactNode } from "react";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
} as Meta;

export const Radio: React.VFC<{}> = () => (
  <Tooltip>
    <div>
      <h5 className={"mb-2"}>Helpful content</h5>
      <hr />
      <p className={"mt-2"}> more details</p>
    </div>
  </Tooltip>
);

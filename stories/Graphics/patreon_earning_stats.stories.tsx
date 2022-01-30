import PatreonEarningStats from "../../components/graphics/static/patreon_earning_stats";
import { Meta } from "@storybook/react";

export default {
  title: "Graphics/Base/PatreonEarningStats",
  component: PatreonEarningStats,
} as Meta;

export { TitleBar } from "../../components/graphics/static/patreon_earning_stats";
export { SideMenu } from "../../components/graphics/static/patreon_earning_stats";
export const PatreonEarning = () => <PatreonEarningStats />;

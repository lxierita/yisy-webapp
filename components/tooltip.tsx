import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  StopIcon,
  QuestionMarkIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

export default function Tooltip(props) {
  const { children } = props;
  return (
    <TooltipPrimitive.Root delayDuration={100}>
      <TooltipPrimitive.Trigger>
        <QuestionMarkCircledIcon
          className={"shadow-sm bg-white"}
          color={"darkgreen"}
        />
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side={"right"}
        sideOffset={5}
        className={"p-6 border border-yisy-black rounded-md"}
      >
        {children}
        <TooltipPrimitive.Arrow />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}

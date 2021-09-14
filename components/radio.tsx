import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import cn from "classnames";

export interface RadioGroupItem {
  value: string;
  id: string;
  label: string;
  onClick: () => void;
}

interface RadioGroupProps {
  aria: string;
  items: RadioGroupItem[];
}

const afterElement =
  "after:block after:w-px after:h-px after:rounded-full bg-yisy-green-200";

export function RadioGroup({ aria, items }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root aria-labelledby={aria} className={"w-4/5"}>
      {items.map((i) => (
        <div
          onClick={i.onClick}
          key={i.id}
          data-cy-id={`radio-${i.id}`}
          className={"flex flex-row items-center my-2"}
        >
          <RadioGroupPrimitive.Item
            value={i.value}
            id={i.id}
            className={
              "w-4 h-4 rounded-full bg-white shadow-sm border-2 border-yisy-black"
            }
          >
            <RadioGroupPrimitive.Indicator
              className={cn(
                "flex w-full h-full justify-center rounded-full items-center relative",
                afterElement
              )}
            />
          </RadioGroupPrimitive.Item>
          <label htmlFor={i.id} className={"text-yisy-dark pl-3 leading-4"}>
            {i.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
}

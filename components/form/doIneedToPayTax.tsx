import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupIndicator } from "@radix-ui/react-radio-group";
import { SecondaryButton } from "../button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import Card from "../card";

interface DinProps {
  activeStep: number;
  response: Response;
}

const radioStyles = "bg-white w-25 h-25 rounded-full";

type Response = "Yes" | "YesBut" | "Unsure" | "No" | "NotEnoughMoney" | null;

function DoINeedToPayTax({ response, activeStep }: DinProps) {
  const [as, updateAs] = useState(activeStep);
  const [resp, updateResp] = useState(response);
  return (
    <Card
      id={"doINeedToPayTax"}
      title={""}
      customStyle={"leading-relaxed w-3/5"}
    >
      {as == 2 ? (
        <SecondaryButton
          id={"previous"}
          onClick={() => {
            updateAs(1);
            updateResp(null);
          }}
        >
          <span>Previous</span>
          <ArrowLeftIcon />
        </SecondaryButton>
      ) : (
        <></>
      )}
      {as == 1 ? (
        <div>
          <h4 className={"text-lg"}>
            Have you received: gifts, paid-for subscriptions and donations from
            Onlyfans, Patreon or other online platforms?
          </h4>
          <RadioGroup.Root
            defaultValue="Yes"
            aria-labelledby={`Have you received money online? `}
          >
            <div
              onClick={() => {
                updateResp(null);
                updateAs(2);
              }}
            >
              <RadioGroup.Item
                value="yes"
                id={"yes"}
                className={cn(radioStyles)}
              >
                <RadioGroupIndicator />
              </RadioGroup.Item>
              <label htmlFor={"yes"}>Yes</label>
            </div>
            <div onClick={() => updateResp("No")}>
              <RadioGroup.Item value="no" id={"no"} className={cn(radioStyles)}>
                <RadioGroupIndicator />
              </RadioGroup.Item>
              <label htmlFor={"no"}>No</label>
            </div>
          </RadioGroup.Root>
        </div>
      ) : (
        <div>
          <div>
            <h4>Was it more than £1,000 per year or £80 per month?</h4>
            <RadioGroup.Root
              defaultValue="Yes"
              aria-labelledby={`Did you receive more than £1000?`}
            >
              <div onClick={() => updateResp("Yes")}>
                <RadioGroup.Item
                  value="yes"
                  id={"yes"}
                  className={cn(radioStyles)}
                >
                  <RadioGroupIndicator />
                </RadioGroup.Item>
                <label htmlFor={"yes"}>Yes</label>
              </div>
              <div onClick={() => updateResp("NotEnoughMoney")}>
                <RadioGroup.Item
                  value="no"
                  id={"no"}
                  className={cn(radioStyles)}
                >
                  <RadioGroupIndicator />
                </RadioGroup.Item>
                <label htmlFor={"no"}>No</label>
              </div>
              <div onClick={() => updateResp("YesBut")}>
                <RadioGroup.Item
                  value="yesbut"
                  id={"yesbut"}
                  className={cn(radioStyles)}
                >
                  <RadioGroupIndicator />
                </RadioGroup.Item>
                <label htmlFor={"yesbut"}>Yes but they were gifts</label>
              </div>
              <div onClick={() => updateResp("Unsure")}>
                <RadioGroup.Item value="unsure" id={"unsure"}>
                  <RadioGroupIndicator />
                </RadioGroup.Item>
                <label htmlFor={"unsure"}>I am not sure</label>
              </div>
            </RadioGroup.Root>
          </div>
        </div>
      )}
      {resp ? (
        <div>
          <p>{answer(resp)}</p>
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
}

const answer: (Response) => string = (resp) => {
  switch (resp) {
    case "Yes":
      return "Yes you do";
      break;
    case "YesBut":
      return (
        "Unless the gifts are from people that you know personally, you will need to inform HMRC. Gifts" +
        "and donations are taxable if because of a hobby, vocation or intended to get a response or action from you"
      );
      break;
    case "Unsure":
      return (
        "We can advise as to what is income and how close to this you are, even if your income is received in" +
        "crypto or foreign currency"
      );
      break;
    case "NotEnoughMoney":
      return "If you received less than £1,000 over a year, you do not need to inform HMRC";
      break;
    default:
      return "No, you don't";
  }
};

export default function DintForm() {
  return <DoINeedToPayTax activeStep={1} response={null} />;
}

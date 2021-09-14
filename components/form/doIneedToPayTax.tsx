import { useState } from "react";
import { RadioGroupIndicator } from "@radix-ui/react-radio-group";
import { SecondaryButton, TertiaryButton } from "../button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import cn from "classnames";
import Card from "../card";
import RadioGroup, { RadioGroupItem } from "../radio";
import Tooltip from "../tooltip";

interface DinProps {
  activeStep: number;
  response: Response;
}

type Response = "Yes" | "YesBut" | "Unsure" | "No" | "NotEnoughMoney" | null;

function DoINeedToPayTax({ response, activeStep }: DinProps) {
  const [as, updateAs] = useState(activeStep);
  const [resp, updateResp] = useState(response);
  return (
    <Card
      id={"doINeedToPayTax"}
      title={""}
      customStyle={"leading-relaxed w-3/5 border-none pt-1"}
    >
      {as == 2 ? (
        <TertiaryButton
          id={"previous"}
          onClick={() => {
            updateAs(1);
            updateResp(null);
          }}
          customStyle={
            "flex flex-row-reverse no-wrap justify-start items-center animate-slideDownAndFade"
          }
        >
          <span className={"inline-block px-2 m-0"}>Go to previous</span>
          <ArrowLeftIcon />
        </TertiaryButton>
      ) : (
        <></>
      )}
      {as == 1 ? (
        <div className={"mt-8"}>
          <h4 className={"text-lg my-4"}>
            Have you received: gifts, paid-for subscriptions and donations from
            Onlyfans, Patreon or other online platforms?
          </h4>
          <RadioGroup
            aria={"Have you received money online?"}
            items={[
              {
                value: "yes",
                id: "yes",
                label: "Yes",
                onClick: () => {
                  updateAs(2);
                  updateResp(null);
                },
              },
              {
                value: "no",
                id: "no",
                label: "No",
                onClick: () => {
                  updateResp("No");
                },
              },
            ]}
          />
        </div>
      ) : (
        <div>
          <div className={"flex flex-row justify-start"}>
            <h4 className={"text-lg my-4 mr-2"}>
              Was it more than £1,000 per year or £80 per month?
            </h4>
            <Tooltip>
              <h5 className={"font-bold my-2"}>More info</h5>
              <p>loreum ipsum</p>
            </Tooltip>
          </div>

          <RadioGroup
            aria={"Did you receive more than £1000 per year or £80 per month"}
            items={[
              {
                value: "yes",
                id: "yes",
                label: "Yes",
                onClick: () => {
                  updateResp("Yes");
                },
              },
              {
                value: "no",
                id: "no",
                label: "No",
                onClick: () => {
                  updateResp("NotEnoughMoney");
                },
              },
              {
                value: "yesbut",
                id: "yesbut",
                label: "Yes but they were gifts",
                onClick: () => {
                  updateResp("YesBut");
                },
              },
              {
                value: "unsure",
                id: "unsure",
                label: "I'm not sure",
                onClick: () => {
                  updateResp("Unsure");
                },
              },
            ]}
          />
        </div>
      )}
      {resp ? (
        <div
          className={
            "mt-4 p-2 text-yisy-green font-bold animate-slideUpAndFade"
          }
        >
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

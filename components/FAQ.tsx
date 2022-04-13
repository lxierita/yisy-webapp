import * as Accordion from "@radix-ui/react-accordion";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link"
import styled, {css} from "styled-components";
import {Button} from "./button";

export interface FAQItem {
    question: string;
    answer: string;
    isDefault?: boolean;
    value: string
}

export interface FAQProps {
    items: FAQItem[];
    maxDisplay: number;
}

const Container = styled.div`
    min-width: 300px;
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    border: ${props => props.borderless ? "none" : "1px solid var(--color-gray-400)"};
    border-radius: 8px;
  
  ${props => props.borderless && css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 16px;
    gap: 16px;
    
    & button {
      margin: 0;
    }
  `}
`;

const Heading = styled.h3`
    color: var(--color-black-normal);
    padding: 16px;
    text-align: center;
    word-spacing: 4px;
    border-bottom: 1px solid var(--color-gray-400);
    border-radius: 8px 8px 0px 0px;
    font-weight: bold;
    background-color: var(--color-yisy-orange-logo);

  @media (min-width: 300px) {
    font-size: 1.1rem;
    word-spacing: 2px;
  }
  @media (min-width: 700px) {
    font-size: 1.2rem;
    word-spacing: 2px;
  }
  @media (min-width: 1100px) {
    font-size: 1.4rem;
    word-spacing: 2px;
  }
`;

const StyledAccordion = styled(Accordion.Root)`
`;

const StyledAccordionItem = styled(Accordion.AccordionItem)`
  transition: height ease-in 300ms;
  border-bottom: 1px solid var(--color-gray-300);
`;


const StyledTrigger = styled(Accordion.AccordionTrigger)`
    text-align: left;
    width: 100%;
    font-weight: bold;
    padding: 16px 32px;
`;

const StyledContent = styled(Accordion.AccordionContent)`
    width: 90%;
    padding: 16px 0px 32px 16px;
    margin: 0 auto;
    color: var(--color-yisy-gray-dark);
`;

const StyledButton = styled(Button)`
    width: 100%;
    border-bottom: none;
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  width: 100%;
`;

export default function FAQ({items, maxDisplay}: FAQProps){
    const minimum = items.slice(0, maxDisplay);
    const [state, updateState] = useState(minimum);
    return (
        <Wrapper>
        <Container>
            <Heading>Frequently Asked Questions</Heading>
            <StyledAccordion type="multiple">
                {state.map(i => (
                        <StyledAccordionItem value={i.value} key={i.value}>
                            <StyledTrigger>
                                {i.question}
                            </StyledTrigger>
                            <StyledContent>
                                {i.answer}
                            </StyledContent>
                        </StyledAccordionItem>
                    )
                    )}
            </StyledAccordion>
        </Container>
            <Container borderless>
                <StyledButton type="tertiary" id="show-all" onClick={() => { state.length === items.length ? updateState(minimum) : updateState(items)
                }}>
                    {state.length !== items.length ? "Show All" : "Show Less"}
                </StyledButton>
                <Link href="ask-a-question">
                    <StyledButton type="primary">Still not sure? Ask us directly</StyledButton>
                </Link>
            </Container>
        </Wrapper>
    )
}
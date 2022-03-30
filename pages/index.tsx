import Head from "next/head";
import Card, { BasicWithIcon } from "../components/card";
import TitleBar, { Item } from "../components/header";
import Hero from "../components/hero";
import styled from "styled-components";

export const items: Item[] = [
  {
    id: "pay-income-tax",
    label: "Pay Income Tax",
    src: "#pay-income-tax",
  },
  {
    id: "claim-tax-relief",
    label: "Claim Tax Relief",
    src: "#claim-tax-relief",
  },
  {
    id: "check-our-pricing",
    label: "Check Our Pricing",
    src: "#check-our-pricing",
  },
  {
    id: "why-us",
    label: "Why Us",
    src: "#why-us",
  },
];

const StyledMain = styled.main`
  margin: 0 auto;
  @media (min-width: 100px) {
    width: 90%;
  }
  @media (min-width: 1100px) {
    width: 85%;
  }
  @media (min-width: 1300px) {
    width: 80%;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Yisy Tax - Your personal accountant</title>
        <meta
          name="Description"
          content="Yisy is your best tax helper. We make sure you meet all the deadlines and
          give you back your money. We will identify everything that qualify as business expenses for an online content
          creator like you."
        />
        <meta name="google-site-verification" content="todo" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StyledMain>
        <TitleBar navItems={items} />
        <Hero />
      </StyledMain>
    </>
  );
}

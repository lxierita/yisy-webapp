import Head from "next/head";
import TitleBar, { Item } from "../components/header";
import Hero, { Section } from "../components/hero";
import styled from "styled-components";
import FAQ, { Wrapper } from "../components/FAQ";
import { Button } from "../components/button";
import { PricingCard } from "../components/card";
import { cteFAQ, pitFAQ } from "../components/vars";

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

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  & > h2 {
    font-size: 1.3rem;
  }
  @media (min-width: 300px) {
    width: 90%;
    margin-inline: 0;
    gap: 32px;
  }
`;

const Blockquote = styled.blockquote`
  border-left: 8px solid var(--color-yisy-green-dark);
  border-radius: 5px;
  max-width: 850px;
  width: 75%;
  margin: 0 auto;
  padding: 16px 32px 8px 32px;
  &:hover {
    background-color: var(--color-yisy-green-xlight);
  }
  & p {
    font-family: var(--font-serif);
    color: var(--color-yisy-gray-logo);
    @media (min-width: 300px) {
      font-size: 1rem;
    }
    @media (min-width: 700px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1100px) {
      font-size: 1.5rem;
    }
  }
  & p#source {
    margin-top: 24px;
    font-weight: bold;
    font-family: var(--font-sans-heading);
    color: var(--color-yisy-gray-dark);
    @media (min-width: 300px) {
      font-size: 0.9rem;
    }
    @media (min-width: 700px) {
      font-size: 1rem;
    }
    @media (min-width: 1100px) {
      font-size: 1.1rem;
    }
  }
`;

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

const Cards = styled(Wrapper)`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  gap: 16px;
`;

const GetAQuote = styled(Button)`
  display: inline-block;
  width: max-content;
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
        <StyledSection id="pay-income-tax">
          <h2>Pay Income Tax</h2>
          <p>
            You do not always need to pay income tax But when you do, you should
            do it in time and correctly in order to avoid penalty from HMRC
          </p>
          <a
            href="https://www.gov.uk/income-tax"
            target="_blank"
            rel="noreferrer"
          >
            <Blockquote cite="https://www.gov.uk/income-tax">
              <p>
                &ldquo;You pay tax on things like... profits you make if you’re
                self-employed - including from services you sell through
                websites or apps&rdquo;
              </p>
              <p id="source">GOV UK</p>
            </Blockquote>
          </a>
          <p>
            As a content creator, if you received more than £1000/year or
            £80/month from others, you need to pax tax on those earnings.
          </p>
          <FAQ items={pitFAQ} maxDisplay={4}></FAQ>
        </StyledSection>
        <StyledSection id="claim-tax-relief">
          <h2>Claim Tax Relief</h2>
          <p>
            If you paid tax in the year, you can ask for tax refund on the costs
            related to running your business.
          </p>
          <a
            href="https://www.gov.uk/tax-relief-for-employees"
            target="_blank"
            rel="noreferrer"
          >
            <Blockquote cite="https://www.gov.uk/tax-relief-for-employees">
              <p>
                In most cases you can claim tax relief on the full cost of
                substantial equipment, for example a computer... If...you need
                it to do your job...you use the equipment for work and there’s
                no significant private use
              </p>
              <p id="source">GOV UK</p>
            </Blockquote>
          </a>
          <p>
            For self-employed content creators, it is common to claim for a
            professional photo shoot, camera and microphone equipments. But it
            is not always clear if a certain item is for private or business,
            such examples include gym memberships and clothing. In that case,
            you can estimate how much of the usage is actually for business, and
            then claim a partial relief.
          </p>
          <a
            href="https://www.gov.uk/tax-relief-for-employees/working-at-home"
            target="_blank"
            rel="noreferrer"
          >
            <Blockquote cite="https://www.gov.uk/tax-relief-for-employees/working-at-home">
              <p>
                You may be able to claim tax relief for additional household
                costs if you have to work at home on a regular basis...gas and
                electricity...business phone calls, including dial-up internet
                access...just the part that relates to your work.
              </p>
              <p id="source">GOV UK</p>
            </Blockquote>
          </a>
          <FAQ items={cteFAQ} maxDisplay={4}></FAQ>
        </StyledSection>
        <StyledSection id="claim-tax-relief">
          <h2>Our Pricing</h2>
          <p>
            We offer our Tax Return service with an optional Bookkeeping
            service.
          </p>
          <p>
            Because our customers come to us at any time of the year with
            different amounts of work, we set the exact price on a case-by-case
            basis, usually after an initial conversation with our customers.
          </p>
          <p>
            The rule of thumb is that the more ahead of the deadline, and more
            recent when you last filed tax, the less it will cost. We will never
            charge you more than the price range you chose.
            <br />
            <GetAQuote id="get-started" onClick={() => {}} type="primary">
              Get a quote
            </GetAQuote>
          </p>
        </StyledSection>
        <StyledSection id="our-pricing">
          <Cards>
            <PricingCard
              product="Tax Return"
              min={200}
              max={500}
              features={[
                "Unlimited Consulting",
                "Business Advice",
                "Fill Out Self-Assessment Form",
                "Report Incomes",
                "Claim Tax Relief",
                "Submit to HMRC",
              ]}
            />
            <PricingCard
              product="Tax Return With Bookkeeping"
              min={250}
              max={500}
              features={[
                "Unlimited Consulting",
                "Business Advice",
                "Fill Out Self-Assessment Form",
                "Report Incomes",
                "Claim Tax Relief",
                "Submit to HMRC",
                "Bookkeeping",
              ]}
            />
          </Cards>
        </StyledSection>
      </StyledMain>
    </>
  );
}

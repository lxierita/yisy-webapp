import Head from "next/head";
import Card, { BasicWithIcon } from "../components/card";
import TitleBar, { Item } from "../components/header";

const items: Item[] = [
  {
    id: "pricing",
    label: "Pricing",
    src: "#",
  },
  {
    id: "services",
    label: "Services",
    src: "#",
  },
  {
    id: "contacts",
    label: "Contacts",
    src: "#",
  },
  {
    id: "login",
    label: "Log in",
    src: "#",
  },
];

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
      </Head>
      <TitleBar navItems={items} />
      <main>
        <section id="hero">
          <h1>Tax made easy for content providers</h1>
          <p>
            Hassle-free, paper-free and judgement-free accounting services.
            Claiming tax reduction for online content creators
          </p>
          <button>Start now</button>
          <button>Learn more</button>
        </section>
        <section id="features">
          <h2>Why us</h2>
          <ul>
            <li>
              <BasicWithIcon
                id="feature-privacy"
                title="Private"
                gist="We keep your paperworks secure and will not reveal to any parties other than HMRC."
              />
            </li>
            <li>
              <BasicWithIcon
                id="feature-security"
                title="Security"
                gist="Nothing leaked with the secure accounting software."
              />
            </li>
            <li>
              <BasicWithIcon
                id="feature-authority"
                title="AAT Certified"
                gist="Certified by accounting association with governmental recognition"
              />
            </li>
            <li>
              <BasicWithIcon
                id="feature-customer-service"
                title="Remain close contact"
                gist="Email or call, we stay in touch"
              />
            </li>
            <li>
              <BasicWithIcon
                id="feature-smooth-offboarding"
                title="Smooth onboarding"
                gist="We get you prepared when you decide to terminate the service"
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

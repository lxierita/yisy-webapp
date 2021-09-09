import Head from "next/head";
import Card from "../components/card";
import TitleBar from "../components/titlebar";

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
      <TitleBar
        options={[
          {
            id: "nav-login",
            label: "Log In",
            onClick: () => {
              return {};
            },
            primary: false,
            sticky: true,
          },
          {
            id: "nav-contact-tel",
            label: "📞 075 2685 7842",
            onClick: () => {
              return {};
            },
            primary: false,
            sticky: true,
          },
          {
            id: "nav-pricing",
            label: "Pricing",
            onClick: () => {
              return {};
            },
            primary: true,
            sticky: true,
          },
          {
            id: "nav-do-i-need",
            label: "Do I need to pay tax",
            onClick: () => {
              return {};
            },
            primary: true,
            sticky: false,
          },
          {
            id: "nav-about-us",
            label: "Why us",
            onClick: () => {
              return {};
            },
            primary: true,
            sticky: true,
          },
        ]}
      />
    </>
  );
}

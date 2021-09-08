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
      <TitleBar options={[]} />
    </>
  );
}

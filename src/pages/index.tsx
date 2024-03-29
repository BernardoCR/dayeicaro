import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Navigation from "../components/Navigation";
//import Hero from "../components/Hero";
//import EventDetails from "../components/EventDetails";
import Greeting from "../components/Greeting";
import FoodAndDrinks from "../components/FoodAndDrinks";
import { CartProvider } from "../components/GiftList/CartContext";
import GiftList from "../components/GiftList";
import RSVP from "../components/RSVP";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index: NextPage = () => {
  const path = useRouter().pathname;

  const meta = {
    title: "Dayane e Ícaro",
    description: "Dayane & Ícaro vão finalmente fazer dessa união uma festa!!",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Day e Ícaro" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://dayeicaro.vercel.app${path}`}
        />
        <meta
          property="og:image"
          content="https://www.chandraejoao.com/og-image-v2.jpg"
        />
      </Head>

      <CartProvider>
        <section id="lista-de-presentes">
          <GiftList />
        </section>
      </CartProvider>
      <FAQ></FAQ>
    </>
  );
};

export default Index;

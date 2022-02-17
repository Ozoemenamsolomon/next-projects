import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/Contact';
import Grid from '../components/Grid';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import TwoCols from '../components/TwoCols';

const events = [
  {
    title: "Africa NXT '22.",
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

const webinars = [
  {
    title: "Africa NXT '22.",
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

const podcasts = [
  {
    title: "Africa NXT '22.",
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Rehabica.org</title>
      </Head>

      <Header />
      <Hero />
      <MissionVision />
      <Grid title="events" items={events} />
      <Grid title="webinars" items={webinars} />
      <Grid title="podcasts" items={podcasts} />
      <TwoCols />
      <Contact />
    </>
  );
};

export default Home;

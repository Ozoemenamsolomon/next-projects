import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Events from '../components/Events';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TwoCols from '../components/TwoCols';

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <TwoCols></TwoCols>
      <div className="container">
        Vision (Community collaboration stock image)
        <br />
        Mission 3 columns
        <br />
        <Events />
      </div>
      <Contact></Contact>
    </>
  );
};

export default Home;

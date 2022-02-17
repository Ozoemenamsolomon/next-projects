import type { NextPage } from 'next';
import Contact from '../components/Contact';
import Events from '../components/Events';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TwoCols from '../components/TwoCols';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <TwoCols />
      <div className="container space-y-14">
        <div>
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
            Vision
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl">
            Our vision is to facilitate improved rehabilitative health services
            in Africa
          </p>
        </div>
        <div>
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
            MISSION
          </h1>
          <p className=" text-3xl sm:text-4xl md:text-5xl">
            To unite the medical rehabilitation industry in Africa and
            revolutionize how medical rehabilitation services are offered.
          </p>
        </div>
      </div>

      <Events />
      <div className="webinar-podcast container">webinar-podcast</div>
      <Contact />
    </>
  );
};

export default Home;

import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import ContactUs from '../components/ContactUs';
import OurWork from '../components/OurWork';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = ({ openModal }: { openModal: () => void }) => {
  return (
    <>
    <Navbar openModal={openModal}  />
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <section id="home">
          <Hero/>
        </section>
        <section id="services">
          <WhatWeDo openModal={openModal} />
        </section>
        <section id="work">
          <OurWork/>
        </section>
        <section id="tech">
          <TechStack/>
        </section>
        <section id="contact">
          <ContactUs/>
        </section>
        <Footer openModal={openModal} />
      </div>
    </div>
    </>
  )
};

export default HomePage;
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Counters from '@/components/sections/Counters';
import TwoColumn from '@/components/sections/TwoColumn';
import Sectors from '@/components/sections/Sectors';
import FiftyFifty from '@/components/sections/FiftyFifty';
import Testimonials from '@/components/sections/Testimonials';
import LatestBlogs from '@/components/sections/LatestBlogs';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <Hero />
        <Services />
        <Counters />
        <TwoColumn />
        <Sectors />
        <FiftyFifty />
        <Testimonials />
        <LatestBlogs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}


import Counters from "@/components/sections/Counters";
import FiftyFifty from "@/components/sections/FiftyFifty";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Partners from "@/components/sections/Partners";
import Sectors from "@/components/sections/Sectors";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import TwoColumn from "@/components/sections/TwoColumn";
import client from "@/tina/__generated__/client";

export default async function Home() {
  // Fetch settings data
  const settingsResponse = await client.queries.settings({
    relativePath: "site.json",
  });
  const settings = settingsResponse.data.settings;

  // Fetch all services
  const servicesResponse = await client.queries.serviceConnection();
  const services =
    servicesResponse.data.serviceConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Fetch all testimonials
  const testimonialsResponse = await client.queries.testimonialConnection();
  const testimonials =
    testimonialsResponse.data.testimonialConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Fetch latest posts
  const postsResponse = await client.queries.postConnection({
    sort: "date",
    last: 3,
  });
  const posts =
    postsResponse.data.postConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Fetch all sectors
  const sectorsResponse = await client.queries.sectorConnection();
  const sectors =
    sectorsResponse.data.sectorConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <Hero data={settings.hero!} />
        <Services services={services} />
        <Counters />
        <TwoColumn />
        <Sectors sectors={sectors} />
        <FiftyFifty />
        <Testimonials testimonials={testimonials} />
        <LatestBlogs posts={posts} />
        <Partners />
      </main>
      <Footer contact={settings.contact!} social={settings.social!} />
    </>
  );
}

import CuttingEdgeSolutions from "@/components/sections/CuttingEdgeSolutions";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Partners from "@/components/sections/Partners";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesHero from "@/components/sections/ServicesHero";
import TitleCenterCTA from "@/components/sections/TitleCenterCTA";
import VideoSection from "@/components/sections/VideoSection";
import client from "@/tina/__generated__/client";

export const metadata = {
  title: "Services - Code Collider",
  description:
    "Explore Code Collider's services, including website audits, strategic planning, conversion optimization, and digital marketing designed to enhance business performance.",
};

export default async function ServicesPage() {
  // Fetch settings data from TinaCMS
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

  // Fetch latest posts
  const postsResponse = await client.queries.postConnection({
    sort: "date",
    last: 3,
  });
  const posts =
    postsResponse.data.postConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Extract servicesPage data from settings
  const servicesPageData = settings.servicesPage;

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <ServicesHero
          badge={servicesPageData?.hero?.badge}
          title={servicesPageData?.hero?.title}
          description={servicesPageData?.hero?.description}
          buttonText={servicesPageData?.hero?.buttonText}
          buttonLink={servicesPageData?.hero?.buttonLink}
          image={servicesPageData?.hero?.image}
        />
        <ServicesGrid services={services} />
        <TitleCenterCTA
          title={servicesPageData?.ctaTitle}
          buttonText={servicesPageData?.ctaButtonText}
          buttonLink={servicesPageData?.ctaButtonLink}
        />
        <CuttingEdgeSolutions
          badge={servicesPageData?.cuttingEdge?.badge}
          title={servicesPageData?.cuttingEdge?.title}
          description={servicesPageData?.cuttingEdge?.description}
          buttonText={servicesPageData?.cuttingEdge?.buttonText}
          buttonLink={servicesPageData?.cuttingEdge?.buttonLink}
          image={servicesPageData?.cuttingEdge?.image}
          reverse={true}
        />
        <Partners />
        <VideoSection
          badge={servicesPageData?.video?.badge}
          title={servicesPageData?.video?.title}
          description={servicesPageData?.video?.description}
          videoUrl={servicesPageData?.video?.videoUrl}
          videoPoster={servicesPageData?.video?.videoPoster}
        />
        <LatestBlogs posts={posts} />
        <FinalCTA
          title={servicesPageData?.finalCta?.title}
          description={servicesPageData?.finalCta?.description}
          buttonText={servicesPageData?.finalCta?.buttonText}
          buttonLink={servicesPageData?.finalCta?.buttonLink}
        />
      </main>
      <Footer contact={settings.contact!} social={settings.social!} />
    </>
  );
}

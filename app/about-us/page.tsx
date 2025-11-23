import AboutExpertise from "@/components/sections/AboutExpertise";
import AboutHero from "@/components/sections/AboutHero";
import BusinessLevelStats from "@/components/sections/BusinessLevelStats";
import CuttingEdgeSolutions from "@/components/sections/CuttingEdgeSolutions";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Partners from "@/components/sections/Partners";
import TeamMembers from "@/components/sections/TeamMembers";
import client from "@/tina/__generated__/client";

export const metadata = {
  title: "About Us - Code Collider",
  description:
    "Learn more about Code Collider, your partner in business growth through comprehensive website consulting, competitive analysis, and data-driven digital strategies.",
};

export default async function AboutPage() {
  // Fetch settings data from TinaCMS
  const settingsResponse = await client.queries.settings({
    relativePath: "site.json",
  });
  const settings = settingsResponse.data.settings;

  // Fetch team members
  const teamResponse = await client.queries.teamConnection();
  const teamMembers =
    teamResponse.data.teamConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Fetch FAQ items
  const faqResponse = await client.queries.faqConnection();
  const faqs =
    faqResponse.data.faqConnection.edges
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

  // Extract aboutPage data
  const aboutPageData = settings.aboutPage;
  const { hero, expertise, expertiseTitle, stats, cuttingEdge } = aboutPageData || {};

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <AboutHero {...hero} />
        <AboutExpertise
          expertiseTitle={expertiseTitle}
          expertise={
            expertise?.filter((item): item is NonNullable<typeof item> => item != null) || []
          }
        />
        <TeamMembers members={teamMembers} />
        <BusinessLevelStats
          stats={stats?.filter((item): item is NonNullable<typeof item> => item != null) || []}
        />
        <CuttingEdgeSolutions {...cuttingEdge} />
        <FAQ faqs={faqs} />
        <LatestBlogs posts={posts} />
        <Partners />
      </main>
      <Footer contact={settings.contact!} social={settings.social!} />
    </>
  );
}

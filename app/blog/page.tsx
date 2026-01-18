import BlogGrid from "@/components/sections/BlogGrid";
import BlogHero from "@/components/sections/BlogHero";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import client from "@/tina/__generated__/client";

export const metadata = {
  title: "Blog - Code Collider",
  description:
    "Stay updated with the latest insights from Code Collider on website strategy, digital marketing, and business growth with our expert blog posts.",
};

export default async function BlogPage() {
  // Fetch settings data
  const settingsResponse = await client.queries.settings({
    relativePath: "site.json",
  });
  const settings = settingsResponse.data.settings;

  // Fetch all posts sorted by date
  const postsResponse = await client.queries.postConnection({
    sort: "date",
  });
  const allPosts =
    postsResponse.data.postConnection.edges
      ?.map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => node != null) || [];

  // Featured post (latest one)
  const featuredPost = allPosts[0];

  // Rest of the posts
  const otherPosts = allPosts.slice(1);

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <BlogHero post={featuredPost} />
        <BlogGrid posts={otherPosts} />
      </main>
      <Footer contact={settings.contact!} social={settings.social!} />
    </>
  );
}

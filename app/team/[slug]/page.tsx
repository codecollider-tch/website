import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import client from "@/tina/__generated__/client";

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const teamResponse = await client.queries.teamConnection();
  const teamMembers = teamResponse.data.teamConnection.edges || [];

  return teamMembers
    .map((member) => {
      const filename = member?.node?._sys?.filename;
      if (!filename) return null;
      return {
        slug: filename,
      };
    })
    .filter(Boolean);
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;

  try {
    const teamMemberResponse = await client.queries.team({
      relativePath: `${slug}.json`,
    });

    const { data } = teamMemberResponse;

    if (!data.team) {
      notFound();
    }

    // Fetch settings for footer
    const settingsResponse = await client.queries.settings({
      relativePath: "site.json",
    });
    const settings = settingsResponse.data.settings;

    return (
      <>
        <Header />
        <main className="page-wrapper">
          {/* Hero section with image and name */}
          <section className="section_hero">
            <div className="u-nav-spacer"></div>
            <div className="padding-global">
              <div className="container-large">
                <div className="team_profile_hero">
                  <div className="team_profile_image_wrapper">
                    <Image
                      src={data.team.image || "/images/placeholder.jpg"}
                      alt={data.team.name || "Team Member"}
                      width={400}
                      height={400}
                      className="team_profile_image"
                      priority
                    />
                  </div>
                  <div className="team_profile_header_text">
                    <h1 className="team_profile_name">{data.team.name}</h1>
                    <p className="team_profile_position">{data.team.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Biography section on white background */}
          <section style={{ backgroundColor: '#fff', paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="padding-global">
              <div className="container-large">
                <div className="team_profile_bio_wrapper">
                  {data.team.bio && (
                    <div className="rich_text_content">
                      {data.team.bio.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {!data.team.bio && (
                    <p>No biography available.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer contact={settings.contact!} social={settings.social!} />
      </>
    );
  } catch (error) {
    console.error("Error loading team member:", error);
    notFound();
  }
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const { slug } = await params;

  try {
    const teamMemberResponse = await client.queries.team({
      relativePath: `${slug}.json`,
    });

    const name = teamMemberResponse.data.team.name || "Team Member";
    const position = teamMemberResponse.data.team.position || "";

    return {
      title: `${name} - ${position} - Code Collider`,
      description: `Meet ${name}, ${position} at Code Collider. Learn more about their expertise and background.`,
    };
  } catch (error) {
    return {
      title: "Team Member Not Found - Code Collider",
    };
  }
}


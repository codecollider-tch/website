import ContactForm from "@/components/sections/ContactForm";
import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import OfficeLocations from "@/components/sections/OfficeLocations";
import client from "@/tina/__generated__/client";

export const metadata = {
  title: "Contact - Code Collider",
  description:
    "Get in touch with Code Collider today to discuss how our tailored website and digital marketing solutions can help your business thrive.",
};

export default async function ContactPage() {
  // Fetch settings data from TinaCMS
  const settingsResponse = await client.queries.settings({
    relativePath: "site.json",
  });
  const settings = settingsResponse.data.settings;

  // Prepare contact data for ContactInfo component
  const contactData = {
    address: settings.contact?.address,
    email: settings.contact?.email,
    phone: settings.contact?.phone,
    hours: {
      weekdays: settings.contactPage?.hours?.weekdays,
      weekend: settings.contactPage?.hours?.weekend,
    },
  };

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <ContactHero />
        <ContactInfo data={contactData} />
        <ContactForm />
        <OfficeLocations />
      </main>
      <Footer />
    </>
  );
}

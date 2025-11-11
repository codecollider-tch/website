import Header from '@/components/sections/Header';
import ContactHero from '@/components/sections/ContactHero';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';
import OfficeLocations from '@/components/sections/OfficeLocations';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'Contact - Code Collider',
  description: 'Get in touch with Code Collider today to discuss how our tailored website and digital marketing solutions can help your business thrive.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <OfficeLocations />
      </main>
      <Footer />
    </>
  );
}


import HeroBlock from '../components/HeroBlock';
import OfferDetails from '../components/OfferDetails';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBlock />
      <OfferDetails />
      <ContactForm />
      <FAQ />
    </div>
  );
}

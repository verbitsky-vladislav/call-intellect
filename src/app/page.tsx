import HeroBlock from '../components/HeroBlock';
import OfferDetails from '../components/OfferDetails';
import WhyImportantBlue from '../components/WhyImportantBlue';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBlock />
      <OfferDetails />
      <WhyImportantBlue />
      <FAQ />
    </div>
  );
}

import HeroBlock from '../components/HeroBlock';
import OfferDetails from '../components/OfferDetails';
import WhyImportantBlue from '../components/WhyImportantBlue';
import CaseStudies from '../components/CaseStudies';
import TrustBlock from '../components/TrustBlock';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBlock />
      <OfferDetails />
      <WhyImportantBlue />
      <CaseStudies />
      <TrustBlock />
      <FAQ />
    </div>
  );
}

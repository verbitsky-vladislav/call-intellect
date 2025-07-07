import HeroBlockV2 from '../../components/HeroBlockV2';
import OfferDetailsV2 from '../../components/OfferDetailsV2';
import WhyImportantBlueV2 from '../../components/WhyImportantBlueV2';
import CaseStudiesV2 from '../../components/CaseStudiesV2';
import TrustBlockV2 from '../../components/TrustBlockV2';
import FAQV2 from '../../components/FAQV2';

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBlockV2 />
      <OfferDetailsV2 />
      <WhyImportantBlueV2 />
      <CaseStudiesV2 />
      <TrustBlockV2 />
      <FAQV2 />
    </div>
  );
} 
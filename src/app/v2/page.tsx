import HeroBlockV2 from '../../components/v2/HeroBlockV2';
import OfferDetailsV2 from '../../components/v2/OfferDetailsV2';
import WhyImportantBlueV2 from '../../components/v2/WhyImportantBlueV2';
import CaseStudiesV2 from '../../components/v2/CaseStudiesV2';
import TrustBlockV2 from '../../components/v2/TrustBlockV2';
import FAQV2 from '../../components/v2/FAQV2';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBlockV2 />
      <OfferDetailsV2 />
      <WhyImportantBlueV2 />
      <CaseStudiesV2 />
      <TrustBlockV2 />
      <FAQV2 />
      <ContactForm />
      <Footer />
    </div>
  );
} 
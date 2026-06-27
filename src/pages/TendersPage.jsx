import SEOHelmet from "../components/seo/SEOHelmet";
import { seoConfig } from "../data/seoConfig";
import TendersHero from "../components/sections/tenders/TendersHero";
import TendersTable from "../components/sections/tenders/TendersTable";
import CTABanner from "../components/ui/CTABanner";

const TendersPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.tenders} />
      <TendersHero />
      <TendersTable />
      <CTABanner />
    </>
  );
};

export default TendersPage;

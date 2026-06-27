import SEOHelmet from "../components/seo/SEOHelmet";
import { seoConfig } from "../data/seoConfig";
import MapHero from "../components/sections/map/MapHero";
import MapContainer from "../components/sections/map/MapContainer";
import CTABanner from "../components/ui/CTABanner";

const MapPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.map} />
      <MapHero />
      <MapContainer />
      <CTABanner />
    </>
  );
};

export default MapPage;

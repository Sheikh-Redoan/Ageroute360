import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import HeroSection from '../components/sections/home/HeroSection'
import StatsBar from '../components/sections/home/StatsBar'
import FeaturedProjects from '../components/sections/home/FeaturedProjects'
import MissionBlock from '../components/sections/home/MissionBlock'
import MapPreviewCTA from '../components/sections/home/MapPreviewCTA'
import CTABanner from '../components/ui/CTABanner'

const HomePage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.home} />
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <MissionBlock />
      <MapPreviewCTA />
      <CTABanner />
    </>
  )
}

export default HomePage

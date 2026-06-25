import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import TenderFilters from '../components/sections/tenders/TenderFilters'
import TendersTable from '../components/sections/tenders/TendersTable'
import CTABanner from '../components/ui/CTABanner'

const TendersPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.tenders} />
      <SectionHero
        bgImage="/src/assets/images/hero-tenders.jpg"
        title="Tender"
        highlightedWord="Opportunities"
        subtitle="Current procurement opportunities for infrastructure projects"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <TenderFilters />
        <TendersTable />
      </div>
      <CTABanner />
    </>
  )
}

export default TendersPage

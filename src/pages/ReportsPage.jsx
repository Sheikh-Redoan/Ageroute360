import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import FeaturedReport from '../components/sections/reports/FeaturedReport'
import ReportsList from '../components/sections/reports/ReportsList'
import CTABanner from '../components/ui/CTABanner'

const ReportsPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.reports} />
      <SectionHero
        bgImage="/src/assets/images/hero-reports.jpg"
        title="Transparency &"
        highlightedWord="Reports"
        subtitle="Access annual reports, financial statements, and transparency documents"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FeaturedReport />
        <ReportsList />
      </div>
      <CTABanner />
    </>
  )
}

export default ReportsPage

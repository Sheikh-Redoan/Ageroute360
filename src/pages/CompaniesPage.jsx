import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import CompanyFilters from '../components/sections/companies/CompanyFilters'
import CompanyGrid from '../components/sections/companies/CompanyGrid'
import CTABanner from '../components/ui/CTABanner'

const CompaniesPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.companies} />
      <SectionHero
        bgImage="/src/assets/images/hero-companies.jpg"
        title="Registered"
        highlightedWord="Companies"
        subtitle="Directory of certified infrastructure companies"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <CompanyFilters />
        <CompanyGrid />
      </div>
      <CTABanner />
    </>
  )
}

export default CompaniesPage

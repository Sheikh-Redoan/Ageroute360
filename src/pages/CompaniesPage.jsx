import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import CompaniesHero from '../components/sections/companies/CompaniesHero'
import CompanyFilters from '../components/sections/companies/CompanyFilters'
import CompanyGrid from '../components/sections/companies/CompanyGrid'
import CTABanner from '../components/ui/CTABanner'

const CompaniesPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.companies} />
      <CompaniesHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <CompanyFilters />
        <CompanyGrid />
      </div>
      <CTABanner />
    </>
  )
}

export default CompaniesPage

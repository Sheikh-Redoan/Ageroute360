import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import ProjectFilters from '../components/sections/projects/ProjectFilters'
import ProjectsGrid from '../components/sections/projects/ProjectsGrid'
import CTABanner from '../components/ui/CTABanner'

const ProjectsPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.projects} />
      <SectionHero
        bgImage="/src/assets/images/hero-projects.jpg"
        title="National"
        highlightedWord="Projects"
        subtitle="Explore ongoing and completed infrastructure projects across the nation"
        statCards={[
          { value: '120+', label: 'Active Projects' },
          { value: '$850M', label: 'Total Investment' },
          { value: '14', label: 'Regions' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProjectFilters />
        <ProjectsGrid />
      </div>
      <CTABanner />
    </>
  )
}

export default ProjectsPage

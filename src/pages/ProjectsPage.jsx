import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import ProjectsHero from '../components/sections/projects/ProjectsHero'
import ProjectsGrid from '../components/sections/projects/ProjectsGrid'
import CTABanner from '../components/ui/CTABanner'

const ProjectsPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.projects} />
      <ProjectsHero />
      <ProjectsGrid />
      <CTABanner />
    </>
  )
}

export default ProjectsPage

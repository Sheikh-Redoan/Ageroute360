import { projects } from '../../../data/projects'
import ProjectCard from '../projects/ProjectCard'
import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const FeaturedProjects = () => {
  const navigate = useNavigate()
  const ref = useScrollReveal()
  const featuredProjects = projects.slice(0, 3)

  return (
    <section ref={ref} className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-brand-amber">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest infrastructure projects transforming the nation's road network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" onClick={() => navigate('/projects')}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

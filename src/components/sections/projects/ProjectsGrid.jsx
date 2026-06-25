import { motion } from 'framer-motion'
import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectsGrid

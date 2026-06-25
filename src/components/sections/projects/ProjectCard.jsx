import { motion } from 'framer-motion'
import StatusPill from '../../ui/StatusPill'
import ProgressBar from '../../ui/ProgressBar'
import LazyImage from '../../ui/LazyImage'
import { formatCurrency } from '../../../utils/formatCurrency'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-brand-navy rounded-lg overflow-hidden shadow-lg border border-gray-700"
    >
      <LazyImage 
        src={project.image} 
        alt={project.name}
        className="h-48 w-full"
      />
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <StatusPill status={project.status} />
          <span className="text-sm text-gray-400">{project.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-400 text-sm mb-4">📍 {project.location}</p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Budget</span>
            <span className="text-white font-semibold">{formatCurrency(project.budget)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-brand-amber font-semibold">{project.progress}%</span>
          </div>
        </div>

        <ProgressBar progress={project.progress} />
      </div>
    </motion.div>
  )
}

export default ProjectCard

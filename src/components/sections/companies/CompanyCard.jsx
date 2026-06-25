import { motion } from 'framer-motion'
import Badge from '../../ui/Badge'

const CompanyCard = ({ company }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-brand-navy rounded-lg p-6 border border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl">
          🏢
        </div>
        <Badge variant="success">{company.certification}</Badge>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{company.category}</p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Projects</span>
          <span className="text-white font-semibold">{company.projects}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Location</span>
          <span className="text-white">{company.location}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Established</span>
          <span className="text-white">{company.established}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CompanyCard

import { motion } from 'framer-motion'
import { companies } from '../../../data/companies'
import CompanyCard from './CompanyCard'

const CompanyGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {companies.map((company, idx) => (
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <CompanyCard company={company} />
        </motion.div>
      ))}
    </div>
  )
}

export default CompanyGrid

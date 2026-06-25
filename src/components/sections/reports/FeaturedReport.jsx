import { reports } from '../../../data/reports'
import Button from '../../ui/Button'
import { formatDate } from '../../../utils/formatDate'

const FeaturedReport = () => {
  const featured = reports.find(r => r.featured)

  if (!featured) return null

  return (
    <div className="bg-gradient-to-r from-brand-navy to-brand-dark rounded-lg p-8 mb-12 border border-brand-amber/30">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="text-brand-amber text-sm font-semibold mb-2 block">FEATURED REPORT</span>
          <h2 className="text-3xl font-bold text-white mb-3">{featured.title}</h2>
          <p className="text-gray-300 mb-4">
            Published {formatDate(featured.publishDate)} • {featured.pages} pages • {featured.size}
          </p>
          <Button variant="primary">Download Report</Button>
        </div>
        <div className="text-6xl ml-4">📊</div>
      </div>
    </div>
  )
}

export default FeaturedReport

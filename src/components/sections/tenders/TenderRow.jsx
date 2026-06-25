import StatusPill from '../../ui/StatusPill'
import Button from '../../ui/Button'
import { formatCurrency } from '../../../utils/formatCurrency'
import { formatDateShort } from '../../../utils/formatDate'

const TenderRow = ({ tender }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-brand-navy/30 transition-colors">
      <td className="px-6 py-4 text-white font-medium">{tender.title}</td>
      <td className="px-6 py-4 text-gray-400 text-sm">{tender.reference}</td>
      <td className="px-6 py-4">
        <StatusPill status={tender.status} />
      </td>
      <td className="px-6 py-4 text-gray-400 text-sm">{formatDateShort(tender.deadline)}</td>
      <td className="px-6 py-4 text-white font-semibold">{formatCurrency(tender.budget)}</td>
      <td className="px-6 py-4">
        <Button variant="outline" className="text-xs px-4 py-2">
          View Details
        </Button>
      </td>
    </tr>
  )
}

export default TenderRow

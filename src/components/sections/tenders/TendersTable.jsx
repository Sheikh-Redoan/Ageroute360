import { tenders } from '../../../data/tenders'
import TenderRow from './TenderRow'

const TendersTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-brand-navy">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Reference</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Deadline</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Budget</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Action</th>
          </tr>
        </thead>
        <tbody className="bg-brand-dark">
          {tenders.map((tender) => (
            <TenderRow key={tender.id} tender={tender} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TendersTable

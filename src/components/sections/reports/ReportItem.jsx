import Badge from '../../ui/Badge'
import Button from '../../ui/Button'
import { formatDate } from '../../../utils/formatDate'

const ReportItem = ({ report }) => {
  return (
    <div className="bg-brand-navy p-6 rounded-lg border border-gray-700 flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h4 className="text-lg font-semibold text-white">{report.title}</h4>
          <Badge>{report.type}</Badge>
        </div>
        <p className="text-gray-400 text-sm">
          Published {formatDate(report.publishDate)} • {report.pages} pages • {report.size}
        </p>
      </div>
      <Button variant="outline" className="ml-4">Download</Button>
    </div>
  )
}

export default ReportItem

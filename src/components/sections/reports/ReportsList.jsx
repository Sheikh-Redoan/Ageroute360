import { reports } from '../../../data/reports'
import ReportItem from './ReportItem'

const ReportsList = () => {
  const allReports = reports.filter(r => !r.featured)

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">All Reports</h3>
      <div className="space-y-4">
        {allReports.map((report) => (
          <ReportItem key={report.id} report={report} />
        ))}
      </div>
    </div>
  )
}

export default ReportsList

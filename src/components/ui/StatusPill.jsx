import { cn } from '../../utils/cn'

const StatusPill = ({ status }) => {
  const styles = {
    Ongoing: 'bg-blue-600 text-white',
    Completed: 'bg-green-600 text-white',
    Suspended: 'bg-red-600 text-white',
    Open: 'bg-green-600 text-white',
    Closed: 'bg-gray-600 text-white',
    'Under Review': 'bg-yellow-500 text-brand-dark',
  }

  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', styles[status] || 'bg-gray-600 text-white')}>
      {status}
    </span>
  )
}

export default StatusPill

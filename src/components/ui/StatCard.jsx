import { cn } from '../../utils/cn'

const StatCard = ({ label, value, icon, className }) => {
  return (
    <div className={cn('bg-brand-navy/50 backdrop-blur-sm p-6 rounded-lg border border-brand-amber/20', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        {icon && <div className="text-brand-amber text-4xl">{icon}</div>}
      </div>
    </div>
  )
}

export default StatCard

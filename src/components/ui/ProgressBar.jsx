import { cn } from '../../utils/cn'

const ProgressBar = ({ progress, className }) => {
  return (
    <div className={cn('w-full bg-gray-700 rounded-full h-2', className)}>
      <div
        className="bg-brand-amber h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar

import { cn } from '../../utils/cn'

const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-gray-700 text-gray-200',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-brand-dark',
    danger: 'bg-red-600 text-white',
  }

  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  )
}

export default Badge

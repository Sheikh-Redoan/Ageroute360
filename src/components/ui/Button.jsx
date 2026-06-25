import { cn } from '../../utils/cn'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50'
  
  const variants = {
    primary: 'bg-brand-amber text-brand-dark hover:bg-amber-500',
    secondary: 'bg-brand-navy text-white hover:bg-opacity-80',
    outline: 'border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-dark'
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

import { cn } from '../../utils/cn'

const SearchInput = ({ value, onChange, placeholder = 'Search...', className }) => {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pl-10 bg-brand-navy border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-amber"
      />
      <svg
        className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}

export default SearchInput

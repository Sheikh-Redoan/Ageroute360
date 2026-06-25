import { cn } from '../../utils/cn'

const FilterTabs = ({ tabs, activeTab, onTabChange, className }) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            'px-4 py-2 rounded-lg font-medium transition-all',
            activeTab === tab
              ? 'bg-brand-amber text-brand-dark'
              : 'bg-brand-navy text-gray-300 hover:bg-brand-navy/70'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs

import { useState } from 'react'
import FilterTabs from '../../ui/FilterTabs'
import SearchInput from '../../ui/SearchInput'

const CompanyFilters = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = ['All', 'Class A', 'Class B', 'Class C']

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <FilterTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search companies..."
          className="w-full md:w-80"
        />
      </div>
    </div>
  )
}

export default CompanyFilters

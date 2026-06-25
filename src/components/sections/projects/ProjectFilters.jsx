import { useState } from 'react'
import FilterTabs from '../../ui/FilterTabs'
import SearchInput from '../../ui/SearchInput'

const ProjectFilters = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const tabs = ['All', 'Ongoing', 'Completed', 'Suspended']

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
        <FilterTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search projects..."
          className="w-full md:w-80"
        />
      </div>
    </div>
  )
}

export default ProjectFilters

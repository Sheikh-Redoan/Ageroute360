const ProjectFilters = ({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) => {
  const filters = ['All', 'Ongoing', 'Completed', 'Suspended']

  return (
    <div className="w-full bg-white rounded-[40px] md:rounded-[100px] shadow-[0_0_10px_rgba(0,0,0,0.05)] p-2 md:p-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
      
      <div className="w-full lg:w-96 px-5 py-3.5 rounded-full border border-gray-200 flex items-center gap-3 bg-white">
        <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search Project..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm md:text-base font-inter placeholder:text-gray-400"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-sm md:text-base font-inter whitespace-nowrap transition-colors ${
              activeFilter === filter 
                ? 'bg-brand-amber text-slate-950 font-medium' 
                : 'bg-white text-slate-950 font-normal border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

    </div>
  )
}

export default ProjectFilters

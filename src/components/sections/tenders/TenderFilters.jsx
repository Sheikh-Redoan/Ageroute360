const TenderFilters = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const tabs = ['All', 'Open', 'Closed', 'Under Review']

  return (
    <div className="w-full bg-white rounded-[40px] md:rounded-full shadow-[0_0_10px_rgba(0,0,0,0.05)] p-2 md:p-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
      
      {/* Search Input */}
      <div className="w-full lg:w-96 px-5 py-3.5 rounded-full border border-gray-200 flex items-center gap-3 bg-white">
        <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search by title or reference..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm md:text-base font-inter placeholder:text-gray-400"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 md:gap-3 w-full lg:w-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm md:text-base font-inter transition-colors ${
              activeTab === tab 
                ? 'bg-brand-amber text-slate-950 font-medium' 
                : 'bg-white text-slate-950 font-normal border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  )
}

export default TenderFilters

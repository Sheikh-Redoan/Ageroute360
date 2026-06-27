const TenderRow = ({ tender }) => {
  const isOpen = tender.status.toLowerCase() === 'open';

  return (
    <div className="group border-b border-gray-100 hover:bg-gray-50/50 transition-colors p-6 flex flex-col xl:grid xl:grid-cols-12 gap-4 xl:gap-6 items-start xl:items-center">
      
      {/* Ref ID (Mobile: Top, Desktop: Col 1-2) */}
      <div className="xl:col-span-2">
        <span className="xl:hidden text-xs text-gray-400 font-bold uppercase mb-1 block">Reference ID</span>
        <span className="text-slate-950 text-sm md:text-base font-medium font-inter">
          {tender.reference}
        </span>
      </div>

      {/* Project Details (Mobile: 2nd, Desktop: Col 3-6) */}
      <div className="xl:col-span-4 flex flex-col gap-1">
        <span className="xl:hidden text-xs text-gray-400 font-bold uppercase mb-1 block">Project Name</span>
        <h4 className="text-slate-950 text-base font-medium font-inter leading-snug">
          {tender.title}
        </h4>
        <p className="text-gray-500 text-sm font-normal font-inter leading-tight">
          {tender.location || tender.category}
        </p>
      </div>

      {/* Budget (Mobile: Inline, Desktop: Col 7-8) */}
      <div className="xl:col-span-1 flex items-center gap-1">
        <span className="xl:hidden text-xs text-gray-400 font-bold uppercase mr-2">Budget:</span>
        <span className="text-brand-amber text-base font-medium font-inter">$</span>
        <span className="text-slate-950 text-base font-medium font-inter">
          {(tender.budget / 1000000).toFixed(1)}M
        </span>
      </div>

      {/* Closing Date (Mobile: Inline, Desktop: Col 9-10) */}
      <div className="xl:col-span-2">
        <span className="xl:hidden text-xs text-gray-400 font-bold uppercase mr-2">Closing:</span>
        <span className="text-gray-500 text-sm md:text-base font-normal font-inter">
          {new Date(tender.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>

      {/* Status & Actions (Mobile: Bottom row flex, Desktop: Col 11-12 flex-end) */}
      <div className="xl:col-span-3 flex w-full xl:w-auto justify-between xl:justify-end items-center gap-4 mt-4 xl:mt-0">
        
        {/* Status Pill */}
        <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${isOpen ? 'bg-amber-400/20' : 'bg-gray-100'}`}>
          <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-brand-amber' : 'bg-gray-400'}`} />
          <span className={`text-xs font-semibold font-inter uppercase tracking-wide ${isOpen ? 'text-brand-amber' : 'text-gray-500'}`}>
            {tender.status}
          </span>
        </div>

        {/* Action Button */}
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium font-inter transition-all ${
            isOpen 
              ? 'bg-brand-amber text-white hover:bg-amber-500 hover:shadow-md' 
              : 'bg-white border border-gray-400 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isOpen}
        >
          {isOpen ? 'Apply Now' : 'Closed'}
        </button>
        
      </div>
    </div>
  )
}

export default TenderRow

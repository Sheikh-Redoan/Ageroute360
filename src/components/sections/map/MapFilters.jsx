const MapFilters = () => {
  const statuses = [
    { label: 'Active Construction', color: 'bg-amber-400', shadow: 'shadow-[0_0_8px_rgba(242,181,44,0.6)]' },
    { label: 'Completed Projects', color: 'bg-green-500', shadow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]' },
    { label: 'Suspended / Delayed', color: 'bg-red-400', shadow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]' }
  ]

  const assetTypes = ['ROADS', 'BRIDGES', 'DAMS', 'LIGHTING']

  return (
    <div className="w-full lg:w-80 p-6 bg-[#0E2A32] rounded-[32px] border border-white/10 backdrop-blur-md flex flex-col gap-8 h-full">
      
      <div className="flex items-center gap-3">
        <div className="w-4 h-3 bg-brand-amber rounded-sm" />
        <h3 className="text-brand-amber text-xl font-semibold font-inter">Map Layers</h3>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-white/50 text-xs font-semibold font-inter tracking-widest uppercase">
          Project Status
        </span>
        <div className="flex flex-col gap-4">
          {statuses.map((status, index) => (
            <label key={index} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${index === 2 ? 'bg-slate-950 border border-zinc-700' : status.color}`}>
                  {index !== 2 && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-zinc-200 text-sm font-inter group-hover:text-white transition-colors">
                  {status.label}
                </span>
              </div>
              <div className={`w-2 h-2 rounded-full ${status.color} ${status.shadow}`} />
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-white/50 text-xs font-semibold font-inter tracking-widest uppercase">
          Regions
        </span>
        <div className="relative">
          <select className="w-full appearance-none bg-slate-950 text-zinc-200 text-sm font-inter py-3.5 pl-4 pr-10 rounded-xl border border-zinc-700 focus:outline-none focus:border-brand-amber cursor-pointer">
            <option>All National Regions</option>
            <option>Kinshasa</option>
            <option>Haut-Katanga</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-white/50 text-xs font-semibold font-inter tracking-widest uppercase">
          Asset Type
        </span>
        <div className="flex flex-wrap gap-2">
          {assetTypes.map((type, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-lg border text-xs font-bold font-inter transition-colors ${
                index === 0 ? 'bg-white/10 border-white/20 text-white' : 'border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-8">
        <button className="w-full py-4 bg-brand-amber rounded-2xl text-slate-950 text-sm font-bold font-inter hover:bg-amber-500 transition-colors shadow-[0_10px_20px_-5px_rgba(242,181,43,0.3)] flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          APPLY FILTERS
        </button>
      </div>

    </div>
  )
}

export default MapFilters

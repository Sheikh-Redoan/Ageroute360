const MapPopup = ({ title, status, progress, desc }) => {
  const styles = {
    active: { color: "text-amber-400", bg: "bg-amber-400", statusText: "ACTIVE: CONSTRUCTION" },
    completed: { color: "text-green-500", bg: "bg-green-500", statusText: "COMPLETED" },
    suspended: { color: "text-red-400", bg: "bg-red-400", statusText: "SUSPENDED" }
  }[status.toLowerCase()]

  return (
    <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-4 w-60 md:w-72 p-4 bg-brand-navy/80 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none">
      
      <span className={`${styles.color} text-xs font-semibold font-inter tracking-wider block mb-2`}>
        {styles.statusText}
      </span>
      
      <h4 className="text-zinc-100 text-base md:text-lg font-bold font-inter leading-tight mb-3">
        {title}
      </h4>
      
      {progress !== undefined ? (
        <div className="flex items-center gap-2">
          <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className={`h-full ${styles.bg}`} style={{ width: `${progress}%` }} />
          </div>
          <span className="text-zinc-400 text-xs font-inter">{progress}% Complete</span>
        </div>
      ) : (
        <p className="text-red-300 text-xs font-inter">{desc}</p>
      )}

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-navy/80 border-b border-r border-white/20 rotate-45" />
    </div>
  )
}

export default MapPopup

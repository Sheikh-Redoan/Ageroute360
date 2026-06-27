import { useState, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import { tenders } from '../../../data/tenders'
import TenderFilters from './TenderFilters'
import TenderRow from './TenderRow'

gsap.registerPlugin(ScrollTrigger)

const TendersTable = () => {
  const containerRef = useRef(null)
  
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filtering Logic
  const filteredTenders = useMemo(() => {
    return tenders.filter(tender => {
      const matchesTab = activeTab === 'All' || tender.status === activeTab;
      const matchesSearch = tender.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tender.reference.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    })
  }, [activeTab, searchQuery])

  // GSAP Entrance Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".tenders-filters", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(".tenders-table-container", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6 flex flex-col gap-10">
        
        {/* Filters Top Bar */}
        <div className="tenders-filters z-20">
          <TenderFilters 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* The Table Container */}
        <div className="tenders-table-container bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden flex flex-col">
          
          {/* Desktop Table Header - Hidden on mobile */}
          <div className="hidden xl:grid grid-cols-12 gap-6 bg-gray-50 border-b border-gray-200 px-6 py-5">
            <div className="col-span-2 text-slate-950 text-sm font-bold font-inter tracking-wide uppercase">Reference ID</div>
            <div className="col-span-4 text-slate-950 text-sm font-bold font-inter tracking-wide uppercase">Project Name</div>
            <div className="col-span-1 text-slate-950 text-sm font-bold font-inter tracking-wide uppercase">Budget</div>
            <div className="col-span-2 text-slate-950 text-sm font-bold font-inter tracking-wide uppercase">Closing Date</div>
            <div className="col-span-3 text-start text-slate-950 text-sm font-bold font-inter tracking-wide uppercase">Status / Actions</div>
          </div>

          {/* Table Body (Rows) */}
          <div className="flex flex-col">
            {filteredTenders.length > 0 ? (
              filteredTenders.map((tender) => (
                <TenderRow key={tender.id} tender={tender} />
              ))
            ) : (
              <div className="p-16 text-center text-gray-500 font-inter">
                No tenders found matching your criteria.
              </div>
            )}
          </div>

          {/* Pagination Footer */}
          <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-gray-500 text-sm font-inter">
              Showing {filteredTenders.length} of {tenders.length} tenders
            </span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-900 hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TendersTable

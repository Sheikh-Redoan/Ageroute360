import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const MapPreviewCTA = () => {
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  // Data array for pins using percentage coordinates for responsive scaling
  const mapPins = [
    { id: 1, label: 'Conakry', left: '22%', top: '38%' },
    { id: 2, label: 'Boffa', left: '38%', top: '65%' },
    { id: 3, label: 'Mamou', left: '55%', top: '28%' },
    { id: 4, label: 'Kankan', left: '72%', top: '52%' },
    { id: 5, label: "N'Zérékoré", left: '85%', top: '72%' }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    // Header Animation
    tl.fromTo(".map-header *", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    )
    
    // Map Container Entrance
    .fromTo(".map-container", 
      { y: 50, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    )

    // UI Panels Slide In
    .fromTo(".map-panel-left", 
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(".map-panel-right", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.6"
    )

    // Pins Pop In
    .fromTo(".map-pin",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.2"
    )

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-brand-light overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="map-header flex flex-col items-center text-center mb-16">
          <span className="text-brand-amber text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2.75px] mb-4">
            Interactive Map
          </span>
          <h2 className="text-[#060D1A] text-4xl md:text-5xl lg:text-[52px] font-extrabold font-sora leading-[1.15] mb-6">
            Explore Infrastructure <br className="hidden md:block" /> Across All Regions.
          </h2>
          <p className="text-[#586474] text-base md:text-lg font-jakarta leading-relaxed max-w-[640px]">
            Filter by region, status, and funding source to see exactly where every project stands today.
          </p>
        </div>

        {/* Interactive Map Container */}
        <div className="map-container relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-brand-navy rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(7,17,35,0.4)]">
          
          {/* Background Map Graphic (Placeholder) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_var(--tw-gradient-stops))] from-cyan-950/40 to-brand-navy" />
          <img 
            src="https://placehold.co/1232x576/061123/ffffff?text=Vector+Map+Background" 
            alt="Guinea Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          />

          {/* Map Pins Array */}
          {mapPins.map((pin) => (
            <div 
              key={pin.id}
              className="map-pin absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: pin.left, top: pin.top }}
            >
              {/* Pulse Ring */}
              <div className="absolute w-9 h-9 bg-brand-amber/30 rounded-full animate-ping" />
              {/* Inner Dot */}
              <div className="relative z-10 w-3 h-3 bg-brand-amber rounded-full border-2 border-brand-navy transition-transform duration-300 group-hover:scale-150" />
              {/* Label */}
              <div className="absolute top-5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <span className="text-white text-[10px] font-semibold font-jakarta leading-none shadow-sm">
                  {pin.label}
                </span>
              </div>
            </div>
          ))}

          {/* Floating UI: Filters Panel (Left) */}
          <div className="map-panel-left hidden md:flex absolute top-6 left-6 w-[280px] p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex-col gap-4 shadow-xl z-20">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-white/70 text-xs font-semibold font-jakarta uppercase tracking-widest">Filters</span>
            </div>
            
            {/* Mock Select Dropdowns */}
            {['Region', 'Status', 'Funding'].map((filter, index) => (
              <div key={index} className="flex justify-between items-center px-4 py-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white/60 text-xs font-jakarta">{filter}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-semibold font-jakarta">
                    {filter === 'Region' ? 'All regions' : filter === 'Status' ? 'Ongoing' : 'World Bank'}
                  </span>
                  <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}

            <button 
              onClick={() => navigate('/map')}
              className="mt-2 w-full py-3 bg-brand-amber hover:bg-amber-500 text-brand-dark text-sm font-semibold font-jakarta rounded-xl transition-colors shadow-lg"
            >
              Apply Filters
            </button>
          </div>

          {/* Floating UI: Stats Panel (Bottom Right) */}
          <div className="map-panel-right hidden md:flex absolute bottom-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex-col gap-5 shadow-xl z-20 min-w-[260px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-emerald rounded-full animate-pulse shadow-[0_0_8px_rgba(0,212,145,0.8)]" />
              <span className="text-white/70 text-xs font-semibold font-jakarta uppercase tracking-widest">Live Data</span>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <div className="text-white text-3xl font-extrabold font-sora leading-tight">41</div>
                <div className="text-white/60 text-xs font-jakarta mt-1">Active sites</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <div className="text-brand-amber text-3xl font-extrabold font-sora leading-tight">1,241</div>
                <div className="text-white/60 text-xs font-jakarta mt-1">KM tracked</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MapPreviewCTA

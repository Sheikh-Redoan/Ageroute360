import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import MapFilters from './MapFilters'
import MapPopup from './MapPopup'

gsap.registerPlugin(ScrollTrigger)

const MapContainer = () => {
  const containerRef = useRef(null)

  const mapData = [
    { id: 1, top: '35%', left: '28%', status: 'active', title: 'Bridge Reconstruction P-45', progress: 45 },
    { id: 2, top: '65%', left: '72%', status: 'completed', title: 'Highway Expansion Sect. C', progress: 100 },
    { id: 3, top: '78%', left: '45%', status: 'suspended', title: 'Tunnel Maintenance T-02', desc: 'Pending Environmental Clearances' },
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".map-sidebar", 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".map-interactive-area", 
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(".interactive-pin",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.15, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.2"
    )
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <div className="map-sidebar lg:col-span-4 xl:col-span-3">
            <MapFilters />
          </div>

          <div className="map-interactive-area lg:col-span-8 xl:col-span-9 relative w-full h-[600px] md:h-[800px] bg-brand-navy rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
            
            <div className="absolute inset-0 opacity-60 mix-blend-screen">
              <img 
                src="https://placehold.co/1200x800/061123/334155?text=Vector+Map+Graphic" 
                alt="Interactive Map Background" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-6 right-6 md:top-8 md:right-8 px-4 py-2 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-3 z-10">
              <div className="w-2 h-2 bg-brand-amber rounded-full animate-ping" />
              <span className="text-zinc-200 text-xs font-semibold font-inter tracking-wider">LIVE NETWORK STATUS</span>
            </div>

            {mapData.map((pin) => (
              <div 
                key={pin.id}
                className="interactive-pin absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className={`w-8 h-8 rounded-full border-[3px] border-white shadow-[0_0_15px_currentColor] flex justify-center items-center relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                  pin.status === 'active' ? 'bg-amber-400 text-amber-400' :
                  pin.status === 'completed' ? 'bg-green-500 text-green-500' :
                  'bg-red-400 text-red-400'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                <MapPopup {...pin} />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default MapContainer

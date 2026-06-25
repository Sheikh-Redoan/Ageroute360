import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const CTABanner = () => {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".cta-text > *", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    )
    
    .fromTo(".cta-buttons > button", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
  }, { scope: containerRef })

  return (
    <section className="py-20 bg-white">
      <div 
        ref={containerRef}
        className="relative w-[90%] max-w-[1280px] mx-auto rounded-[40px] overflow-hidden min-h-[450px] flex items-center px-8 md:px-12 lg:px-20 py-16"
      >
        
        <img 
          src="src/assets/images/BuildingtheFutureBG.png" 
          alt="Building the Future" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 w-full">
          
          <div className="cta-text flex flex-col items-start gap-4 lg:gap-6 max-w-[700px]">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora leading-[1.15]">
              Building the Future of <br className="hidden md:block" />
              <span className="text-brand-amber">Infrastructure</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl font-normal font-jakarta leading-relaxed">
              Join us in transforming national infrastructure. Explore ongoing projects, participate in tenders, and track progress in real-time.
            </p>
          </div>

          <div className="cta-buttons flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shrink-0">
            
            <button 
              onClick={() => navigate('/projects')}
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-brand-amber rounded-full text-brand-navy text-base font-bold font-jakarta hover:bg-amber-500 transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(242,181,43,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(242,181,43,0.4)]"
            >
              Explore Projects
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button 
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/25 backdrop-blur-sm text-white text-base font-semibold font-jakarta hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CTABanner

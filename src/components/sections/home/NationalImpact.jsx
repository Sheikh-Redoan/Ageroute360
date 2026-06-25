import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const NationalImpact = () => {
  const sectionRef = useRef(null)

  const impactData = [
    {
      id: 1,
      value: 1241,
      suffix: "KM",
      suffixClass: "text-[#586474] text-2xl md:text-3xl font-bold font-sora ml-3", 
      label: "Completed Road Network"
    },
    {
      id: 2,
      prefix: "$",
      value: 450,
      suffix: "M+",
      label: "Total Investment Tracked"
    },
    {
      id: 3,
      value: 33,
      label: "Regions Covered"
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".impact-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    
    .fromTo(".impact-stat", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )

    const counters = gsap.utils.toArray('.stat-number')
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'))
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        onUpdate: function() {
          counter.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString('en-US')
        }
      })
    })

  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center">
        
        <div className="impact-header flex flex-col items-center text-center mb-20">
          <span className="text-brand-amber text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2.75px] mb-4">
            National Impact
          </span>
          <h2 className="text-brand-dark text-3xl md:text-4xl lg:text-[40px] font-bold font-sora leading-tight">
            Numbers that move a country forward.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full">
          {impactData.map((stat) => (
            <div key={stat.id} className="impact-stat flex flex-col items-center justify-center text-center">
              
              <div className="flex items-baseline justify-center mb-4">
                {stat.prefix && (
                  <span className="text-brand-dark text-6xl md:text-[88px] font-extrabold font-sora leading-none">
                    {stat.prefix}
                  </span>
                )}
                
                <span 
                  className="stat-number text-brand-dark text-6xl md:text-[88px] font-extrabold font-sora leading-none tracking-tight"
                  data-target={stat.value}
                >
                  0
                </span>
                
                {stat.suffix && (
                  <span className={stat.suffixClass || "text-brand-dark text-6xl md:text-[88px] font-extrabold font-sora leading-none"}>
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="text-[#586474] text-xs md:text-sm font-medium font-jakarta uppercase tracking-[2.5px]">
                {stat.label}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default NationalImpact

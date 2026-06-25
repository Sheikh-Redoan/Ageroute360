import { useGSAP } from '../../../hooks/useGSAP'
import gsap from 'gsap'

const SectionHero = ({ bgImage, title, highlightedWord, subtitle, statCards = [] }) => {
  const containerRef = useGSAP((gsap) => {
    const tl = gsap.timeline()
    tl.from('.hero-title', { y: 50, opacity: 0, duration: 0.8 })
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-stat', { y: 30, opacity: 0, stagger: 0.2, duration: 0.6 }, '-=0.3')
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="hero-title text-5xl md:text-6xl font-bold text-white mb-4">
          {title} <span className="text-brand-amber">{highlightedWord}</span>
        </h1>
        {subtitle && (
          <p className="hero-subtitle text-xl text-gray-300 mb-8">{subtitle}</p>
        )}
        
        {statCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {statCards.map((stat, idx) => (
              <div key={idx} className="hero-stat bg-brand-navy/50 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-3xl font-bold text-brand-amber mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionHero

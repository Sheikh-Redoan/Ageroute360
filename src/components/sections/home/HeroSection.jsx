import { useGSAP } from '../../../hooks/useGSAP'
import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    gsap.from('.hero-content', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.hero-stat-card', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.5
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/src/assets/images/hero-home.jpg)' }}
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center hero-content">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Building <span className="text-brand-amber">Tomorrow's</span><br />
          Infrastructure Today
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transparent, efficient, and innovative road infrastructure management for national development
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" onClick={() => navigate('/projects')}>
            Explore Projects
          </Button>
          <Button variant="outline" onClick={() => navigate('/map')}>
            View Map
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '120+', label: 'Active Projects' },
            { value: '850M', label: 'USD Invested', prefix: '$' },
            { value: '2,500', label: 'KM Roads', suffix: '+' },
            { value: '14', label: 'Regions' }
          ].map((stat, idx) => (
            <div key={idx} className="hero-stat-card bg-brand-navy/50 backdrop-blur-sm p-6 rounded-lg border border-brand-amber/20">
              <p className="text-4xl font-bold text-brand-amber mb-2">
                {stat.prefix}{stat.value}{stat.suffix}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

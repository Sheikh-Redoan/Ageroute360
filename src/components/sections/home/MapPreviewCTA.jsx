import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const MapPreviewCTA = () => {
  const navigate = useNavigate()
  const ref = useScrollReveal()

  return (
    <section
      ref={ref}
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: 'url(/src/assets/images/hero-map.jpg)' }}
    >
      <div className="absolute inset-0 bg-brand-dark/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Explore the <span className="text-brand-amber">Infrastructure Map</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Interactive map showing all projects, roads, bridges, and infrastructure across the nation
        </p>
        <Button variant="primary" onClick={() => navigate('/map')}>
          View Interactive Map
        </Button>
      </div>
    </section>
  )
}

export default MapPreviewCTA

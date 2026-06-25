import { useEffect, useRef, useState } from 'react'

const MapContainer = () => {
  const mapContainer = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Mapbox initialization would go here
    // For now, showing a placeholder
    setLoaded(true)
  }, [])

  return (
    <section className="h-screen relative">
      <div 
        ref={mapContainer} 
        className="absolute inset-0 bg-brand-navy flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-white mb-2">Interactive Map</h2>
          <p className="text-gray-400">
            Mapbox GL JS integration placeholder<br/>
            Add your Mapbox access token to activate
          </p>
        </div>
      </div>

      {/* Map Controls Sidebar */}
      <div className="absolute left-4 top-4 bg-brand-navy/90 backdrop-blur-sm p-4 rounded-lg max-w-xs">
        <h3 className="font-bold text-white mb-3">Layer Controls</h3>
        <div className="space-y-2">
          {['Roads', 'Bridges', 'Projects', 'Regions'].map((layer) => (
            <label key={layer} className="flex items-center text-sm text-gray-300 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-2" />
              {layer}
            </label>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MapContainer

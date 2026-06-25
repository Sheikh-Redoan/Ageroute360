import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import MapContainer from '../components/sections/map/MapContainer'

const MapPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.map} />
      <MapContainer />
    </>
  )
}

export default MapPage

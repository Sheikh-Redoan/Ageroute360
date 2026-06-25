import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-amber mb-4">
              AGEROUTE<span className="text-white">360</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future of infrastructure transparency and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-gray-400 hover:text-brand-amber text-sm">Projects</Link></li>
              <li><Link to="/tenders" className="text-gray-400 hover:text-brand-amber text-sm">Tenders</Link></li>
              <li><Link to="/companies" className="text-gray-400 hover:text-brand-amber text-sm">Companies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/map" className="text-gray-400 hover:text-brand-amber text-sm">Infrastructure Map</Link></li>
              <li><Link to="/reports" className="text-gray-400 hover:text-brand-amber text-sm">Reports</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-amber text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              Email: info@ageroute360.sn<br />
              Phone: +221 XX XXX XXXX
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AGEROUTE360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

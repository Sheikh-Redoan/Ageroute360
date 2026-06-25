import { useScrollReveal } from '../../../hooks/useScrollReveal'

const MissionBlock = () => {
  const ref = useScrollReveal()

  return (
    <section ref={ref} className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-brand-amber">Mission</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              To deliver world-class road infrastructure through transparent governance, 
              innovative engineering, and sustainable development practices.
            </p>
            <p className="text-gray-400">
              AGEROUTE360 is committed to transforming national infrastructure with 
              a focus on safety, efficiency, and economic growth. We believe in building 
              roads that connect communities and drive progress.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎯', title: 'Excellence', desc: 'Quality in every project' },
              { icon: '🔍', title: 'Transparency', desc: 'Open and accountable' },
              { icon: '🌱', title: 'Sustainability', desc: 'Eco-friendly solutions' },
              { icon: '🤝', title: 'Partnership', desc: 'Collaborative approach' }
            ].map((item, idx) => (
              <div key={idx} className="bg-brand-dark p-6 rounded-lg border border-brand-amber/20">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionBlock

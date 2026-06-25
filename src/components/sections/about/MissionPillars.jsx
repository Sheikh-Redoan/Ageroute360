import { useScrollReveal } from '../../../hooks/useScrollReveal'

const MissionPillars = () => {
  const ref = useScrollReveal()

  const pillars = [
    {
      icon: '🎯',
      title: 'Quality Excellence',
      desc: 'Delivering world-class infrastructure that meets international standards'
    },
    {
      icon: '🔍',
      title: 'Transparency',
      desc: 'Open governance and accessible information for all stakeholders'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      desc: 'Eco-friendly practices and long-term environmental responsibility'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      desc: 'Partnerships with communities, companies, and government agencies'
    }
  ]

  return (
    <section ref={ref} className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Our Mission <span className="text-brand-amber">Pillars</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-brand-navy p-6 rounded-lg border border-brand-amber/20 text-center">
            <div className="text-5xl mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
            <p className="text-gray-400">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MissionPillars

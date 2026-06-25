import { useGSAP } from '../../../hooks/useGSAP'

const Timeline = () => {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    gsap.from('.timeline-item', {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 80%'
      }
    })
  }, [])

  const milestones = [
    { year: '2005', title: 'Foundation', desc: 'AGEROUTE established as national road agency' },
    { year: '2010', title: 'Expansion', desc: 'Launched major highway development program' },
    { year: '2015', title: 'Innovation', desc: 'Implemented digital infrastructure management' },
    { year: '2020', title: 'Sustainability', desc: 'Adopted green infrastructure practices' },
    { year: '2024', title: 'AGEROUTE360', desc: 'Launched comprehensive transparency platform' }
  ]

  return (
    <section ref={containerRef} className="timeline-container mb-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Our <span className="text-brand-amber">Journey</span>
      </h2>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-amber" />
        
        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="timeline-item relative pl-20">
              <div className="absolute left-5 top-2 w-7 h-7 bg-brand-amber rounded-full border-4 border-brand-dark" />
              <div className="bg-brand-navy p-6 rounded-lg border border-gray-700">
                <span className="text-brand-amber font-bold text-lg">{milestone.year}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-1">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

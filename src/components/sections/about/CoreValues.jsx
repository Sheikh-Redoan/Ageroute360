import { useScrollReveal } from '../../../hooks/useScrollReveal'

const CoreValues = () => {
  const ref = useScrollReveal()

  const values = [
    { label: 'Integrity', description: 'Honesty and strong moral principles in all operations' },
    { label: 'Innovation', description: 'Embracing new technologies and methodologies' },
    { label: 'Safety', description: 'Prioritizing the safety of workers and road users' },
    { label: 'Accountability', description: 'Taking responsibility for our actions and outcomes' },
    { label: 'Inclusivity', description: 'Equal opportunities and diverse representation' },
    { label: 'Excellence', description: 'Continuous improvement and highest quality standards' }
  ]

  return (
    <section ref={ref} className="mb-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Core <span className="text-brand-amber">Values</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, idx) => (
          <div key={idx} className="bg-brand-navy p-6 rounded-lg border-l-4 border-brand-amber">
            <h3 className="text-lg font-bold text-white mb-2">{value.label}</h3>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues

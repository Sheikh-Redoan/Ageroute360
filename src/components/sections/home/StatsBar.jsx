import AnimatedNumber from '../../ui/AnimatedNumber'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const StatsBar = () => {
  const ref = useScrollReveal()

  const stats = [
    { value: 120, label: 'Active Projects', suffix: '+' },
    { value: 850, label: 'Million USD Invested', prefix: '$', suffix: 'M' },
    { value: 2500, label: 'Kilometers of Roads', suffix: '+' },
    { value: 45, label: 'Partner Companies', suffix: '+' }
  ]

  return (
    <section ref={ref} className="py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-amber mb-2">
                <AnimatedNumber 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar

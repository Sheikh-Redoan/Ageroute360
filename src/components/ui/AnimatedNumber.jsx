import { useCountUp } from '../../hooks/useCountUp'

const AnimatedNumber = ({ value, duration = 2, suffix = '', prefix = '' }) => {
  const [count] = useCountUp(value, duration)

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedNumber

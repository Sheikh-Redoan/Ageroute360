import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const obj = { value: 0 }
    gsap.to(obj, {
      value: end,
      duration,
      onUpdate: () => setCount(Math.floor(obj.value))
    })
  }, [end, duration])

  return [count, ref]
}

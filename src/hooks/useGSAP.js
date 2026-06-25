import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAP = (callback, dependencies = []) => {
  const ref = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger)
    }, ref)

    return () => ctx.revert()
  }, dependencies)

  return ref
}

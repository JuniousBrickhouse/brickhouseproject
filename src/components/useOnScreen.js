import { useState, useEffect } from 'react'

const useOnScreen = (ref = (<span />), rootMargin = '40px', threshold = 1) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setTimeout(() => setIntersecting(entry.isIntersecting), 0)
        // setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

export default useOnScreen

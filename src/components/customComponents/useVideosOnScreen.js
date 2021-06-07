import { useState, useEffect } from 'react'

const useVideosOnScreen = (ref, rootMargin, threshold) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('entry', entry)
        // Update our state when observer callback fires
        setTimeout(() => { setIntersecting(entry.isIntersecting) }, 0)
      },
      {
        rootMargin,
        threshold
      }
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }
    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [ref, rootMargin, threshold]) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

export default useVideosOnScreen

// code from https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

import { useEffect, useRef, useState } from 'react'

const useElementOnScreen = (options) => {
  const bioRef = useRef(null)
  const [bioIsVisible, setBioIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setBioIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (bioRef.current) observer.observe(bioRef.current)

    const currentContainer = bioRef.current

    return () => {
      if (currentContainer) observer.unobserve(currentContainer)
    }
  }, [bioRef, options])

  return [bioRef, bioIsVisible]
}

export default useElementOnScreen

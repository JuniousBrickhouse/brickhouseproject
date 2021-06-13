// code from https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

import { useEffect, useRef, useState } from 'react'

const useJourneyIntroOnScreen = (options) => {
  const introRef = useRef(null)
  const [journeyIntroIsVisible, setJourneyIntroIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setJourneyIntroIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (introRef.current) observer.observe(introRef.current)

    const currentContainer = introRef.current

    return () => {
      if (currentContainer) observer.unobserve(currentContainer)
    }
  }, [introRef, options])

  return [introRef, journeyIntroIsVisible]
}

export default useJourneyIntroOnScreen

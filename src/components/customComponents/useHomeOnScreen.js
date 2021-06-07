// code from https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

import { useEffect, useRef, useState } from 'react'

const useElementOnScreen = (options) => {
  const homeRef = useRef(null)
  const [homeIsVisible, setHomeIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setHomeIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (homeRef.current) observer.observe(homeRef.current)

    const currentContainer = homeRef.current

    return () => {
      if (currentContainer) observer.unobserve(currentContainer)
    }
  }, [homeRef, options])

  return [homeRef, homeIsVisible]
}

export default useElementOnScreen

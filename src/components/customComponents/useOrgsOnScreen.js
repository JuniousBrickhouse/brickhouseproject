// code from https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

import { useEffect, useRef, useState } from 'react'

const useOrgsOnScreen = (options) => {
  const orgsRef = useRef(null)
  const [orgsAreVisible, setOrgsAreVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setOrgsAreVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (orgsRef.current) observer.observe(orgsRef.current)

    const currentContainer = orgsRef.current

    return () => {
      if (currentContainer) observer.unobserve(currentContainer)
    }
  }, [orgsRef, options])

  return [orgsRef, orgsAreVisible]
}

export default useOrgsOnScreen

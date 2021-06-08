// code from https://dev.to/producthackers/intersection-observer-using-react-49ko and https://github.com/zygisS22/intersectionObserverApi/blob/master/src/IO-Api-hook.js

import { useEffect, useRef, useState } from 'react'

const useElementOnScreen = (options) => {
  const videosRef = useRef(null)
  const [videosAreVisible, setVideosAreVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setVideosAreVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (videosRef.current) observer.observe(videosRef.current)

    const currentContainer = videosRef.current

    return () => {
      if (currentContainer) observer.unobserve(currentContainer)
    }
  }, [videosRef, options])

  return [videosRef, videosAreVisible]
}

export default useElementOnScreen

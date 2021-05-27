import { useLayoutEffect, useState } from 'react'
import { throttle } from 'lodash'

const useDocumentScrollThrottle = callback => {
  const [, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body

    setScrollPosition(previousPosition => {
      previousScrollTop = 0
      return currentScrollTop
    })
    callback({ previousScrollTop, currentScrollTop })
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250)

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled)
    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled)
  }, [handleDocumentScrollThrottled])
}

export default useDocumentScrollThrottle

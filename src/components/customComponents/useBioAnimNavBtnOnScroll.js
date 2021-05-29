// This custom component is from https://javascript.plainenglish.io/how-to-trigger-animations-using-react-hooks-27f0231b98b7

import { useEffect, useState } from 'react'
function getOffset (el) {
  let _x = 0
  let _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    console.log('_y in bio', _y)
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}
function hasScrolledTo (el) {
  if (!el) return false
  const top = getOffset(el).top
  const offset = window.innerHeight / 2
  return top - offset <= window.pageYOffset
}
export default function useBioAnimNavBtnOnScroll (ref, onTrigger) {
  const [triggered, setTriggered] = useState(false)
  console.log('ref', ref)
  useEffect(() => {
    console.log('ref in effect', ref)
    function onScroll () {
      const viewed = hasScrolledTo(ref.current)
      if (viewed && !triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(true)
        onTrigger(true)
      } else if (!viewed && triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(false)
        onTrigger(false)
      }
    }
    setTimeout(() => {
      window.addEventListener('scroll', onScroll)
    }, 1000)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [ref, onTrigger, triggered])
}

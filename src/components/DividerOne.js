import { useEffect, useRef, useState } from 'react'

export default function DividerOne () {
  const dividerRef = useRef()
  const [moveImage, setMoveImage] = useState(false)
  console.log('dividerRef', dividerRef)

  useEffect(() => {
    if (dividerRef.current) {
      setMoveImage(true)
    }
  }, [])
  console.log('moveImage', moveImage)
  return (
    <div ref={dividerRef} className='z-50 mx-auto px-4 sm:px-6 lg:px-8 h-2/3 w-screen bg-dancer-test bg-center bg-cover bg-fixed' />

  )
}

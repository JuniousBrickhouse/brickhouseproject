import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Header ({ topRef }) {
  const [show, setShow] = useState(true)
  return (
    <Transition
      appear
      show={show}
      enter='transition-all duration-4000 transform ease-out'
      enterFrom='opacity-0 translate-x-1/4'
      enterTo='opacity-100 translate-x-0'
      className=' mx-auto px-4 sm:px-6 lg:px-8 h-screen w-screen items-center justify-center bg-final-photo bg-no-repeat sm:bg-left bg-fixed bg-contain grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2'
    >
      <Transition.Child
        show={show}
        enter='transition-all delay-3000 duration-4000 transform ease-in-out'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        className='font-allura text-8xl sm:text-6xl md:text-7xl lg:text-8xl sm:col-start-2 md:col-start-2 lg:col-start-2 xl:text-left text-center'
      >
        Junious Brickhouse
      </Transition.Child>
      {/* <h1 className='font-poppins text-5xl sm:text-6xl md:text-5xl lg:text-5xl sm:col-start-2 md:col-start-2 lg:col-start-2 xl:text-left text-center'>I want to bring you love, life, & peace</h1> */}
    </Transition>
  )
}

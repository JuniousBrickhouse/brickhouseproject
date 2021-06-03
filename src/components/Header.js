import { Transition } from '@headlessui/react'

export default function Header ({ topRef, showAnimation }) {
  return (
    <Transition
      appear
      show={showAnimation.headerAnimation}
      enter='transition-all duration-4000 sm:transform ease-out'
      enterFrom='opacity-0 sm:translate-x-1/4'
      enterTo='opacity-100 sm:translate-x-0'
      className='mx-auto px-4 sm:px-6 lg:px-8 h-screen w-screen items-center justify-center bg-final-photo bg-no-repeat bg-top sm:bg-left bg-fixed bg-contain grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2'
    >
      <Transition.Child
        show={showAnimation.headerAnimation}
        enter='transition-all sm:delay-3000 duration-4000 sm:transform ease-in-out'
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

// https://www.digitalocean.com/community/tutorials/css-pure-css-parallax

import { Transition } from '@headlessui/react'

export default function ParallaxHeader (topRef, showAnimation) {
  return (
    <>
      {/* header for >= sm screen sizes */}
      <Transition
        appear
        show={showAnimation.headerAnimation}
        enter='transition-all duration-4000 sm:transform ease-out'
        enterFrom='sm:opacity-0 sm:translate-x-1/4'
        enterTo='sm:opacity-100 sm:translate-x-0'
        className='hidden mx-auto px-4 sm:px-6 lg:px-8 h-full w-full items-center justify-center sm:grid grid-rows-2 gap-2 sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 parallax bg-final-photo bg-no-repeat bg-left bg-125% sm:bg-left sm:bg-80% xl:bg-70%'
        aria-hidden='true'
      >
        <Transition.Child
          show={showAnimation.headerAnimation}
          enter='transition-all sm:delay-3000 duration-4000 sm:transform ease-in-out'
          enterFrom='sm:opacity-0'
          enterTo='sm:opacity-100'
          className='font-allura text-5xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl row-start-2 place-self-center pt-20 sm:row-start-1 sm:col-start-2 md:col-start-2 lg:col-start-2 sm:place-self-end sm:pb-20 lg:pb-0 lg:place-self-center lg:pt-10 xl:text-left text-center'
        >
          Junious Brickhouse
        </Transition.Child>
      </Transition>
      {/* header for mobile view */}
      <div
        className='sm:hidden mx-auto px-4 sm:px-6 lg:px-8 h-full w-full items-center justify-center grid grid-rows-2 gap-2 sm:gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 parallax bg-final-photo bg-no-repeat bg-left bg-125% sm:bg-left sm:bg-80% xl:bg-70%'
        aria-hidden='true'
      >
        <p
          className='font-allura text-5xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl row-start-2 place-self-center pt-20 sm:row-start-1 sm:col-start-2 md:col-start-2 lg:col-start-2 sm:place-self-end sm:pb-20 lg:pb-0 lg:place-self-center lg:pt-10 xl:text-left text-center'
        >
          Junious Brickhouse
        </p>
      </div>
    </>
  )
}

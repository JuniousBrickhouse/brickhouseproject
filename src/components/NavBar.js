/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid'
import { NAVIGATION } from './Lists'
import useDocumentScrollThrottle from './customComponents/useDocumentScrollThrottle'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar ({ handleScroll }) {
  const [showSolidNav, setShowSolidNav] = useState(false)

  // handles nav bar transition from bg-none to bg-color and back based on scroll position
  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottle(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShowSolidNav(currentScrollTop > 2)

    setTimeout(() => {
      setShowSolidNav(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <Disclosure as='nav' className={`${showSolidNav ? 'bg-platinum opacity-90' : 'bg-platinum opacity-90'} fixed top-0 w-full z-30`}>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open
                      ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                        )
                      : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                        )}
                  </Disclosure.Button>
                </div>
                {/* <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                    alt='Workflow'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                    alt='Workflow'
                  />
                </div> */}

                {/* nav btns for computer */}
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  {NAVIGATION.map((item) => (
                    <button
                      key={item.name}
                      className={classNames(
                        item.current ? 'border-b-2 border-glaucous text-richBlack focus:outline-none' : 'text-daviesGrey hover:text-spanishGrey',
                        'px-5 py-2 rounded-md text-md font-medium font-poppins focus:outline-none'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => {
                        // changeCurrentStatus(item.ref)
                        handleScroll(item.ref)
                        // handleAnimationOnClick(item.ref)
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* debugger for larger window size breakpoints */}
                {/* <span className='flex justify-center items-center ml-20'>
                  <div className='hidden sm:block md:hidden text-red-700'>
                    small
                  </div>
                  <div className='hidden md:block lg:hidden text-red-700'>
                    medium
                  </div>
                  <div className='hidden lg:block xl:hidden text-red-700'>
                    large
                  </div>
                  <div className='hidden xl:block text-red-700'>
                    extra large
                  </div>
                </span> */}

              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <button
                    type='button'
                    className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-md font-medium font-poppins rounded-md text-platinum bg-yNBlue hover:bg-glaucous focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                  >
                    <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                    <span>Consultation</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* nav btns for mobile */}
          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {NAVIGATION.map((item) => (
                <button
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => {
                    handleScroll(item.ref)
                    // handleAnimationOnClick(item.ref)
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className=''>
              {/* debugger for smaller window size breakpoints */}
              {/* <span className='flex justify-center items-center ml-20'>
                <div className='hidden sm:block md:hidden text-red-700'>
                  small
                </div>
                <div className='hidden md:block lg:hidden text-red-700'>
                  medium
                </div>
                <div className='hidden lg:block xl:hidden text-red-700'>
                  large
                </div>
                <div className='hidden xl:block text-red-700'>
                  extra large
                </div>
              </span> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

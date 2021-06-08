import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChatIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NAVIGATION } from './Lists'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar ({ handleScroll, showSolidNav, triggerPageChangeAnimation }) {
  const changeNavBar = (current) => {
    if (showSolidNav) {
      return current ? 'border-b-2 border-mediumCarmine text-white focus:outline-none' : 'text-white hover:text-white'
    } else {
      return current ? 'border-b-2 border-mediumCarmine text-richBlack focus:outline-none' : 'text-daviesGrey hover:text-spanishGrey'
    }
  }

  return (
    <Disclosure as='nav' className={`${showSolidNav ? 'bg-yNBlue opacity-40' : 'bg-none'} fixed top-0 w-full z-50`}>
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
                {/* nav btns for computer */}
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  {NAVIGATION.map((item) => (
                    <button
                      key={item.name}
                      className={classNames(
                        changeNavBar(item.current),
                        'px-5 py-2 text-md font-medium font-poppins focus:outline-none'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => {
                        handleScroll(item.ref)
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* debugger for larger window size breakpoints */}
                <span className='flex justify-center items-center ml-20'>
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
                </span>

              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <button
                    type='button'
                    className={`${showSolidNav ? 'bg-none hover:bg-mediumCarmine focus:ring-offset-yNBlue focus:ring-ynBring-offset-yNBlue' : 'bg-mediumCarmine hover:bg-yNBlue opacity-90 focus:ring-offset-mediumCarmine focus:ring-mediumCarmine'} relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-md font-medium font-poppins rounded-md text-platinum focus:outline-none focus:ring-2 focus:ring-offset-2 `}
                    onClick={() => triggerPageChangeAnimation('contactPage')}
                  >
                    <ChatIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
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
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className=''>
              {/* debugger for smaller window size breakpoints */}
              <span className='flex justify-center items-center ml-20'>
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
              </span>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

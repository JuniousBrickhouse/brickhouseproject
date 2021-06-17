import { useEffect, useRef, useState } from 'react'
import { ChatIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NAVIGATION } from './Lists'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar ({ handleScroll, showSolidNav, triggerPageChangeAnimation }) {
  const [showNav, setShowNav] = useState(false)
  const disclosureRef = useRef(null)

  // close menu on window click feature
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (disclosureRef.current !== null && !disclosureRef.current.contains(e.target)) {
        setShowNav(false)
      }
    }
    if (showNav) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [showNav])

  const changeNavBar = (current) => {
    if (showSolidNav) {
      return current ? 'border-b-2 border-mediumCarmine text-platinum focus:outline-none' : 'text-platinum hover:text-platinum transform hover:scale-110'
    } else {
      return current ? 'border-b-2 border-mediumCarmine text-richBlack focus:outline-none' : 'text-richBlack transform hover:scale-110'
    }
  }

  const changeMobileNav = (current) => {
    if (showSolidNav) {
      return current ? 'border-b-2 border-mediumCarmine text-white' : 'text-white hover:text-white transform hover:scale-110'
    } else {
      return current ? 'border-b-2 border-mediumCarmine text-richBlack' : 'text-richBlack transform hover:scale-110'
    }
  }

  return (
    <nav className={`${showSolidNav ? 'bg-yNBlue opacity-70 md:opacity-40' : 'bg-none'} fixed top-0 w-full z-50`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='-ml-2 mr-2 flex items-center md:hidden'>
              {/* Mobile menu button */}
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                ref={disclosureRef}
                onClick={() => setShowNav(!showNav)}
              >
                <span className='sr-only'>Open main menu</span>
                {showNav
                  ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                    )
                  : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
              </button>
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
                className={`${showSolidNav ? 'bg-none hover:bg-mediumCarmine focus:ring-offset-yNBlue focus:ring-ynBring-offset-yNBlue' : 'bg-mediumCarmine hover:bg-fawn opacity-90 focus:ring-offset-fawn'} relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-md font-medium font-poppins rounded-md text-platinum focus:outline-none focus:ring-2 focus:ring-offset-2 `}
                onClick={() => triggerPageChangeAnimation('contactPage')}
              >
                <ChatIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                <span>Contact</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* nav btns for mobile */}
      {showNav &&
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {NAVIGATION.map((item) => (
              <button
                key={item.name}
                className={classNames(
                  changeMobileNav(item.current),
                  'block px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                onClick={() => {
                  handleScroll(item.ref)
                  setShowNav(false)
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
        </div>}
    </nav>
  )
}

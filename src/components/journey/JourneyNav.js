/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'

export default function JourneyNav ({ triggerPageChangeAnimation, navBtnFade }) {
  return (
    <Disclosure as='nav' className={`${navBtnFade ? 'opacity-40' : 'opacity-100'} fixed top-0 w-full z-30 bg-none`}>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-0 px-0'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <button
                  onClick={() => triggerPageChangeAnimation('homePage', 'journeyPage')}
                  type='button'
                  className='inline-flex items-center ml-2 px-3 py-1.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mediumCarmine hover:bg-sonicSilver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <ChevronDoubleLeftIcon className='pr-4 h-8 w-8' />
                  Home
                </button>
              </div>
              {/* desktop nav button */}
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start pt-4'>
                <div className='hidden sm:block sm:ml-6'>
                  <button
                    onClick={() => triggerPageChangeAnimation('homePage', 'journeyPage')}
                    type='button'
                    className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-earthYellow hover:bg-sonicSilver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-richBlack'
                  >
                    <ChevronDoubleLeftIcon className='pr-2 h-8 w-8' />
                    Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

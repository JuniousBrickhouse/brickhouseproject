/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChatIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import JuniousNoHat from '.././photos/JuniousNoHat.jpeg'
import { CONTENT } from './journeyContent'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

export default function NewAccomplishments ({ triggerPageChangeAnimation }) {
  return (
    <div className='relative bg-indigoDye overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-indigoDye sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-woodGray transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <Popover>
            {({ open }) => (
              <>
                <div className='relative pt-6 px-4 sm:px-6 lg:px-8' />

                <Transition
                  show={open}
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-100 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Popover.Panel
                    focus
                    static
                    className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
                  >
                    <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='px-5 pt-4 flex items-center justify-between'>
                        <div>
                          <img
                            className='h-8 w-auto'
                            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                            alt=''
                          />
                        </div>
                        <div className='-mr-2'>
                          <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Close main menu</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className='px-2 pt-2 pb-3 space-y-1'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href='#'
                        className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <p className='mt-3 text-base text-platinum sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                {CONTENT.accomplishments}
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <button
                    className='bg-mediumCarmine hover:bg-fawn opacity-90 focus:ring-offset-fawn relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-md font-medium font-poppins rounded-md text-platinum focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => triggerPageChangeAnimation('contactPage')}
                  >
                    <ChatIcon className='-ml-1 mr-2 h-5 w-5' />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-contain sm:object-contain lg:object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={JuniousNoHat}
          alt='Junious not wearing a hat'
        />
      </div>
    </div>
  )
}

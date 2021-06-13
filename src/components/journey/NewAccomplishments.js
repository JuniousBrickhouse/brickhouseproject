/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChatIcon, XIcon } from '@heroicons/react/outline'
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

          {/* This line sets the full length of the divider between the img and the text on xl */}
          <div className='relative pt-6 px-4 sm:px-6 lg:px-8' />

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

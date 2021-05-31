import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import juniousBlue from '../photos/JuniousBlue.jpeg'
import { changeCurrentStatus } from './helperFunctions'

const SHOTR_BIO =
  {
    paragraph1: 'I am a product of a folk tradition, urban dance. From my mother teaching my sister and me to do the hustle in the living room, to riding on the handlebars of my cousin’s bike in Norfolk, Virginia to the rec center to learn break dancing from the older children, I received an education in urban dance (breaking, popping, house dance, locking, and hip-hop) and the culture that surrounded it. I was brought up and educated within this tradition and have become an educator and tradition bearer.',
    journey: 'Read more about my journey'
  }

export default function ShortBio ({ showAnimation, handleRenderJourney }) {
  return (
    <div className='relative py-32 bg-white'>
      <div className='hidden absolute top-0 inset-x-0 h-screen bg-gray-50 lg:block' aria-hidden='true' />
      <div className='max-w-7xl mx-auto bg-burlyWood lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>
          <div className='relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent'>
            <div className='absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden' aria-hidden='true' />
            <div className='max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
              <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                <Transition
                  show={showAnimation.bioImage}
                  as='img'
                  enter='transition-all duration-3000 transform ease-out'
                  enterFrom='opacity-0 -translate-x-full'
                  enterTo='opacity-100 translate-x-0'
                  leave='transition-all duration-3000 transform'
                  leaveFrom='opacity-100 translate-x-0'
                  leaveTo='opacity-0 -translate-x-full'
                  className='object-cover object-top rounded-3xl shadow-2xl'
                  src={juniousBlue}
                  // src='https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80'
                  alt='Junious Brickhouse'
                />
              </div>
            </div>
          </div>

          <div className='relative bg-platinum lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center font-poppins'>
            <div className='hidden absolute inset-0 overflow-hidden rounded-3xl lg:block' aria-hidden='true'>
              <svg
                className='absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-wildBlueYonder' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
              </svg>
              <svg
                className='absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-indigoDye' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
              </svg>
            </div>
            <div className='relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6 flex flex-col'>
              {/* <h2 className='text-3xl font-extrabold text-white' id='join-heading'>
                Join our team
              </h2> */}
              <Transition
                show={showAnimation.bioImage}
                enter='transition-all duration-3000 transform ease-out delay-150'
                enterFrom='opacity-0 translate-x-full'
                enterTo='opacity-100 translate-x-0'
                leave='transition-all duration-3000 transform'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 translate-x-full'
                className='text-2xl text-redBackground font-nunito'
              >
                {SHOTR_BIO.paragraph1}
              </Transition>
              <Transition
                show={showAnimation.bioImage}
                as='button'
                enter='transition-all duration-3000 transform ease-out delay-150'
                enterFrom='opacity-0 translate-x-full'
                enterTo='opacity-100 translate-x-0'
                leave='transition-all duration-3000 transform'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 translate-x-full'
                className='inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-mediumCarmine hover:bg-redBackground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-end'
                onClick={() => handleRenderJourney('journeyPage')}
              >
                {SHOTR_BIO.journey}
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

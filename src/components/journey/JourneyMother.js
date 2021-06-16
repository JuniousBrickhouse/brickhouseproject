/* This example requires Tailwind CSS v2.0+ */
import lyndaBrickhouse from '.././photos/lyndaBrickhouse.jpg'
import { CONTENT } from './journeyContent'

export default function JourneyMother ({ triggerPageChangeAnimation }) {
  return (
    <div className='relative bg-mediumCarmine overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-mediumCarmine sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-richBlack transform translate-x-1/2'
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
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-contain sm:object-contain lg:object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={lyndaBrickhouse}
          alt='Junious not wearing a hat'
        />
      </div>
    </div>
  )
}

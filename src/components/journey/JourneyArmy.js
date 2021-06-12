import { CONTENT } from './journeyContent'
import juniousGray from '.././photos/JuniousGrey.jpeg'

export default function JourneyArmy () {
  return (
    <div className='relative bg-yNBlue py-16 sm:py-24'>
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start'>
        <div className='relative sm:py-16 lg:py-0'>
          <div aria-hidden='true' className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'>
            <div className='absolute inset-y-0 right-1/2 w-full bg-mediumCarmine rounded-r-3xl lg:right-72' />
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width={404} height={392} fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)' />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
            {/* Testimonial card */}
            <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src={juniousGray}
                alt=''
              />

              <div className='relative px-8' />
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            {/* <h2 className='text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl'>
              On a mission to empower teams
            </h2> */}
            <div className='mt-6 text-platinum space-y-6'>
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-mediumCarmine sm:text-4xl font-poppins'>
                Army
              </h3>
              <p className='text-lg'>
                {CONTENT.army}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

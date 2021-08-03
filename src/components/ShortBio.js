import { Transition } from '@headlessui/react'
import juniousBlue from './photos/JuniousBlue.gif'

const SHOTR_BIO =
  {
    paragraph1: "I am a culmination of many folk traditions: Popping, Breaking, House Dance, Locking, and Hip Hop, to name a few of these forms, rooted in African American communities. My training began in '77 with my mother teaching my sister and I to do the Latin Hustle and The Funky Robot in our living room in Norfolk, VA. I vividly remember wanting to see how this movement lived outside of our housing projects. Eventually, I would depend on the kids in my neighborhood and the adults in my family to help me imagine what contributions I could make to these art forms. Today, these traditions continue live in me, with the same excitement and curiosity I had as a child. This curiosity is accompanied by the urgency to develop these traditions and ensure they are sustainable for generations to come. I know there is still much work to be done, but my commitment is unwaivering.",
  
    journey: 'Read more about my journey'
  }
  
export default function ShortBio ({ showAnimation, triggerPageChangeAnimation }) {
  return (
    <div className='relative py-32 bg-yNBlue z-30'>
      <div className='hidden absolute top-0 inset-x-0 h-screen bg-yNBlue lg:block' aria-hidden='true' />
      <div className='max-w-7xl mx-auto bg-platinum lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>

          {/* bio image for >= lg screen sizes */}
          <div className='hidden lg:block relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent'>
            <div className='absolute inset-x-0 h-1/2 bg-yNBlue lg:hidden' aria-hidden='true' />
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
                  alt='Junious Brickhouse'
                />
              </div>
              <Transition
                show={showAnimation.bioImage}
                as='p'
                enter='transition-all duration-3000 transform ease-out'
                enterFrom='opacity-0 -translate-x-full'
                enterTo='opacity-100 translate-x-0'
                leave='transition-all duration-3000 transform'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 -translate-x-full'
                className='font-bold text-xs sm:text-md text-right font-poppins text-glaucous mt-2 sm:mt-0 sm:mb-10 md:mb-4 lg:mb-10'
              >
                Photo by Michael G. Stewart
              </Transition>
            </div>
          </div>

          {/* bio image for <= medium screen sizes */}
          <div className='lg:hidden relative z-10'>
            <div className='absolute inset-x-0 h-1/2 bg-yNBlue lg:hidden' aria-hidden='true' />
            <div className='max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
              <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                <img
                  className='object-cover object-top rounded-3xl shadow-2xl'
                  src={juniousBlue}
                  alt='Junious Brickhouse'
                />
              </div>
              <p
                className='font-bold text-xs sm:text-md text-right font-poppins text-glaucous mt-2 sm:mt-0 sm:mb-10 md:mb-4 lg:mb-10'
              >
                Photo by Michael G. Stewart
              </p>
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

            {/* bio content for >= large screen sizes */}
            <div className='hidden relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6 lg:flex flex-col'>
              <Transition
                show={showAnimation.bioImage}
                enter='transition-all duration-3000 transform ease-out delay-150'
                enterFrom='opacity-0 translate-x-full'
                enterTo='opacity-100 translate-x-0'
                leave='transition-all duration-3000 transform'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 translate-x-full'
                className='text-2xl text-redBackground font-nunito font-semibold'
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
                onClick={() => triggerPageChangeAnimation('journeyPage', 'homePage')}
              >
                {SHOTR_BIO.journey}
              </Transition>
            </div>

            {/* bio content for <= medium screen sizes */}
            <div className='lg:hidden relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl flex flex-col'>
              <div
                className='text-2xl text-redBackground font-nunito font-semibold'
              >
                {SHOTR_BIO.paragraph1}
              </div>
              <button
                className='inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-mediumCarmine hover:bg-redBackground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 self-end'
                onClick={() => triggerPageChangeAnimation('journeyPage', 'homePage')}
              >
                {SHOTR_BIO.journey}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

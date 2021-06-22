import { ChatIcon } from '@heroicons/react/outline'
import juniousNoHat from '../photos/JuniousNoHat.jpeg'
import philWigginsAndFriends from '../photos/philWigginsAndFriends.jpg'
import { CONTENT } from './journeyContent'

export default function Accomplishments2 ({ triggerPageChangeAnimation }) {
  return (
    <div className='relative bg-yNBlue pt-16 pb-32 overflow-hidden'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div className='mt-6'>
                {/* <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Stay on top of customer support
                </h2> */}
                <p className='mt-4 text-lg text-platinum font-nunito text-left sm:text-right'>
                  {CONTENT.accomplishmentsWiggins}
                </p>
              </div>
            </div>
            <div className='mt-8 border-t border-burlyWood pt-6'>
              <blockquote>
                <div>
                  <p className='text-base font-nunito text-mediumCarmine text-left sm:text-right'>
                    Phil Wiggins and Friends
                  </p>
                  <p className='text-base font-nunito text-mediumCarmine text-left sm:text-right'>
                    Photo by Michael G. Stewart
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='px-2 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-auto lg:w-3/4 lg:max-w-none'
                src={philWigginsAndFriends}
                alt='Inbox user interface'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div className='mt-6'>
                {/* <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Better understand your customers
                </h2> */}
                <p className='mt-4 text-lg text-platinum font-nunito'>
                  {CONTENT.accomplishmentsPart1}
                </p>
                <div className='mt-8 border-t border-burlyWood pt-6'>
                  <div className='mt-6'>
                    <button
                      className='bg-mediumCarmine hover:bg-fawn opacity-90 focus:ring-offset-fawn relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-md font-medium font-poppins rounded-md text-platinum focus:outline-none focus:ring-2 focus:ring-offset-2'
                      onClick={() => triggerPageChangeAnimation('contactPage')}
                    >
                      <ChatIcon className='-ml-1 mr-2 h-5 w-5' />
                      Contact
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  {/* <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'
                  >
                    Get started
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='px-2 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:left-20 xl:left-0'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src={juniousNoHat}
                alt='Customer profile user interface'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

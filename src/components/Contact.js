import { MailIcon, RefreshIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import * as emailjs from 'emailjs-com'
import HamptonRaw from './photos/logos/23Raw.png'
import MessageSentModal from './MessageSentModal'
import { Transition } from '@headlessui/react'
import MessageErrorModal from './MessageErrorModal'

// const SERVICE_ID = 'safe'
// const TEMPLATE_ID = 'safe'
// const USER_ID = 'safe'

export default function Contact ({ triggerPageChangeAnimation }) {
  const [renderModal, setRenderModal] = useState(false)
  const [renderErrorModal, setRenderErrorModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState([])
  const [formParams, setFormParams] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: null,
    subject: '',
    message: '',
    to_name: 'Junious'
  })

  console.log('renderModal', renderModal)
  console.log('renderErrorModal', renderErrorModal)
  console.log('error', error)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formParams, process.env.REACT_APP_USER_ID)
      .then(response => {
        setRenderModal(true)
        setIsLoading(false)
      }, function (error) {
        setError(error)
        setRenderErrorModal(true)
      })
  }

  const handleModalClose = () => {
    setRenderModal(false)
    setIsLoading(false)
    triggerPageChangeAnimation('')
  }

  const handleErrorModalClose = () => {
    setRenderErrorModal(false)
    setIsLoading(false)
  }

  const handleChange = (name, value) => {
    setFormParams(state => ({ ...state, [name]: value }))
  }

  // For some reason tailwind responsive breakpoints aren't
  // working for background images. It's duplication them. So I'm having to set
  // up this getWindowSize function and set the breakpoints
  // this way. Currently it is slow to respond. It works only
  // after the user scrolls.
  const getWindowSize = () => {
    return window.innerWidth
  }

  setTimeout(() => {
    window.addEventListener('resize', getWindowSize)
  }, 250)

  const handleBackgroundImage = () => {
    if (getWindowSize() < 640) {
      return 'relative overflow-hidden h-96 py-10 px-6 bg-23Raw bg-cover bg-center flex'
    } else {
      return 'relative overflow-hidden sm:h-auto py-10 px-6 bg-cover bg-center sm:bg-yNBlue lg:bg-23Vertical lg:bg-no-repeat sm:px-10 xl:p-1 flex lg:ml-4 lg:-mr-4 lg:my-6 xl:my-0'
    }
  }

  if (renderModal) {
    return (
      <Transition
        show={renderModal}
        enter='transform-opacity duration-1000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transform-opacity duration-1000'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <MessageSentModal handleModalClose={handleModalClose} />
      </Transition>
    )
  }

  if (renderErrorModal) {
    return (
      <MessageErrorModal error={error} handleErrorModalClose={handleErrorModalClose} />
    )
  }

  return (
    <div className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='relative bg-yNBlue shadow-xl'>
          <h2 className='sr-only'>Contact us</h2>

          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {/* Contact information */}
            {/* <div className='relative overflow-hidden h-96 sm:h-auto py-10 px-6 bg-23Raw bg-cover bg-center sm:bg-yNBlue lg:bg-23Vertical lg:bg-no-repeat sm:px-10 xl:p-1 flex lg:ml-4 lg:-mr-4 lg:my-6 xl:my-0'> */}
            <div className={handleBackgroundImage()}>
              <div className='absolute inset-0 pointer-events-none sm:hidden' aria-hidden='true'>
                <svg
                  className='absolute inset-0 w-full h-full'
                  width={343}
                  height={388}
                  viewBox='0 0 343 388'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                    fill='url(#linear1)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear1'
                      x1='254.553'
                      y1='107.554'
                      x2='961.66'
                      y2='814.66'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div
                className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                aria-hidden='true'
              >
                <svg
                  className='absolute inset-0 w-full h-full'
                  width={359}
                  height={339}
                  viewBox='0 0 359 339'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                    fill='url(#linear2)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear2'
                      x1='192.553'
                      y1='28.553'
                      x2='899.66'
                      y2='735.66'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span>
                <h3 className='hidden sm:block lg:hidden text-4xl text-center font-poppins text-platinum font-extrabold'>Contact</h3>
                <p className='hidden sm:block lg:hidden mt-6 text-xl text-platinum max-w-3xl font-nunito'>
                  Junious is available for booking in all of his professional capacities: performer, educator, and consultant. Please use this form to start a conversation.
                </p>
              </span>
              <img src={HamptonRaw} alt='23 and Hampton Logo' className='hidden sm:block sm:w-48 sm:h-48 md:w-64 md:h-64 lg:hidden' />
            </div>

            {/* Contact form */}
            <div className=' py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
              <h3 className='block sm:hidden lg:block text-2xl font-medium font-poppins text-platinum'>Contact</h3>
              <p className='block sm:hidden lg:block mt-6 text-lg text-platinum max-w-3xl font-nunito'>
                Junious is available for booking in all of his professional capacities: performer, educator, and consultant. Please use this form to start a conversation.
              </p>
              <form onSubmit={handleSubmit} className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <label htmlFor='first_name' className='block text-sm font-medium text-earthYellow'>
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first_name'
                      id='first_name'
                      autoComplete='given-name'
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='last_name' className='block text-sm font-medium text-earthYellow'>
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last_name'
                      id='last_name'
                      autoComplete='family-name'
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-earthYellow'>
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <label htmlFor='phone' className='block text-sm font-medium text-earthYellow'>
                      Phone
                    </label>
                    <span id='phone-optional' className='text-sm text-wildBlueYonder'>
                      Optional
                    </span>
                  </div>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      aria-describedby='phone-optional'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label htmlFor='subject' className='block text-sm font-medium text-earthYellow'>
                    Subject
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label htmlFor='message' className='block text-sm font-medium text-earthYellow'>
                      Message
                    </label>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='py-3 px-4 block w-full shadow-sm text-mediumCarmine focus:ring-earthYellow focus:border-earthYellow border-gray-300 rounded-md'
                      aria-describedby='message-max'
                      defaultValue=''
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  </div>
                </div>
                <div className='sm:col-span-2 sm:flex sm:justify-end space-y-4 sm:space-y-2 sm:space-x-4'>
                  {isLoading
                    ? <button
                        type='submit'
                        className='mt-2 w-full inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mediumCarmine hover:bg-fawn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mediumCarmine sm:w-auto'
                      >
                      <RefreshIcon className='h-4 w-4 mr-4 self-center animate-spin' />
                      Send
                    </button>
                    : <button
                        type='submit'
                        className='mt-2 w-full inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mediumCarmine hover:bg-fawn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mediumCarmine sm:w-auto'
                      >
                      <MailIcon className='h-6 w-6 mr-2' />
                      Send
                    </button>}

                  <button
                    type='button'
                    className='mt-2 w-full inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mediumCarmine hover:bg-fawn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wildBlueYonder focus:ring-offset-wilring-wildBlueYonder sm:w-auto'
                    onClick={() => triggerPageChangeAnimation('')}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

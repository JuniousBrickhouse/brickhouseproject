/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import hampton from './photos/logos/23Raw.png'

export default function MessageErrorModal ({ handleErrorModalClose, error }) {
  const [open, setOpen] = useState(true)
  console.log('error', error)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' static className='fixed z-10 inset-0 overflow-y-auto' open={open} onClose={setOpen}>
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-2000'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-2000'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-1000'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-1000'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div>
                {/* <div className='mx-auto flex items-center justify-center h-12 w-12'> */}
                <img src={hampton} alt='23 and Hampton Logo' />
                {/* </div> */}
                <div className='mt-3 text-center sm:mt-5'>
                  <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-red-500'>
                    Message Unsuccessful
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {error.text}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-mediumCarmine text-base font-medium text-white hover:bg-fawn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yNBlue sm:text-sm'
                  onClick={() => {
                    setOpen(false)
                    setTimeout(() => {
                      handleErrorModalClose()
                    }, 1000)
                  }}
                >
                  Go back
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

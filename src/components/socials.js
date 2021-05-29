import { AnnotationIcon, PaperClipIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Socials () {
  return (
    <div className='max-w-7xl mx-auto px-4 h-1/6 sm:px-6 lg:px-8 content-center items-center'><div className='relative'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='relative z-0 inline-flex shadow-sm rounded-md -space-x-px'>
          <button
            type='button'
            className='relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigoDye focus:border-indigoDye'
          >
            <span className='sr-only'>Edit</span>
            <FaYoutube className='h-5 w-5' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigoDye focus:border-indigoDye'
          >
            <span className='sr-only'>Attachment</span>
            <FaFacebook className='h-5 w-5' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='relative inline-flex content-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigoDye focus:border-indigoDye'
          >
            <span className='sr-only'>Annotate</span>
            <FaTwitter className='h-5 w-5' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='relative inline-flex object-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigoDye focus:border-indigoDye'
          >
            <span className='sr-only'>Delete</span>
            <FaInstagram className='h-5 w-5' aria-hidden='true' />
          </button>
        </span>
      </div>
                                                                                              </div>
    </div>
  )
}

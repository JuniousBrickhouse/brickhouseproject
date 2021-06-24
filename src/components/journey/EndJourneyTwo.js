import juniousWithWillietteHinton from '.././photos/juniousWithWillietteHinton.jpg'
import { CONTENT } from './journeyContent'

export default function EndJourneyTwo () {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 h-full w-full bg-juniousWithWillietteHinton bg-no-repeat bg-center sm:bg-bottom bg-contain sm:bg-cover parallax flex justify-end items-start sm:items-end' aria-hidden='true'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src={juniousWithWillietteHinton}
          alt=''
        />
        <div className='absolute inset-0 mix-blend-multiply' aria-hidden='true' />
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        {/* <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>Get in touch</h1> */}
        <p className='mt-6 text-2xl text-white max-w-3xl bg-sonicSilver bg-opacity-60 border-2 p-10 border-sonicSilver rounded-md text-center'>
          {CONTENT.accomplishmentsConclusion}
          <br />
          <br />
          {CONTENT.accomplishmentsWiggins}
        </p>

      </div>
    </div>
  )
}

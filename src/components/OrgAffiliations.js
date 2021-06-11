import nextLevel from './photos/logos/nextLevel.png'
import urbanArtistry from './photos/logos/urbanArtistry.jpg'

const POSTS = [
  {
    title: '23rd and Hampton Community Initiatives',
    position: 'Owner',
    href: 'https://23hci.com/',
    id: 1,
    description:
        'Junious founded 23rd and Hampton Community Initiatives in 2020 to offer his expertise as a consultant to organizations and individuals. Through 23rd and Hampton, Junious can be contracted for consulting in all his specialties, including Arts Administration, Program Management, Community Development, Diplomacy, Folklore, and Conflict Transformation',
    imageUrl:
    'https://img1.wsimg.com/isteam/ip/93b63956-2d59-47b1-8349-dfc27f026e57/23rd%20%26%20Hampton%20Logo%201b%20copy.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1320,h:1000,cg:true,m/cr=w:1320,h:1000,a:cc'
  },
  {
    title: 'Next Level',
    position: 'Director',
    href: 'https://www.nextlevel-usa.org/junious-brickhouse',
    id: 2,
    description:
        'Having been with Next Level since its inception, serving as an Artist-Educator on the first trip to Senegal, Junious now serves as the Director of the program, following in the footsteps of Duke Ellington and the State Department’s Jazz Ambassadors . Junio us shapes the vision of this program and guides team members in delivering culturally sensitive and highly practical education in the areas of Artistic Excellence, Entrepreneurship, and Conflict Transformation.',
    imageUrl: nextLevel
    // 'https://static1.squarespace.com/static/5b521e334cde7a741d47e768/t/5b5616f20e2e728fc44d8ecb/1620247551740/?format=1500w'
  },
  {
    title: 'Urban Artistry, Inc.',
    position: 'Founder and Artistic Director',
    href: 'https://urbanartistry.org/',
    id: 3,
    description:
        'Upon returning to the US in 2005 following 20 years of international service in the Army and as a civilian, Junious recognized the need for an institution to preserve and promote Urban Dance through structured mentorship, professional development, and community-building. He foundedthe non-profit Urban Artistry, Inc., which has been serving the DMV area and beyond throughclasses, mentorship, performances, and annual events such as the International Soul Societyfestiva',
    imageUrl: urbanArtistry
  }
]

export default function OrgAffiliations ({ triggerPageChangeAnimation }) {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-mediumCarmine h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight text-richBlack sm:text-4xl font-bold font-poppins'>The Hats I Wear</h2>
          {/* <p className='mt-3 max-w-2xl font-nunito mx-auto text-xl text-platinum sm:mt-4'>
            Placeholder for potential text introducing the org affiliations / hats
          </p> */}
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {POSTS.map((post) => (
            <div key={post.title} className='flex flex-col rounded-lg shadow-lg overflow-hidden font-poppins'>
              <div className='flex-shrink-0 bg-white'>
                <a
                  href={post.href}
                  className='block mt-2'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <img className={`${post.imageUrl === nextLevel ? 'object-contain' : 'object-cover'} h-48 w-full py-2`} src={post.imageUrl} alt={post.title} />
                </a>
              </div>
              <div className='flex-1 bg-platinum p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  {post.id === 1 &&
                    <p className='text-sm font-medium text-glaucous'>
                      <button
                        type='button'
                        className='hover:underline'
                        onClick={() => triggerPageChangeAnimation('contactPage')}
                      >
                        Contact
                      </button>
                    </p>}
                  <a
                    href={post.href}
                    className='block mt-2'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='text-xl font-semibold text-mediumCarmine font-poppins'>{post.title}</p>
                    <p className='text-xl font-bold text-yNBlue font-poppins'>{post.position}</p>
                    <p className='mt-3 text-base text-richBlack font-nunito'>{post.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

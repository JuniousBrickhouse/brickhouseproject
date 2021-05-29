const POSTS = [
  {
    title: '23rd and Hampton Community Initiatives',
    href: 'https://23hci.com/',
    category: { name: 'Article', href: '#' },
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
        'https://img1.wsimg.com/isteam/ip/93b63956-2d59-47b1-8349-dfc27f026e57/23rd%20%26%20Hampton%20Logo%201b%20copy.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1320,h:1000,cg:true,m/cr=w:1320,h:1000,a:cc',
    readingTime: '6 min'
  },
  {
    title: 'Next Level',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
        'Building Global Community through Hip Hop Culture',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
        'https://static1.squarespace.com/static/5b521e334cde7a741d47e768/t/5b5616f20e2e728fc44d8ecb/1620247551740/?format=1500w',
    readingTime: '4 min'
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min'
  }
]

export default function OrgAffiliations () {
  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight text-richBlack sm:text-4xl font-semiBold font-poppins'>The Hats I Wear</h2>
          <p className='mt-3 max-w-2xl font-nunito mx-auto text-xl text-sonicSilver sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {POSTS.map((post) => (
            <div key={post.title} className='flex flex-col rounded-lg shadow-lg overflow-hidden font-poppins'>
              <div className='flex-shrink-0'>
                <img className='h-48 w-full object-cover' src={post.imageUrl} alt='' />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-glaucous'>
                    <a
                      href={post.category.href}
                      className='hover:underline'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      {post.category.name}
                    </a>
                  </p>
                  <a
                    href={post.href}
                    className='block mt-2'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    <p className='text-xl font-semibold text-royalBlack'>{post.title}</p>
                    <p className='mt-3 text-base text-sonicSilver font-nunito'>{post.description}</p>
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

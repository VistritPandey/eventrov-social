const callouts = [
    {
      name: 'For Event Planners',
      description: 'Find the best artists, DJs and performers. Discover perfect venues based on your preference. Book trusted service providers/vendors for lighting, sound and other essentials.',
      imageSrc: 'https://img1.wsimg.com/isteam/stock/87432/:/cr=t:0%25,l:16.64%25,w:66.73%25,h:100%25/rs=w:730,h:730,cg:true',
      href: 'https://eventrov.com/contact-us#85f2e26a-f168-4699-add7-3a23ba5c9f9a',
    },
    {
      name: 'For Artists and Performers',
      description: 'Showcase your talent to a vast network of event planners. Get booked for events that match your style and preferences. Build connections without the need for a manager',
      imageSrc: 'https://img1.wsimg.com/isteam/stock/9E9mldx/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true',
      href: 'https://forms.gle/VrxMKkbx9HfTHF1q7',
    },
    {
      name: 'For Venues and Vendors/Service Providers',
      description: 'List your venue or services for free and get discovered by the right event planners. Manage bookings and inquiries effortlessly. Increase your visibility using SEO ',
      imageSrc: 'https://img1.wsimg.com/isteam/stock/6238/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true',
      href: 'https://forms.gle/R5JJJ6mX47W9CWQM8',
    },
  ]
  
  export default function Access() {
    return (
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-indigo-600">Get Early Access</h2>
            <p></p>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-indigo-400">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
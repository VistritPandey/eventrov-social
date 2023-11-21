import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Streamlining the Event Planning Process',
    description:
      'Eventrov provides an online marketplace platform that serves as a one-stop-shop for event planning. Our vision for the future is a thriving, globally-connected events industry that saves time and resources, and results in memorable high quality events',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Comprehensive Offerings',
    description:
      'We connect event planners with a broad spectrum of service providers and vendors such as venue owners, security companies, DJs, artists, lighting/production companies, bartending companies, medical services, lawyers, marketing, graphic designers and more.',
    icon: LockClosedIcon,
  },
  {
    name: 'Grow your career',
    description:
      'Eventrov offers a community for vendors and artists to market their services for free and attract more clients. Use SEO to your advantage to boost your reach and receive more bookings. Join our community and grow your network.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced Technology',
    description:
      'Eventrov uses advanced AI and ML tools to provide you with the best deal. Our platform is designed to be user-friendly and intuitive, and we are constantly improving our technology to provide you with the best experience possible.',
    icon: FingerPrintIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl font-semibold leading-7 text-indigo-600">About Us</h2>
          <p></p>
          {/*<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for an event
          </p> */}
          <p className="mt-6 text-lg leading-8 text-white">
          Eventrov is a platform that connects event organizers, venues, vendors, and artists in a seamless, user-friendly online environment leveraging advanced search and recommendation algorithms to match event organizers with ideal providers
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-indigo-400">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-black">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">About Us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Community.</h1>
              
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
            src="https://media0.giphy.com/media/L0qTl8hl84EDly62J1/giphy.gif"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p>
              <li><strong>Expertise:</strong> Get insights directly from the founders of Eventrov, who are deeply rooted in the live events community.</li>
              <li><strong>Connections:</strong> Access our handpicked network of artists, venues, and vendors. Even before our platform launches, we've got you covered.</li>
              <li><strong>Simplicity:</strong> Save time and stress. We'll understand your needs and manually connect you with the perfect matches.</li>
              </p>
              <ul role="list" className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-indigo-900">Streamlining the Event Planning Process. </strong>
                     Eventrov provides an online marketplace platform that serves as a one-stop-shop for event planning. Our vision for the future is a thriving, globally-connected events industry that saves time and resources, and results in memorable high quality events
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-indigo-900">Comprehensive Offerings.</strong> We connect event planners with a broad spectrum of service providers and vendors such as venue owners, security companies, DJs, artists, lighting/production companies, bartending companies, medical services, lawyers, insurance companies, trash and cleanup companies, photographers, event rental companies, marketing/promoters, graphic designers and more.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-indigo-900">Grow your Career.</strong> Eventrov offers a community for vendors and artists to market their services for free and attract more clients. Use SEO to your advantage to boost your reach and receive more bookings. Join our community and grow your network.
                  </span>
                </li>
              </ul>
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-900"> FREE Event Consultation with Eventrov's Founders!</h2>
              <p className="mt-6">
              Are you planning an event and overwhelmed with the endless options for venues, artists, and vendors/service providers? Let us simplify that for you.
              </p>
              <p className="mt-8">
              <strong>How it works?</strong>
              <p><strong>Schedule a Session:</strong> Book a time slot that's convenient for you. </p>
              <p><strong>Discuss Your Vision:</strong> Share the specifics of your event - size, vibe, preferred artists, and more.</p>
              <p><strong>Get Recommendations:</strong> Receive tailored suggestions for artists, venues, and vendors/service providers.</p>
              <p>This offer is for a limited time only, and slots are filling up fast. Don't miss out on an opportunity to elevate your event planning experience.</p>
              Ready to redefine your event planning journey? Book Your Free Consultation Now Free of Cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

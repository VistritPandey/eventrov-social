import React from 'react';

function Pricing() {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose a plan
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {/* Pricing Tier 1 */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Basic
                </h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $19
                  </span>
                  <span className="ml-1 text-xl text-gray-500">/mo</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-sm leading-5 font-semibold text-gray-500">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.293 9.293a1 1 0 011.414 0L12 14.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-base leading-6 text-gray-700">
                      Feature 1
                    </p>
                  </li>
                  {/* Add more features here */}
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 sm:p-10 sm:pt-6">
              <div className="rounded-lg shadow-md">
                <a
                  href="#"
                  className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 p-4 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition duration-150 ease-in-out"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Pricing Tier 2 */}
          <div className="mt-10 flex flex-col rounded-lg shadow-lg overflow-hidden lg:mt-0 lg:mx-2">
            {/* Similar structure as Tier 1 */}
          </div>

          {/* Pricing Tier 3 */}
          <div className="mt-10 flex flex-col rounded-lg shadow-lg overflow-hidden">
            {/* Similar structure as Tier 1 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

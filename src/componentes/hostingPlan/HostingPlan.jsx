import React from 'react';

const HostingPlan = () => {
  return (
    <div>
      <div className="header text-center mt-14">
        <h1 className="text-4xl text-indigo-900 font-bold">
          {' '}
          Choose a web hosting plan
        </h1>
        <p className="mt-5 pb-8">
          pick a web hosting plan and gate free domain name for your website
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center lg:gap-5 gap-20 mt-12">
        {/* first one */}
        <div className=" bg-gray-100 rounded-lg w-[400px]">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-indigo-900">Premium </h2>
            <p className="py-2 text-gray-500">
              Everything you need to create your website.
            </p>
            <div className="flex justify-start items-center gap-1 pt-5">
              <p className="line-through text-gray-500">$11.99</p>
              <div className="bg-indigo-200 font-bold py-1 px-3 rounded-full">
                <h2 className="text-indigo-900">Save 75%</h2>
              </div>
            </div>
            <p className="mt-4">
              $<span className="text-4xl font-bold text-indigo-900">2.99</span>
              /mo
            </p>
            <p className="text-sm mt-2 text-gray-500">For 48 months term</p>
            <div className="text-center">
              <button className=" border-2 border-indigo-500 text-purple-800 px-28 py-2 rounded-lg font-bold my-5">
                Choose Plan
              </button>
            </div>
            <p className="mb-8 text-gray-500">$7.99/mo when you renew</p>
            <hr className="border border-gray-300" />
          </div>
          <div className="p-6 text-gray-800">
            <ul className="space-y-2">
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">100</span>{' '}
                  Websites
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span>
                  <span className="text-indigo-900 font-bold">100 GB</span> SSD
                  Storage
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Free</span> Email
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">
                    Unlimited Free
                  </span>{' '}
                  SSL
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Free</span> domain
                  ($9.99 value)
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Unlimited</span>{' '}
                  Bandwidth
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Managed</span>{' '}
                  WordPress Hosting
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">WordPress</span>{' '}
                  Acceleration
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">WordPress</span>{' '}
                  Acceleration
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span>
                  <span className="text-indigo-900 font-bold">
                    Website Builder
                  </span>{' '}
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">30-Day</span>{' '}
                  money-back guarantee
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Unlimited</span>{' '}
                  databases
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">GIT</span> Access
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">SSH</span> access
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-check text-xl text-green-500"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  <span className="text-indigo-900 font-bold">Weekly</span>{' '}
                  Backups
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-minus text-xl"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  Object Cache for WordPress
                </span>
              </li>
              <li className="flex items-start ">
                <span className="mr-3 text-[#4A5568] text-[13px]">
                  <i className="fa-solid fa-minus text-xl"></i>
                </span>
                <span className="border-b-[2px] border-dotted border-black">
                  WordPress Staging Tool
                </span>
              </li>
            </ul>
          </div>
          <div class="bg-coral pb-14">
            <a
              href="#"
              className="block mt-4 text-xl text-center font-bold text-indigo-900 "
            >
              See all features <i className="fa-solid fa-angle-down"></i>
            </a>
          </div>
        </div>
        {/* second one */}
        <div className=" bg-gray-100  w-[400px] ">
          <div className=" border-2 border-indigo-200 rounded-lg">
            <div className=" rounded-tl-[20px] rounded-tr-[20px]  mt-[-45px] bg-indigo-400 ">
              <h1 className="py-3 text-center font-bold text-white">
                MOST POPULAR
              </h1>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-900">Business </h2>
              <p className="py-2 text-gray-500">
                Level up with more power and enhanced features.
              </p>
              <div className="flex justify-start items-center gap-1 pt-5">
                <p className="line-through text-gray-500">$13.99</p>
                <div className="bg-indigo-200 font-bold py-1 px-3 rounded-full">
                  <h2 className="text-indigo-900">Save 71%</h2>
                </div>
              </div>
              <p className="mt-4">
                $<span class="text-4xl font-bold text-indigo-900">3.99</span>/mo
              </p>
              <p className="text-sm mt-2 text-gray-500">For 48 months term</p>
              <div className="text-center">
                <button className="bg-indigo-700 text-white px-28 py-2 rounded-lg font-bold my-5">
                  Choose Plan
                </button>
              </div>
              <p className="mb-8 text-gray-500">$7.99/mo when you renew</p>
              <hr className="border border-gray-300" />
            </div>
            <div className="p-6 text-gray-800">
              <ul className="space-y-2">
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">100</span>{' '}
                    Websites
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span>
                    <span className="text-indigo-900 font-bold">200 GB</span>{' '}
                    NVMe disk space
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Free</span>{' '}
                    Email
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">
                      Unlimited Free
                    </span>{' '}
                    SSL
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Free</span>{' '}
                    domain ($9.99 value)
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Unlimited</span>{' '}
                    Bandwidth
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Managed</span>{' '}
                    WordPress Hosting
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">WordPress</span>{' '}
                    Acceleration
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">WordPress</span>{' '}
                    Acceleration
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span>
                    <span className="text-indigo-900 font-bold">
                      Website Builder
                    </span>{' '}
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">30-Day</span>{' '}
                    money-back guarantee
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Unlimited</span>{' '}
                    databases
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">GIT</span>{' '}
                    Access
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">SSH</span>{' '}
                    access
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Daily</span>{' '}
                    Backups ($25.08 value)
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">
                      Object cache
                    </span>{' '}
                    for Wordpress
                  </span>
                </li>
                <li className="flex items-start ">
                  <span className="mr-3 text-[#4A5568] text-[13px]">
                    <i className="fa-solid fa-check text-xl text-green-500"></i>
                  </span>
                  <span className="border-b-[2px] border-dotted border-black">
                    <span className="text-indigo-900 font-bold">Wordpress</span>{' '}
                    staging tool
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-coral pb-14">
              <a
                href="#"
                className="block mt-4 text-xl text-center font-bold text-indigo-900 "
              >
                See all features <i className="fa-solid fa-angle-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingPlan;

import React from 'react';
import f1 from '../../assets/images/f1.webp';
import f2 from '../../assets/images/f2.png';

const HostingFooter = () => {
  return (
    <div>
      <section className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 md:px-18 relative pt-16 pb-16 mx-auto max-w-[1500px]">
          <div className="basis-[40%] text-center">
            <div className="flex flex-col justify-center gap-5">
              <div className="rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[30px]  first flex justify-center items-center gap-5 w-[360px] bg-indigo-50 p-2">
                <img src={f2} className="w-[100px] mt-[-20px] " alt="" />
                <p className="text-start">
                  Hello I would like to migrate my website to hostinger
                </p>
              </div>
              <div className="ml-36 rounded-tr-[40px] rounded-br-[40px] rounded-bl-[30px]  first flex justify-center items-center gap-5 w-[360px] bg-indigo-700 p-2">
                <img src={f1} className="w-[100px] mt-[-20px] " alt="" />
                <p className="text-start text-white">
                  Hi! I'll be glad to help you out we will do it for you in no
                  time
                </p>
              </div>
            </div>
          </div>
          <div className="lg:basis-[35%] md:basis-[45%] p-5">
            <h1 className="font-bold text-[37px] leading-tight text-indigo-900">
              24/7 expert support
            </h1>
            <p className="font-normal text-[18px] leading-[30px] mt-5 mb-4">
              our team of experts is ready to help you at any time of the day
              whenever it is about setting up your free website domains creating
              domain based email account or about oi hosting in general we will
              help you with any issues that may arise
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostingFooter;

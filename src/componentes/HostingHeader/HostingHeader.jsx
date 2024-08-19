import React from 'react';
import p1 from '../../assets/images/p1.jpg'; 

const HostingHeader = () => {
    return (
      <section className="container mx-auto">
        <div className=" flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 md:px-18 relative pt-16 pb-16  mx-auto">
          <div className="lg:basis-[33%] md:basis-[45%] p-5 ">
            <h1 className="font-bold text-[37px] leading-tight text-indigo-900">
              Get the perfect domains
            </h1>
            <p className="font-normal text-[18px] leading-[30px] mt-5 mb-4">
              Our free domain name includes the most popular domain name
              extension around. Choose the most suitable domain for your website
              and start your online journey today.
            </p>
          </div>
          <div className="basis-[45%] text-center">
            <img
              src={p1}
              alt=""
              className="align-middle inline-block h-auto max-w-full border-none rounded-none shadow-none"
            />
          </div>
        </div>
      </section>
    );
};

export default HostingHeader;
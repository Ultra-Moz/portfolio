import React from "react";

const Contact = () => {
  return (
    <div className="wrapper py-[60px] md:py-[130px]" id="contact">
      <div className="contain flex flex-col items-center md:items-start">
        <div className="">
          <h3 className="text-lightBlue text-[20px] text-center md:text-left mb-2 md:mb-0 font-bold">
            CONTACT
          </h3>
          <span className="font-bold text-[22px] sm:text-[30px] text-darkGrey ">
            Don't be shy! Hit me up! 👇
          </span>
        </div>
        <div className="flex gap-10 md:gap-20 mt-8 md:mt-16 flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <span className="w-[45px] sm:w-[60px] aspect-square shadow-[0_0_10px_rgba(0,0,0,.1)] rounded-full flex items-center justify-center">
              <img
                src="/images/map.svg"
                alt="map"
                className="w-[25px] sm:w-[35px]"
              />
            </span>
            <div>
              <h5 className="text-darkGrey text-lg">Location</h5>
              <span className="text-[#767676] text-lg tracking-wide cursor-pointer hover:text-lightBlue transition-colors duration-200">
                Pakistan, Karachi
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-[45px] sm:w-[60px] aspect-square shadow-[0_0_10px_rgba(0,0,0,.1)] rounded-full flex items-center justify-center">
              <img
                src="/images/mail.svg"
                alt="map"
                className="w-[25px] sm:w-[35px]"
              />
            </span>
            <div>
              <h5 className="text-darkGrey text-lg">Mail</h5>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=moizullah22629@gmail.com&su=Your%20Subject&body=Your%20Message%20Here"
                target="_blank"
                className="text-[#767676] text-lg tracking-wide cursor-pointer hover:text-lightBlue transition-colors duration-200"
              >
                moizullah22629@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

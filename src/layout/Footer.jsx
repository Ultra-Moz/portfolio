import React from "react";

const Footer = () => {
  return (
    <div className="wrapper w-full bg-darkGrey py-[40px] md:py-[60px] font-bold ">
      <div className="contain flex flex-col gap-3 md:flex-row md:justify-between items-center ">
        <p className="text-white text-lg sm:text-[20px] tracking-wide text-center">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex gap-3 md:gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/moizullah-shaikh-47a94a2a6/"
            target="_blank"
          >
            <img
              src="/images/linked-in.svg"
              className="w-[40px] hover:scale-125 transition-transform duration-200"
              alt="Linked In"
            />
          </a>
          <a
            href="https://github.com/Ultra-Moz"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="tabler-icon tabler-icon-brand-github"
              className="w-[40px] hover:scale-125 transition-transform duration-200"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

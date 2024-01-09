import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const headingCharacters = document.querySelectorAll(".heading-character");
    const paraCharacters = document.querySelectorAll(".para-character");
    const headingTl = gsap.timeline({ delay: 0.2 });
    const paraTl = gsap.timeline({ delay: 1 });

    headingCharacters.forEach((char) => {
      const duration = 0.4;
      const delay = 0.05;

      headingTl.fromTo(
        char,
        { opacity: 0, y: "20px" },
        { opacity: 1, y: 0, duration },
        `-=${duration - delay}`
      );
    });
    paraCharacters.forEach((char) => {
      const duration = 0.1;
      const delay = 0.02;

      paraTl.fromTo(
        char,
        { opacity: 0, y: "10px" },
        { opacity: 1, y: 0, duration: duration },
        `-=${duration - delay}`
      );
    });
    paraTl.fromTo(
      ".hero_socials",
      { opacity: 0, y: "20px" },
      { opacity: 1, y: 0 }
    );

    headingTl
      .fromTo(
        ".main-img",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1 }
      )
      .fromTo(".wave", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })

      .fromTo(
        ".tech-stack",
        { opacity: 0, y: "30px" },
        { opacity: 1, y: 0 },
        "-=1"
      )
      .fromTo(
        ".tech-img",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=1"
      );
  }, []);

  return (
    <div
      className="wrapper min-h-screen pt-[80px] py-[50px] md:py-[100px] lg:py-[160px] bg-[#f9f9f9]"
      id="home"
    >
      <div className="contain mt-[80px]">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center">
          <div className="max-w-[500px] flex flex-col gap-4 relative  text-center lg:text-left items-center lg:items-start mt-5">
            <h1 className="text-darkGrey text-[45px] md:text-[55px] leading-[120%] font-bold flex flex-wrap gap-x-4">
              {"Front-end React Developer".split(" ").map((word, wordIndex) => {
                return (
                  <div key={wordIndex} className="flex">
                    {word.split("").map((char, i) => {
                      return (
                        <div key={i} className="heading-character">
                          {char}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </h1>
            <p className="text-[#555] text-[16px] md:text-lg font-mulish font-medium flex flex-wrap gap-x-2">
              {"Hi, I'm Moizullah Shaikh. A passionate Front-end React Developer based in Pakistan, Karachi."
                .split(" ")
                .map((word, wordIndex) => {
                  return (
                    <div key={wordIndex} className="flex">
                      {word.split("").map((char, i) => {
                        return (
                          <div key={i} className="para-character">
                            {char}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </p>
            <span className="flex gap-3 ">
              <a
                href="https://www.linkedin.com/in/moizullah-shaikh-47a94a2a6/"
                target="_blank"
                className="text-black hover:text-lightBlue transition-colors duration-200 hero_socials"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-linkedin"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
              <a
                href="https://github.com/Ultra-Moz"
                target="_blank"
                className="text-black hover:text-lightBlue transition-colors duration-200 hero_socials"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-brand-github"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </span>
            <img
              src="/images/wave.png"
              alt="wave"
              className="w-[3rem] md:w-[4rem] absolute right-0 lg:right-24 top-[60px] md:top-[67px] wave"
            />
          </div>
          <div className="w-full max-w-[280px] md:max-w-[340px] mx-auto main-img">
            <div className=" aspect-square transparent border-black border-[3px] morph-animation bg rounded-full bg-[url('/images/moiz.jpeg')] bg-cover bg-no-repeat bg-center"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mt-12">
          <span className="tech-stack text-darkGrey md:text-lg border-b-darkGrey border-b-2 border-r-transparent lg:border-b-transparent lg:border-r-darkGrey lg:border-solid lg:border-r-2 lg:border-opacity-60 lg:pr-[2rem]">
            Tech Stack
          </span>
          <div className="grid gap-8 place-items-stretch grid-cols-3 md:grid-cols-6">
            <img
              src="/images/html-5.png"
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="HTML"
            />
            <img
              src="/images/css-3.png"
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="CSS"
            />
            <img
              src="/images/js.png"
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="Javascript"
            />
            <img
              src="/images/react.png"
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="React"
            />
            <img
              src="/images/tailwind-css.png "
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="Tailwind"
            />
            <img
              src="/images/framer-motion.png "
              className="w-[50px] rounded-lg hover:-translate-y-2 cursor-pointer tech-img"
              alt="Framer Motion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

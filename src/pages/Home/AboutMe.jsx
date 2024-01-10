import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutMe = () => {
  const img = useRef();
  const aboutText = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: img.current,
        start: "top 90%",
      },
    });
    imgTl
      .fromTo(
        img.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        ".rotating-img",
        {
          scale: 0,
        },
        { scale: 1 }
      )
      .fromTo(".person", { scale: 0 }, { scale: 1 });
    gsap.fromTo(
      ".about_text",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutText.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div
      className="wrapper py-[50px] md:py-[80px] lg:py-[130px] px-3 overflow-x-hidden"
      id="about"
    >
      <div className="contain flex flex-col lg:flex-row items-center lg:items-start about">
        <div className="relative w-full">
          <img
            src="/images/workspace.webp"
            className="rounded-[1.3rem] relative min-w-[270px]"
            ref={img}
            alt="workspace"
          />

          <div className="hidden sm:block w-[150px] md:w-[200px] bg-white rounded-full absolute -bottom-[50px] -right-[50px] rotating-img">
            {" "}
            <img
              src="/images/rotating-text.svg"
              className="rotate"
              alt="Front-end Developer"
            />
            <img
              src="/images/working.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] md:w-[60px] z-10"
              alt="Person"
            />
          </div>
        </div>
        <div
          ref={aboutText}
          className="w-full lg:ml-16 mt-5 lg:mt-0 flex flex-col gap-2 lg:gap-3 items-center text-center lg:items-start lg:text-left max-w-[400px] sm:max-w-[430px] md:max-w-[500px] lg:max-w-max"
        >
          <h4 className="text-lightBlue text-lg  md:text-[20px] uppercase font-bold about_text">
            About Me
          </h4>
          <p className="text-darkGrey text-[22px] md:text-[24px] font-bold about_text">
            A dedicated Front-end Developer based in Pakistan, Karachi 📍
          </p>
          <p className="text-lightGrey font-mulish font-medium md:text-[17px] leading-[160%] about_text">
            As a Young Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

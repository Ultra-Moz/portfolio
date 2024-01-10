import React, { useRef } from "react";
import data from "./data.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const portText = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mainCard = document.querySelectorAll(".main-card");

    mainCard.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.69,
          scrollTrigger: {
            trigger: card,
            start: "-30 bottom",
          },
        }
      );
    });

    gsap.fromTo(
      portText.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: { trigger: portText.current },
      }
    );
  }, []);

  return (
    <div
      className="wrapper bg-[#f9f9f9] py-[80px] md:py-[120px] lg:py-[180px]"
      id="projects"
    >
      <div className="contain">
        <div
          className="flex flex-col gap-2 text-center md:text-left"
          ref={portText}
        >
          <h4 className="text-lightBlue text-[20px] font-bold">PORTFOLIO</h4>
          <p className="text-darkGrey text-[24px] font-bold">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        <div className="mt-16 grid gap-12">
          {data.map((project, i) => (
            <div
              className={` flex ${
                (i + 1) % 2 === 0
                  ? "flex-col lg:flex-row-reverse"
                  : "flex-col lg:flex-row"
              } main-card justify-between shadow-[0_0_10px_rgba(0,0,0,.1)] p-6 md:p-12 lg:p-8 rounded-3xl items-start`}
              key={i}
            >
              <div className="w-[100%] rounded-xl overflow-hidden max-h-[320px] mb-5">
                <a href={project.websiteLink}>
                  <img
                    src={`/images/${project.img}`}
                    alt={project.name}
                    className="w-full hover:-translate-y-[calc(100%-320px)] transition-transform duration-[10s] ease-in-out"
                  />
                </a>
              </div>
              <div className="flex flex-col items-center gap-4 w-[100%]">
                <h3 className="text-darkGrey font-bold text-lg uppercase">
                  {project.name}{" "}
                  <span className=" text-[hsla(0,5%,8%,.773)] uppercase">
                    {project.date}
                  </span>
                </h3>
                <p className="text-lightGrey text-center max-w-[380px] font-light leading-[150%]">
                  {project.desc}
                </p>
                <div className="flex gap-5">
                  {project.techs.map((tech, index) => (
                    <span
                      className="shadow-[0_0_10px_rgba(0,0,0,.1)] font-mulish bg-white rounded-md px-[1rem] py-[0.5rem] font-semibold text-center"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex w-full items-center justify-center gap-10 mt-2">
                  <a
                    href={project.gitLink}
                    className="text-lg gap-2 hover:text-lightBlue flex items-center text-darkGrey transition-colors duration-200"
                  >
                    Code
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
                  <a
                    href={project.websiteLink}
                    className="text-lg gap-2 hover:text-lightBlue flex items-center text-darkGrey transition-colors duration-200"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

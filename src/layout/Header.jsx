import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.6,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.8,
      delay: 0.05,
      ease: [0.42, 0, 1, 1],
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", section: "#home" },
    { name: "About", section: "#about" },
    { name: "Projects", section: "#projects" },
    { name: "Contact", section: "#contact" },
  ];
  return (
    <>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.01,
            ease: "easeOut",
          },
        }}
        className="flex justify-between min-h-[80px] px-[30px] bg-white z-20 text-darkGrey items-center shadow-[0_0_10px_rgba(0,0,0,0.09)] fixed w-full top-0"
      >
        <a href="/" className="text-[22px]">
          moiz.dev
        </a>
        <ul className="gap-[2rem] font-semibold hidden lg:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.section}
              className="hover:text-lightBlue cursor-pointer transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </ul>
        <img
          src={isOpen ? "/images/cross.svg" : "/images/ham-menu.svg"}
          className="block lg:hidden cursor-pointer z-20"
          alt="Ham Menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={navVariants}
              animate="animate"
              initial="initial"
              exit="exit"
              className="w-full sm:w-[300px] h-screen bg-[#eee] justify-center sm:justify-normal items-center sm:items-start  flex fixed top-0 right-0 px-10 py-20 "
            >
              <ul className="gap-[1rem] flex flex-col font-semibold z-20 items-start ">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.section}
                    className="hover:text-lightBlue text-[30px] sm:text-[22px] text-black cursor-pointer transition-colors duration-200 "
                    onClick={() => setIsOpen(!isOpen)}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3 + 0.1 * index,
                        ease: "easeInOut",
                      },
                    }}
                    exit={{
                      y: "-100%",
                      opacity: 0,
                      transition: {
                        delay: 0.1 * index,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;

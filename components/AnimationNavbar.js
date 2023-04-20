import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Logo from "../public/assets/logo-dark.png";
import Logo2 from "../public/assets/logo.png";
import Image from "next/image";

const AnimationNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollChange, setScrollChange] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    });
  }, []);

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
        delay: 1,
      },
    },
  };

  return (
    <div>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 z-40 flex flex-wrap items-center justify-between w-full p-6 mx-auto ${
          scrollChange || currentRoute === "/product/[id]"
            ? "shadow-lg shadow-gray-800/5"
            : ""
        } bg-white/90 sm:px-10 sm:py-8`}
      >
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <Image src={Logo} className={"ml-3 md:ml-0 w-12 h-12"} />
            <div className="hidden md:block">
              <div className="self-center text-xl font-black tracking-normal">
                Ansof Habibunnadjar
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase">
                Junior Front end developer
              </div>
            </div>
          </div>
        </Link>

        <div className="flex items-center md:gap-2 lg:gap-4 lg:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-800 rounded-lg focus:outline-none focus:ring-0"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {/* Navbar Mobile */}
        {open && (
          <motion.div
            className="fixed top-0 z-40 flex flex-col items-center justify-center w-full text-white bg-[#302f2c]"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.4 }}
            exit="exit"
          >
            <RemoveScrollBar />
            <div className="fixed top-0 flex flex-wrap items-center justify-between w-full p-6 mx-auto bg-[#302f2c] sm:px-10 sm:py-10 md:py-8">
              <Link href={"/"}>
                <div className="flex items-center gap-3">
                  <Image src={Logo2} className={"ml-3 md:ml-0 w-12 h-12"} />
                  <div className="hidden md:block">
                    <div className="self-center text-xl font-black tracking-normal">
                      Ansof Habibunnadjar
                    </div>
                    <div className="text-xs font-semibold tracking-widest uppercase">
                      Junior Front end developer
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center p-2.5 md:ml-3 text-sm rounded-lg text-white focus:outline-none focus:ring-0"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <FaTimes className="w-7 h-7" />
                </button>
              </div>
            </div>

            <motion.div
              className="inline-flex mb-6 text-base font-light tracking-widest uppercase text-gray-300/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              menu
            </motion.div>
            <Link href={"/"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold ${
                  currentRoute === "/" || currentRoute === "/"
                    ? "text-white"
                    : "text-gray-300/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                Projects
              </motion.div>
            </Link>
            <Link href={"/about"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold ${
                  currentRoute === "/about" ? "text-white" : "text-gray-300/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.7,
                  },
                }}
              >
                About me
              </motion.div>
            </Link>
            <Link href={"/contact"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold ${
                  currentRoute === "/contact"
                    ? "text-white"
                    : "text-gray-300/70"
                } `}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
              >
                Contact
              </motion.div>
            </Link>
            <Link target={"_blank"} href={"https://github.com/ansofhn"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold hover:text-white
                text-gray-300/70`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                Github
              </motion.div>
            </Link>
            <Link target={"_blank"} href={"https://www.instagram.com/ansofhn"}>
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold hover:text-white
                  text-gray-300/70`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}
              >
                Instagram
              </motion.div>
            </Link>
            <Link
              target={"_blank"}
              href={"https://www.linkedin.com/in/ansofhn/"}
            >
              <motion.div
                onClick={() => {
                  setOpen(!open);
                }}
                className={`inline-flex my-2 text-4xl md:text-5xl font-bold hover:text-white
                  text-gray-300/70`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                exit={{
                  opacity: 0,
                  y: 80,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.3,
                  },
                }}
              >
                LinkedIn
              </motion.div>
            </Link>
            <motion.div
              className="absolute flex items-center text-xs font-light tracking-widest bottom-6 text-gray-300/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeInOut",
                  delay: 0.3,
                },
              }}
            >
              © 2023 ansofhn
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimationNavbar;

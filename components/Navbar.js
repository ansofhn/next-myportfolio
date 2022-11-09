import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Logo from "../public/assets/logo-dark.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div className="fixed top-0 left-0 z-20 w-full py-10 bg-white/90">
        <div className="flex flex-wrap items-center justify-between mx-10">
          <div className="flex items-center gap-3">
            <Image src={Logo} className={"w-12 h-12"} />
            <div>
              <div className="self-center text-xl font-black tracking-normal">
                Ansof Habibunnadjar
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase">
                Junior Front end developer
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 p-2 text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-0 "
            >
              <div className="text-sm font-bold uppercase">Menu</div>
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
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="fixed top-0 left-0 z-20 w-full h-full my-auto overflow-y-hidden text-center text-white bg-black">
        <div className="flex items-center justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 p-2 rounded-lg text-White hover:bg-gray-100 focus:outline-none focus:ring-0 "
          >
            <div className="text-sm font-bold uppercase">Close</div>
            <MdClose className="text-2xl" />
          </button>
        </div>
        <div>Project</div>
        <div>About me</div>
        <div>Contact</div>
        <div>Github</div>
        <div>Instagram</div>
        <div>Linkedin</div>
      </div> */}
    </>
  );
};

export default Navbar;

import React from "react";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/assets/logo.png";

const menu = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="fixed w-full h-full py-10 overflow-y-scroll bg-black">
      <div className="flex flex-wrap items-center justify-between mx-10">
        <div className="flex items-center gap-3">
          <Image src={Logo} className={"w-12 h-12"} />
          <div className="text-gray-100">
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
            className="inline-flex items-center gap-2 p-2 text-gray-100 rounded-lg focus:outline-none focus:ring-0"
            onClick={() => {
              router.push("/");
            }}
          >
            <div className="text-sm font-bold uppercase">Close</div>
            <MdClose className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="top-0 flex flex-col items-center space-y-2 lg:space-y-4 xl:space-y-2 justify-center w-full text-white h-[85%] ">
        <div className="tracking-widest uppercase">Menu</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">Projects</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">About me</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">Contact</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">Github</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">Instagram</div>
        <div className="text-4xl font-bold tracking-tight text-gray-400 lg:text-5xl hover:text-gray-100 xl:text-7xl">Linkedin</div>
      </div>
    </div>
  );
};

export default menu;

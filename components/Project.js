import React from "react";
import Image from "next/image";
import g11 from "../public/assets/1.png";
import chikufarm from "../public/assets/2.png";
import josslaundry from "../public/assets/3.png";

const Project = () => {
  return (
    <>
      <div className="mx-3.5 md:mx-10 mt-16 lg:mt-40 space-y-5">
        <div className="px-1 pt-20 font-light tracking-widest text-gray-500 uppercase">
          Selected projects
        </div>
        <div className="text-4xl font-bold lg:text-6xl">Featured projects</div>
        <div className="grid grid-cols-1 py-16 lg:py-32 lg:grid-cols-2 gap-14">
          <div className="w-full bg-[#302f2c] tracking-widest space-y-4 p-8 lg:p-10 xl:p-16">
            <div className="text-gray-300">2019 - 2020</div>
            <div className="lg:w-[85%] xl:w-[60%] 2xl:w-[50%] text-3xl 2xl:text-4xl font-semibold lg:font-bold text-white">
              G11 Game - Garuda eleven game development
            </div>
            <div className="text-gray-300 cursor-pointer">View Project</div>
            <Image src={g11} />
          </div>
          <div className="w-full bg-[#302f2c] tracking-widest space-y-4 p-8 lg:p-10 xl:p-16">
            <div className="text-gray-300">2019 - 2020</div>
            <div className="lg:w-[85%] xl:w-[60%] 2xl:w-[50%] text-3xl 2xl:text-4xl font-semibold lg:font-bold text-white">
              Joss Laundry - UMKM Laundry website system
            </div>
            <div className="text-gray-300 cursor-pointer">View Project</div>
            <Image src={josslaundry} />
          </div>
          <div className="w-full bg-[#302f2c] tracking-widest space-y-4 p-8 lg:p-10 xl:p-16">
            <div className="text-gray-300">2019 - 2020</div>
            <div className="lg:w-[85%] xl:w-[60%] 2xl:w-[50%] text-3xl 2xl:text-4xl font-semibold lg:font-bold text-white">
              Chikufarm - Chicken farm management system
            </div>
            <div className="text-gray-300 cursor-pointer">View Project</div>
            <Image src={chikufarm} />
          </div>
          <div className="w-full bg-[#302f2c] tracking-widest space-y-4 p-8 lg:p-10 xl:p-16">
            <div className="text-gray-300">2019 - 2020</div>
            <div className="lg:w-[85%] xl:w-[60%] 2xl:w-[50%] text-3xl 2xl:text-4xl font-semibold lg:font-bold text-white">
              Ansmovie - Website for watch & download film
            </div>
            <div className="text-gray-300 cursor-pointer">View Project</div>
            <Image src={g11} />
          </div>
        </div>
      </div>
      <div className="mx-3.5 space-y-5 md:mx-10">
        <div className="px-1 pt-20 font-light tracking-widest text-gray-500 uppercase">
          Coding Programs & Design
        </div>
        <div className="text-4xl font-bold lg:text-6xl">Personal projects</div>
        <div className="grid py-16 lg:py-32 lg:grid-cols-2 gap-14">
          <div className="w-full bg-gray-200 h-[500px]"></div>
          <div className="w-full bg-gray-200 h-[500px]"></div>
          <div className="w-full bg-gray-200 h-[500px]"></div>
          <div className="w-full bg-gray-200 h-[500px]"></div>
        </div>
      </div>
    </>
  );
};

export default Project;

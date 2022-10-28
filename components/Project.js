import React from "react";

const Project = () => {
  return (
    <>
      <div className="mx-10 mt-40 space-y-5">
        <div className="px-1 pt-20 font-light tracking-widest text-gray-500 uppercase">
          Selected projects
        </div>
        <div className="text-6xl font-bold">Case studies</div>
        <div className="grid grid-cols-2 py-32 gap-14">
          <div className="w-full bg-gray-200 h-[850px]"></div>
          <div className="w-full bg-gray-200 h-[850px]"></div>
          <div className="w-full bg-gray-200 h-[850px]"></div>
          <div className="w-full bg-gray-200 h-[850px]"></div>
        </div>
      </div>
      <div className="mx-10 space-y-5">
        <div className="px-1 pt-20 font-light tracking-widest text-gray-500 uppercase">
          Coding Programs & Design
        </div>
        <div className="text-6xl font-bold">Personal projects</div>
        <div className="grid grid-cols-2 py-32 gap-14">
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

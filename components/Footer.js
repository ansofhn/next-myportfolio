import React from "react";

const Footer = () => {
  return (
    <div className="mx-3.5 border-t md:mx-10">
      <div className="grid grid-cols-1 gap-10 py-24 lg:grid-cols-5">
        <div className="w-full space-y-4 lg:ml-6 lg:col-span-2">
          <div className="text-xl font-bold">
            Contact <br /> information
          </div>
          <div className="md:w-[500px]">
            Feel free to reach out to me any time. I prefer to talk over
            email, especially since we may be a few time zones away.
          </div>
          <div className="font-medium">
            E : ansofhn5@gmail.com <br /> P : 085692751958
          </div>
        </div>
        <div className="w-full space-y-4 lg:col-start-4 lg:pl-14">
          <div className="text-xl font-bold">
            Latest <br /> projects
          </div>
          <div>
            <div>G11 Game</div>
            <div>Joss Laundry</div>
            <div>Chikufarm</div>
          </div>
        </div>
        <div className="w-full space-y-4 lg:pl-10">
          <div className="text-xl font-bold">
            Follow <br /> me on
          </div>
          <div>
            <div>Instagram</div>
            <div>GitHub</div>
            <div>LinkedIn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

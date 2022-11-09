import React from "react";

const Footer = () => {
  return (
    <div className="mx-10 border-t">
      <div className="grid grid-cols-5 py-24">
        <div className="w-full col-span-2 space-y-4">
          <div className="text-xl font-bold">
            Contact <br /> information
          </div>
          <div>
            Feel free to reach out to me any time. I prefer to talk over <br />{" "}
            email, especially since we may be a few time zones away.
          </div>
          <div className="font-medium">
            E : ansofhn5@gmail.com <br /> P : 085692751958
          </div>
        </div>
        <div className="w-full col-start-4 space-y-4 pl-14">
          <div className="text-xl font-bold">
            Latest <br /> projects
          </div>
          <div>
            <div>G11 Game</div>
            <div>Joss Laundry</div>
            <div>Chikufarm</div>
          </div>
        </div>
        <div className="w-full pl-10 space-y-4">
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

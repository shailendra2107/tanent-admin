import React from "react";
import Heading from "../../components/Heading";
import Icon from "../../components/Icon";
import circle from "../../assets/Icons/circle-svg.svg";
import Que from "../../assets/Icons/outline_que.svg";

const Help = () => {
  return (
    <div className="p-5">
      <div className="pb-5">
        <Heading text="Help" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div className="shadow-light-gray bg-white rounded-md col-span-4 sm:col-span-3">
          hhhh
        </div>
        <div
          className={`relative rounded-md p-4 shadow-light-gray bg-orange-linear`}
        >
          <div className="">
            <Icon src={Que} />
          </div>
          <div className="mt-5">
            <div className="text-white text-sm font-bold">Need help?</div>
            <div className="text-white text-[12px] font-normal">Call us at</div>
          </div>
          <div className="text-xl text-center font-bold rounded-md bg-white py-2 px-3 mt-2">
            (905) 527-0221
          </div>

          <div className="absolute -right-5 -top-2">
            <Icon src={circle} height="auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

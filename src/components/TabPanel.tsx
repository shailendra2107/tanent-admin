import React from "react";
export interface ITabProps {
  tabs: any;
  onHandleClick?: (e: any) => void;
}
const TabPanel = ({ tabs, onHandleClick, step }: any) => {
  return (
    <div>
      <ul className="flex">
        {tabs.map((val: any, i: any) => {
          return (
            <li
              key={i}
              className={`p-3 mx-0 sm:mx-3 text-darkest-blue font-bold text-xs sm:text-md cursor-pointer border-t-4 ${
                step === i
                  ? "border-purple bg-light-smoke"
                  : "border-transparent"
              }`}
              onClick={() => onHandleClick(i)}
            >
              {val.title}
            </li>
          );
        })}
        {/* <li className=' px-3 py-1 cursor-pointer border-t-4 border-purple bg-light-smoke'>Payments</li>
        <li className=' px-3 py-1 cursor-pointer border-t-4 border-transparent '>Payments</li> */}
      </ul>
    </div>
  );
};

export default TabPanel;

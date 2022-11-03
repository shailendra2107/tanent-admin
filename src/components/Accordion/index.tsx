import React from "react";
export interface IAccordionProps {
  text?: string;
  open?: boolean;
  children?: React.ReactNode;
  icon?: JSX.Element;
  onHandleClick?: () => void;
}
const Accordion = ({
  text,
  icon,
  children,
  onHandleClick,
  open,
}: IAccordionProps) => {
  return (
    <div className="h-auto bg-light-purple ">
      <div className=" flex justify-between items-center py-3 px-7">
        <div className="text-md text-darkest-blue font-medium">{text}</div>
        <div
          className={`cursor-pointer transition duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          onClick={onHandleClick}
        >
          {icon}
        </div>
      </div>
      <div
        className={`${
          !open ? "hidden" : "block"
        } bg-white transition duration-500`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;

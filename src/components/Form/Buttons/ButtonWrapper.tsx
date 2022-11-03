import React from "react";
import Icon from "../../Icon";
export interface IButtonProps {
  classNames?: string;
  svgIcon?: any;
  text?: string;
  onHandleClick?: () => void;
}

export interface ButtonProps
  extends IButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}
const ButtonWrapper = ({
  classNames,
  type,
  svgIcon,
  text,
  onHandleClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`flex items-center justify-center  text-sm border border-purple active:scale-90 transition duration-150 font-bold rounded-md px-2 sm:px-5 py-2 ${classNames}`}
        type={type}
        onClick={onHandleClick}
      >
        {svgIcon && (
          <div className="mr-2 hidden sm:block ">
            <Icon src={svgIcon} height="auto" />
          </div>
        )}
        <span>{text}</span>
      </button>
    </>
  );
};

export default ButtonWrapper;

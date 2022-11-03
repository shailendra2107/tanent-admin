import React, { useRef, useState } from "react";
import viewIcon from "../../../assets/Icons/view.svg";
import { InputProps } from "../../../models/interface";
import SVG from "react-inlinesvg";
import Icon from "../../Icon";

const InputWrapper: React.FC<InputProps> = ({
  placeholder,
  name,
  value,
  error,
  type,
  onHandleChange,
  icon,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef(null);

  return (
    <>
      <div className="border outLine rounded-md  flex items-center p-[5px]">
        {name === "search" && <Icon src={icon} height="auto" />}
        <input
          ref={ref}
          className="bg-transparent border-none flex-1 focus:outline-none px-2 placeholder:text-sm text-sm placeholder:font-normal text-purple font-medium"
          type={type === "password" ? (show ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onHandleChange}
        />
        {placeholder === "password" && (
          <div
            className="cursor-pointer flex items-center mx-1 text-lightGray"
            onClick={() => setShow(!show)}
          >
            <SVG src={viewIcon} color={"text-lightGray"} height="auto" />
          </div>
        )}
      </div>
      {error && <label className="absolute top-0 left-0">{error}</label>}
    </>
  );
};

export default InputWrapper;

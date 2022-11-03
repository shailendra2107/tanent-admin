import React from "react";
import TextBox from "devextreme-react/text-box";
import { InputProps } from "../../../models/interface";

const Input = ({
  value,
  name,
  classNames,
  onHandleChange,
  mode,
  label,
  type,
  placeholder
}: InputProps) => {
  return (
    <div className={classNames}>
      <TextBox
        defaultValue="John Smith"
        placeholder={placeholder}
        mode={type}
        labelMode={mode}
        label={label}
        value={value}
        name={name}
        onValueChanged={onHandleChange}
      />
    </div>
  );
};

export default Input;

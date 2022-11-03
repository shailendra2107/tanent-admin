import React from "react";
import { InputProps } from "../../../models/interface";

const Switch = ({ value, name, label, onHandleChange }: InputProps) => {
  return (
    <div className="relative">
      <label className="switch">
        <input
          type="checkbox"
          id="togBtn"
          onChange={onHandleChange}
          name={name}
          value={value}
        />
        <div className="slider round">
          <span className="on"></span>
          <span className="off"></span>
        </div>
      </label>
    </div>
  );
};

export default Switch;

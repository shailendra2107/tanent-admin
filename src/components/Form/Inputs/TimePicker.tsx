import React from "react";
import DateBox from "devextreme-react/date-box";
import { InputProps } from "../../../models/interface";

const TimePicker = ({ classNames, mode, label }: InputProps) => {
  // console.log('type :>> ', type);
  return (
    <div className={classNames}>
      <DateBox
        defaultValue={new Date()}
        type="time"
        labelMode={mode}
        label={label}
      />
    </div>
  );
};

export default TimePicker;

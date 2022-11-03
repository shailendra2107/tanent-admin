import { SelectBox } from "devextreme-react";
import React from "react";
import { ISelectProps } from "../../../models/interface";

const Select = ({
  items,
  value,
  classNames,
  onHandleChange,
  label,
  mode,
  valueExpr,
  displayExpr,
  defaultValue,
}: ISelectProps) => {
  console.log("defaultValue :>> ", defaultValue, mode);
  return (
    <div className={classNames}>
      <SelectBox
        labelMode={mode}
        acceptCustomValue={true}
        defaultValue={1}
        label={label}
        dataSource={items}
        value={value}
        onValueChanged={onHandleChange}
        displayExpr={displayExpr}
        valueExpr={valueExpr}
      />
    </div>
  );
};

export default Select;

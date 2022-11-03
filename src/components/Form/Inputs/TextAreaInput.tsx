import React from "react";
import TextArea from "devextreme-react/text-area";
import { ITextAreaProps } from "../../../models/interface";

const TextAreaInput = ({
  maxLength,
  height,
  mode,
  label,
  value,
  name,
}: ITextAreaProps) => {
  return (
    <div>
      <TextArea
        name={name}
        value={value}
        label={label}
        labelMode={mode}
        height={height}
        maxLength={maxLength}
        // defaultValue={this.state.value}
      />
    </div>
  );
};

export default TextAreaInput;

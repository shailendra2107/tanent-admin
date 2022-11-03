import React from "react";

interface IHeaderProps {
  text?: string;
}
const Title = ({ text }: IHeaderProps) => {
  return (
    <div>
      <div className="text-md sm:text-lg font-medium text-darkest-blue capitalize">
        {text}
      </div>
    </div>
  );
};

export default Title;

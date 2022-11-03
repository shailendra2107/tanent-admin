import React from "react";

interface IHeaderProps {
  text?: string;
}
const Heading = ({ text }: IHeaderProps) => {
  return (
    <div>
      <div className="text-md sm:text-3xl font-bold text-darkest-blue capitalize">
        {text}
      </div>
    </div>
  );
};

export default Heading;

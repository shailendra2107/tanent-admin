import React, { useState } from "react";
import Heading from "../../components/Heading";
import {
  accountTabs,
  autoPayTabs,
  buttonGroup,
  cardTabs,
} from "../../CustomData";
import AutoPaySetUp from "./Components/AutoPaySetUp";
import BankAccountSetUp from "./Components/BankAccountSetUp";
import CreditCardSetUp from "./Components/CreditCardSetUp";

const BankSetup = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between">
          <Heading text={"Bank Setup"} />
        </div>
        <div className="flex py-3 sm:py-5 sm:px-3">
          {buttonGroup.map((val: any, i: number) => (
            <button
              key={i}
              onClick={() => {
                setCount(i);
              }}
              className={`text-[10px] sm:text-sm active:scale-90 transition duration-150 font-bold rounded-md px-2  sm:px-5 py-2 w-auto ${
                count === i
                  ? "text-white bg-purple shadow-blue "
                  : "border-0  text-darkest_gray"
              }`}
            >
              {val.text}
            </button>
          ))}
        </div>
        <div className="shadow-light-gray bg-white rounded-md">
          {count === 0 ? (
            <BankAccountSetUp data={accountTabs} />
          ) : count === 1 ? (
            <CreditCardSetUp data={cardTabs} />
          ) : (
            <AutoPaySetUp data={autoPayTabs} />
          )}
        </div>
      </div>
    </>
  );
};

export default BankSetup;

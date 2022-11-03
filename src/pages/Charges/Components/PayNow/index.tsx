// import { useHistory } from 'react-router-dom'
import ButtonWrapper from "../../../../components/Form/Buttons/ButtonWrapper";
import DatePicker from "../../../../components/Form/Inputs/DatePicker";
import Input from "../../../../components/Form/Inputs/Input";
import Select from "../../../../components/Form/Inputs/Select";
import Heading from "../../../../components/Heading";

const PayNow = () => {
  // const history = useHistory()
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <Heading text={"Charges"} />
      </div>
      <div className="my-5 bg-white shadow-light-gray rounded-md">
        <div className="text-darkest-blue font-semibold text-md   border-b px-10 pt-5 pb-3">
          Payment
        </div>
        <div className="pt-5 pb-10 px-10 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <Select mode="static" label="Select card" />
            </div>
            <div className="">
              <Input mode="static" label="Outstanding Amount" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mt-5">
              <DatePicker mode={"static"} type="date" label={"Payment Date"} />
            </div>
          </div>
        </div>
        <div className="flex py-8 px-10">
          <ButtonWrapper text="Save" classNames="bg-purple w-32 text-white" />
          <ButtonWrapper text="Cancel" classNames="w-32 mx-5 text-purple" />
        </div>
      </div>
    </div>
  );
};

export default PayNow;

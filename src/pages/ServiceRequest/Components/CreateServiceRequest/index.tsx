import React from "react";
import { useHistory } from "react-router-dom";
import ButtonWrapper from "../../../../components/Form/Buttons/ButtonWrapper";
import FileUploadInput from "../../../../components/Form/Inputs/FileUploadInput";
import Select from "../../../../components/Form/Inputs/Select";
import TextAreaInput from "../../../../components/Form/Inputs/TextAreaInput";
import Heading from "../../../../components/Heading";

const CreateServiceRequest = () => {
  const history = useHistory();
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <Heading text={"service request"} />
        <div className="">
          <ButtonWrapper
            classNames="bg-purple text-white"
            text="Service Request List"
            onHandleClick={() => history.push("/services-request")}
          />
        </div>
      </div>
      <div className="my-5 bg-white shadow-light-gray rounded-md">
        <div className="text-darkest-blue font-semibold text-md   border-b px-10 pt-5 pb-3">
          Create New Request
        </div>
        <div className="pt-5 pb-10 px-10 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <Select mode="static" label="Request Type" />
            </div>
            <div className="">
              <Select mode="static" label="Request Priority" />
            </div>
          </div>
          <div className="my-5">
            <TextAreaInput mode="static" label="Description" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <FileUploadInput />
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

export default CreateServiceRequest;

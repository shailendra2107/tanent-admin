import React, { useState } from "react";
import ButtonWrapper from "../../../../components/Form/Buttons/ButtonWrapper";
import DatePicker from "../../../../components/Form/Inputs/DatePicker";
import Select from "../../../../components/Form/Inputs/Select";
import calander from "../../../../assets/Icons/book-aminity.svg";
import DataTable from "../../../../components/Tables/DataTable";
import { ServiceRequest } from "../../../../components/Tables/Columns";
import { serviceData } from "../../data";
import TimePicker from "../../../../components/Form/Inputs/TimePicker";

const AminityBooking = () => {
  const [bookingShow, setBookingShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`text-darkest-blue flex justify-between items-center font-semibold text-md p-5 ${!bookingShow && "border-b"
          }`}
      >
        <span>Aminity Booking</span>
        <div className="">
          <ButtonWrapper
            classNames={`${bookingShow ? "text-white bg-purple" : "text-purple"
              }`}
            text={!bookingShow ? "Booking History" : "Book Aminity"}
            onHandleClick={() => setBookingShow(!bookingShow)}
            svgIcon={bookingShow && calander}
          />
        </div>
      </div>
      {!bookingShow ? (
        <div className="grid grid-cols-1 md:grid-cols-7 items-end gap-5 p-5">
          <div className="col-span-2 ">
            <Select mode={"static"} label="Select Aminity" />
          </div>
          <div className="col-span-2 ">
            <DatePicker mode={"static"} label="Select Date" />
          </div>
          <div className="col-span-2 ">
            <TimePicker mode={"static"} label="Select Time Slot" />
          </div>
          <div className="col-span-1">
            <div className="">
              <ButtonWrapper
                svgIcon={calander}
                classNames="text-white bg-purple "
                text="Book Aminity"
              // onHandleClick={() => setBookingShow(!bookingShow)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <DataTable columns={ServiceRequest} dataSource={serviceData} />
        </div>
      )}
    </div>
  );
};

export default AminityBooking;

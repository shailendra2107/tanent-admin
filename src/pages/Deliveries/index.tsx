import React, { useState } from "react";
import Heading from "../../components/Heading";
import DataTable from "../../components/Tables/DataTable";
import Title from "../../components/Title";
import { serviceData } from "../Dashboard/data";
import Hold from "../../assets/Icons/hold.svg";
import Forword from "../../assets/Icons/forword.svg";
import Return from "../../assets/Icons/return.svg";
import Icon from "../../components/Icon";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getOpen, setOpen } from "../../store/ValidationSlice";
import DeliveriesModal from "../../components/Modals/DeliveriesModal";

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [width, setWidth] = useState<number>();
  const dispatch = useAppDispatch();
  const open = useAppSelector(getOpen);
  const openModal = (
    isShow: string,
    headind: string,
    des: string,
    width: number
  ) => {
    setWidth(width);
    setTitle(headind);
    setText(des);
    setDeliveries(isShow);
    dispatch(setOpen(!open));
  };
  const DeliveriesColumn: any[] = [
    {
      dataField: "Tracking Id",
      caption: "Tracking Id",
      width: 150,
      cssClass: "px-10",
    },
    {
      dataField: "des",
      caption: "Description",
      // width: ,

      cssClass: "px-10",
    },
    {
      dataField: "parcelFor",
      caption: "Parcel For",
      cssClass: "px-10",
      width: 150,
    },

    {
      dataField: "parcelFrom",
      caption: "Parcel From",
      cssClass: "px-10",
      width: 150,
    },
    {
      dataField: "recivedDate",
      caption: "Recived Date",
      width: 130,
      cssClass: "text_center",
      cellRender: (cellData: any) => {
        return <div className="flex justify-center">10/10/22</div>;
      },
    },
    {
      dataField: "status",
      caption: "status",
      cssClass: "px-10",
      width: 120,
      cellRender: (cellData: any) => {
        return (
          <label className="font_13 text_green bg_light_green p-1 flex items-center justify-center rounded-sm  font-bold">
            {cellData.data.status}
          </label>
        );
      },
    },
    {
      dataField: "action",
      caption: "Action",
      cssClass: "px-10 flex justify-center",
      width: 100,
      cellRender: (cellData: any) => {
        return (
          <div className="flex">
            <div
              className="cursor-pointer mx-[2px]"
              onClick={() =>
                openModal(
                  "hold",
                  "Hold package",
                  "Lorem Ipsum is simply dummy text of the printing ",
                  500
                )
              }
            >
              <Icon src={Hold} />
            </div>
            <div
              className="cursor-pointer mx-[2px]"
              onClick={() =>
                openModal(
                  "return",
                  "Request to return package",
                  "Lorem Ipsum is simply dummy text of the printing ",
                  500
                )
              }
            >
              <Icon src={Return} />
            </div>
            <div
              className="cursor-pointer mx-[2px]"
              onClick={() =>
                openModal(
                  "forword",
                  "Forword package",
                  "Lorem Ipsum is simply dummy text of the printing ",
                  760
                )
              }
            >
              <Icon src={Forword} />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="p-5">
        <div className="pb-5">
          <Heading text="deliveries" />
        </div>
        <div className="shadow-light-gray bg-white rounded-md">
          <div className="p-4">
            <Title text="list of all deliveries" />
          </div>
          <DataTable columns={DeliveriesColumn} dataSource={serviceData} />
        </div>
      </div>
      {open && (
        <DeliveriesModal
          visible={open}
          width={width}
          height={"auto"}
          isShow={deliveries}
          title={title}
          text={text}
        />
      )}
    </>
  );
};

export default Deliveries;
